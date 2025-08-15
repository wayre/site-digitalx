import Header from "@/components/area-do-dentista/Header";
import HeroSection from "@/components/area-do-dentista/HeroSection";
import WhyDigitalXSection from "@/components/area-do-dentista/WhyDigitalXSection";
import BenefitsSection from "@/components/area-do-dentista/BenefitsSection";
import ServicesSection from "@/components/area-do-dentista/ServicesSection";
import PartnershipSection from "@/components/area-do-dentista/PartnershipSection";
import ContactSection from "@/components/area-do-dentista/ContactSection";
import Footer from "@/components/area-do-dentista/Footer";

import Link from "next/link";
import Image from "next/image";

const ParceriaPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-[#DBE1DA] mt-32">
        <div className="container mx-auto">
          {/* Grid responsivo:
          - 1 coluna em telas pequenas (padrão)
          - 2 colunas em telas grandes (lg) e superiores
        */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Coluna Esquerda: Conteúdo de Texto */}
            <div className="flex flex-col justify-center p-8 sm:p-4 lg:p-16 max-w-[550px] lg:max-w-max  mx-auto">
              <span className="mb-2 text-center sm:text-left">Dentista,</span>
              <h2 className="text-2xl md:text-2xl tracking-tight font-light text-gray-800 leading-tight text-center sm:text-left">
                Seja parceiro da Digital X e dedique-se ao que realmente
                importa: o sorriso dos seus pacientes!
              </h2>
            </div>

            {/* Coluna Direita: Imagem */}
            {/* A imagem é ocultada em telas pequenas (hidden) e exibida a partir de 'lg' */}
            <div className="order-first flex justify-center">
              <Image
                src="/partnerBanner.webp"
                alt="Profissional da saúde sorrindo em um consultório"
                // layout="fill"
                // objectFit="cover"
                // A prioridade na otimização da imagem pode ser útil para o LCP
                width={1103}
                height={759}
                className="h-full w-auto object-cover min-h-[230px] sm:min-h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <WhyDigitalXSection />
      <BenefitsSection />
      <ServicesSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ParceriaPage;
