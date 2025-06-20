// components/hero-links.tsx
import {
  CircleCheckBigIcon,
  CircleHelpIcon,
  Clock,
  ClockIcon,
  HandshakeIcon,
  MousePointerClickIcon,
  ShapesIcon,
} from "lucide-react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Placeholder Icon Component.
// Replace this with your actual icon components or SVGs.
// For example, you could use an icon library like 'lucide-react' or 'react-icons'.
const PlaceholderIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      // Using a generic icon path, replace with specific icons for each item if needed
      d="M9.375 3.005A2.25 2.25 0 007.125 5.25v13.5A2.25 2.25 0 009.375 21h5.25A2.25 2.25 0 0016.875 18.75V5.25A2.25 2.25 0 0014.625 3.005h-5.25zM12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
    ></path>
  </svg>
);

// Interface for the properties of each link item
interface HeroLinkItemProps {
  id: string | number;
  icon: React.ReactNode;
  title: string;
  description: string;
  circleColor: string;
  iconColor?: string;
}

// New data provided by the user
const heroLinksData: HeroLinkItemProps[] = [
  {
    id: "agendamento",
    icon: <ClockIcon />, // Replace with a specific icon for "Agendamento"
    title: "AGENDAMENTO",
    description:
      "Canais de contato, endereços, agendamento online e acesso aos resultados de exames.",
    circleColor: "bg-[#E3F2FD]",
    iconColor: "text-[#4979D1]",
  },
  {
    id: "resultados-online",
    icon: <CircleCheckBigIcon />, // Replace with a specific icon for "Resultados Online"
    title: "RESULTADOS ONLINE",
    description:
      "Acesso rápido aos resultados de exames, tanto para dentistas quanto para pacientes.",
    circleColor: "bg-[#E3FDE4]",
    iconColor: "text-[#48742C]",
  },
  {
    id: "central-de-ajuda",
    icon: <CircleHelpIcon />, // Replace with a specific icon for "Central de Ajuda"
    title: "CENTRAL DE AJUDA",
    description:
      "Respostas para dúvidas frequentes: DICOM, STL, programas e downloads.",
    circleColor: "bg-[#EDE3FD]",
    iconColor: "text-[#804D7C]",
  },
  {
    id: "servicos",
    icon: <ShapesIcon />, // Replace with a specific icon for "Serviços"
    title: "SERVIÇOS",
    description:
      "Serviços de imagem em altíssima qualidade: Tomografia, Radiografias, Scan 3D e Diagnóstico de Dor.",
    circleColor: "bg-[#FECACA]",
    iconColor: "text-[#DC2626]",
  },
  {
    id: "convenios",
    icon: <HandshakeIcon />, // Replace with a specific icon for "Convênios"
    title: "CONVÊNIOS",
    description:
      "Informações sobre convênios atendidos e condições para exames com cobertura.",
    circleColor: "bg-[#FEF08A]",
    iconColor: "text-[#CA8A04]",
  },
  {
    id: "links-rapidos",
    icon: <MousePointerClickIcon />, // Replace with a specific icon for "Links Rápidos"
    title: "Links Rápidos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua.",
    circleColor: "bg-[#C7D2FE]",
    iconColor: "text-[#4F46E5]",
  },
];

const HeroLinks: React.FC = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // Main container for the section, with padding
    // -mt-28 xl:-mt-44
    <section className="py-12 md:py-16 bg-gray-50 z-50" ref={sectionRef}>
      {" "}
      <div className="container mx-auto px-4">
        <div className="hero-links w-full max-w-[690px] xl:max-w-[860px]  sm:w-5/6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 m-auto">
          {heroLinksData.map((item, index) => (
            // Each link item container
            <div
              key={item.id}
              className={`bg-white p-5 sm:p-6 rounded-3xl shadow-lg flex flex-col items-center text-center aspect-square justify-center transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105 z-10 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              {/* Icon: Colored circle for the icon */}
              <div
                className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 ${item.circleColor}`}
              >
                {/* Icon container with specific size and color */}
                <div
                  className={`flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 ${
                    item.iconColor || "text-white"
                  }`}
                >
                  {item.icon}
                </div>
              </div>
              {/* Title: bold, specific text size and color, margin bottom */}
              <h3 className="text-[11px] sm:text-[0.8rem] font-bold text-gray-800 mb-1 sm:mb-2">
                {item.title}
              </h3>
              {/* Description: smaller text size, specific color */}
              <p className="text-[10px] sm:text-[0.775rem] md:text-[12px] md:tracking-tighter text-gray-600 leading-3 sm:leading-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroLinks;
