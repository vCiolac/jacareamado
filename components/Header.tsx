import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#inicio" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-extrabold tracking-tight text-navy">
            {siteConfig.business.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={getWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-magenta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-magenta-deep md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
          {siteConfig.hero.primaryCta}
        </a>
      </div>
    </header>
  );
}
