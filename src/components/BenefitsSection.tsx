import { Shield, Users, Clock, Award, FileCheck, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Profissionais treinados e certificados para garantir a proteção do seu patrimônio."
  },
  {
    icon: Users,
    title: "Equipe Qualificada",
    description: "Colaboradores selecionados criteriosamente e em constante capacitação."
  },
  {
    icon: FileCheck,
    title: "Conformidade Legal",
    description: "Atendimento às normas trabalhistas e regulamentações vigentes."
  },
  {
    icon: Clock,
    title: "Flexibilidade Horária",
    description: "Serviços adaptados às necessidades específicas do seu negócio."
  },
  {
    icon: Award,
    title: "Compromisso com Qualidade",
    description: "Processos padronizados e monitoramento contínuo da performance."
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Atendimento ágil e gestor exclusivo para sua conta."
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diferenciais que fazem a diferença
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprometidos com excelência em cada serviço prestado
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
