import { BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Photo from "./Photo";

export default function DoctorSection() {
  const { doctor } = siteConfig;

  return (
    <section
      id="doutora"
      aria-labelledby="doutora-titulo"
      className="scroll-mt-36 bg-white py-20 sm:scroll-mt-24 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Photo
            src={doctor.photo}
            alt={doctor.photoAlt}
            placeholder={`Foto real da ${doctor.name}`}
            configKey="doctor.photo"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-3xl"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-magenta-deep">
            {doctor.eyebrow}
          </p>
          <h2
            id="doutora-titulo"
            className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl"
          >
            {doctor.name}
          </h2>

          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-ink/70">
            <span>{doctor.role}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-ink/30" />
            <span className="inline-flex items-center gap-1.5 font-semibold text-navy">
              <BadgeCheck className="h-4 w-4 text-sky-deep" strokeWidth={2.2} aria-hidden />
              {doctor.registration}
            </span>
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">{doctor.text}</p>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-navy">Especializações e áreas de atuação</h3>
            {doctor.specialties.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {doctor.specialties.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-sky/10 px-4 py-1.5 text-sm font-medium text-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              // PLACEHOLDER: preencha `doctor.specialties` no site-config
              <p className="mt-3 inline-flex rounded-full border border-dashed border-navy/30 px-4 py-1.5 text-sm text-navy/60">
                Especializações a confirmar · placeholder · doctor.specialties
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
