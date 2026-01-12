import { ArrowDown, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTw from "@/assets/logo-tw.jpg";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image (public/limpeza.jpeg => /limpeza.jpeg) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("/limpeza.jpeg")` }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Optional: subtle gradient to improve contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/65" />

      {/* Floating Elements (kept subtle) */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/14 blur-2xl animate-pulse" />
      <div
        className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-white/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="animate-fade-in mb-8">
          <img
            src={logoTw}
            alt="TW Soluções"
            className="w-28 h-28 md:w-36 md:h-36 mx-auto object-contain rounded-2xl shadow-xl bg-white/90 p-2"
          />
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow"
          style={{ animationDelay: "0.1s" }}
        >
          Soluções Profissionais em
          <span className="block text-accent mt-2 drop-shadow">
            Terceirização de Serviços
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Portaria, limpeza e serviços gerais com padrão profissional, aliados a soluções em tecnologia e segurança eletrônica. Atendimento sob medida para empresas, condomínios e residências.
        </p>

        {/* Trust Indicators */}
    <div
  className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 animate-fade-in"
  style={{ animationDelay: "0.3s" }}
>
  <div className="flex items-center gap-3 text-white/90">
    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/25 shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex items-center justify-center">
      <Shield className="w-6 h-6 text-white" />
    </div>
    <span className="text-sm font-semibold tracking-wide">Conformidade Legal</span>
  </div>

  <div className="flex items-center gap-3 text-white/90">
    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/25 shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex items-center justify-center">
      <Award className="w-6 h-6 text-white" />
    </div>
    <span className="text-sm font-semibold tracking-wide">Equipe Qualificada</span>
  </div>

  <div className="flex items-center gap-3 text-white/90">
    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/25 shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex items-center justify-center">
      <Clock className="w-6 h-6 text-white" />
    </div>
    <span className="text-sm font-semibold tracking-wide">Atendimento 24h</span>
  </div>
</div>



        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
  variant="hero"
  size="lg"
  onClick={onScrollToForm}
  className="
    text-lg px-8 py-6
    !bg-[#1D4ED8] !text-white
    hover:!bg-[#1E40AF]
    border border-white/20
    shadow-[0_12px_30px_rgba(29,78,216,0.35)]
    hover:shadow-[0_16px_40px_rgba(29,78,216,0.45)]
    transition-all duration-300 hover:-translate-y-1
  "
>
  Solicitar Orçamento Gratuito
</Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
}
