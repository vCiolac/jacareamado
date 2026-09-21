import { siteConfig } from "./site-config";

export function getWhatsappLink() {
  const { whatsappNumber, whatsappMessage } = siteConfig.contact;
  const text = encodeURIComponent(whatsappMessage);
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}
