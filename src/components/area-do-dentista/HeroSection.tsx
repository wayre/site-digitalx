"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [targetId, setTargetId] = useState<string | null>(null);
  const imageUrl = "/partiner-page-bg.webp";

  useEffect(() => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Reseta o alvo para permitir que a rolagem seja acionada novamente
      setTargetId(null);
    }
  }, [targetId]);

  const handleScrollToContact = () => setTargetId("contato");
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2C3E50] via-slate-800 to-[#084a88] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {/* Background overlay - 50% opacity as specified */}
      <div className="absolute inset-0 bg-[#2C3E50] bg-opacity-50"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#2134234] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Main Title - Montserrat Bold, 48px (desktop) / 32px (mobile) */}
          <h1 className="font-montserrat font-bold text-white mb-6 leading-tight text-3xl md:text-5xl">
            Diagnósticos Precisos,
            <br />
            <span className="text-[#5fb1e9]">Resultados Excepcionais</span>
          </h1>

          {/* Subtitle - Open Sans, 20px (desktop) / 16px (mobile) */}
          <p className="font-opensans text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed text-base md:text-xl">
            Veja por que tantos dentistas confiam na Digital X.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Button 1: Green background, white text, rounded border */}
            <Button
              onClick={handleScrollToContact}
              className="bg-[#23ad4c] hover:bg-green-600 text-white px-8 py-4 text-lg font-opensans font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
            >
              Agende uma Demonstração
            </Button>
            {/* Button 2: Green border, white text, transparent background */}
            <Button
              onClick={handleScrollToContact}
              variant="outline"
              className="border-2 border-[#2134234] text-black hover:bg-[#23ad4c] hover:text-white px-8 py-4 text-lg font-opensans font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Fale com um Especialista
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
