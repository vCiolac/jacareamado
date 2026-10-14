import { MessageCircle, Clock, MapPin, Phone, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink, getPhoneLink } from "@/lib/links";
import Photo from "./Photo";
import { ctaPrimary, ctaOutline } from "./cta";

export default function Hero() {
  const { hero, contact } = siteConfig;

  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="relative isolate scroll-mt-20 overflow-hidden">
      {/* Diagonais da marca (azul, rosa e um fio amarelo) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-[46%] h-[300px] w-[760px] -rotate-12 rounded-[80px] bg-sky/15 md:-right-32 md:top-6 md:h-[420px]" />
        <div className="absolute -right-48 top-[62%] h-[180px] w-[640px] -rotate-12 rounded-[80px] bg-magenta/10 md:top-72 md:h-[240px]" />
        <div className="absolute -left-20 bottom-6 h-2 w-72 -rotate-12 rounded-full bg-sun/70 md:bottom-10" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-7 sm:px-5 md:grid-cols-[1.2fr_1fr] md:gap-10 md:pb-16 md:pt-14">
        <div>
          <h1
            id="inicio-titulo"
            className="font-display text-[2rem] font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.heading} <span className="text-magenta">{hero.headingHighlight}</span>
          </h1>

          <p className="mt-3 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
            {hero.subheading}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" className={ctaPrimary}>
              <MessageCircle className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              {hero.whatsappCta}
            </a>
            <a href={hero.secondaryHref} className={ctaOutline}>
              <ArrowDown className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              {hero.secondaryCta}
            </a>
          </div>

          {/* Resumo operacional — única vez que aparece antes do contato */}
          <ul className="mt-6 flex flex-col gap-3 rounded-2xl border border-navy/5 bg-white/90 p-4 text-sm text-ink/80 shadow-sm sm:text-[15px]">
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-magenta-deep" strokeWidth={2} aria-hidden />
              <span className="font-semibold text-navy">{contact.hours}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-deep" strokeWidth={2} aria-hidden />
              <span>
                {contact.address} · {contact.district}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-sky-deep" strokeWidth={2} aria-hidden />
              <span className="flex flex-wrap gap-x-1">
                {contact.phones.map((phone, i) => (
                  <span key={phone}>
                    <a
                      href={getPhoneLink(phone)}
                      className="inline-flex min-h-[32px] items-center font-medium text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy"
                    >
                      {phone}
                    </a>
                    {i < contact.phones.length - 1 && <span aria-hidden className="text-ink/30"> • </span>}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] md:aspect-square md:max-w-none md:rounded-[2.5rem]">
          <Photo
            src={hero.image}
            alt={hero.imageAlt}
            placeholder="Arte principal (doutora com os animais)"
            configKey="hero.image"
            sizes="(min-width: 768px) 50vw, 90vw"
            priority
            fit={hero.imageFit}
            position={hero.imagePosition}
            className="rounded-[2rem] md:rounded-[2.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
