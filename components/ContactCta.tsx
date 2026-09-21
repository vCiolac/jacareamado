import { MessageCircle, Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function ContactCta() {
  const { contactCta, quickInfo } = siteConfig;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contactCta.mapQuery
  )}&output=embed`;

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 pb-20 sm:pb-24">
      <div className="grid overflow-hidden rounded-3xl bg-navy shadow-xl md:grid-cols-2">
        <div className="flex flex-col justify-center gap-5 px-7 py-10 sm:px-10 sm:py-12">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {contactCta.heading}
          </h2>
          <p className="text-white/70">{contactCta.text}</p>

          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-magenta px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
            {contactCta.cta}
          </a>

          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <div className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
              <span>{quickInfo.hours}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
              <span>{quickInfo.address}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
              <span>{quickInfo.phones.join("  •  ")}</span>
            </div>
          </div>
        </div>

        <div className="min-h-[280px]">
          <iframe
            title="Localização do consultório"
            src={mapSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
