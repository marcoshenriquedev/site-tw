import { ArrowDown, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import brasaoTw from "@/assets/brasao-tw.png";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export function HeroSection({ onScrollToForm }: HeroSectionProps) {
  const TW_BLUE = "#0F376F";
  const TW_BLUE_HOVER = "#0B2B4B";

  const BG_URL = `/limpeza e segurança.png`;

  return (
    <section className="relative isolate min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Background system (mobile: imagem inteira; desktop: mantém cover original) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* DESKTOP / NOTEBOOK */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${BG_URL}")` }}
        />

        {/* MOBILE/TABLET */}
        <div className="md:hidden absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xl scale-110 opacity-60"
            style={{ backgroundImage: `url("${BG_URL}")` }}
          />
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${BG_URL}")` }}
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/65" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 z-0 w-20 h-20 rounded-full bg-white/14 blur-2xl animate-pulse" />
      <div
        className="absolute bottom-32 right-16 z-0 w-32 h-32 rounded-full bg-white/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 text-center pb-20 md:pb-0">
        {/* Logo */}
        <div className="mx-auto inline-flex items-center justify-center">
          <img
            src={brasaoTw}
            alt="TW Soluções"
            className="w- h-50 md:w-50 md:h-40
        object-contain
        drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]"

         loading="lazy"
          />
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow"
          style={{ animationDelay: "0.1s" }}
        >
          Soluções Profissionais em
          <span className="block mt-2 drop-shadow" style={{ color: "#16498A" }}>
            Terceirização de Serviços
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Portaria, limpeza e serviços gerais com padrão profissional, aliados a
          soluções em tecnologia e segurança eletrônica. Atendimento sob medida
          para empresas, condomínios e residências.
        </p>

        {/* Trust Indicators */}
        {/* Trust Indicators */}
        <div
          className="
    grid gap-4
    sm:flex sm:flex-wrap sm:justify-center sm:gap-6
    md:gap-10
    mb-10 animate-fade-in
  "
          style={{ animationDelay: "0.3s" }}
        >
          {/* Item */}
          <div
            className="
      flex items-center gap-3 text-white/90
      w-full max-w-[340px] mx-auto justify-start
      sm:w-auto sm:max-w-none sm:mx-0 sm:justify-center
    "
          >
            <div
              className="w-11 h-11 rounded-full backdrop-blur-md border border-white/25 shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${TW_BLUE}CC` }}
            >
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-left">
              Conformidade Legal
            </span>
          </div>

          {/* Item */}
          <div
            className="
      flex items-center gap-3 text-white/90
      w-full max-w-[340px] mx-auto justify-start
      sm:w-auto sm:max-w-none sm:mx-0 sm:justify-center
    "
          >
            <div
              className="w-11 h-11 rounded-full backdrop-blur-md border border-white/25 shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${TW_BLUE}CC` }}
            >
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-left">
              Equipe Qualificada
            </span>
          </div>

          {/* Item */}
          <div
            className="
      flex items-center gap-3 text-white/90
      w-full max-w-[340px] mx-auto justify-start
      sm:w-auto sm:max-w-none sm:mx-0 sm:justify-center
    "
          >
            <div
              className="w-11 h-11 rounded-full backdrop-blur-md border border-white/25 shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${TW_BLUE}CC` }}
            >
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-left">
              Atendimento 24h
            </span>
          </div>
        </div>

        {/* CTA Button (sobe no mobile sem mexer na largura) */}
        <div
          className="animate-fade-in -mt-4 sm:mt-0"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            variant="hero"
            size="lg"
            onClick={onScrollToForm}
            className="
              text-lg px-8 py-6
              !text-white
              border border-white/20
              shadow-[0_12px_30px_rgba(15,55,111,0.35)]
              hover:shadow-[0_16px_40px_rgba(15,55,111,0.45)]
              transition-all duration-300 hover:-translate-y-1
            "
            style={{ backgroundColor: TW_BLUE }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                TW_BLUE_HOVER;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                TW_BLUE;
            }}
          >
            Solicitar Orçamento Gratuito
          </Button>
        </div>
      </div>

      {/* Scroll Indicator (fica no rodapé sem empurrar conteúdo) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
}
