"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ConvenioTypes } from "./page"; // Importando a interface

interface ConveniosClientProps {
  convenios: ConvenioTypes[];
}

export default function ConveniosClient({ convenios }: ConveniosClientProps) {
  const [filterText, setFilterText] = useState("");
  const [filteredConvenios, setFilteredConvenios] = useState(convenios);
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

  useEffect(() => {
    if (!filterText) {
      setFilteredConvenios(convenios);
    } else {
      const lowercasedFilter = filterText.toLowerCase();
      const newFilteredConvenios = convenios.filter((convenio) =>
        convenio.name.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredConvenios(newFilteredConvenios);
    }
  }, [filterText, convenios]);

  return (
    <section ref={sectionRef}>
      <p className="text-gray-600 max-w mx-auto mt-16 max-w-[600px]">
        Trabalhamos com os principais convênios para melhor atender nossos
        pacientes. Consulte-nos para mais informações sobre coberturas
        específicas.
      </p>

      {/* Convenios Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* formulario para fitragem de convenios filtrando da variavel convenios */}
          <div className="mb-10 max-w-md mx-auto">
            <label
              htmlFor="convenio-filter"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Procure seu convênio:
            </label>
            <input
              type="text"
              id="convenio-filter"
              placeholder="Digite o nome do convênio"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>

          <span className="w-full text-[10px] border-b border-gray-900 mb-2 block text-center">
            Convênios Aceitos:
          </span>
          {/* lista de convenios filtrado ou completo */}
          <div className="w-full sm:w-5/6 mx-auto flex flex-row flex-wrap gap-2 overflow-hidden justify-center">
            {filteredConvenios.map((convenio, index) => (
              <div
                key={index}
                className={cn(
                  "w-1/4 md:w-1/6 bg-[#f9fafb] max-w-[138px] transition-all px-2 flex items-center justify-center duration-300 transform",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link href={`convenios/${convenio.id}`}>
                  <Image
                    src={"/convenios/" + convenio.logo}
                    alt={convenio.name}
                    width={256}
                    height={97}
                    className="w-auto h-full object-contain object-center duration-300 transition-transform scale-90 hover:scale-100"
                  />
                </Link>
              </div>
            ))}

            {/* filter nao encontrado */}
            {filteredConvenios.length == 0 && filterText.length > 0 && (
              <div className="bg-gray-50 text-gray-700 p-3 text-md">
                Não encontrado convênio
                <span className="text-red-800">{" " + filterText}</span>.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Not Found Convenio Section */}
      <section className="py-16 bg-[#E5F1FB]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#333333]">
            Não Encontrou Seu Convênio?
          </h2>

          <p className="text-[#555555] mb-8 max-w-xl mx-auto">
            Entre em contato conosco para verificar a disponibilidade do seu
            convênio ou conhecer nossas condições especiais para pagamento
            particular.
          </p>

          <div>
            <Button asChild className="bg-[#1E5B94] hover:bg-[#174A7A]">
              <Link href="/contato">Falar com Atendimento</Link>
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
