"use client";
import { useRef } from "react";
import ContentPage from "./content";
import Header from "@/components/HeaderInternas";
import Footer from "@/components/Footer";
import HeaderInternas from "@/components/HeroInternas";
import Aside from "@/components/Aside";

export default function CentralDeAjudaPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <HeaderInternas
        title="Central de Ajuda"
        subtitle="Tire suas dúvidas com facilidade e rapidez."
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
      </main>
      <Footer />
    </>
  );
}
