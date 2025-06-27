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
        "Traçados computadorizados demarcados após a identificação...",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "facial",
      title: "Análises Faciais",
      description:
        "Análise computadorizada realizada sobre as fotografias da face...",
      imageUrl:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "lateral-mandibula",
      title: "Lateral oblíqua da mandíbula",
      description: "Utilizada para exame do ramo, ângulo e corpo mandibular...",
      imageUrl:
        "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pa-mandibula",
      title: "P.A. de mandíbula com boca aberta",
      description: "Modificação da técnica radiográfica Frontal com visão...",
      imageUrl:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "panoramica",
      title: "Radiografia Panorâmica",
      description:
        "Técnica radiográfica que produz uma única imagem das estruturas...",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "planigrafia",
      title: "Planigrafia de ATM",
      description:
        "Técnica radiográfica que produz imagens nítidas de estruturas...",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tomografia",
      title: "Tomografia Digital Cone-Beam",
      description:
        "Exame de alta precisão para aquisição das imagens dos ossos...",
      imageUrl:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "periapical",
      title: "Radiografia Periapical",
      description:
        "Imagem bi-dimensional com uma visão da anatomia dentária...",
      imageUrl:
        "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "axial",
      title: "Radiografia Axial (HIRTZ)",
      description: "Indicada para verificação prévia da inclinação do longo...",
      imageUrl:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "telerradiografia",
      title: "Telerradiografia lateral e frontal",
      description:
        "É uma radiografia do crânio em que o paciente é posicionado...",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "seios-face",
      title: "Radiografias P.A. E WATERS",
      description:
        "Radiografias realizadas para visualização da transparência...",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "mao-punho",
      title: "Radiografia da Mão e Punho",
      description: "Análise radiológica da estimativa da idade óssea...",
      imageUrl:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="py-8 bg-white" ref={sectionRef}>
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
                  className="pl-4 md:basis-1/2 lg:basis-1/4"
                >
                  <div className="p-1">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-full h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                      <CardHeader className="p-4 pb-1">
                        <CardTitle className="text-lg font-bold line-clamp-2  leading-5">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="text-gray-600 line-clamp-2">
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
