"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Carrossel leve com scroll-snap nativo: swipe no celular (1 foto + "peek"),
// setas no desktop (3–4 fotos), indicadores e teclado (← →). Sem autoplay.
export default function TeamCarousel() {
  const { team } = siteConfig;
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(team.items.length - 1);

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
    const visible = Math.max(1, Math.floor((track.clientWidth + 1) / step));
    setMaxIndex(Math.max(0, team.items.length - visible));
    setIndex(Math.round(track.scrollLeft / step));
  }, [team.items.length, getStep]);

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
    <section id="equipe" aria-labelledby="equipe-titulo" className="scroll-mt-20 bg-white py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-magenta-deep">
              {team.eyebrow}
            </p>
            <h2
              id="equipe-titulo"
              className="mt-2 font-display text-2xl font-bold leading-tight text-navy sm:text-3xl"
            >
              {team.heading}
            </h2>
          </div>

          {maxIndex > 0 && (
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                disabled={index <= 0}
                aria-controls="equipe-trilha"
                aria-label="Foto anterior"
                className={arrowClass}
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                disabled={index >= maxIndex}
                aria-controls="equipe-trilha"
                aria-label="Próxima foto"
                className={arrowClass}
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
            </div>
          )}
        </div>

        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Fotos da equipe"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="mt-6 rounded-3xl"
        >
          <ul
            id="equipe-trilha"
            ref={trackRef}
            onScroll={measure}
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 sm:mx-0 sm:gap-4 sm:scroll-px-0 sm:px-0"
          >
            {team.items.map((item, i) => (
              <li
                key={item.src}
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${team.items.length}`}
                className="shrink-0 basis-[86%] snap-start sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)] xl:basis-[calc((100%-3rem)/4)]"
              >
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy/5">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 86vw"
                      style={{ objectPosition: item.position }}
                      className="object-cover"
                    />
                  </div>
                  {item.caption && (
                    <figcaption className="mt-2 text-sm font-medium text-navy">{item.caption}</figcaption>
                  )}
                </figure>
              </li>
            ))}
          </ul>
        </div>

        {maxIndex > 0 && (
          <div className="mt-3 flex justify-center gap-0.5">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para a foto ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className="group flex h-11 w-8 items-center justify-center"
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
