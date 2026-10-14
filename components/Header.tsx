"use client";

import { useEffect, useState } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink, getInstagramLink } from "@/lib/links";
import Logo from "./Logo";

// Faixa azul da marca com o "X" rosa atrás do logo (como na arte aprovada).
// Celular: logo + menu hamburger (~64 px). Desktop: links curtos.
// O WhatsApp fica no botão flutuante (WhatsappFloat).
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
    <header className="sticky top-0 z-50 shadow-md shadow-navy/10">
      <div className="relative isolate overflow-hidden bg-sky-deep">
        {/* "X" rosa e brilho azul — decorativos */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-10 top-1/2 h-24 w-[380px] -translate-y-1/2 rotate-[28deg] bg-magenta sm:w-[460px]" />
          <div className="absolute -left-10 top-1/2 h-24 w-[380px] -translate-y-1/2 -rotate-[28deg] bg-magenta/90 sm:w-[460px]" />
          <div className="absolute -right-24 -top-10 h-40 w-[520px] -rotate-6 bg-sky/60" />
        </div>

        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-5 lg:h-[76px]">
          <a href="#inicio" aria-label={`${siteConfig.business.name} — início`} onClick={() => setOpen(false)}>
            <Logo tone="onBlue" />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center rounded-full px-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-white lg:hidden"
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
