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

  return (
    <section
      id="convenios"
      className="section-padding bg-gray-100"
      ref={sectionRef}
    >
      <div className="container mx-auto pt-6">
        {/* texto superior */}
        <div className="text-center mb-10">
          {/* texto apresentacao */}
          <div className="flex flex-row gap-2 max-w-[800px] mx-auto px-4">
            <Image
              src="/convenios-ilustracao.webp" // A variável importada do asset
              alt="Ilustração Pessoa feliz - convênios"
              width={466} // Largura original da imagem
              height={800} // Altura original da imagem
              className="w-[40%] h-auto object-contain hidden md:block max-h-[350px]"
            />
            <div className="w-11/12 flex flex-col justify-center text-center sm:text-left mx-auto max-w-[400px] sm:max-w-[70%]">
              <h2 className="hidden md:block section-title mb-4 text-center sm:text-left">
                Convênios
              </h2>
              <h3 className="text-xl sm:text-2xl font-light text-[#333333] flex flex-row items-end gap-2 mb-2">
                <Image
                  src="/convenios-ilustracao.webp" // A variável importada do asset
                  alt="Ilustração Pessoa feliz - convênios"
                  width={466} // Largura original da imagem
                  height={800} // Altura original da imagem
                  className="md:hidden w-[25%] h-auto object-contain"
                />
                Facilitamos seu acesso a exames com qualidade, agilidade e
                cobertura pelos principais planos de saúde
              </h3>
              <p className="text-sm sm:text-base font-normal text-[#555555] mt-2">
                Na Digital X, oferecemos exames de radiologia odontológica com
                tecnologia de ponta e atendimento humanizado. Para tornar seu
                diagnóstico ainda mais acessível, aceitamos diversos convênios e
                planos de saúde.
              </p>
              <p className="text-sm sm:text-base font-normal text-[#555555] mt-2">
                Nosso objetivo é simplificar todo o processo — desde o
                agendamento até a entrega dos resultados — garantindo agilidade,
                conforto e excelência no atendimento. Confira abaixo a lista de
                convênios aceitos e veja como é fácil realizar seu exame
                conosco. Caso o seu plano não esteja listado ou tenha dúvidas,
                entre em contato com a nossa equipe. Estamos prontos para
                ajudar.
              </p>
            </div>
          </div>
        </div>

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
