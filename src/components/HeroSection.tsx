import { ArrowDown, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTw from "@/assets/logo-tw.jpg";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/10 blur-2xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="animate-fade-in mb-8">
          <img 
            src={logoTw} 
            alt="TW Soluções" 
            className="w-28 h-28 md:w-36 md:h-36 mx-auto object-contain rounded-2xl shadow-xl"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Soluções Profissionais em
          <span className="block text-accent mt-2">Terceirização de Serviços</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Portaria, Limpeza, Serviços Gerais e Tecnologia em geral, com qualidade, segurança e conformidade legal. Atendimento personalizado para empresas de todos os portes.
        </p>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium">Conformidade Legal</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium">Equipe Qualificada</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium">Atendimento 24h</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onScrollToForm}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Solicitar Orçamento Gratuito
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
