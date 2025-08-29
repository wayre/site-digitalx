import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Header from "@/components/HeaderInternas";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";
import HeroInternas from "@/components/HeroInternas";
import ConveniosClient from "./ConveniosClient"; // Componente cliente para interatividade

export const metadata: Metadata = {
  title: "Convênios Odontológicos | DigitalX Radiologia",
  description:
    "Confira a lista de convênios odontológicos aceitos na DigitalX. Realize seus exames de radiologia com a cobertura do seu plano em Campo Grande - MS.",
  keywords: [
    "convênios odontológicos",
    "planos aceitos",
    "DigitalX",
    "radiologia",
    "exames de imagem",
    "cobertura plano",
    "amil dental",
    "bradesco dental",
    "sulamerica odonto",
    "unimed odonto",
  ],
  openGraph: {
    title: "Convênios Aceitos na DigitalX Radiologia Odontológica",
    description:
      "Verifique se o seu plano odontológico é aceito na DigitalX e agende seus exames com tranquilidade. Ampla cobertura em Campo Grande - MS.",
    url: "https://www.digitalxms.com.br/convenios",
    siteName: "DigitalX Radiologia Odontológica",
    images: [
      {
        url: "/digitalx-imagensOdontologicas-wide.webp",
        width: 1200,
        height: 630,
        alt: "Convênios Odontológicos Aceitos na DigitalX",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalX | Convênios Odontológicos",
    description:
      "Sua saúde bucal mais acessível. Consulte a lista de convênios que atendemos e venha para a DigitalX.",
    images: ["https://www.digitalxms.com.br/twitter-convenios.png"], // Replace with a relevant image URL
  },
};

export interface ConvenioTypes {
  id: string;
  name: string;
  logo: string;
  conveniosVinculados: string[];
  orientacoes: string;
}

async function getConvenios(): Promise<ConvenioTypes[]> {
  const filePath = path.join(process.cwd(), "public", "convenios-novo1.json");
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
