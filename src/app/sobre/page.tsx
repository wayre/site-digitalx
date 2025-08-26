import SobreClientPage from "./SobreClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a DigitalX | Radiologia Odontológica em Campo Grande MS",
  description:
    "Conheça a história, a missão e os valores da DigitalX. Somos referência em diagnóstico por imagem odontológica, aliando tecnologia e atendimento humanizado.",
  keywords: [
    "sobre a DigitalX",
    "clínica de radiologia",
    "história da DigitalX",
    "missão",
    "valores",
    "radiologia odontológica",
    "Campo Grande MS",
    "diagnóstico por imagem",
    "tomografia cone beam",
    "Morita Veraview X800",
  ],
  openGraph: {
    title: "DigitalX: Referência em Diagnóstico por Imagem Odontológica",
    description:
      "Nascemos para ser o parceiro de confiança dos dentistas. Conheça nossa trajetória e nosso compromisso com a qualidade e a tecnologia em Campo Grande - MS.",
    url: "https://www.digitalxms.com.br/sobre",
    siteName: "DigitalX Radiologia Odontológica",
    images: [
      {
        url: "https://www.digitalxms.com.br/og-sobre.png", // Replace with a relevant image URL
        width: 1200,
        height: 630,
        alt: "Clínica DigitalX Radiologia Odontológica",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalX | Sobre Nós",
    description:
      "Especialistas em exames radiológicos de alta precisão. Saiba mais sobre nossa história e compromisso com a odontologia.",
    images: ["https://www.digitalxms.com.br/twitter-sobre.png"], // Replace with a relevant image URL
  },
};

export default function SobrePage() {
  return <SobreClientPage />;
}