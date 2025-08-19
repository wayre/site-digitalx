import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Header from "@/components/HeaderInternas";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";
import HeroInternas from "@/components/HeroInternas";
import ConveniosClient from "./ConveniosClient"; // Componente cliente para interatividade

export const metadata: Metadata = {
  title: "Convênios | Digital X",
  description:
    "Consulte os convênios aceitos pela Digital X e facilite seu acesso a saúde bucal de qualidade.",
};

export interface ConvenioTypes {
  id: string;
  name: string;
  logo: string;
  documentos: string[];
  examesTodo: string[];
}

async function getConvenios(): Promise<ConvenioTypes[]> {
  const filePath = path.join(process.cwd(), "public", "convenios.json");
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to read or parse convenios.json:", error);
    return []; // Retorna um array vazio em caso de erro
  }
}

export default async function ConveniosPage() {
  const convenios = await getConvenios();

  return (
    <>
      <Header />
      <HeroInternas
        title="Convênios Aceitos"
        subtitle="Facilitando seu acesso à saúde bucal de qualidade"
      />

      <main className="relative max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_28%] gap-4 p-3 w-full mx-auto mt-4">
          {/* coluna 1 */}
          <ConveniosClient convenios={convenios} />

          {/* aside - coluna 2 */}
          <Aside />
        </div>
      </main>
      <Footer />
    </>
  );
}
