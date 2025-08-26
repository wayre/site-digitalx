"use client";
import { useRef, useState, useEffect } from "react";
import ContentPage from "./content";
import Header from "@/components/HeaderInternas";
import Footer from "@/components/Footer";
import HeaderInternas from "@/components/HeroInternas";
import Aside from "@/components/Aside";
import ContactSection from "@/components/home/ContactSection";

export default function ExamesClientPage() {
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

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Header />
      <HeaderInternas
        title="Exames"
        subtitle="Digital X – Diagnósticos Odontológicos por Imagem"
      />

      <main className="relative max-w-[1280px] mx-auto" ref={sectionRef}>
        {/***********************
         * 2 colunas (contant and aside) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_28%] gap-4 p-3 w-full mx-auto mt-4">
          {/* coluna 1 */}
          <div className="px-8">
            <ContentPage />
          </div>

          {/* aside - coluna 2 */}
          <Aside />
        </div>

        {/* Contato */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
