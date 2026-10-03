"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Video } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import PhotoMosaic from "./PhotoMosaic";

// O vídeo só é carregado depois do clique no play (nada de autoplay com som).
// Vídeo vertical: texto ao lado no desktop; horizontal: texto em cima.
export default function VideoSection() {
  const { video } = siteConfig;
  const [playing, setPlaying] = useState(false);
  const portrait = video.orientation === "portrait";

  const player = (
    <div
      className={`relative w-full overflow-hidden rounded-3xl bg-navy/5 ${
        portrait
          ? "mx-auto aspect-[9/16] max-w-[340px] shadow-lg shadow-navy/10 md:mx-0"
          : "mx-auto aspect-video max-w-4xl"
      }`}
    >
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
              sizes={portrait ? "340px" : "(min-width: 1024px) 896px, 100vw"}
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
  );

  return (
    <section aria-labelledby="video-titulo" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        {portrait ? (
          <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14 lg:grid-cols-[1fr_340px]">
            <div className="max-w-xl text-center md:text-left">
              <h2
                id="video-titulo"
                className="font-display text-3xl font-bold leading-tight text-navy sm:text-4xl"
              >
                {video.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">{video.text}</p>
            </div>
            <div className="md:w-[300px] lg:w-[340px]">{player}</div>
          </div>
        ) : (
          <>
            <div className="mx-auto max-w-xl text-center">
              <h2
                id="video-titulo"
                className="font-display text-3xl font-bold text-navy sm:text-4xl"
              >
                {video.heading}
              </h2>
              <p className="mt-3 text-lg text-ink/65">{video.text}</p>
            </div>
            <div className="mt-10">{player}</div>
          </>
        )}

        <PhotoMosaic />
      </div>
    </section>
  );
}
