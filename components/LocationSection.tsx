import { Clock, MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import {
  getWhatsappLink,
  getMapsEmbedLink,
  getMapsDirectionsLink,
  getPhoneLink,
} from "@/lib/links";

export default function LocationSection() {
  const { location } = siteConfig;

  const linkClass =
    "inline-flex min-h-[44px] items-center font-medium text-navy underline decoration-navy/25 underline-offset-4 transition-colors hover:decoration-navy";

  return (
    <section
      id="como-chegar"
      aria-labelledby="como-chegar-titulo"
      className="scroll-mt-36 bg-white py-20 sm:scroll-mt-24 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-magenta-deep">
            {location.eyebrow}
          </p>
          <h2
            id="como-chegar-titulo"
            tabIndex={-1}
            className="mt-3 font-display text-3xl font-bold text-navy outline-none sm:text-4xl"
          >
            {location.heading}
          </h2>

          <dl className="mt-8 flex flex-col gap-6 text-base">
            <div className="flex gap-4">
              <dt>
                <MapPin className="mt-0.5 h-5 w-5 text-sky-deep" strokeWidth={2} aria-hidden />
                <span className="sr-only">Endereço</span>
              </dt>
              <dd className="text-ink/80">
                {location.address}
                <span className="block text-sm text-ink/55">{location.reference}</span>
                <a
                  href={getMapsDirectionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`gap-1 text-sm ${linkClass}`}
                >
                  Abrir no Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </dd>
            </div>

            <div className="flex gap-4">
              <dt>
                <Clock className="mt-0.5 h-5 w-5 text-sky-deep" strokeWidth={2} aria-hidden />
                <span className="sr-only">Horário</span>
              </dt>
              <dd className="text-ink/80">{location.hours}</dd>
            </div>

            <div className="flex gap-4">
              <dt>
                <Phone className="mt-0.5 h-5 w-5 text-sky-deep" strokeWidth={2} aria-hidden />
                <span className="sr-only">Telefones</span>
              </dt>
              <dd className="-my-2.5 flex flex-col">
                {location.phones.map((phone) => (
                  <a key={phone} href={getPhoneLink(phone)} className={linkClass}>
                    {phone}
                  </a>
                ))}
              </dd>
            </div>

            <div className="flex gap-4">
              <dt>
                <MessageCircle className="mt-0.5 h-5 w-5 text-sky-deep" strokeWidth={2} aria-hidden />
                <span className="sr-only">WhatsApp</span>
              </dt>
              <dd>
                <a
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Conversar pelo WhatsApp
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div
          id="mapa"
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-navy/10 bg-cream md:aspect-auto md:h-[440px]"
        >
          <iframe
            title={`Mapa: ${location.address}`}
            src={getMapsEmbedLink()}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
