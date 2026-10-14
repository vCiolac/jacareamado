"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type Props = { src: string; poster: string; title: string };

// Vídeo vertical do consultório. Só baixa o arquivo depois do clique no play
// (sem peso extra no carregamento da página). O arquivo não tem áudio e o
// player é mudo — o som original foi descartado a pedido da cliente.
export default function ClinicVideo({ src, poster, title }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-3xl border-4 border-white bg-navy/5 shadow-xl shadow-navy/15">
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          muted
          playsInline
          title={title}
          className="h-full w-full bg-black object-contain"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Assistir: ${title}`}
          className="group absolute inset-0 flex items-center justify-center"
        >
          <Image src={poster} alt="" fill sizes="300px" className="object-cover" />
          <span className="absolute inset-0 bg-navy/20 transition-colors group-hover:bg-navy/30" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-magenta-deep shadow-lg transition-transform group-hover:scale-105">
            <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}
