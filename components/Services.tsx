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

// Celular: todos os seis serviços em grade compacta 3 × 2.
// Desktop: os seis cards compactos na mesma linha.
export default function Services() {
  const { services } = siteConfig;

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="scroll-mt-20 py-7 md:py-9"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div data-reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-magenta-deep">
            {services.eyebrow}
          </p>
          <h2
            id="servicos-titulo"
            className="mx-auto mt-2 max-w-xl font-display text-[1.7rem] font-bold leading-tight text-navy sm:text-4xl"
          >
            {services.heading}
          </h2>
        </div>

        <ul
          aria-label="Lista de serviços"
          className="mt-5 grid grid-cols-3 gap-2 pb-2 pt-1 sm:gap-3 lg:grid-cols-6"
        >
          {services.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Stethoscope;
            const pink = i % 2 === 0;
            return (
              <li
                key={item.name}
                data-reveal
                style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
                className="flex shrink-0 basis-[44%] snap-start flex-col items-center rounded-2xl border border-navy/5 bg-white px-2 py-4 text-center shadow-md shadow-navy/10 sm:basis-[30%] lg:basis-auto"
              >
                <span
                  className={`flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full ${
                    pink ? "bg-magenta/15" : "bg-sky/20"
                  }`}
                >
                  <Icon
                    className="h-8 w-8 text-navy"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                </span>
                <h3 className="mt-3 font-display text-[12px] font-bold leading-tight text-navy sm:text-base">
                  {item.name}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-ink/65 sm:text-[13px]">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
