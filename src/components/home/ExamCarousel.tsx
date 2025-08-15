"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface ExamCarouselItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ExamCarousel = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const examItems: ExamCarouselItem[] = [
    {
      id: "cefalometrica",
      title: "Análises Cefalométricas",
      description:
        "Traçados computadorizados obtidos após identificação e marcação de pontos anatômicos na radiografia.",
      imageUrl: "/exames/AnalisesCefalometricas1.webp",
    },
    {
      id: "panoramica",
      title: "Radiografia Panorâmica",
      description:
        "Visão completa de toda a arcada dentária, maxilares, articulações e estruturas adjacentes em uma única imagem.",
      imageUrl: "/exames/RadiografiaPanoramica.webp",
    },
    {
      id: "planigrafia",
      title: "Planigrafia de ATM",
      description:
        "Técnica radiográfica que gera imagens detalhadas das articulações temporomandibulares para avaliação clínica.",
      imageUrl: "/exames/PlanigrafiadeATM.webp",
    },
    {
      id: "tomografia",
      title: "Tomografia Digital Cone-Beam",
      description:
        "Exame preciso que capta imagens tridimensionais dos ossos da face para diagnóstico e planejamento odontológico.",
      imageUrl:
        "/exames/TomografiaComputadorizadaCone-BeamdosMaxilaresTraumaPatologias.webp",
    },
    {
      id: "periapical",
      title: "Radiografia Periapical",
      description:
        "Exames detalhados para visualização de dentes individuais e estruturas adjacentes, incluindo raízes e osso alveolar.",
      imageUrl: "/exames/RadiografiaPeriapicalConvecionaleDigital.webp",
    },
    {
      id: "telerradiografia",
      title: "Telerradiografia lateral e frontal",
      description:
        "Radiografia do crânio feita com o paciente posicionado lateral ou frontalmente para análise ortodôntica.",
      imageUrl: "/exames/Telerradiografialateralefrontal.webp",
    },
  ];

  return (
    <div className="py-14 sm:py-24 bg-gray-200" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">
            Técnicas Radiográficas Disponíveis
          </h3>
          <p className="text-gray-600 mt-2">
            Conheça as diversas técnicas radiográficas que oferecemos com a mais
            alta qualidade
          </p>
        </div>

        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {examItems.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-1/2 md:basis-1/3  lg:basis-1/4 gap-0"
                >
                  <div className="">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-full h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                      <CardHeader className="p-4 pb-1">
                        <CardTitle className="text-[13px] sm:text-lg font-bold line-clamp-2  leading-5">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 md:justify-end md:mt-0">
              <CarouselPrevious className="relative -left-0 mr-2" />
              <CarouselNext className="relative -right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ExamCarousel;
