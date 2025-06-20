"use client";

import Header from "@/components/Header"; // Certifique-se que este componente existe e está correto
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef, useState, useEffect } from "react";

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
      <div className="h-[70px] sm:h-[76px]"></div>

      {/* Banner Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden bg-[#1E5B94]">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for background image */}
          <div className="w-full h-full bg-gradient-to-r from-[#1E5B94] to-[#3AADA8] opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Convênios Aceitos
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl">
            Facilitando o acesso aos nossos serviços
          </p>
        </div>
      </section>

      <main className="relative" ref={sectionRef}>
        {/* Convenios Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-medium mb-6 text-[#333333]">
                Conheça os Convênios Aceitos!
              </h2>
              <p className="text-[#555555] mb-4">
                Sabemos o quanto é importante ter acesso a{" "}
                <b>exames de alta qualidade</b> para cuidar da sua saúde bucal.
                Por isso, na nossa clínica de radiologia odontológica em Campo
                Grande/MS, fazemos questão de oferecer{" "}
                <b>diversas opções de convênios e planos de saúde</b>. Nossa
                missão é simplificar o seu acesso aos diagnósticos por imagem
                mais precisos, garantindo que você receba o melhor atendimento
                sem complicações.
              </p>
              <p>
                Nossa equipe especializada está pronta para oferecer uma
                experiência ágil e tranquila, desde o agendamento até a
                realização do seu exame.
              </p>
            </div>

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

            {/* lista de convenios filtrado ou completo */}
            <div className="w-full sm:w-4/6 mx-auto flex flex-row flex-wrap gap-2 overflow-hidden justify-center">
              {filteredConvenios.map((convenio, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-1/4 bg-[#f9fafb] max-w-[138px] transition-all px-2 flex items-center justify-center duration-700 transform",
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
            </div>
          </div>
        </section>

        {/* Not Found Convenio Section */}
        <section className="py-16 bg-[#E5F1FB]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#333333]">
              Não Encontrou Seu Convênio?
            </h2>

            <p className="text-[#555555] mb-8 max-w-2xl mx-auto">
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

        {/* Quick Access Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-[#333333]">
              Acesso Rápido
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-[#E5F1FB] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                      <div className="text-[#1E5B94] text-2xl font-bold">
                        SO
                      </div>
                    </div>
                    <CardTitle className="text-[#1E5B94]">
                      Solicitação Online
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-6">
                      Dentistas, solicite exames para seus pacientes de forma
                      rápida e segura.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button className="bg-[#1E5B94] hover:bg-[#174A7A]">
                      Acessar
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-[#E5F1FB] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                      <div className="text-[#1E5B94] text-2xl font-bold">
                        PDF
                      </div>
                    </div>
                    <CardTitle className="text-[#1E5B94]">
                      Requisição em PDF
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-6">
                      Baixe o formulário de requisição de exames em PDF.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button
                      variant="outline"
                      className="border-[#1E5B94] text-[#1E5B94] hover:bg-[#E5F1FB]"
                    >
                      Baixar
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-[#E5F1FB] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                      <div className="text-[#25D366] text-2xl font-bold">
                        WA
                      </div>
                    </div>
                    <CardTitle className="text-[#1E5B94]">
                      Agendamento via WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-6">
                      Agende sua consulta ou exame de forma rápida pelo
                      WhatsApp.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button asChild className="bg-[#25D366] hover:bg-[#20BD5A]">
                      <Link href="https://wa.me/5567XXXXXXXX">Agendar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
