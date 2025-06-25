import Image from "next/image";
import { ShieldCheck, Microscope, Users } from "lucide-react";

// Dados para a seção de diferenciais, facilitando a manutenção.
const featuresData = [
  {
    Icon: ShieldCheck,
    title: "Biosegurança",
    description:
      "Adotamos rígidos protocolos de proteção e higienização, garantindo uma experiência segura para todos os pacientes.",
  },
  {
    Icon: Microscope,
    title: "Resultados Precisos",
    description:
      "Nossa tecnologia de ponta fornece imagens em alta resolução, permitindo diagnósticos mais confiáveis.",
  },
  {
    Icon: Users,
    title: "Profissionais Especializados",
    description:
      "Nossa equipe de radiologistas é liderada pela Dra. Mônica, com extensa experiência em diagnóstico por imagem.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* --- SEÇÃO SUPERIOR: IMAGEM E TEXTO --- */}
        <div className="w-5/6 m-auto grid grid-cols-[100px_1fr] sm:grid-cols-[28%_1fr] gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Coluna da Imagem */}
          <div className="flex justify-center">
            {/* NOTA: Substitua pelo caminho da sua imagem */}
            <Image
              src="/morita-x800.webp"
              alt="Equipamento de Tomografia Cone Beam"
              width={400}
              height={400}
              className="object-contain max-h-[150px] lg:max-h-[350px]"
            />
          </div>

          {/* Coluna de Texto */}
          <div className="relative">
            <div className="relative z-10">
              <p className="text-[0.7rem] font-semibold text-teal-600 uppercase tracking-wider">
                Melhor Escolha
              </p>
              <h2 className="flex flex-col mt-2 text-[22px] md:text-3xl font-light text-gray-800 tracking-tighter leading-tight">
                Por que somos a escolha certa?
              </h2>
              <p className="hidden md:block mt-6 text-gray-600 leading-relaxed">
                Na Digital X, unimos tecnologia de ponta e precisão diagnóstica
                em um centro radiológico odontológico moderno, que oferece
                exames digitais e tomografia Cone Beam com mínima exposição à
                radiação e máxima qualidade de imagem para todas as
                especialidades.
              </p>
            </div>
          </div>
        </div>
        {/* Coluna de Texto small devices */}
        {/* <div>
          <p className="block md:hidden w-[79%] m-auto mt-8 text-gray-600 leading-5 tracking-tight">
            Na Digital X, unimos tecnologia de ponta e precisão diagnóstica em
            um centro radiológico odontológico moderno, que oferece exames
            digitais e tomografia Cone Beam com mínima exposição à radiação e
            máxima qualidade de imagem para todas as especialidades.
          </p>
        </div> */}

        {/* --- SEÇÃO INFERIOR: DIFERENCIAIS --- */}
        <div className="w-5/6 m-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex-shrink-0">
                <feature.Icon
                  className="h-10 w-10 text-teal-700"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[12px] text-gray-600 tracking-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
