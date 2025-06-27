import { Shield, Clock } from "lucide-react";

const WhyDigitalXSection = () => {
  const features = [
    {
      icon: (
        <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-medical-green rounded-sm"></div>
          </div>
        </div>
      ),
      title: "Tecnologia de Ponta",
      description:
        "Tomógrafo Morita Veraview X800 – equipamento líder mundial em tomografia cone beam com precisão submilimétrica.",
    },
    {
      icon: (
        <Clock className="w-16 h-16 text-medical-green mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Agilidade Incomparável",
      description:
        "Imagens 3D de alta resolução que aceleram seus planejamentos e reduzem margens de erro significativamente.",
    },
    {
      icon: (
        <Shield className="w-16 h-16 text-medical-green mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Segurança Máxima",
      description:
        "Doses de radiação até 40% menores que o padrão do mercado, garantindo proteção total para seus pacientes.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-digital-blue mb-6">
            Por Que a Digital X É Sua
            <span className="text-medical-green"> Melhor Aliada?</span>
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Exatidão Técnica e Inovação a Serviço da Sua Clínica
          </p>
        </div>

        {/* Grid de 3 Colunas (Desktop) / 1 Coluna (Mobile) com flip effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 [perspective:1000px]">
          {features.map((feature, index) => (
            <div
              key={index}
              // O efeito de flip 3D é aplicado com utilitários do Tailwind.
              // A perspectiva é definida no container pai (o grid).
              className="group text-center p-8 rounded-xl hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white border border-gray-100 cursor-pointer [transform-style:preserve-3d] hover:[transform:translateY(-8px)_rotateY(5deg)]"
            >
              <div>{feature.icon}</div>
              {/* Títulos em Azul Escuro: Montserrat Bold, 24px */}
              <h3 className="font-sans font-bold text-2xl text-digital-blue mb-4">
                {feature.title}
              </h3>
              {/* Textos Descritivos: Open Sans, 16px, cor cinza escuro */}
              <p className="font-opensans text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-light-gray rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-opensans text-lg text-gray-700 leading-relaxed mb-6">
              Entendemos que cada detalhe no diagnóstico define o sucesso do seu
              trabalho. Por isso, a Digital X oferece{" "}
              <strong className="text-medical-green">
                exames radiológicos odontológicos com precisão submilimétrica
              </strong>
              , garantida pelo Tomógrafo Morita Veraview X800.
            </p>
            <p className="font-opensans text-lg text-gray-700 leading-relaxed">
              Nossas imagens 3D de alta resolução permitem visualizar estruturas
              ósseas, canais radiculares e anomalias com clareza incomparável,
              reduzindo margens de erro e acelerando seus planejamentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDigitalXSection;
