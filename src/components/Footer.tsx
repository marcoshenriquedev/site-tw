import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoTw from "@/assets/logo-tw.jpg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src={logoTw} 
              alt="TW Soluções" 
              className="w-20 h-20 object-contain rounded-xl mb-4 bg-white/10 p-2"
            />
            <h3 className="text-xl font-bold mb-3">TW Soluções</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-md">
              Especializada em terceirização de serviços com foco em qualidade, 
              segurança e conformidade legal. Atendemos empresas de todos os portes 
              com soluções personalizadas.
            </p>
            <p className="text-sm text-primary-foreground/60">
              CNPJ: 60.248.509/0001-80
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  Rua Gibin, 3111<br />
                  Flodoaldo Pontes Pinto - Porto Velho/RO<br />
                  CEP: 76820-582
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  (69) 8115-0383
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  twsolucoes.equipe@gmail.com
                </span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent" />
                <div className="text-primary-foreground/80 text-sm">
                  <p className="font-medium">Segunda a Sexta</p>
                  <p>08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <div className="w-5" />
                <div className="text-primary-foreground/80 text-sm">
                  <p className="font-medium">Sábado</p>
                  <p>08:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60 text-center md:text-left">
            © {new Date().getFullYear()} TW Soluções. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
