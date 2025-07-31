import { Shield, Clock } from "lucide-react";

const PartnershipSection = () => {
  const reasons = [
    {
      icon: <Shield className="w-16 h-16 text-white mb-4" />,
      title: "Credibilidade Técnica",
      description:
        "Equipamentos certificados pela ANVISA e laudos validados por especialistas com mais de 15 anos de experiência.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
          <Clock className="w-8 h-8 text-digital-blue" />
        </div>
      ),
      title: "Agilidade sem Igual",
      description:
        "Agendamentos online em minutos, entregas rápidas e plataforma intuitiva para gestão de exames.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
          <span className="text-digital-blue font-bold text-2xl">+</span>
        </div>
      ),
      title: "Parceria que Cresce com Você",
      description:
        "Oferecemos treinamentos exclusivos para sua equipe e materiais de apoio técnico para melhorar seus diagnósticos.",
    },
  ];

  return (
    <section
      id="parceria"
      className="py-20 bg-digital-blue relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-medical-green rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Por Que Ser
            <span className="text-sky-400"> Parceiro Digital X?</span>
          </h2>
          <p className="font-opensans text-xl text-gray-300 max-w-4xl mx-auto">
            Sua Reputação Fortalecida pela Nossa Tecnologia
          </p>
        </div>

        {/* Grid de 3 Colunas (Desktop) / 1 Coluna (Mobile) com fade-in sequencial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                {reason.title}
              </h3>
              <p className="font-opensans text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
