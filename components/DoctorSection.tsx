import { ClipboardList, Heart, UserRound } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Photo from "./Photo";
import ClinicVideo from "./ClinicVideo";

// Doutora + especializações + origem do nome, num único bloco compacto
export default function DoctorSection() {
  const { doctor } = siteConfig;

  return (
    <section id="doutora" aria-labelledby="doutora-titulo" className="scroll-mt-20 py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="grid items-center gap-6 rounded-3xl border border-magenta/15 bg-white p-3 shadow-lg shadow-navy/5 sm:p-5 md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:p-6">
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-magenta-deep">
              {doctor.eyebrow}
            </p>
            <h2
              id="doutora-titulo"
              className="mt-2 font-display text-[1.7rem] font-bold leading-tight text-navy sm:text-4xl"
            >
              {doctor.heading}
            </h2>

            <p className="mt-3 text-[15px] leading-relaxed text-ink/75 sm:text-base">{doctor.text}</p>

            {/* Identificação em selos, como na arte aprovada */}
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-magenta-deep text-white">
                  <UserRound className="h-6 w-6" strokeWidth={2} aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base font-bold text-navy">{doctor.name}</span>
                  <span className="text-sm text-ink/65">{doctor.role}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky/20 text-navy">
                  <ClipboardList className="h-6 w-6" strokeWidth={2} aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base font-bold text-navy">{doctor.registration}</span>
                  <span className="text-sm text-ink/65">Registro profissional</span>
                </span>
              </div>
            </div>

            <h3 className="sr-only">Especializações</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
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

        {/* Vídeo do consultório — destino do botão "Conhecer o consultório" */}
        <div className="mt-5 grid items-center gap-6 overflow-hidden rounded-3xl bg-sky/10 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:gap-12 md:p-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold leading-tight text-navy sm:text-3xl">
              {doctor.video.heading}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink/75 sm:text-base md:mx-0">
              {doctor.video.text}
            </p>
          </div>
          <div className="w-full md:w-[280px]">
            <ClinicVideo src={doctor.video.src} poster={doctor.video.poster} title={doctor.video.title} />
          </div>
        </div>
      </div>
    </section>
  );
}
