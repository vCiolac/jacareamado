import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink, getInstagramLink } from "@/lib/links";
import Logo from "./Logo";

// Rodapé baixo: logo, Instagram, WhatsApp, copyright e versículo
export default function Footer() {
  const year = new Date().getFullYear();
  const instagramLink = getInstagramLink();
  const linkClass =
    "inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-magenta-deep";

  // pb extra no celular para o botão flutuante não cobrir o texto
  return (
    <footer className="border-t border-navy/10 bg-cream px-4 pb-24 pt-5 sm:px-5 lg:pb-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo size="sm" />
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

      <div className="mx-auto mt-3 flex max-w-6xl flex-col items-center gap-1 border-t border-navy/5 pt-3 text-center text-xs text-ink/60 sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {year} {siteConfig.business.name} — {siteConfig.business.tagline}.
        </p>
        {siteConfig.footer.closingLine && <p>{siteConfig.footer.closingLine}</p>}
      </div>
    </footer>
  );
}
