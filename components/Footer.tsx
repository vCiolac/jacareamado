import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink, getInstagramLink } from "@/lib/links";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  const instagramLink = getInstagramLink();
  const linkClass =
    "inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-magenta-deep";

  return (
    <footer className="border-t border-navy/10 bg-cream px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo size="sm" />
          <p className="text-sm text-ink/60">{siteConfig.location.address}</p>
        </div>

        <ul className="flex items-center gap-6">
          {instagramLink && (
            <li>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Instagram className="h-4 w-4" aria-hidden />
                Instagram
              </a>
            </li>
          )}
          <li>
            <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center gap-2 border-t border-navy/5 pt-6 text-center text-xs text-ink/55 md:flex-row md:justify-between md:text-left">
        <p>
          © {year} {siteConfig.business.name} — {siteConfig.business.tagline}.
        </p>
        {siteConfig.footer.closingLine && <p>{siteConfig.footer.closingLine}</p>}
      </div>
    </footer>
  );
}
