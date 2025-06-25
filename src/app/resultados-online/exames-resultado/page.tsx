"use client";
import { useRef, useState, useEffect } from "react";
import ContentPage from "./content";
import Header from "@/components/HeaderInternas";
import Footer from "@/components/Footer";
import Image from "next/image";
import HeaderInternas from "@/components/HeroInternas";
import Aside from "@/components/Aside";
import ContactSection from "@/components/home/ContactSection";

export default function CentralDeAjudaPage() {
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
      if (sectionRef.current) {
        // Garante que o observer só é desconectado se estiver observando
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Header />
      <HeaderInternas
        title="Central de Resultados"
        subtitle="Abaixo verifique todos os seus resultados de exames."
      />

      <main className="relative max-w-[1280px] mx-auto" ref={sectionRef}>
        {/***********************
         * 2 colunas (contant and aside) */}
        <div className="grid grid-cols-1  gap-4 p-3 w-full mx-auto mt-4">
          {/* coluna 1 */}
          <div className="px-8">
            <ContentPage />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
