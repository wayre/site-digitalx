"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Tomografia Cone Beam 3D",
      description:
        "Ideal para implantodontia, cirurgias complexas e ortodontia. Imagens em alta definição com reconstrução 3D interativa.",
      features: [
        "Precisão submilimétrica",
        "Reconstrução 3D interativa",
        "Ideal para implantes",
      ],
    },
    {
      title: "Telerradiografia com Análise Cefalométrica",
      description:
        "Dados precisos para planejamentos ortodônticos, com relatórios personalizados e métricas detalhadas.",
      features: [
        "Análise cefalométrica completa",
        "Relatórios personalizados",
        "Métricas detalhadas",
      ],
    },
    {
      title: "Radiografias Periapicais Digitais",
      description:
        "Detecção precoce de cáries, fraturas e infecções com nitidez de detalhes inigualável.",
      features: ["Detecção precoce", "Alta nitidez", "Diagnóstico preciso"],
    },
    {
      title: "Escaneamento Intraoral (ITERO)",
      description:
        "Moldagens digitais precisas para próteses, alinhadores e reabilitações estéticas.",
      features: [
        "Moldagens digitais",
        "Precisão máxima",
        "Reabilitações estéticas",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-digital-blue mb-6">
            Serviços que Elevam Seu
            <span className="text-medical-green"> Padrão Clínico</span>
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-4xl mx-auto">
            Tecnologia para Todos os Seus Desafios Odontológicos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? "bg-medical-green text-white shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <h3
                    className={`font-montserrat font-bold text-xl mb-2 ${
                      activeService === index
                        ? "text-white"
                        : "text-digital-blue"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`font-opensans ${
                      activeService === index ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="bg-light-gray p-8 rounded-xl">
              <h3 className="font-montserrat font-bold text-2xl text-digital-blue mb-6">
                {services[activeService].title}
              </h3>
              <p className="font-opensans text-gray-700 mb-6 leading-relaxed">
                {services[activeService].description}
              </p>
              <div className="space-y-3 mb-6">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-medical-green rounded-full mr-3"></div>
                    <span className="font-opensans text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="bg-medical-green hover:bg-sky-600 text-white px-6 py-2">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
