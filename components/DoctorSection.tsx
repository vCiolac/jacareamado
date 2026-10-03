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
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl md:sticky md:top-28">
          <Photo
            src={doctor.photo}
            alt={doctor.photoAlt}
            placeholder={`Foto real da ${doctor.name}`}
            configKey="doctor.photo"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="rounded-3xl"
          />
        </div>

        <div className="md:pt-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-magenta-deep">
            {doctor.eyebrow}
          </p>
          <h2
            id="doutora-titulo"
            className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl"
          >
            {doctor.heading}
          </h2>

          {/* Identificação da veterinária */}
          <div className="mt-6 border-l-2 border-magenta pl-4">
            <p className="font-display text-xl font-bold text-navy">{doctor.name}</p>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-ink/70">
              <span>{doctor.role}</span>
              <span aria-hidden className="text-ink/30">
                |
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-navy">
                <BadgeCheck className="h-4 w-4 text-sky-deep" strokeWidth={2.2} aria-hidden />
                {doctor.registration}
              </span>
            </p>
          </div>

          <div className="mt-6 flex max-w-lg flex-col gap-4 text-lg leading-relaxed text-ink/70">
            {doctor.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* Especializações — lista editorial, sem cards */}
          <div className="mt-10 max-w-lg">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
              {doctor.specialtiesHeading}
            </h3>
            <dl className="mt-4 divide-y divide-navy/10 border-y border-navy/10">
              {doctor.specialties.map((item) => (
                <div key={item.name} className="flex gap-4 py-4">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-magenta" />
                  <div>
                    <dt className="font-display text-lg font-bold leading-snug text-navy">
                      {item.name}
                    </dt>
                    <dd className="mt-1 text-[15px] leading-relaxed text-ink/65">{item.text}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
