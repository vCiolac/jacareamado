"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Photo from "./Photo";

// Carrossel leve com scroll-snap nativo: swipe no mobile, setas + indicadores,
// teclado (← →) e sem autoplay. 1 foto no mobile, 2 no tablet, 3 no desktop.
export default function GalleryCarousel() {
  const { gallery } = siteConfig;
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(gallery.items.length - 1);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.offsetWidth + gap;
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const step = getStep();
    if (!track || !step) return;
    const visible = Math.max(1, Math.round((track.clientWidth + 1) / step));
    setMaxIndex(Math.max(0, gallery.items.length - visible));
    setIndex(Math.round(track.scrollLeft / step));
  }, [gallery.items.length, getStep]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.min(Math.max(i, 0), maxIndex);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target * getStep(), behavior: reduced ? "instant" : "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors hover:border-navy/40 disabled:cursor-default disabled:opacity-35 disabled:hover:border-navy/15";

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-titulo"
      className="scroll-mt-36 py-20 sm:scroll-mt-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-magenta-deep">
              {gallery.eyebrow}
            </p>
            <h2
              id="galeria-titulo"
              className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl"
            >
              {gallery.heading}
            </h2>
            <p className="mt-3 text-lg text-ink/65">{gallery.text}</p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index <= 0}
              aria-controls="galeria-trilha"
              aria-label="Foto anterior"
              className={arrowClass}
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index >= maxIndex}
              aria-controls="galeria-trilha"
              aria-label="Próxima foto"
              className={arrowClass}
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Fotos do consultório"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="mt-10 rounded-3xl"
        >
          <ul
            id="galeria-trilha"
            ref={trackRef}
            onScroll={measure}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain"
          >
            {gallery.items.map((item, i) => (
              <li
                key={i}
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${gallery.items.length}`}
                className="relative aspect-[4/3] shrink-0 basis-full snap-start overflow-hidden rounded-3xl sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]"
              >
                <Photo
                  src={item.src}
                  alt={item.alt}
                  placeholder={item.placeholder}
                  configKey={`gallery.items[${i}]`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="rounded-3xl"
                />
              </li>
            ))}
          </ul>
        </div>

        {maxIndex > 0 && (
          <div className="mt-6 flex justify-center gap-1">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para a foto ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className="group flex h-11 w-9 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-navy" : "w-2 bg-navy/25 group-hover:bg-navy/45"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
