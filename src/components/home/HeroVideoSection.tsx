"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import HeroButtonColors from "./HeroButtonColors";
import Image from "next/image";
import { is } from "date-fns/locale";

const slides = [
  "/hero-img1.webp",
  "/hero-img2.webp",
  "/hero-img3.webp",
];

const HeroVideoSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkIsMobile(); // Verifica no carregamento inicial
    window.addEventListener("resize", checkIsMobile); // Adiciona listener para redimensionamento

    return () => window.removeEventListener("resize", checkIsMobile); // Limpa o listener
  }, []); // O array vazio garante que o efeito rode apenas uma vez (montagem/desmontagem)

  const handleCTAClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mt-[130px] md:mt-[167px] flex flex-col relative pb-12">
      <div className="py-2 bg-[#E6F0F4] w-full relative h-[calc(80vh-55px)] min-h-[415px]">
        <div className="absolute left-1/2 -translate-x-1/2 bg-[#27A0D0] rounded-md w-full max-w-[1480px] m-auto h-[calc(80vh-75px)] min-h-[390px]"></div>
        <div className="absolute left-1/2 -translate-x-1/2 max-w-[1440px] w-[calc(100%-40px)] m-auto h-[calc(80vh)] -mt-[40px] flex flex-col justify-between overflow-hidden z-20 shadow-[0_4px_10px_rgba(0,0,10,0.6)] rounded-sm bg-white min-h-[470px]">
          {/* Background Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
                }`}
              style={{
                backgroundImage: `url('${slide}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          {/* div degrade */}
          <div
            className="absolute h-full w-full right-0 z-[5] 
      bg-[linear-gradient(180deg,transparent_20%,white_55%)] 
      sm:bg-[linear-gradient(145deg,transparent_40%,white_65%)] 
      md:bg-[linear-gradient(120deg,transparent_50%,white_75%)]"
          ></div>

          {/* Main content wrapper */}
          <div className="relative z-20 h-full w-full flex flex-col justify-between">
            <div
              className="flex-grow flex items-end text-black justify-center sm:justify-end sm:text-right text-center"
            >
              <div
                className="relative mb-10 flex flex-col gap-y-2 px-8 items-center sm:px-10 sm:pl-[30%]"
              >
                <Image
                  width={300}
                  height={0}
                  alt={"Logo Digital X"}
                  src={"/logo-digitalx.svg"}
                  className="w-[195px] md:w-[270px] min-w-175px]"
                />
                <h2 className="flex flex-col items-center text-center font-poppins max-w-[350px]">
                  <span className="text-[16px] sm:text-[22px] font-bold  tracking-tight text-gray-600 -mb-1  text-center leading-4 sm:leading-6">
                    REFERÊNCIA EM INOVAÇÃO E QUALIDADE NO DIAGNÓSTICO ODONTOLÓGICO.
                  </span>
                </h2>

              </div>
            </div>

            {/* Bottom content: Color buttons */}
            <HeroButtonColors />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
