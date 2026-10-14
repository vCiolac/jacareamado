"use client";

import { useEffect, useState } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink, getInstagramLink } from "@/lib/links";
import Logo from "./Logo";

// Header leve: no celular, logo + WhatsApp + menu hamburger em uma linha
// (~64 px); no desktop, links curtos + botão de WhatsApp.
export default function Header() {
  const [open, setOpen] = useState(false);
  const instagramLink = getInstagramLink();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-5 lg:h-[72px]">
        <a href="#inicio" aria-label={`${siteConfig.business.name} — início`} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-[44px] items-center rounded-full px-3 text-sm font-medium text-ink/70 transition-colors hover:text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* O WhatsApp fica no botão flutuante (WhatsappFloat) */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 lg:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu" className="border-t border-navy/5 bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center text-base font-medium text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="border-t border-navy/5">
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center gap-2 text-base font-medium text-navy"
              >
                <MessageCircle className="h-5 w-5 text-magenta-deep" aria-hidden />
                WhatsApp
              </a>
            </li>
            {instagramLink && (
              <li>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[48px] items-center gap-2 text-base font-medium text-navy"
                >
                  <Instagram className="h-5 w-5 text-magenta-deep" aria-hidden />
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
