import { Home, Building2, Briefcase, Landmark } from "lucide-react";

const services = [
  { icon: Home, title: "Residencial" },
  { icon: Building2, title: "Condomínios" },
  { icon: Briefcase, title: "Empresarial" },
  { icon: Landmark, title: "Órgão Governamental" },
];

export const ServicesSection = () => {
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
              className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>

              <h3 className="text-sm md:text-base font-semibold text-foreground">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
