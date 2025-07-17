// "use client";
// src/components/about-digitalx.tsx

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
    text: "Oferecemos exames digitais com imagens de alta definição e baixa exposição à radiação.",
  },
  {
    id: 2,
    text: "Realizamos radiografias intra e extraorais, além de tomografia Cone Beam com o equipamento I-CAT Next Generation.",
  },
  {
    id: 3,
    text: "Atendemos diversas especialidades com agilidade, biossegurança e laudos confiáveis.",
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
    <section className="relative w-full bg-[#F8F9FA] py-14 sm:py-32" id="sobre">
      <div className="container mx-auto px-6">
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

          <div className="flex flex-col animate-fade-in-left">
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

                    <h1 className="mt-2 text-base tracking-wide text-gray-800 sm:text-2xl">
                      <span className="text-gray-600 font-poppins block">
                        Digital X
                      </span>
                      {/* <span className="mt-1 text-base font-light block text-gray-500 tracking-tight leading-4">
                        Tecnologia e precisão <br /> para diagnósticos
                        odontológicos.
                      </span> */}
                      <span className="mt-3 text-lg leading-5 text-gray-600">
                        Somos um centro moderno de radiologia odontológica.
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <ul className="w-[90%] mt-6 space-y-4 ml-4 max-w-[650px]">
              {featuresData.map((feature) => (
                <li key={feature.id} className="flex items-start gap-x-3">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 flex-none text-teal-500"
                    aria-hidden="true"
                  />
                  <span className="text-base text-gray-600">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[0.9rem] sm:text-lg font-light text-gray-800 md:text-xl text-center md:text-left">
              Digital X. Imagem clara, diagnóstico seguro
            </p>
          </div>
        </div>
      </div>

      {/* Usamos Grid para um layout responsivo que se ajusta automaticamente. */}
      <div className="box-itens-sobre container pt-8 m-auto">
        <div className="grid grid-cols-3 gap-1 sm:gap-3 w-full p-2 lg:gap-8 m-auto max-w-[1000px]">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="box-itens-sobre-card flex flex-col items-center text-center p-1 sm:p-3 lg:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 gap-1"
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full ${card.bgColor} scale-75 sm:scale-100`}
              >
                <card.Icon className={`h-10 w-10 ${card.iconColor}`} />
              </div>

              <h3 className="mb-2 text-[0.7rem] md:text-[0.8rem] whitespace-nowrap font-semibold tracking-wider uppercase text-gray-800">
                {card.title}
              </h3>
              <p className="hidden sm:block text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
