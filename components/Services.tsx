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

// Lista em grade com divisórias finas — informativa, mas sem cards altos
export default function Services() {
  const { services } = siteConfig;

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="scroll-mt-36 bg-white py-20 sm:scroll-mt-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-magenta-deep">
            {services.eyebrow}
          </p>
          <h2
            id="servicos-titulo"
            className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl"
          >
            {services.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">{services.text}</p>
        </div>

        <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Stethoscope;
            return (
              <li key={item.name} className="flex gap-4 border-t border-navy/10 py-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky/10">
                  <Icon className="h-5 w-5 text-sky-deep" strokeWidth={2} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">{item.name}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink/65">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
