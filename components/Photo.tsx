import Image from "next/image";
import { Camera } from "lucide-react";

type PhotoProps = {
  src: string | null;
  alt: string;
  // Texto do placeholder enquanto não houver foto
  placeholder: string;
  // Caminho no site-config, exibido no placeholder para facilitar a troca
  configKey?: string;
  sizes: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  className?: string;
};

// Foto real (otimizada pelo next/image) ou placeholder claramente marcado.
// O elemento pai define a proporção (ex: aspect-[4/3]) e precisa ser `relative`.
export default function Photo({
  src,
  alt,
  placeholder,
  configKey,
  sizes,
  priority,
  fit = "cover",
  className = "",
}: PhotoProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Espaço reservado para foto: ${placeholder}`}
      className={`absolute inset-0 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-navy/20 bg-sky/5 p-4 text-center ${className}`}
    >
      <Camera className="h-7 w-7 text-navy/35" strokeWidth={1.6} aria-hidden />
      <p className="text-sm font-medium text-navy/60">{placeholder}</p>
      <p className="text-[11px] uppercase tracking-wider text-navy/40">
        placeholder{configKey ? ` · ${configKey}` : ""}
      </p>
    </div>
  );
}
