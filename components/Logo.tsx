import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Logo({ size = "md" }: { size?: "sm" | "md"; tone?: "default" | "onBlue" }) {
  const { business } = siteConfig;
  if (!business.logoAvailable) {
    // Não simular a marca nem carregar uma imagem inexistente em produção.
    return <span role="img" aria-label={business.name} className={size === "sm" ? "block h-10 w-36" : "block h-12 w-44 sm:w-52"} />;
  }
  return <Image src={business.logo} alt={business.name + " — " + business.tagline} width={720} height={172} priority={size === "md"} className={size === "sm" ? "h-auto max-h-12 w-36 object-contain" : "h-auto max-h-16 w-48 object-contain sm:w-56 lg:w-64"} />;
}
