// "use client";
// src/components/about-digitalx.tsx
import { Building, ScanLine, Clock } from "lucide-react";

import Image from "next/image";
import {
  CheckCircle2,
  BookHeart,
  ClipboardList,
  Layers3,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface CardItem {
  id: number;
  Icon: LucideIcon; // O tipo do componente de ícone de Lucide
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
}
interface FeatureItem {
  id: number;
  text: string;
}

// Lista de diferenciais para reutilização
const featuresData: FeatureItem[] = [
  {
    id: 1,
    text: "Centro moderno de radiologia odontológica, com foco em precisão e conforto.",
  },
  {
    id: 2,
    text: "Exames digitais com alta definição e baixa exposição à radiação.",
  },
  {
    id: 3,
    text: "Radiografias intra e extraorais, e tomografia Cone Beam (Morita Veraview X800).",
  },
];
const cardData: CardItem[] = [
  {
    id: 1,
    Icon: BookHeart,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    title: "CONVÊNIOS",
    description:
      "Trabalhamos com diversos convênios odontológicos para facilitar o seu atendimento.",
  },
  {
    id: 2,
    Icon: ClipboardList,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    title: "RAPIDEZ E PRATICIDADE",
    description:
      "Mais agilidade: seus exames de imagem com entrega rápida e acesso online.",
  },
  {
    id: 3,
    Icon: Layers3,
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
    title: "SERVIÇOS",
    description:
      "Exames por imagem com alta tecnologia: Tomografia, RX, Scan 3D e mais.",
  },
];

export const AboutDigitalX = () => {
  return (
    <section
      className="relative w-full min-h-[680px] md:h-screen flex flex-col items-center justify-center bg-[#F8F9FA] py-14 sm:py-32 gap-10"
      id="sobre"
    >
      <div className="container mx-auto p-6 max-w-[900px]">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 md:grid-cols-[43%_1fr] md:gap-2">
          <div className="hidden md:block">
            <div className="flex transform-gpu fade-in justify-center transition-transform duration-700 ease-out hover:scale-105">
              <Image
                src="/logo-about-digitalx.webp"
                alt="Logo Digital X Imagens Odontológicas"
                width={400}
                height={160}
                className="h-auto w-5/6 max-w-[300px]"
              />
            </div>
          </div>

          <div className="flex flex-col animate-fade-in-left gap-y-4 text-gray-700">
            <div className="grid grid-cols-[40%_1fr] md:grid-cols-1 items-center gap-1">
              <Image
                src="/logo-about-digitalx.webp"
                alt="Logo Digital X Imagens Odontológicas"
                width={200}
                height={80}
                className="block md:hidden h-auto w-full scale-90 object-contain"
              />
              <div>
                <div className="flex flex-row w-full">
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-wider text-teal-600">
                      Sobre Nós
                    </div>

                    <h1 className="mt-2 text-base tracking-wide sm:text-2xl">
                      <span className="mt-3 text-2lg leading-5 font-light">
                        Somos um centro moderno de{" "}
                        <br className="hidden sm:inline-block" />
                        radiologia odontológica.
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center md:text-left">
              Na Digital X, oferecemos exames radiológicos odontológicos com
              alta definição, baixa radiação e laudos confiáveis. Com tecnologia
              avançada e agilidade no atendimento, somos parceiros do
              cirurgião-dentista no diagnóstico seguro e preciso.
            </p>
          </div>
        </div>
      </div>

      {/* Usamos Grid para um layout responsivo que se ajusta automaticamente. */}
      <div className="flex flex-row justify-center gap-4 sm:gap-x-3 w-full p-2 lg:gap-x-8 max-w-[1000px] items-start px-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="box-itens-sobre-card flex flex-col items-center text-center p-1 sm:p-3 lg:p-8 bg-white rounded-2xl shadow-xl hover:shadow-lg transition-shadow duration-300 gap-1 min-w-[100px] min-h-32 px-4 md:max-w-[212px] lg:max-w-none"
          >
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full ${card.bgColor} scale-75 sm:scale-100`}
            >
              <card.Icon className={`h-10 w-10 ${card.iconColor}`} />
            </div>

            <h3 className="mb-2 text-[0.7rem] md:text-[0.8rem] font-semibold tracking-wider uppercase text-gray-800 overflow-hidden leading-3">
              {card.title}
            </h3>
            <p className="hidden sm:block text-sm text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[0.9rem] sm:text-lg font-light text-gray-800 md:text-xl text-center md:text-left uppercase pb-12">
        Digital X. Imagem clara, diagnóstico seguro
      </p>
    </section>
  );
};
