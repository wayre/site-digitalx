import ContatoClientPage from "./ContatoClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato e Central de Ajuda | DigitalX Radiologia Odontológica",
  description:
    "Entre em contato com a DigitalX para agendar exames, tirar dúvidas ou obter informações. Nossa equipe está pronta para atender dentistas e pacientes.",
  keywords: [
    "contato digitalx",
    "telefone digitalx",
    "endereço digitalx",
    "radiologia odontológica",
    "exames de imagem",
    "Campo Grande MS",
    "central de ajuda",
  ],
  openGraph: {
    title: "Contato e Central de Ajuda | DigitalX Radiologia Odontológica",
    description:
      "Facilite seu dia a dia com nossos canais de atendimento. A DigitalX oferece suporte especializado para dentistas e pacientes em Campo Grande - MS.",
    url: "https://www.digitalxms.com.br/contato",
    siteName: "DigitalX Radiologia Odontológica",
    images: [
      {
        url: "/digitalx-imagensOdontologicas-wide.webp",
        width: 1200,
        height: 630,
        alt: "DigitalX Radiologia Odontológica - Contato",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato e Central de Ajuda | DigitalX Radiologia Odontológica",
    description:
      "Precisa de informações ou suporte? Entre em contato com a DigitalX, sua parceira em radiologia odontológica digital.",
    images: ["/digitalx-imagensOdontologicas-wide.webp"],
  },
};

export default function ContatoPage() {
  return <ContatoClientPage />;
}
