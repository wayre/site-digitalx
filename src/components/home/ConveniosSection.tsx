"use client"; // Marca este arquivo como um Client Component

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const ConveniosSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

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

  // Lista de convênios (exemplos)
  const insurances = [
    {
      name: "Unimed",
      logo: "/convenios/unimed-odonto.png",
    },
    {
      name: "Bradesco Saúde",
      logo: "/convenios/bradesco-saude.webp",
    },
    {
      name: "Amil",
      logo: "/convenios/amil.png",
    },
    {
      name: "SulAmérica",
      logo: "/convenios/sulamerica.png",
    },
    {
      name: "Porto Seguro",
      logo: "/convenios/portoseguro.png",
    },
    {
      name: "Hapvida",
      logo: "/convenios/hapvida.png",
    },
    {
      name: "NotreDame Intermédica",
      logo: "/convenios/notredame-intermedica.png",
    },
    {
      name: "Odontolife",
      logo: "/convenios/odontolife.jpg",
    },
    {
      name: "Mediservice",
      logo: "/convenios/mediservice.jpg",
    },
    {
      name: "OdontoPrev",
      logo: "/convenios/odontoprev.png",
    },
  ];

  return (
    <section
      id="convenios"
      className="section-padding bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        {/* texto superior */}
        <div className="text-center mb-10">
          <h2 className="section-title">Convênios</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com os principais convênios para melhor atender nossos
            pacientes. Consulte-nos para mais informações sobre coberturas
            específicas.
          </p>
        </div>
        {isMobile ? (
          // Mobile carousel
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {insurances.map((insurance, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/3 md:basis-1/4 lg:basis-1/6"
                  >
                    <div className="p-2">
                      <div className="relative transition-all p-4 h-24 flex items-center justify-center select-none">
                        <Image
                          src={insurance.logo}
                          alt={insurance.name}
                          fill
                          className="max-h-16 max-w-full object-contain transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        ) : (
          // Desktop grid
          <div className="w-4/6 mx-auto flex flex-row flex-wrap gap-2 overflow-hidden justify-center">
            {insurances.map((insurance, index) => (
              <div
                key={index}
                className={cn(
                  "w-1/4 bg-[#f9fafb] max-w-[138px] transition-all px-2 flex items-center justify-center duration-700 transform",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Image
                  src={insurance.logo}
                  alt={insurance.name}
                  width={256}
                  height={97}
                  className="w-auto h-full object-contain object-center duration-300 transition-transform scale-90 hover:scale-100"
                />
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-10 flex flex-col items-center justify-center gap-4">
          <Link
            href="/convenios"
            className="bg-[#0e7490] text-white hover:bg-[#199cc0] font-bold tracking-wider uppercase text-[10px] sm:text-[12px] px-6 py-2 rounded-lg shadow-md transition-colors duration-300"
          >
            Veja a lista completa de convênios
          </Link>
          <p className="text-gray-600 text-sm">
            Não encontrou seu convênio?{" "}
            <a
              href="/whatsapp"
              target="_blank"
              className="text-digitalx-500 hover:underline"
            >
              Entre em contato
            </a>{" "}
            para verificarmos a disponibilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConveniosSection;
