import ExamesClientPage from "./ExamesClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exames de Radiologia Odontológica | DigitalX",
  description:
    "Conheça os exames de imagem oferecidos pela DigitalX: Tomografia Cone Beam, Radiografia Panorâmica, Telerradiografia, exames intraorais e mais.",
  keywords: [
    "exames odontológicos",
    "radiologia digital",
    "tomografia cone beam",
    "radiografia panorâmica",
    "telerradiografia",
    "documentação ortodôntica",
    "escaneamento intraoral",
    "DigitalX",
    "diagnóstico por imagem",
    "Campo Grande MS",
  ],
  openGraph: {
    title: "Exames de Imagem Odontológica de Alta Precisão | DigitalX",
    description:
      "Tecnologia de ponta para diagnósticos precisos. Oferecemos Tomografia, Panorâmica, Documentação Ortodôntica e Escaneamento Intraoral.",
    url: "https://www.digitalxms.com.br/exames",
    siteName: "DigitalX Radiologia Odontológica",
    images: [
      {
        url: "https://www.digitalxms.com.br/og-exames.png", // Replace with a relevant image URL
        width: 1200,
        height: 630,
        alt: "Exames de Radiologia Odontológica na DigitalX",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalX | Exames Odontológicos por Imagem",
    description:
      "Diagnósticos precisos com tecnologia de ponta. Conheça nossos exames e agende o seu.",
    images: ["https://www.digitalxms.com.br/twitter-exames.png"], // Replace with a relevant image URL
  },
};

export default function ExamesPage() {
  return <ExamesClientPage />;
}