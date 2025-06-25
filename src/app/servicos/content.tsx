"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Servicos() {
  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative flex items-center overflow-hidden bg-[#1E5B94] h-52">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for background image */}
          <div className="w-full h-full bg-gradient-to-r from-[#1E5B94] to-[#3AADA8] opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-10">
            Precisão e Segurança
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl">
            Na Digital X, fornecemos a clareza que dentistas e pacientes
            precisam para um tratamento eficaz e seguro.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-[#333333]">
              Exames Realizados
            </h2>
            <p className="text-[#555555]">
              Oferecemos uma ampla gama de exames com alta qualidade e precisão.
              Nossa tecnologia de ponta e equipe especializada garantem
              resultados confiáveis para auxiliar no diagnóstico e planejamento
              de tratamentos odontológicos.
            </p>
          </div>

          {/* Documentação Ortodôntica */}
          <div id="documentacao" className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-[#1E5B94] text-center">
              Documentação Ortodôntica
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-[#E5F1FB] h-64 rounded-lg flex items-center justify-center">
                  {/* Placeholder for service image */}
                  <div className="text-[#1E5B94] text-5xl font-light">
                    Imagem
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[#555555] mb-4">
                  Conjunto de exames necessários para o planejamento e
                  acompanhamento do tratamento ortodôntico. Inclui radiografias,
                  fotografias e modelos digitais.
                </p>
                <p className="text-[#555555] mb-6">
                  A documentação ortodôntica completa é essencial para o
                  diagnóstico preciso e planejamento eficaz do tratamento,
                  permitindo ao ortodontista visualizar todas as estruturas
                  relevantes.
                </p>
                <Button className="bg-[#1E5B94] hover:bg-[#174A7A]">
                  Solicitar Exame
                </Button>
              </div>
            </div>
          </div>

          {/* Escaneamento Intraoral ITERO */}
          <div id="escaneamento" className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-[#1E5B94] text-center">
              Escaneamento Intraoral ITERO
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <div className="bg-[#E8F8F7] h-64 rounded-lg flex items-center justify-center">
                  {/* Placeholder for service image */}
                  <div className="text-[#3AADA8] text-5xl font-light">
                    Imagem
                  </div>
                </div>
              </div>

              <div className="order-2 md:order-1">
                <p className="text-[#555555] mb-4">
                  Tecnologia de ponta que substitui as moldagens convencionais,
                  oferecendo maior precisão e conforto ao paciente. Ideal para
                  planejamento de tratamentos ortodônticos e reabilitações.
                </p>
                <p className="text-[#555555] mb-6">
                  O escaneamento ITERO permite a criação de modelos digitais
                  tridimensionais precisos, facilitando o planejamento de
                  tratamentos e a comunicação com laboratórios.
                </p>
                <Button className="bg-[#1E5B94] hover:bg-[#174A7A]">
                  Solicitar Exame
                </Button>
              </div>
            </div>
          </div>

          {/* Radiografias */}
          <div id="radiografias" className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-[#1E5B94] text-center">
              Radiografias
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-[#E5F1FB] flex items-center justify-center">
                    {/* Placeholder for radiography image */}
                    <div className="text-[#1E5B94] text-sm font-light">
                      Periapical
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Radiografias Periapicais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Exames detalhados para visualização de dentes individuais
                      e estruturas adjacentes, incluindo raízes e osso alveolar.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-[#1E5B94] hover:bg-[#174A7A]">
                      Solicitar
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-[#E5F1FB] flex items-center justify-center">
                    {/* Placeholder for radiography image */}
                    <div className="text-[#1E5B94] text-sm font-light">
                      Panorâmica
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Radiografia Panorâmica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Visão completa de toda a arcada dentária, maxilares,
                      articulações e estruturas adjacentes em uma única imagem.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-[#1E5B94] hover:bg-[#174A7A]">
                      Solicitar
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-[#E5F1FB] flex items-center justify-center">
                    {/* Placeholder for radiography image */}
                    <div className="text-[#1E5B94] text-sm font-light">
                      Telerradiografia
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Radiografia de Perfil</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Também conhecida como Telerradiografia, permite a análise
                      do perfil facial, relações entre maxilares e
                      posicionamento dentário.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-[#1E5B94] hover:bg-[#174A7A]">
                      Solicitar
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          {/* Tomografia Cone Beam */}
          <div id="tomografia" className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-[#1E5B94] text-center">
              Tomografia Cone Beam Morita
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-[#E5F1FB] h-64 rounded-lg flex items-center justify-center">
                  {/* Placeholder for service image */}
                  <div className="text-[#1E5B94] text-5xl font-light">
                    <Image
                      src="/morita-x800.webp"
                      alt="Profissional da saúde sorrindo em um consultório"
                      // layout="fill"
                      // objectFit="cover"
                      // A prioridade na otimização da imagem pode ser útil para o LCP
                      width={480}
                      height={330}
                      className="h-full w-auto object-cover min-h-[230px] sm:min-h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[#555555] mb-4">
                  Exame de alta precisão que permite visualização tridimensional
                  das estruturas dentárias e ósseas. Essencial para implantes,
                  cirurgias e diagnósticos complexos.
                </p>
                <p className="text-[#555555] mb-6">
                  A tomografia Cone Beam Morita oferece imagens detalhadas em 3D
                  com baixa dose de radiação, permitindo diagnósticos precisos e
                  planejamentos cirúrgicos seguros.
                </p>
                <Button className="bg-[#1E5B94] hover:bg-[#174A7A]">
                  Solicitar Exame
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Exams Section */}
      <section className="py-16 bg-[#E5F1FB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#333333]">
            Solicite Seus Exames
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md">
                    <div className="text-[#1E5B94] text-2xl font-bold">SO</div>
                  </div>
                  <CardTitle className="text-[#1E5B94]">
                    Solicitação Online
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6">
                    Dentistas, solicite exames para seus pacientes de forma
                    rápida e segura através de nossa plataforma online.
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
                  <div className="mx-auto bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md">
                    <div className="text-[#1E5B94] text-2xl font-bold">PDF</div>
                  </div>
                  <CardTitle className="text-[#1E5B94]">
                    Requisição em PDF
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6">
                    Baixe o formulário de requisição de exames em PDF, preencha
                    e traga até nossa clínica.
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
                  <div className="mx-auto bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md">
                    <div className="text-[#25D366] text-2xl font-bold">WA</div>
                  </div>
                  <CardTitle className="text-[#1E5B94]">
                    Agendamento via WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6">
                    Agende sua consulta ou exame de forma rápida e prática
                    através do nosso WhatsApp.
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
    </>
  );
}
