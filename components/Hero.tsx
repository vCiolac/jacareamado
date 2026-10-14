import { MessageCircle, Clock, MapPin, Phone, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink, getPhoneLink } from "@/lib/links";
import Photo from "./Photo";
import { ctaPrimary, ctaOutline } from "./cta";

// Destaca o "•" do horário em rosa, como na arte da marca
function Hours({ text }: { text: string }) {
  const parts = text.split("•");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span className="text-magenta-deep"> • </span>}
          {part.trim()}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const { hero, contact } = siteConfig;

  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="relative isolate scroll-mt-20 overflow-hidden">
      {/* Desktop: faixas curvas azul e rosa cruzando a seção (assinatura da marca) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block"
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
      >
        <path d="M880 0H1440V190C1150 420 640 610 0 745V610C560 500 850 300 880 0Z" fill="#15ADD0" />
        <path d="M1440 300V560C1180 640 880 712 600 760H360C820 650 1180 480 1440 300Z" fill="#E62D73" />
      </svg>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-7 sm:px-5 md:grid-cols-[1.2fr_1fr] md:gap-10 md:pb-24 md:pt-14">
        <div>
          <h1
            id="inicio-titulo"
            className="font-display text-[2.1rem] font-bold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.heading} <span className="text-magenta">{hero.headingHighlight}</span>
          </h1>

          <p className="mt-3 max-w-md text-base leading-relaxed text-ink/75 sm:text-lg">
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
          <ul className="mt-6 flex max-w-lg flex-col gap-3.5 rounded-3xl bg-white p-4 text-[15px] text-navy shadow-lg shadow-navy/10 sm:p-5">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-magenta-deep text-white">
                <Clock className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              </span>
              <span className="font-display text-base font-bold uppercase tracking-wide sm:text-lg">
                <Hours text={contact.hours} />
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-deep text-white">
                <MapPin className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              </span>
              <span className="font-medium leading-snug">
                {contact.address}
                <span className="block text-ink/65">{contact.district}</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-deep text-white">
                <Phone className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              </span>
              <span className="flex flex-wrap gap-x-1">
                {contact.phones.map((phone, i) => (
                  <span key={phone}>
                    <a
                      href={getPhoneLink(phone)}
                      className="inline-flex min-h-[36px] items-center font-semibold text-navy underline decoration-navy/20 underline-offset-4 hover:decoration-navy"
                    >
                      {phone}
                    </a>
                    {i < contact.phones.length - 1 && <span aria-hidden className="text-magenta-deep"> • </span>}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          {/* Celular: faixas atrás da foto */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 md:hidden">
            <div className="absolute -left-16 top-6 h-24 w-[140%] -rotate-12 rounded-full bg-sky" />
            <div className="absolute -left-10 bottom-4 h-16 w-[140%] -rotate-12 rounded-full bg-magenta" />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-xl shadow-navy/20 md:aspect-square md:rounded-[2.5rem]">
            <Photo
              src={hero.image}
              alt={hero.imageAlt}
              placeholder="Arte principal (doutora com os animais)"
              configKey="hero.image"
              sizes="(min-width: 768px) 50vw, 90vw"
              priority
              fit={hero.imageFit}
              position={hero.imagePosition}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
