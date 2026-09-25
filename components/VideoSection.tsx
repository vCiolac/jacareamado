"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Video } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import PhotoMosaic from "./PhotoMosaic";

// O vídeo só é carregado depois do clique no play (nada de autoplay com som).
export default function VideoSection() {
  const { video } = siteConfig;
  const [playing, setPlaying] = useState(false);

  return (
    <section aria-labelledby="video-titulo" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="video-titulo"
            className="font-display text-3xl font-bold text-navy sm:text-4xl"
          >
            {video.heading}
          </h2>
          <p className="mt-3 text-lg text-ink/65">{video.text}</p>
        </div>

        <div className="relative mx-auto mt-10 aspect-video w-full max-w-4xl overflow-hidden rounded-3xl bg-navy/5">
          {playing && video.src ? (
            <video
              src={video.src}
              poster={video.poster ?? undefined}
              controls
              autoPlay
              playsInline
              title={video.title}
              className="h-full w-full bg-black object-contain"
            />
          ) : video.src ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Assistir: ${video.title}`}
              className="group absolute inset-0 flex items-center justify-center"
            >
              {video.poster && (
                <Image
                  src={video.poster}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                />
              )}
              <span className="absolute inset-0 bg-navy/20 transition-colors group-hover:bg-navy/30" />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-magenta-deep shadow-lg transition-transform group-hover:scale-105">
                <Play className="ml-1 h-8 w-8 fill-current" aria-hidden />
              </span>
            </button>
          ) : (
            // PLACEHOLDER: defina `video.src` e `video.poster` no site-config
            <div
              role="img"
              aria-label="Espaço reservado para o vídeo do consultório"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-navy/20 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy/40 shadow-sm">
                <Video className="h-7 w-7" strokeWidth={1.6} aria-hidden />
              </span>
              <p className="text-sm font-medium text-navy/60">Vídeo/tour do consultório</p>
              <p className="text-[11px] uppercase tracking-wider text-navy/40">
                placeholder · video.src / video.poster
              </p>
            </div>
          )}
        </div>

        <PhotoMosaic />
      </div>
    </section>
  );
}
