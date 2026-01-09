import { useState } from "react";
import { enviarOrcamento } from "@/services/orcamentos";
import type { OrcamentoInput } from "@/services/orcamentos";

export default function OrcamentoForm() {
  const [form, setForm] = useState<Omit<OrcamentoInput, "servicos"> & { servicos: OrcamentoInput["servicos"] }>({
    nome: "",
    email: "",
    telefone: "",
    documento: "",
    mensagem: "",
    servicos: { portaria: false, limpeza: false, auxiliar: false, tecnologia: false, outros: false },
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const id = await enviarOrcamento(form);
      alert(`Orçamento enviado! ID: ${id}`);
    } catch (err: any) {
      console.error(err?.code, err?.message, err);
      alert(`Erro: ${err?.message || "Veja o Console (F12)."}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* inputs... */}
      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
