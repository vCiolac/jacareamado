import { MessageCircle, Instagram, Clock, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink, getInstagramLink } from "@/lib/links";
import Photo from "./Photo";

const ctaBase =
  "inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-full px-7 text-base font-semibold whitespace-nowrap transition-colors sm:w-auto";

export default function Hero() {
  const { hero, location } = siteConfig;
  const instagramLink = getInstagramLink();

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      {/* Diagonais da marca, só atrás da arte */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-16 h-[420px] w-[720px] -rotate-12 rounded-[80px] bg-sky/15 md:top-10" />
        <div className="absolute -right-40 top-64 h-[260px] w-[620px] -rotate-12 rounded-[80px] bg-magenta/10 md:top-72" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-[1.05fr_1fr] md:pb-28 md:pt-20">
        <div>
          <h1 className="font-display text-4xl font-bold leading-[1.08] text-navy sm:text-5xl lg:text-[3.5rem]">
            {hero.heading}{" "}
            <span className="text-magenta">{hero.headingHighlight}</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
            {hero.subheading}
          </p>

          {/* Os dois únicos CTAs principais da página */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} bg-magenta-deep text-white shadow-md shadow-magenta/20 hover:bg-magenta-darker`}
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              {hero.whatsappCta}
            </a>

            {instagramLink ? (
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaBase} border-2 border-navy bg-white text-navy hover:bg-navy hover:text-white`}
              >
                <Instagram className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                {hero.instagramCta}
              </a>
            ) : (
              // PLACEHOLDER: aparece assim até `contact.instagramUrl` ser preenchido
              <span
                aria-disabled="true"
                title="Link do Instagram ainda não configurado (contact.instagramUrl)"
                className={`${ctaBase} relative cursor-not-allowed border-2 border-dashed border-navy/40 bg-white text-navy/60`}
              >
                <Instagram className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                {hero.instagramCta}
                <span className="absolute -top-2.5 right-5 rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  placeholder
                </span>
              </span>
            )}
          </div>

          {/* Informação de apoio — não são botões */}
          <ul className="mt-8 flex flex-col gap-2 text-sm text-ink/60">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-sky-deep" strokeWidth={2} aria-hidden />
              {location.hours}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-sky-deep" strokeWidth={2} aria-hidden />
              {location.address}
            </li>
          </ul>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] md:max-w-none">
          <Photo
            src={hero.image}
            alt={hero.imageAlt}
            placeholder="Arte principal (doutora com os animais)"
            configKey="hero.image"
            sizes="(min-width: 768px) 50vw, 90vw"
            priority
            fit="contain"
            className="rounded-[2.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
