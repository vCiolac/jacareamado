import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-white px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center text-xs text-ink/50 sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {year} {siteConfig.business.name} — {siteConfig.business.tagline}.
          Todos os direitos reservados.
        </p>
        {siteConfig.footer.closingLine && (
          <p className="text-ink/40">{siteConfig.footer.closingLine}</p>
        )}
      </div>
    </footer>
  );
}
