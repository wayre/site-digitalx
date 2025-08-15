"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function Sobre() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImage();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <section className="pt-10 px-2 md:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">A Digital X</h2>
        <p className="text-base sm:text-lg">
          Somos especialistas em exames radiológicos odontológicos de alta
          precisão, pensados para facilitar o diagnóstico dos
          cirurgiões-dentistas. Oferecemos{" "}
          <b>tomografia Cone Beam (Morita Veraview X800)</b>, além de{" "}
          <b>radiografias intra e extraorais</b>, com imagens nítidas, laudos
          rápidos e mínima exposição à radiação. Tecnologia de ponta e
          atendimento ágil para apoiar a confiança dos seus diagnósticos.
        </p>
      </section>

      {/* About Us Section */}
      <section className="pt-16 container mx-auto px-0 mb-16">
        {/* nossa historia */}
        <Image
          src="/transformando-imagens-emconfianca.webp"
          alt="Profissional da saúde sorrindo em um consultório"
          // layout="fill"
          // objectFit="cover"
          // A prioridade na otimização da imagem pode ser útil para o LCP
          width={694}
          height={0}
          className="h-auto w-full object-fill sm:min-h-full scale-105"
          priority
        />
        <div className="px-4 sm:px-12 text-base sm:text-lg">
          <h2 className="text-2xl font-light mb-6 max-w-[450px] mt-8">
            Parceira do profissional odontológico em diagnósticos de alta
            qualidade
          </h2>
          <p className="mb-4">
            <b>A Digital X</b> nasceu com um objetivo claro:{" "}
            <b>
              ser o parceiro diagnóstico de confiança dos cirurgiões-dentistas
            </b>
            . Desde o início, investimos em tecnologia de ponta e processos
            ágeis, entendendo que um exame bem feito impacta diretamente na
            segurança e no sucesso do tratamento odontológico.
          </p>
          <p className="mb-4">
            Com sede em <b>Campo Grande - MS</b>, nos tornamos referência
            regional em <b>diagnóstico por imagem odontológica</b>, atendendo
            profissionais de diversas especialidades com qualidade técnica e
            atenção ao detalhe.
          </p>
          <p className="">
            Mais do que imagens, entregamos suporte para decisões clínicas mais
            seguras — contribuindo para a saúde bucal e o bem-estar dos seus
            pacientes.
          </p>
        </div>
      </section>

      {/* galeria imagens */}
      <section className="galeria-digitalx grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#D9D9D9] p-3 rounded-md mb-10">
        {[3, 1, 4, 2].map((key) => {
          const imageSrc = `/digitalx/digitalx-${key}.webp`;
          return (
            <Image
              key={key}
              src={imageSrc}
              alt="Imagem da galeria da clínica Digital X"
              width={694}
              height={463}
              className="h-auto w-full object-cover rounded-sm hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
              priority
              onClick={() => openImage(imageSrc)}
            />
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="w-4/5 m-auto py-6 bg-[#1E5B94] text-white mb-12 rounded-md text-sm">
        <div className="container mx-auto text-center flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">Conheça Nossa Clínica</h2>

          <p className="max-w-2xl mx-auto">
            Venha conhecer nossa estrutura e tecnologia de ponta para
            diagnóstico por imagem odontológica.
          </p>

          <div>
            <Button
              asChild
              size="sm"
              className="bg-white text-[#1E5B94] hover:bg-white/90"
            >
              <Link href="/contato">Agendar Visita</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-5 right-5 text-white text-5xl hover:text-gray-300 transition-colors z-50"
            aria-label="Fechar imagem"
          >
            &times;
          </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
          >
            <Image
              src={selectedImage}
              alt="Imagem da galeria em tela cheia"
              width={1200}
              height={800}
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
