import { BadgeCheck, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Photo from "./Photo";

// Doutora + especializações + origem do nome, num único bloco compacto
export default function DoctorSection() {
  const { doctor } = siteConfig;

  return (
    <section id="doutora" aria-labelledby="doutora-titulo" className="scroll-mt-20 py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="grid items-start gap-6 rounded-3xl border border-navy/5 bg-white p-3 shadow-sm sm:p-5 md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:p-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-[4/5]">
            <Photo
              src={doctor.photo}
              alt={doctor.photoAlt}
              placeholder={`Foto real da ${doctor.name}`}
              configKey="doctor.photo"
              sizes="(min-width: 768px) 40vw, 100vw"
              position={doctor.photoPosition}
              className="rounded-2xl"
            />
          </div>

          <div className="px-1 pb-2 md:px-0 md:py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-magenta-deep">
              {doctor.eyebrow}
            </p>
            <h2
              id="doutora-titulo"
              className="mt-2 font-display text-2xl font-bold leading-tight text-navy sm:text-3xl"
            >
              {doctor.heading}
            </h2>

            <p className="mt-4 font-display text-base font-bold text-navy">{doctor.name}</p>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink/70">
              <span>{doctor.role}</span>
              <span aria-hidden className="text-ink/30">•</span>
              <span className="inline-flex items-center gap-1 font-semibold text-navy">
                <BadgeCheck className="h-4 w-4 text-sky-deep" strokeWidth={2.2} aria-hidden />
                {doctor.registration}
              </span>
            </p>

            <p className="mt-3 text-[15px] leading-relaxed text-ink/70 sm:text-base">{doctor.text}</p>

            <h3 className="sr-only">Especializações</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {doctor.specialties.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-sky/10 px-3 py-1.5 text-[13px] font-semibold text-navy sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Origem do nome — box pequeno, não uma seção inteira */}
            <div className="mt-5 rounded-2xl border-l-4 border-magenta bg-magenta/5 p-4">
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-navy">
                <Heart className="h-4 w-4 fill-magenta text-magenta" aria-hidden />
                {doctor.origin.heading}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{doctor.origin.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
