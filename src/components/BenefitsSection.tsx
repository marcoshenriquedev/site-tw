import { Shield, Users, Clock, Award, FileCheck, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Segurança Garantida",
    description:
      "Profissionais treinados e certificados para garantir a proteção do seu patrimônio.",
  },
  {
    icon: Users,
    title: "Equipe Qualificada",
    description:
      "Colaboradores selecionados criteriosamente e em constante capacitação.",
  },
  {
    icon: FileCheck,
    title: "Conformidade Legal",
    description: "Atendimento às normas trabalhistas e regulamentações vigentes.",
  },
  {
    icon: Clock,
    title: "Flexibilidade Horária",
    description: "Serviços adaptados às necessidades específicas do seu negócio.",
  },
  {
    icon: Award,
    title: "Compromisso com Qualidade",
    description:
      "Processos padronizados e monitoramento contínuo da performance.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Atendimento ágil e gestor exclusivo para sua conta.",
  },
];

export function BenefitsSection() {
  // Azul do escudo/logo (mesmo usado no Hero/Footer)
  const TW_BLUE = "#0F376F";

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#EAF2FF] text-[#2F6FED] border border-[#CFE0FF]">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos diferenciais
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
              className="
                group relative overflow-hidden
                p-6 rounded-2xl bg-background border border-border
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* ✅ “Animação azul” no hover (visível no claro e no escuro) */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
                style={{
                  background: `radial-gradient(650px circle at 50% 35%, ${TW_BLUE}33 0%, transparent 55%)`,
                }}
              />

              {/* ✅ Borda azul animada no hover */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
                style={{
                  boxShadow: `inset 0 0 0 1px ${TW_BLUE}66, 0 12px 28px ${TW_BLUE}22`,
                }}
              />

              {/* Conteúdo */}
              <div
                className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors"
                style={{ backgroundColor: `${TW_BLUE}14` }}
              >
                <benefit.icon
                  className="w-7 h-7"
                  style={{ color: TW_BLUE }}
                />
              </div>

              <h3 className="relative text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
