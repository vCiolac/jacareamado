import {
  Stethoscope,
  Syringe,
  FlaskConical,
  Waves,
  ScanLine,
  Droplet,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const ICONS: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  flask: FlaskConical,
  waves: Waves,
  scan: ScanLine,
  droplet: Droplet,
};

// Faixa compacta — a lista continua existindo, mas sem cards altos
export default function Services() {
  const { services } = siteConfig;

  return (
    <section aria-labelledby="servicos-titulo" className="border-y border-navy/5 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 lg:flex-row lg:items-center lg:gap-10">
        <h2
          id="servicos-titulo"
          className="shrink-0 text-sm font-semibold uppercase tracking-[0.14em] text-navy"
        >
          {services.heading}
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {services.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Stethoscope;
            return (
              <li key={item.name} className="flex items-center gap-2 text-sm font-medium text-ink/75">
                <Icon className="h-4 w-4 text-sky-deep" strokeWidth={2} aria-hidden />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
