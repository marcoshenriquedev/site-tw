import { useState, forwardRef } from "react";
import { Shield, Sparkles, Wrench, MoreHorizontal, CheckCircle2, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ServiceCheckbox } from "@/components/ServiceCheckbox";
import { toast } from "@/hooks/use-toast";
import { enviarOrcamento } from "@/services/orcamentos";
import type { OrcamentoInput } from "@/services/orcamentos";

interface FormData {
  services: {
    portaria: boolean;
    limpeza: boolean;
    auxiliar: boolean;
    tecnologia: boolean;
    outros: boolean;
  };
  nome: string;
  email: string;
  celular: string;
  documento: string;
  mensagem: string;
}

export const FormSection = forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState<FormData>({
    services: {
      portaria: false,
      limpeza: false,
      auxiliar: false,
      tecnologia: false,
      outros: false,
    },
    nome: "",
    email: "",
    celular: "",
    documento: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceChange = (service: keyof FormData["services"], checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: { ...prev.services, [service]: checked },
    }));
  };

  const handleInputChange = (field: keyof Omit<FormData, "services">, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const formatDocument = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      if (numbers.length <= 3) return numbers;
      if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
      if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
      return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9)}`;
    }
    // CNPJ
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`;
    if (numbers.length <= 8) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`;
    if (numbers.length <= 12) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`;
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasService = Object.values(formData.services).some((v) => v);
    if (!hasService) {
      toast({
        title: "Selecione um serviço",
        description: "Por favor, selecione pelo menos um serviço desejado.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.nome.trim() || !formData.email.trim() || !formData.celular.trim() || !formData.documento.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: OrcamentoInput = {
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        telefone: formData.celular.trim(),
        documento: formData.documento.trim(),
        servicos: formData.services,
        mensagem: (formData.mensagem || "").trim(),
      };

      const id = await enviarOrcamento(payload);

      setIsSubmitted(true);

      toast({
        title: "Solicitação enviada!",
        description: `Recebido com sucesso. Protocolo: ${id}`,
      });
    } catch (err: any) {
      console.error("Erro ao gravar:", err?.code, err?.message, err);
      toast({
        title: "Erro ao enviar",
        description: err?.message || "Veja o Console (F12).",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      services: { portaria: false, limpeza: false, auxiliar: false, tecnologia: false, outros: false },
      nome: "",
      email: "",
      celular: "",
      documento: "",
      mensagem: "",
    });
  };

  if (isSubmitted) {
    return (
      <section ref={ref} className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-background rounded-2xl shadow-card-hover p-8 md:p-12 text-center animate-scale-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Solicitação Enviada!</h2>
            <p className="text-muted-foreground mb-6">
              Recebemos seu pedido de orçamento. Nossa equipe entrará em contato em até 24 horas úteis.
            </p>
            <Button variant="hero" onClick={resetForm}>
              Fazer Nova Solicitação
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="form-section" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Orçamento Gratuito
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Solicite seu Orçamento</h2>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário e receba uma proposta personalizada.
            <br />
            <span className="text-base">
              Trabalhamos com tecnologia em geral e segurança residencial, incluindo CFTV e cercas elétricas.
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background rounded-2xl shadow-card p-6 md:p-8 space-y-8">
          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-accent"></span>
              Serviço(s) Desejado(s) <span className="text-destructive">*</span>
            </legend>

            <div className="grid gap-3 sm:grid-cols-2">
              <ServiceCheckbox
                id="portaria"
                label="Portaria e Controle de Acesso"
                icon={Shield}
                checked={formData.services.portaria}
                onCheckedChange={(checked) => handleServiceChange("portaria", checked)}

              />
              <ServiceCheckbox
                id="limpeza"
                label="Serviços de Limpeza"
                icon={Sparkles}
                checked={formData.services.limpeza}
                onCheckedChange={(checked) => handleServiceChange("limpeza", !!checked)}
              />
              <ServiceCheckbox
                id="auxiliar"
                label="Auxiliar de Serviços Gerais"
                icon={Wrench}
                checked={formData.services.auxiliar}
                onCheckedChange={(checked) => handleServiceChange("auxiliar", !!checked)}
              />
              <ServiceCheckbox
                id="tecnologia"
                label="Serviços de Tecnologia"
                icon={Monitor}
                checked={formData.services.tecnologia}
                onCheckedChange={(checked) => handleServiceChange("tecnologia", !!checked)}
              />
              <ServiceCheckbox
                id="outros"
                label="Outros (descreva abaixo)"
                icon={MoreHorizontal}
                checked={formData.services.outros}
                onCheckedChange={(checked) => handleServiceChange("outros", !!checked)}
              />
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-accent"></span>
              Informações de Contato
            </legend>

            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground font-medium">
                Nome Completo <span className="text-destructive">*</span>
              </Label>
              <Input
                id="nome"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="celular" className="text-foreground font-medium">
                  Celular <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="celular"
                  type="tel"
                  placeholder="(69) 9 0000-0000"
                  value={formData.celular}
                  onChange={(e) => handleInputChange("celular", formatPhone(e.target.value))}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="documento" className="text-foreground font-medium">
                CPF ou CNPJ <span className="text-destructive">*</span>
              </Label>
              <Input
                id="documento"
                placeholder="000.000.000-00 / 00.000.000/0001-00"
                value={formData.documento}
                onChange={(e) => handleInputChange("documento", formatDocument(e.target.value))}
                required
              />
              <p className="text-sm text-muted-foreground">Usaremos seus dados apenas para responder ao seu pedido.</p>
            </div>
          </fieldset>

          <fieldset className="space-y-2">
            <Label htmlFor="mensagem" className="text-foreground font-medium">
              Mensagem
            </Label>
            <Textarea
              id="mensagem"
              placeholder="Descreva o local, horários e particularidades do serviço desejado (opcional)"
              value={formData.mensagem}
              onChange={(e) => handleInputChange("mensagem", e.target.value)}
            />
          </fieldset>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-sm text-muted-foreground">
              Campos marcados com <span className="text-destructive">*</span> são obrigatórios
            </p>

            <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
});

FormSection.displayName = "FormSection";
