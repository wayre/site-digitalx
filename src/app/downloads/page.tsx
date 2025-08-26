import DownloadsClientPage from "./DownloadsClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads | DigitalX Radiologia Odontológica",
  description:
    "Acesse nossa área de downloads para baixar softwares, formulários e outros materiais úteis para dentistas e parceiros da DigitalX.",
  keywords: [
    "downloads",
    "softwares odontológicos",
    "formulários",
    "DigitalX",
    "radiologia",
    "imagiologia",
    "dental slice",
    "tomografia",
    "one volume viewer",
    "blue sky bio",
    "radiant viewer",
  ],
  openGraph: {
    title: "Downloads de Softwares e Materiais - DigitalX",
    description:
      "Baixe visualizadores de exames (DICOM, STL), tutoriais e formulários. Tudo o que você, dentista, precisa para trabalhar com as imagens da DigitalX.",
    url: "https://www.digitalxms.com.br/downloads",
    siteName: "DigitalX Radiologia Odontológica",
    images: [
      {
        url: "https://www.digitalxms.com.br/og-downloads.png", // Replace with a relevant image URL
        width: 1200,
        height: 630,
        alt: "Downloads DigitalX Radiologia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalX | Downloads para Dentistas",
    description:
      "Acesse e baixe softwares visualizadores e materiais de apoio para otimizar sua rotina com os exames da DigitalX.",
    images: ["https://www.digitalxms.com.br/twitter-downloads.png"], // Replace with a relevant image URL
  },
};

export default function DownloadsPage() {
  return <DownloadsClientPage />;
}