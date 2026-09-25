import { siteConfig } from "./site-config";

export function getWhatsappLink() {
  const { whatsappNumber, whatsappMessage } = siteConfig.contact;
  const text = encodeURIComponent(whatsappMessage);
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}

// Retorna null enquanto o link do Instagram não estiver configurado
export function getInstagramLink() {
  return siteConfig.contact.instagramUrl || null;
}

export function getMapsEmbedLink() {
  const q = encodeURIComponent(siteConfig.location.mapQuery);
  return `https://www.google.com/maps?q=${q}&output=embed`;
}

export function getMapsDirectionsLink() {
  const q = encodeURIComponent(siteConfig.location.mapQuery);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

// "(21) 3190-5544" -> "tel:+552131905544"
export function getPhoneLink(phone: string) {
  return `tel:+55${phone.replace(/\D/g, "")}`;
}
