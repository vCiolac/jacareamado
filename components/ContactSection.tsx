import { Clock, MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import {
  getWhatsappLink,
  getMapsEmbedLink,
  getMapsDirectionsLink,
  getPhoneLink,
} from "@/lib/links";
import { ctaBase, ctaPrimary } from "./cta";

// Contato + mapa num único bloco azul: texto e botões à esquerda, mapa à
// direita (empilhado no celular). Não há outro CTA grande depois daqui.
export default function ContactSection() {
  const { contact, contactSection } = siteConfig;

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-20 px-4 py-10 sm:px-5 md:py-14">
      <div className="relative isolate mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-navy md:grid-cols-[1fr_1.1fr] md:rounded-[2rem]">
        {/* Diagonais da marca */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-10 h-32 w-[420px] -rotate-12 rounded-[60px] bg-sky/20" />
          <div className="absolute -bottom-10 -left-16 h-28 w-[360px] -rotate-12 rounded-[60px] bg-magenta/25" />
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          <h2
            id="contato-titulo"
            className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl"
          >
            {contactSection.heading}
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-white/80 sm:text-base">
            {contactSection.text}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaPrimary} focus-visible:outline-white`}
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              {contactSection.whatsappCta}
            </a>
            <a
              href={getMapsDirectionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} border-2 border-white/70 text-white hover:bg-white hover:text-navy focus-visible:outline-white`}
            >
              <Navigation className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              {contactSection.routeCta}
            </a>
          </div>

          <dl className="mt-6 flex flex-col gap-4 text-[15px] text-white/85">
            <div className="flex gap-3">
              <dt>
                <Clock className="mt-0.5 h-5 w-5 text-sky" strokeWidth={2} aria-hidden />
                <span className="sr-only">Funcionamento</span>
              </dt>
              <dd className="font-semibold text-white">{contact.hours}</dd>
            </div>
            <div className="flex gap-3">
              <dt>
                <MapPin className="mt-0.5 h-5 w-5 text-sky" strokeWidth={2} aria-hidden />
                <span className="sr-only">Endereço</span>
              </dt>
              <dd>
                {contact.address}
                <span className="block">{contact.district}</span>
                <span className="block text-sm text-white/65">{contact.reference}</span>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt>
                <Phone className="mt-0.5 h-5 w-5 text-sky" strokeWidth={2} aria-hidden />
                <span className="sr-only">Telefones</span>
              </dt>
              <dd className="-my-2.5 flex flex-wrap gap-x-4">
                {contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={getPhoneLink(phone)}
                    className="inline-flex min-h-[44px] items-center font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white focus-visible:outline-white"
                  >
                    {phone}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="px-3 pb-3 md:p-4 md:pl-0">
          <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-cream md:h-full md:min-h-[380px]">
            <iframe
              title={`Mapa: ${contact.address}, ${contact.district}`}
              src={getMapsEmbedLink()}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
