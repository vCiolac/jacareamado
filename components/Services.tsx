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

export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold text-magenta">{services.eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
          {services.heading}
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
        {services.items.map((item) => {
          const Icon = ICONS[item.icon] ?? Stethoscope;
          return (
            <div
              key={item.name}
              className="rounded-2xl border border-navy/8 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky/12 text-sky-deep">
                <Icon className="h-6 w-6" strokeWidth={1.9} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                {item.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
