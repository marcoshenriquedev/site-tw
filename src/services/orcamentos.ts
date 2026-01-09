import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../integrations/firebase/config";

export type OrcamentoServicos = {
  portaria: boolean;
  limpeza: boolean;
  auxiliar: boolean;
  tecnologia: boolean;
  outros: boolean;
};

export type OrcamentoInput = {
  nome: string;
  email: string;
  telefone: string;
  documento: string;
  servicos: OrcamentoServicos;
  mensagem: string;
};

export async function enviarOrcamento(dados: OrcamentoInput) {
  const ref = await addDoc(collection(db, "orcamentos"), {
    ...dados,
    status: "novo",
    criadoEm: serverTimestamp(),
    origem: "site-form",
  });

  return ref.id;
}
