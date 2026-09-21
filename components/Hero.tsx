import Image from "next/image";
import { MessageCircle, Camera } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink } from "@/lib/whatsapp";
import QuickInfoBar from "./QuickInfoBar";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Faixas diagonais decorativas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-sky md:h-48"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/3 h-72 w-[140%] -rotate-6 bg-magenta/90 md:h-96"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:items-center md:pb-24 md:pt-20">
        <div>
          <h1 className="font-display text-4xl font-bold leading-[1.08] text-navy sm:text-5xl">
            {hero.heading}
            <br />
            de qualidade,
            <br />
            <span className="text-magenta">{hero.headingHighlight}.</span>
          </h1>

          <p className="mt-5 max-w-md text-base text-ink/70 sm:text-lg">
            {hero.subheading}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-magenta px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-magenta/20 transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
              {hero.primaryCta}
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-navy/30"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          {hero.image ? (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-blob shadow-2xl shadow-navy/20">
              <Image
                src={hero.image}
                alt={`${siteConfig.about.doctorName} — ${siteConfig.business.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-blob border-2 border-dashed border-navy/25 bg-white/60 text-center shadow-inner">
              <Camera className="h-9 w-9 text-navy/40" strokeWidth={1.6} />
              <p className="max-w-[13rem] text-sm text-navy/50">
                Espaço para a foto da {siteConfig.about.doctorName.replace("Dra. ", "Dra. ")}
                <br />
                <span className="text-xs">
                  (troque em <code>hero.image</code> no site-config)
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      <QuickInfoBar />
    </section>
  );
}
