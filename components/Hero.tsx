import { MessageCircle, Clock, MapPin, Phone, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink, getPhoneLink } from "@/lib/links";
import Image from "next/image";
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
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[300px] -z-10 h-[calc(100%-300px)] w-full md:top-0 md:h-full"
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
      >
        <path d="M880 0H1440V190C1150 420 640 610 0 745V610C560 500 850 300 880 0Z" fill="#15ADD0" />
        <path d="M1440 300V560C1180 640 880 712 600 760H360C820 650 1180 480 1440 300Z" fill="#E62D73" />
      </svg>

      <div className="mx-auto grid max-w-6xl items-center gap-x-8 gap-y-5 px-4 pb-8 pt-7 sm:px-5 md:grid-cols-[0.95fr_1.05fr] md:pb-10 md:pt-10">
        <div className="contents md:block">
          <div className="order-1">
          <h1
            id="inicio-titulo"
            className="font-display text-[2.1rem] font-bold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.heading} <span className="block text-magenta">{hero.headingHighlight}</span>
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

          </div>
          {/* Resumo operacional — única vez que aparece antes do contato */}
          <ul className="order-3 mt-0 flex max-w-lg md:mt-6 flex-col gap-3.5 rounded-3xl bg-white p-4 text-[15px] text-navy shadow-lg shadow-navy/10 sm:p-5">
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

        <div className="relative order-2 mx-auto w-full max-w-lg md:max-w-none">
          <div className="relative aspect-[4/3] w-full md:aspect-square" role={hero.imageAvailable ? undefined : "img"} aria-label={hero.imageAvailable ? undefined : "Ilustração oficial aguardando fornecimento"}>
            {hero.imageAvailable && hero.image && <Image src={hero.image} alt={hero.imageAlt} fill sizes="(min-width: 768px) 55vw, 100vw" priority className="object-contain" />}
          </div>
          <div className="relative flex min-h-32 items-center gap-4 rounded-3xl border border-navy/5 bg-cream p-4 shadow-md shadow-navy/10 md:-mt-3">
            {hero.keepsake.imageAvailable && <div className="relative h-32 w-2/5 shrink-0"><Image src={hero.keepsake.image} alt={hero.keepsake.imageAlt} fill sizes="200px" className="object-contain" /></div>}
            <div><h2 className="max-w-60 font-display text-xl font-bold leading-tight text-navy">{hero.keepsake.heading}</h2><p className="mt-2 max-w-64 text-sm leading-relaxed text-ink/75">{hero.keepsake.text}</p></div>
            {siteConfig.business.logoAvailable && <div className="absolute right-3 top-3 h-9 w-9 overflow-hidden rounded-full"><Image src={siteConfig.business.logo} alt="" fill sizes="36px" className="object-contain" /></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
