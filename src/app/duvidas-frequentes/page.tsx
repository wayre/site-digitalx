import DuvidasFrequentesClientPage from "./DuvidasFrequentesClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes (FAQ) | DigitalX Radiologia Odontológica",
  description:
    "Encontre respostas para as perguntas mais comuns sobre nossos exames, agendamentos, preparo e resultados. FAQ da DigitalX para pacientes e dentistas.",
  keywords: [
    "dúvidas frequentes",
    "FAQ",
    "DigitalX",
    "radiologia odontológica",
    "exames",
    "agendamento",
    "preparo para exames",
    "resultados de exames",
    "tomografia",
    "radiografia panorâmica",
    "convênios",
  ],
  openGraph: {
    title: "FAQ - Dúvidas Frequentes | DigitalX Radiologia",
    description:
      "Tudo o que você precisa saber sobre os exames da DigitalX em um só lugar. Consulte nosso FAQ e tire suas dúvidas sobre agendamento, preparo e mais.",
    url: "https://www.digitalxms.com.br/duvidas-frequentes",
    siteName: "DigitalX Radiologia Odontológica",
    images: [
      {
        url: "/digitalx-imagensOdontologicas-wide.webp",
        width: 1200,
        height: 630,
        alt: "FAQ - Dúvidas Frequentes da DigitalX",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalX | FAQ de Radiologia Odontológica",
    description:
      "Tem perguntas sobre exames de imagem odontológica? A DigitalX responde! Acesse nosso FAQ completo.",
    images: ["/digitalx-imagensOdontologicas-wide.webp"],
  },
};

export default function DuvidasFrequentesPage() {
  return <DuvidasFrequentesClientPage />;
}
