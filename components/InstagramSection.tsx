import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getInstagramLink } from "@/lib/links";
import { ctaOutline } from "./cta";

export default function InstagramSection() {
  const { instagram, contact } = siteConfig;
  const instagramLink = getInstagramLink();
  if (!instagramLink) return null;

  return (
    <section aria-labelledby="instagram-titulo" className="py-20 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="flex max-w-xl gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-magenta/10">
            <Instagram className="h-7 w-7 text-magenta-deep" strokeWidth={2} aria-hidden />
          </span>
          <div>
            <h2
              id="instagram-titulo"
              className="font-display text-3xl font-bold text-navy sm:text-4xl"
            >
              {instagram.heading}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink/70">{instagram.text}</p>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-[44px] items-center break-all text-sm font-semibold text-navy underline decoration-navy/25 underline-offset-4 transition-colors hover:decoration-navy"
            >
              {contact.instagramHandle}
            </a>
          </div>
        </div>

        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ctaOutline} shrink-0`}
        >
          <Instagram className="h-5 w-5" strokeWidth={2.2} aria-hidden />
          {instagram.cta}
        </a>
      </div>
    </section>
  );
}
