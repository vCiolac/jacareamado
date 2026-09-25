import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Logo({ size = "md" }: { size?: "sm" | "md" }) {
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

  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display font-extrabold tracking-tight text-navy ${
          size === "sm" ? "text-xl" : "text-2xl"
        }`}
      >
        {business.name}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-magenta-deep">
        {business.tagline}
      </span>
    </span>
  );
}
