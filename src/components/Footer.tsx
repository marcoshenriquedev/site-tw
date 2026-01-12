import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoTw from "@/assets/logo-tw.jpg";

export function Footer() {
  // Slot para alinhar os títulos das colunas
  // (altura do topo + respiro até começar o título)
  const topSlot = "h-[112px] mb-4"; // usado nas colunas sem logo
  const companyTopPad = "pt-[128px]"; // 112px + 16px (mb-4) para bater exatamente

  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Overlay sutil para aumentar contraste sem mudar o azul */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative container mx-auto max-w-6xl px-4 py-12 drop-shadow-[0_1px_1px_rgba(0,0,0,0.28)]">
        {/* 5 colunas no desktop para empurrar o mapa para o canto */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 items-start min-w-0">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 relative min-w-0">
            {/* Logo maior, sem empurrar o conteúdo */}
            <img
              src={logoTw}
              alt="TW Soluções"
              className="absolute top-0 left-0 w-24 h-24 object-contain rounded-xl bg-white/18 p-2"
            />

            {/* Empurra o texto para alinhar com as outras colunas */}
            <div className={companyTopPad}>
              <h3 className="text-xl font-bold mb-3 text-white">TW Soluções</h3>

              <p className="text-white/92 leading-relaxed mb-4 max-w-md">
                Especializada em terceirização de serviços com foco em qualidade,
                segurança e conformidade legal. Atendemos empresas de todos os portes
                com soluções personalizadas.
              </p>

              <p className="text-sm text-white/85">CNPJ: 60.248.509/0001-80</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="min-w-0 lg:col-span-1">
            <div className={topSlot} aria-hidden="true" />

            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-white shrink-0" />
                <span className="text-white/92 text-sm">
                  Rua Gibin, 3111
                  <br />
                  Flodoaldo Pontes Pinto - Porto Velho/RO
                  <br />
                  CEP: 76820-582
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <span className="text-white/92 text-sm">(69) 8115-0383</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <span className="text-white/92 text-sm">
                  twsolucoes.equipe@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="min-w-0 lg:col-span-1">
            <div className={topSlot} aria-hidden="true" />

            <h4 className="text-lg font-semibold mb-4 text-white">
              Horário de Atendimento
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-white shrink-0" />
                <div className="text-white/92 text-sm">
                  <p className="font-semibold">Segunda a Sexta</p>
                  <p>08:00 - 18:00</p>
                </div>
              </li>

              <li className="flex items-start gap-3 mt-2">
                <div className="w-5 shrink-0" />
                <div className="text-white/92 text-sm">
                  <p className="font-semibold">Sábado</p>
                  <p>08:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Location / Map */}
          <div className="min-w-0 lg:col-span-1 lg:justify-self-end">
            <div className={topSlot} aria-hidden="true" />

            <h4 className="text-lg font-semibold mb-4 text-white">Localização</h4>

            <div className="w-full lg:w-[260px]">
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/10">
                <div className="relative w-full h-[190px]">
                  <iframe
                    title="Localização TW Soluções"
                    src="https://www.google.com/maps?q=Rua%20Gibin%203111%20Porto%20Velho%20RO&output=embed"
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>
              </div>

              <p className="text-white/80 text-xs mt-3">
                Dica: use Ctrl + rolagem do mouse para aplicar zoom no mapa.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/25 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/85 text-center md:text-left">
            © {new Date().getFullYear()} TW Soluções. Todos os direitos reservados.
          </p>

          <div className="flex gap-4 text-sm">
            <a
              href="#"
              className="text-white/90 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-white/90 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
