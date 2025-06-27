
import { Clock, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-medical-green group-hover:text-green-600 transition-colors duration-300" />,
      title: "Resultados em Tempo Recorde",
      description: "Laudos entregues em até 24 horas, integrados diretamente à sua plataforma."
    },
    {
      icon: <div className="w-12 h-12 bg-medical-green group-hover:bg-green-600 transition-colors duration-300 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">24/7</span>
      </div>,
      title: "Acesso 24/7 à Área do Dentista",
      description: "Baixe imagens DICOM, históricos de exames e laudos assinados por especialistas."
    },
    {
      icon: <Shield className="w-12 h-12 text-medical-green group-hover:text-green-600 transition-colors duration-300" />,
      title: "Suporte Técnico Especializado",
      description: "Nossa equipe resolve dúvidas complexas e oferece consultoria para casos desafiadores."
    },
    {
      icon: <div className="w-12 h-12 bg-medical-green group-hover:bg-green-600 transition-colors duration-300 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">+</span>
      </div>,
      title: "Convênios Simplificados",
      description: "Trabalhamos com os principais planos odontológicos, reduzindo burocracias."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-digital-blue mb-6">
            Benefícios Exclusivos para
            <span className="text-medical-green"> Profissionais de Excelência</span>
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-4xl mx-auto">
            Sua Prática Clínica Mais Eficiente, Seus Pacientes Mais Satisfeitos
          </p>
        </div>

        {/* Lista de Benefícios em 4 Cards com espaçamento generoso */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="group-hover:scale-110 transition-transform duration-300 mb-4">
                {benefit.icon}
              </div>
              {/* Títulos em azul escuro */}
              <h3 className="font-montserrat font-bold text-lg text-digital-blue mb-3">
                {benefit.title}
              </h3>
              {/* Textos em cinza escuro */}
              <p className="font-opensans text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
