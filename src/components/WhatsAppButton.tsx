import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "556981150383"; 
  const message = "Olá! Gostaria de solicitar um orçamento.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 md:h-[72px] md:w-[72px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 md:h-9 md:w-9" />
    </a>
  );
}
