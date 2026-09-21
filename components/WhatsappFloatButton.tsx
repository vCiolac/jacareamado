import { MessageCircle } from "lucide-react";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function WhatsappFloatButton() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-magenta text-white shadow-lg shadow-magenta/30 transition-transform hover:scale-105 md:hidden"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
    </a>
  );
}
