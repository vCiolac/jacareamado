import { PawPrint } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-3 sm:flex-row sm:justify-between sm:gap-6 sm:py-4">
        <a href="#inicio" aria-label={`${siteConfig.business.name} — início`}>
          <Logo />
        </a>

        <nav aria-label="Principal">
          <ul className="flex items-center gap-1 sm:gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-paw-trail={item.paw ? "" : undefined}
                  className={
                    item.paw
                      ? "inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-navy/5 px-4 text-sm font-semibold text-navy transition-colors hover:bg-navy/10"
                      : "inline-flex min-h-[44px] items-center rounded-full px-3 text-sm font-medium text-ink/70 transition-colors hover:text-navy"
                  }
                >
                  {item.paw && (
                    <PawPrint className="h-4 w-4 text-magenta" strokeWidth={2.2} aria-hidden />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
