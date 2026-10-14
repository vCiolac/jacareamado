import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

// `tone="onBlue"`: versão da faixa azul do header (nome em amarelo com
// contorno azul-marinho, como na arte da marca).
export default function Logo({
  size = "md",
  tone = "default",
}: {
  size?: "sm" | "md";
  tone?: "default" | "onBlue";
}) {
  const { business } = siteConfig;

  if (business.logo) {
    return (
      <Image
        src={business.logo}
        alt={`${business.name} — ${business.tagline}`}
        width={size === "sm" ? 140 : 200}
        height={size === "sm" ? 48 : 68}
        className="h-auto w-auto"
        priority={size === "md"}
      />
    );
  }

  const onBlue = tone === "onBlue";

  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display font-extrabold tracking-tight ${
          size === "sm" ? "text-xl" : "text-2xl sm:text-[1.7rem]"
        } ${
          onBlue
            ? "text-sun [paint-order:stroke_fill] [-webkit-text-stroke:3px_#0D4A78] [text-shadow:0_2px_0_#0D4A78]"
            : "text-navy"
        }`}
      >
        {business.name}
      </span>
      <span
        className={`mt-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
          onBlue ? "text-white" : "text-magenta-deep"
        }`}
      >
        {business.tagline}
      </span>
    </span>
  );
}
