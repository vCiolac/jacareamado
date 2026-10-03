import { Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Photo from "./Photo";

// A história do nome — seção intimista, em tom editorial. Se `origin.photo`
// for null, o texto fica sozinho e centralizado.
export default function OriginSection() {
  const { origin } = siteConfig;
  const [lead, ...rest] = origin.paragraphs;
  const hasPhoto = Boolean(origin.photo);

  return (
    <section
      id="origem"
      aria-labelledby="origem-titulo"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      {/* Uma diagonal suave da marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 -z-10 h-56 w-[140%] -translate-y-1/2 -rotate-6 bg-sky/10"
      />

      <div
        className={`mx-auto px-5 ${
          hasPhoto
            ? "grid max-w-6xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
            : "max-w-2xl text-center"
        }`}
      >
        {hasPhoto && (
          <figure className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-square w-full -rotate-2 overflow-hidden rounded-[2rem] bg-white p-2 shadow-lg shadow-navy/10">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <Photo
                  src={origin.photo}
                  alt={origin.photoAlt}
                  placeholder="Foto da história do nome"
                  configKey="origin.photo"
                  sizes="(min-width: 768px) 45vw, 90vw"
                />
              </div>
            </div>
            <span
              aria-hidden
              className="absolute -bottom-4 -right-2 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-navy/10 md:-right-4"
            >
              <Heart className="h-6 w-6 fill-magenta text-magenta" strokeWidth={2} />
            </span>
          </figure>
        )}

        <div>
          {!hasPhoto && (
            <Heart className="mx-auto mb-4 h-7 w-7 text-magenta" strokeWidth={2} aria-hidden />
          )}
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-magenta-deep">
            {origin.eyebrow}
          </p>
          <h2
            id="origem-titulo"
            className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl"
          >
            {origin.heading}
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-ink/70">
            <p className="font-display text-xl font-semibold text-navy">{lead}</p>
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <blockquote
            className={`mt-10 border-t border-navy/15 pt-6 ${hasPhoto ? "" : "mx-auto max-w-lg"}`}
          >
            <p className="font-display text-2xl font-bold leading-snug text-magenta-deep sm:text-[1.75rem]">
              “{origin.quote}”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
