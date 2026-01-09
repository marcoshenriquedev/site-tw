import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Diretor Administrativo",
    company: "Condomínio Residencial Aurora",
    content: "Excelente prestação de serviço. A equipe de portaria é extremamente profissional e atenciosa. Recomendo fortemente.",
    rating: 5
  },
  {
    name: "Maria Helena",
    role: "Gerente de Facilities",
    company: "Escritório Advocacia Silva & Associados",
    content: "A qualidade dos serviços de limpeza superou nossas expectativas. Ambiente sempre impecável e equipe muito educada.",
    rating: 5
  },
  {
    name: "Roberto Santos",
    role: "Síndico",
    company: "Edifício Comercial Centro",
    content: "Parceria sólida há mais de 2 anos. Sempre pontuais e comprometidos com a segurança do nosso prédio.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="relative p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent-foreground" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-accent">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
