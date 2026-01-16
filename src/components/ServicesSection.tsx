import { Home, Building2, Briefcase, Landmark } from "lucide-react";

const services = [
  { icon: Home, title: "Residencial" },
  { icon: Building2, title: "Condomínios" },
  { icon: Briefcase, title: "Empresarial" },
  { icon: Landmark, title: "Órgão Governamental" },
];

export const ServicesSection = () => {
  // Azul do escudo/logo (mesmo usado no Hero/Footer)
  const TW_BLUE = "#0F376F";

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
            Áreas de Atendimento
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Soluções completas e personalizadas para residências, condomínios, empresas e órgãos públicos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                bg-card border border-border rounded-2xl
                p-6 md:p-8
                flex flex-col items-center justify-center text-center
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
                group
              "
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
                  background:
                    `radial-gradient(650px circle at 50% 40%, ${TW_BLUE}33 0%, transparent 55%)`,
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
                className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 transition-colors"
                style={{
                  backgroundColor: `${TW_BLUE}14`,
                }}
              >
                <service.icon
                  className="w-7 h-7 md:w-8 md:h-8"
                  style={{ color: TW_BLUE }}
                />
              </div>

              <h3 className="relative text-sm md:text-base font-semibold text-foreground">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
