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

// Celular: faixa com swipe e "peek" do próximo card (menos altura que um grid).
// Desktop: os seis cards compactos na mesma linha.
export default function Services() {
  const { services } = siteConfig;

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="scroll-mt-20 bg-white py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-magenta-deep">
            {services.eyebrow}
          </p>
          <h2
            id="servicos-titulo"
            className="mx-auto mt-2 max-w-xl font-display text-2xl font-bold leading-tight text-navy sm:text-3xl"
          >
            {services.heading}
          </h2>
        </div>

        <ul
          tabIndex={0}
          aria-label="Lista de serviços (deslize para ver mais)"
          className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-1 sm:-mx-5 sm:scroll-px-5 sm:px-5 lg:mx-0 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0"
        >
          {services.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Stethoscope;
            const pink = i % 2 === 0;
            return (
              <li
                key={item.name}
                className="flex shrink-0 basis-[44%] snap-start flex-col items-center rounded-2xl border border-navy/10 bg-cream/60 px-2 py-4 text-center sm:basis-[30%] lg:basis-auto"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    pink ? "bg-magenta/10" : "bg-sky/15"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${pink ? "text-magenta-deep" : "text-sky-deep"}`}
                    strokeWidth={1.8}
                    aria-hidden
                  />
                </span>
                <h3 className="mt-3 font-display text-[15px] font-bold leading-tight text-navy sm:text-base">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs leading-snug text-ink/65 sm:text-[13px]">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
