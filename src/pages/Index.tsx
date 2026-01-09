import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FormSection } from "@/components/FormSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";
// import OrcamentoForm from "@/components/OrcamentoForm"; // (opcional) remova se não usa

const Index = () => {
  const formRef = useRef<HTMLElement | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onScrollToForm={scrollToForm} />
      <BenefitsSection />

      {/* ✅ AQUI: passa o ref */}
      <FormSection ref={formRef} />

      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </main>
  );
};

export default Index;
