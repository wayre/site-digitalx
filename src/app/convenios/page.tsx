"use client";

import Header from "@/components/HeaderInternas"; // Certifique-se que este componente existe e está correto
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { useIsMobile } from "@/hooks/use-mobile";
import { useRef, useState, useEffect } from "react";
import HeroInternas from "@/components/HeroInternas";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";

export interface ConvenioTypes {
  id: string;
  name: string;
  logo: string;
  documentos: string[];
  examesTodo: string[];
}

export default function Convenios() {
  const [convenios, setConvenios] = useState<ConvenioTypes[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile(); // Mantém este hook se ele não depender de framer-motion
  const [filterText, setFilterText] = useState("");
  const [filteredConvenios, setFilteredConvenios] = useState(convenios);

  useEffect(() => {
    const fetchConvenios = async () => {
      try {
        // Ajuste o caminho para o arquivo JSON conforme necessário
        // Se o arquivo comentarios.json estiver na pasta public:
        // const response = await fetch('/comentarios.json');
        // Se estiver na pasta src e for importado diretamente (requer configuração do bundler): // Mantendo o nome original do arquivo JSON
        const response = await fetch("/convenios.json"); // Assumindo que está na pasta public
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ConvenioTypes[] = await response.json();
        setConvenios(data);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          console.log("An unknown error occurred");
        }
      } finally {
      }
    };

    fetchConvenios();
  }, []);

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
    <>
      <Header />
      <HeroInternas
        title="Convênios Aceitos"
        subtitle="FACILITANDO SEU ACESSO À SAÚDE BUCAL DE QUALIDADE"
      />

      <main className="relative max-w-[1280px] mx-auto" ref={sectionRef}>
        {/***********************
         * 2 colunas (contant and aside) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_28%] gap-4 p-3 w-full mx-auto mt-4">
          {/* coluna 1 */}
          <section>
            {/* texto apresentacao */}
            <div className="flex flex-row gap-2">
              <Image
                src="/convenios-ilustracao.webp" // A variável importada do asset
                alt="Ilustração Pessoa feliz - convênios"
                width={466} // Largura original da imagem
                height={800} // Altura original da imagem
                className="w-[40%] h-auto object-contain hidden md:block max-h-[350px]"
              />
              <div className="w-11/12 flex flex-col justify-center mx-auto max-w-[400px] sm:max-w-[70%]">
                <h3 className="text-xl sm:text-2xl font-light text-[#333333] flex flex-row items-end gap-2 mb-2">
                  <Image
                    src="/convenios-ilustracao.webp" // A variável importada do asset
                    alt="Ilustração Pessoa feliz - convênios"
                    width={466} // Largura original da imagem
                    height={800} // Altura original da imagem
                    className="md:hidden w-[25%] h-auto object-contain"
                  />
                  Facilitamos seu acesso a exames com qualidade, agilidade e
                  cobertura pelos principais planos de saúde
                </h3>
                <p className="text-sm sm:text-base font-normal text-[#555555] mt-2">
                  Na Digital X, oferecemos exames de radiologia odontológica com
                  tecnologia de ponta e atendimento humanizado. Para tornar seu
                  diagnóstico ainda mais acessível, aceitamos diversos convênios
                  e planos de saúde.
                </p>
                <p className="text-sm sm:text-base font-normal text-[#555555] mt-2">
                  Nosso objetivo é simplificar todo o processo — desde o
                  agendamento até a entrega dos resultados — garantindo
                  agilidade, conforto e excelência no atendimento. Confira
                  abaixo a lista de convênios aceitos e veja como é fácil
                  realizar seu exame conosco. Caso o seu plano não esteja
                  listado ou tenha dúvidas, entre em contato com a nossa equipe.
                  Estamos prontos para ajudar.
                </p>
              </div>
            </div>

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
                        isVisible // Mantém a animação baseada em isVisible do IntersectionObserver
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      )}
                      style={{ transitionDelay: `${index * 50}ms` }} // Mantém o delay para o efeito de cascata
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
                  Entre em contato conosco para verificar a disponibilidade do
                  seu convênio ou conhecer nossas condições especiais para
                  pagamento particular.
                </p>

                <div>
                  <Button asChild className="bg-[#1E5B94] hover:bg-[#174A7A]">
                    <Link href="/contato">Falar com Atendimento</Link>
                  </Button>
                </div>
              </div>
            </section>
          </section>

          {/* aside - coluna 2 */}
          <Aside />
        </div>

        {/* Contato */}
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
