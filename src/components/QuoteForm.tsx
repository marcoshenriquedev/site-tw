// import { useState } from "react";
// import { Shield, Sparkles, Wrench, MoreHorizontal, Send, CheckCircle2 } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { ServiceCheckbox } from "@/components/ServiceCheckbox";
// import { toast } from "@/hooks/use-toast";

// interface FormData {
//   services: {
//     portaria: boolean;
//     limpeza: boolean;
//     auxiliar: boolean;
//     outros: boolean;
//   };
//   nome: string;
//   email: string;
//   celular: string;
//   documento: string;
//   mensagem: string;
// }

// export function QuoteForm() {
//   const [formData, setFormData] = useState<FormData>({
//     services: {
//       portaria: false,
//       limpeza: false,
//       auxiliar: false,
//       outros: false,
//     },
//     nome: "",
//     email: "",
//     celular: "",
//     documento: "",
//     mensagem: "",
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleServiceChange = (service: keyof FormData["services"], checked: boolean) => {
//     setFormData(prev => ({
//       ...prev,
//       services: { ...prev.services, [service]: checked },
//     }));
//   };

//   const handleInputChange = (field: keyof Omit<FormData, "services">, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const formatPhone = (value: string) => {
//     const numbers = value.replace(/\D/g, "");
//     if (numbers.length <= 2) return numbers;
//     if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
//     if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
//     return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
//   };

//   const formatDocument = (value: string) => {
//     const numbers = value.replace(/\D/g, "");
//     if (numbers.length <= 11) {
//       // CPF: 000.000.000-00
//       if (numbers.length <= 3) return numbers;
//       if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
//       if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
//       return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9)}`;
//     } else {
//       // CNPJ: 00.000.000/0001-00
//       if (numbers.length <= 2) return numbers;
//       if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`;
//       if (numbers.length <= 8) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`;
//       if (numbers.length <= 12) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`;
//       return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`;
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const hasService = Object.values(formData.services).some(v => v);
//     if (!hasService) {
//       toast({
//         title: "Selecione um serviço",
//         description: "Por favor, selecione pelo menos um serviço desejado.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (!formData.nome.trim() || !formData.email.trim() || !formData.celular.trim() || !formData.documento.trim()) {
//       toast({
//         title: "Campos obrigatórios",
//         description: "Por favor, preencha todos os campos obrigatórios.",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1500));
    
//     setIsSubmitting(false);
//     setIsSubmitted(true);
    
//     toast({
//       title: "Solicitação enviada!",
//       description: "Entraremos em contato em breve.",
//     });
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
//         <div className="bg-card rounded-2xl shadow-card-hover p-8 md:p-12 max-w-md w-full text-center animate-scale-in">
//           <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
//             <CheckCircle2 className="w-10 h-10 text-accent" />
//           </div>
//           <h2 className="text-2xl font-bold text-foreground mb-3">Solicitação Enviada!</h2>
//           <p className="text-muted-foreground mb-6">
//             Recebemos seu pedido de orçamento. Nossa equipe entrará em contato em até 24 horas úteis.
//           </p>
//           <Button 
//             variant="hero" 
//             onClick={() => {
//               setIsSubmitted(false);
//               setFormData({
//                 services: { portaria: false, limpeza: false, auxiliar: false, outros: false },
//                 nome: "", email: "", celular: "", documento: "", mensagem: "",
//               });
//             }}
//           >
//             Fazer Nova Solicitação
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen gradient-hero py-8 px-4 md:py-12">
//       <div className="max-w-2xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8 animate-fade-in">
//           <img 
//             src={logoTw} 
//             alt="TW Soluções" 
//             className="w-24 h-24 mx-auto mb-6 object-contain"
//           />
//           <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
//             Solicite seu Orçamento
//           </h1>
//           <p className="text-muted-foreground text-lg max-w-md mx-auto">
//             Portaria, Limpeza e Serviços Gerais com qualidade e conformidade.
//           </p>
//         </div>

//         {/* Form Card */}
//         <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-6 md:p-8 space-y-8">
//           {/* Services Section */}
//           <fieldset className="space-y-4 animate-fade-in-delay-1">
//             <legend className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
//               <span className="w-1.5 h-6 rounded-full bg-accent"></span>
//               Serviço(s) Desejado(s) <span className="text-destructive">*</span>
//             </legend>
//             <div className="grid gap-3 sm:grid-cols-2">
//               <ServiceCheckbox
//                 id="portaria"
//                 label="Portaria e Controle de Acesso"
//                 icon={Shield}
//                 checked={formData.services.portaria}
//                 onCheckedChange={(checked) => handleServiceChange("portaria", !!checked)}
//               />
//               <ServiceCheckbox
//                 id="limpeza"
//                 label="Serviços de Limpeza"
//                 icon={Sparkles}
//                 checked={formData.services.limpeza}
//                 onCheckedChange={(checked) => handleServiceChange("limpeza", !!checked)}
//               />
//               <ServiceCheckbox
//                 id="auxiliar"
//                 label="Auxiliar de Serviços Gerais"
//                 icon={Wrench}
//                 checked={formData.services.auxiliar}
//                 onCheckedChange={(checked) => handleServiceChange("auxiliar", !!checked)}
//               />
//               <ServiceCheckbox
//                 id="outros"
//                 label="Outros (descreva abaixo)"
//                 icon={MoreHorizontal}
//                 checked={formData.services.outros}
//                 onCheckedChange={(checked) => handleServiceChange("outros", !!checked)}
//               />
//             </div>
//           </fieldset>

//           {/* Contact Section */}
//           <fieldset className="space-y-5 animate-fade-in-delay-2">
//             <legend className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
//               <span className="w-1.5 h-6 rounded-full bg-accent"></span>
//               Informações de Contato
//             </legend>
            
//             <div className="space-y-2">
//               <Label htmlFor="nome" className="text-foreground font-medium">
//                 Nome Completo <span className="text-destructive">*</span>
//               </Label>
//               <Input
//                 id="nome"
//                 placeholder="Digite seu nome completo"
//                 value={formData.nome}
//                 onChange={(e) => handleInputChange("nome", e.target.value)}
//                 required
//               />
//             </div>

//             <div className="grid gap-5 sm:grid-cols-2">
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-foreground font-medium">
//                   E-mail <span className="text-destructive">*</span>
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="seu@email.com"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="celular" className="text-foreground font-medium">
//                   Celular <span className="text-destructive">*</span>
//                 </Label>
//                 <Input
//                   id="celular"
//                   type="tel"
//                   placeholder="(00) 00000-0000"
//                   value={formData.celular}
//                   onChange={(e) => handleInputChange("celular", formatPhone(e.target.value))}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="documento" className="text-foreground font-medium">
//                 CPF ou CNPJ <span className="text-destructive">*</span>
//               </Label>
//               <Input
//                 id="documento"
//                 placeholder="000.000.000-00 / 00.000.000/0001-00"
//                 value={formData.documento}
//                 onChange={(e) => handleInputChange("documento", formatDocument(e.target.value))}
//                 required
//               />
//               <p className="text-sm text-muted-foreground">
//                 Usaremos seus dados apenas para responder ao seu pedido.
//               </p>
//             </div>
//           </fieldset>

//           {/* Message Section */}
//           <fieldset className="space-y-2 animate-fade-in-delay-3">
//             <Label htmlFor="mensagem" className="text-foreground font-medium">
//               Mensagem
//             </Label>
//             <Textarea
//               id="mensagem"
//               placeholder="Descreva o local, horários e particularidades do serviço desejado (opcional)"
//               value={formData.mensagem}
//               onChange={(e) => handleInputChange("mensagem", e.target.value)}
//             />
//           </fieldset>

//           {/* Submit Button */}
//           <div className="pt-2">
//             <Button 
//               type="submit" 
//               variant="hero" 
//               size="lg" 
//               className="w-full sm:w-auto"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Enviando...
//                 </>
//               ) : (
//                 <>
//                   <Send className="w-5 h-5" />
//                   Enviar Solicitação
//                 </>
//               )}
//             </Button>
//           </div>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-sm text-muted-foreground mt-6">
//           Ao enviar, você concorda com nossa política de privacidade.
//         </p>
//       </div>
//     </div>
//   );
// }
