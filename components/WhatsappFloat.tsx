import { MessageCircle } from "lucide-react";
import { getWhatsappLink } from "@/lib/links";

// Botão de WhatsApp fixo no canto da tela, visível o tempo todo.
// No desktop mostra o texto; no celular, só o ícone.
export default function WhatsappFloat() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex h-14 min-w-[56px] items-center justify-center gap-2 rounded-full bg-magenta-deep px-4 text-sm font-semibold text-white shadow-lg shadow-magenta/30 transition-colors hover:bg-magenta-darker sm:right-6 lg:bottom-6 lg:px-6"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} aria-hidden />
      <span className="hidden lg:inline">Falar no WhatsApp</span>
    </a>
  );
}
