// src/components/about-digitalx.tsx

import Image from "next/image";
import { CheckCircle2, BookHeart, ClipboardList, Layers3 } from "lucide-react";
import { cn } from "@/lib/utils"; // Assumindo que você tem um utilitário para `clsx` e `tailwind-merge`. Se não, veja a nota abaixo.

// Lista de diferenciais para reutilização
const features = [
  "Oferecemos exames digitais com imagens de alta definição e baixa exposição à radiação.",
  "Realizamos radiografias intra e extraorais, além de tomografia Cone Beam com o equipamento I-CAT Next Generation.",
  "Atendemos diversas especialidades com agilidade, biossegurança e laudos confiáveis.",
];
const cardData = [
  {
    Icon: BookHeart,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    title: "CONVÊNIOS",
    description:
      "Informações sobre convênios atendidos e condições para exames com cobertura.",
  },
  {
    Icon: ClipboardList,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    title: "LINKS RÁPIDOS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.",
  },
  {
    Icon: Layers3,
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
    title: "SERVIÇOS",
    description:
      "Serviços de imagem em altíssima qualidade: Tomografia, Radiografias, Scan 3D e Diagnóstico de Dor.",
  },
];

export const AboutDigitalX = () => {
  return (
    <section className="relative w-full bg-[#F8F9FA] py-10 sm:py-28">
      {/* Efeito de bolhas animadas no fundo */}

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 md:grid-cols-[33%_1fr] md:gap-2">
          {/* Layout para Dispositivos Grandes (lg e acima) */}
          <div className="hidden md:block">
            <div className="flex transform-gpu fade-in justify-center transition-transform duration-700 ease-out hover:scale-105">
              {/* O ideal é que o logo seja um SVG para melhor qualidade */}
              <Image
                src="/logo-about-digitalx.webp" // <-- Coloque o caminho para o seu logo aqui
                alt="Logo Digital X Imagens Odontológicas"
                width={400}
                height={160}
                className="h-auto w-5/6 max-w-[300px]"
              />
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="flex flex-col animate-fade-in-left">
            <div className="grid grid-cols-[40%_1fr] md:grid-cols-1 items-center gap-1">
              <Image
                src="/logo-about-digitalx.webp" // <-- Coloque o caminho para o seu logo aqui
                alt="Logo Digital X Imagens Odontológicas"
                width={200}
                height={80}
                className="block md:hidden h-auto w-full scale-90 object-contain"
              />
              <div>
                <div className="flex flex-row w-full">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">
                      Sobre Nós
                    </div>

                    <h1 className="mt-2 text-base tracking-wide text-gray-800 sm:text-2xl">
                      <span className="text-gray-600 font-poppins scale-y-90 block">
                        Digital X:
                      </span>
                      <span className="mt-1 text-base font-light block text-gray-500 tracking-tight leading-4">
                        Tecnologia e precisão <br /> para diagnósticos
                        odontológicos.
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-lg leading-5 text-gray-600">
              Somos um centro moderno de radiologia odontológica.
            </p>

            <ul className="w-[90%] m-auto mt-6 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-x-3">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 flex-none text-teal-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[0.8rem] sm:text-lg font-light text-gray-800 md:text-xl text-center md:text-left">
              Digital X. Imagem clara, diagnóstico seguro
            </p>
          </div>
        </div>
      </div>

      {/* Usamos Grid para um layout responsivo que se ajusta automaticamente. */}
      <div className="container pt-8">
        <div className="grid grid-cols-3 gap-1 sm:gap-8 w-full p-2 sm:p-0 sm:w-5/6 md:w-4/6 m-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-1 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 gap-1"
            >
              {/* O container do ícone com cores e formato dinâmicos. */}
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full ${card.bgColor} scale-75 sm:scale-100`}
              >
                <card.Icon className={`h-10 w-10 ${card.iconColor}`} />
              </div>

              {/* Título e Descrição */}
              <h3 className="mb-2 text-[0.7rem] md:text-[0.8rem] whitespace-nowrap font-semibold tracking-wider uppercase text-gray-800">
                {card.title}
              </h3>
              <p className="hidden sm:blocktext-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
