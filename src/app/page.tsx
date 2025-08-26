import Header from "@/components/Header1";
import HeroVideoSection from "@/components/home/HeroVideoSection";
import ExamsSection from "@/components/home/ExamsSection";
import ExamCarousel from "@/components/home/ExamCarousel";
import ConveniosSection from "@/components/home/ConveniosSection";
import { ExamesRadiologicosSobMedida } from "@/components/home/ExamesRadiologicosSobMedida";
import { AboutDigitalX } from "@/components/home/about-digitalx";
import PartnersBanner from "@/components/home/PartnerBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Comments from "@/components/home/Comments";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DigitalX Radiologia Odontológica | Campo Grande - MS",
  description:
    "Clínica de radiologia odontológica em Campo Grande, MS. Oferecemos exames de imagem de alta precisão: Tomografia Cone Beam, Radiografia Panorâmica e Documentação Ortodôntica.",
  keywords: [
    "radiologia odontológica",
    "tomografia cone beam",
    "radiografia panorâmica",
    "exames odontológicos",
    "diagnóstico por imagem",
    "campo grande ms",
    "digitalx",
    "clínica de radiologia",
    "documentação ortodôntica",
    "escaneamento intraoral",
  ],
  alternates: {
    canonical: "https://www.digitalxms.com.br/",
  },
  openGraph: {
    title: "DigitalX Radiologia Odontológica | Diagnóstico de Precisão",
    description:
      "Tecnologia e precisão em exames de imagem odontológica em Campo Grande - MS. Agende sua tomografia, panorâmica e outros exames.",
    url: "https://www.digitalxms.com.br/",
    siteName: "DigitalX Radiologia Odontológica",
    images: [
      {
        url: "/digitalx-imagensOdontologicas-wide.webp",
        width: 1200,
        height: 630,
        alt: "DigitalX Radiologia Odontológica em Campo Grande, MS",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalX Radiologia Odontológica - Campo Grande, MS",
    description:
      "Exames de imagem com alta tecnologia para dentistas e pacientes. Conheça a DigitalX.",
    images: ["/digitalx-imagensOdontologicas-wide.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroVideoSection />
        <AboutDigitalX />
        <PartnersBanner />
        <WhyChooseUs />
        {/* <ExamsSection /> */}
        {/* <ExamesRadiologicosSobMedida /> */}
        <ExamCarousel />
        <ConveniosSection />
        <Comments />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
