import { Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function AboutSection() {
  const { about } = siteConfig;

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="relative isolate overflow-hidden py-20 md:py-28">
      {/* Uma diagonal suave da marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 -z-10 h-56 w-[140%] -translate-y-1/2 -rotate-6 bg-sky/10"
      />
      <div className="mx-auto max-w-2xl px-5 text-center">
        <Heart className="mx-auto h-7 w-7 text-magenta" strokeWidth={2} aria-hidden />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-magenta-deep">
          {about.eyebrow}
        </p>
        <h2
          id="sobre-titulo"
          className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl"
        >
          {about.heading}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink/70">{about.text}</p>
      </div>
    </section>
  );
}
