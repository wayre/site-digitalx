"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import HeroButtonColors from "./HeroButtonColors";
import Image from "next/image";

const HeroVideoSection = () => {
  const handleCTAClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-video-section relative w-full h-[calc(100vh-87px)] flex flex-col justify-between mt-[88px] overflow-hidden">
      <video
        src="/video-bg-digitalx3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* div degrade */}
      <div
        className="absolute h-full w-full right-0 z-[5] 
      bg-[linear-gradient(180deg,transparent_35%,white_60%)] 
      sm:bg-[linear-gradient(145deg,transparent_40%,white_65%)] 
      md:bg-[linear-gradient(120deg,transparent_50%,white_75%)]"
      ></div>

      {/* Main content wrapper */}
      <div className="relative z-20 h-full w-full flex flex-col justify-between">
        <div
          className="flex-grow flex items-end text-black 
        justify-center text-center 
        sm:justify-end sm:text-right sm:px-1"
        >
          <div
            className="relative mb-7 flex flex-col  
            gap-y-2 px-8 items-center 
          sm:px-14 sm:pl-[30%]  sm:items-end"
          >
            <Image
              width={300}
              height={0}
              alt={"Logo Digital X"}
              src={"/logo-digitalx.svg"}
              className="w-1/3 md:w-[250px]"
            />
            <h2
              className="text-digital-blue font-semibold 
            text-2xl leading-7 tracking-wider text-center 
            sm:text-3xl md:text-4xl sm:leading-10 sm:tracking-tighter sm:text-right"
            >
              Tecnologia e precisão <br className="block 2lg:hidden" />
              para seu diagnóstico
            </h2>
            <p
              className="text-[15px] mx-auto font-light leading-4 text-center  max-w-[490px]
            sm:text-[18px] sm:leading-6 sm:text-right
            md:text-[19px]"
            >
              Realizamos exames de imagem com equipamentos de ponta para
              garantir a máxima qualidade e segurança.
            </p>
            <Button
              onClick={() => handleCTAClick("contato")}
              className="bg-[#078080] hover:bg-[#066666] text-white font-semibold py-4 px-8 text-lg group mt-1"
              size="sm"
            >
              Agendar seu Exame via WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Bottom content: Color buttons */}
        <HeroButtonColors />
      </div>
    </section>
  );
};

export default HeroVideoSection;
