import { MessageCircle, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink, getInstagramLink } from "@/lib/links";
import { ctaBase, ctaPrimary } from "./cta";

export default function FinalCta() {
  const { finalCta } = siteConfig;
  const instagramLink = getInstagramLink();

  return (
    <section aria-labelledby="cta-final-titulo" className="px-5 py-20 md:py-24">
      <div className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-navy px-6 py-14 text-center sm:px-12 md:py-16">
        {/* Diagonais da marca */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-10 h-40 w-[420px] -rotate-12 rounded-[60px] bg-sky/20" />
          <div className="absolute -bottom-12 -left-24 h-36 w-[380px] -rotate-12 rounded-[60px] bg-magenta/20" />
        </div>

        <h2
          id="cta-final-titulo"
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          {finalCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
          {finalCta.text}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaPrimary} focus-visible:outline-white`}
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.2} aria-hidden />
            {finalCta.whatsappCta}
          </a>
          {instagramLink && (
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} border-2 border-white/70 text-white hover:bg-white hover:text-navy focus-visible:outline-white`}
            >
              <Instagram className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              {finalCta.instagramCta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
