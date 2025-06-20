"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Sobre() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden bg-[#1E5B94]">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for background image */}
          <div className="w-full h-full bg-gradient-to-r from-[#1E5B94] to-[#3AADA8] opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            A Digital X
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl">
            Referência em diagnóstico por imagem odontológica
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#E5F1FB] h-80 rounded-lg flex items-center justify-center">
                {/* Placeholder for clinic image */}
                <div className="text-[#1E5B94] text-5xl font-light">
                  Imagem da Clínica
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-6 text-[#333333]">
                Nossa História
              </h2>
              <p className="text-[#555555] mb-4">
                A Digital X nasceu do compromisso com a excelência em
                diagnóstico por imagem na odontologia. Desde nossa fundação,
                buscamos oferecer aos profissionais e pacientes o que há de mais
                moderno em tecnologia de imagem.
              </p>
              <p className="text-[#555555] mb-4">
                Localizada em Campo Grande - MS, nossa clínica se tornou
                referência na região, atendendo dentistas e pacientes com o mais
                alto padrão de qualidade e precisão diagnóstica.
              </p>
              <p className="text-[#555555]">
                Nossa missão é proporcionar diagnósticos precisos que contribuam
                para tratamentos odontológicos mais eficazes, melhorando a saúde
                bucal e a qualidade de vida de nossos pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-16 bg-[#E5F1FB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#333333]">
            Nossa Tecnologia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md">
                    <div className="text-[#1E5B94] text-2xl font-bold">3D</div>
                  </div>
                  <CardTitle className="text-[#1E5B94]">
                    Tomografia Cone Beam Morita
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Equipamento de última geração que proporciona imagens
                    tridimensionais de alta resolução, essenciais para
                    diagnósticos precisos e planejamentos cirúrgicos.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md">
                    <div className="text-[#1E5B94] text-2xl font-bold">HD</div>
                  </div>
                  <CardTitle className="text-[#1E5B94]">
                    Radiografia Digital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sistemas digitais que garantem imagens de alta definição com
                    menor exposição à radiação, proporcionando diagnósticos mais
                    seguros e precisos.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md">
                    <div className="text-[#1E5B94] text-2xl font-bold">IT</div>
                  </div>
                  <CardTitle className="text-[#1E5B94]">
                    Escaneamento ITERO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tecnologia avançada de escaneamento intraoral que substitui
                    as moldagens convencionais, oferecendo maior precisão e
                    conforto ao paciente.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#333333]">
            Nossa Equipe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-64 bg-[#E5F1FB] flex items-center justify-center">
                  {/* Placeholder for team member image */}
                  <div className="text-[#1E5B94] text-5xl font-light">Foto</div>
                </div>
                <CardHeader>
                  <CardTitle>Dra. Mônica Silva</CardTitle>
                  <CardDescription>Diretora Clínica</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#555555]">
                    Especialista em Radiologia Odontológica com mais de 15 anos
                    de experiência no diagnóstico por imagem.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-64 bg-[#E5F1FB] flex items-center justify-center">
                  {/* Placeholder for team member image */}
                  <div className="text-[#1E5B94] text-5xl font-light">Foto</div>
                </div>
                <CardHeader>
                  <CardTitle>Dr. Carlos Mendes</CardTitle>
                  <CardDescription>Radiologista</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#555555]">
                    Especialista em Tomografia Computadorizada e técnicas
                    avançadas de diagnóstico por imagem.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-64 bg-[#E5F1FB] flex items-center justify-center">
                  {/* Placeholder for team member image */}
                  <div className="text-[#1E5B94] text-5xl font-light">Foto</div>
                </div>
                <CardHeader>
                  <CardTitle>Ana Oliveira</CardTitle>
                  <CardDescription>Coordenadora de Atendimento</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#555555]">
                    Responsável por garantir a excelência no atendimento aos
                    pacientes e profissionais parceiros.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E5B94] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Conheça Nossa Clínica</h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Venha conhecer nossa estrutura e tecnologia de ponta para
            diagnóstico por imagem odontológica.
          </p>

          <div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1E5B94] hover:bg-white/90"
            >
              <Link href="/contato">Agendar Visita</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
