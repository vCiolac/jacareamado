import Image from "next/image";
import { Camera, BadgeCheck, ClipboardList } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="doutora" className="mx-auto max-w-6xl px-5 pb-20 sm:pb-24">
      <div className="grid gap-8 overflow-hidden rounded-3xl border border-navy/8 bg-white p-3 shadow-sm md:grid-cols-2 md:gap-0 md:p-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-auto">
          {about.image ? (
            <Image
              src={about.image}
              alt={about.doctorName}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-sky/8 text-center">
              <Camera className="h-8 w-8 text-navy/35" strokeWidth={1.6} />
              <p className="max-w-[14rem] text-sm text-navy/45">
                Foto da {about.doctorName} no consultório
                <br />
                <span className="text-xs">(troque em <code>about.image</code>)</span>
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center px-2 py-6 sm:px-8 sm:py-8">
          <p className="text-sm font-semibold text-magenta">{about.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            {about.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            {about.text}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2.5">
              <BadgeCheck className="h-5 w-5 shrink-0 text-magenta" strokeWidth={2} />
              <div>
                <p className="text-sm font-semibold text-navy">{about.doctorName}</p>
                <p className="text-xs text-ink/55">{about.doctorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <ClipboardList className="h-5 w-5 shrink-0 text-sky-deep" strokeWidth={2} />
              <div>
                <p className="text-sm font-semibold text-navy">{about.registration}</p>
                <p className="text-xs text-ink/55">Registro profissional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
