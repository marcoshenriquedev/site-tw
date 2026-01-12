import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FormSection } from "@/components/FormSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onScrollToForm={scrollToForm} />
      <BenefitsSection />
      <ServicesSection />
      <FormSection ref={formRef} />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </main>
  );
};

export default Index;