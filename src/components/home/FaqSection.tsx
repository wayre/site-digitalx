"use client";
import { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const faqs = [
    {
      question: "Quais documentos preciso para agendar um exame?",
      answer:
        "Para agendar seu exame, você precisará de um pedido/solicitação do dentista, documento de identidade e carteirinha do convênio (caso utilize). Recomendamos também trazer exames anteriores, se disponíveis, para fins comparativos.",
    },
    {
      question: "Qual é o tempo de entrega dos laudos?",
      answer:
        "Os laudos digitais são disponibilizados em nosso portal em até 24 horas úteis após a realização do exame. Em casos de urgência, informe no momento do agendamento e tentaremos priorizar seu caso.",
    },
    {
      question: "É necessário fazer algum preparo para os exames?",
      answer:
        "Para a maioria dos exames radiológicos odontológicos não é necessário nenhum preparo especial. Recomendamos apenas que você remova objetos metálicos como brincos, piercings e colares antes do exame para evitar interferências na imagem.",
    },
    {
      question: "Crianças podem realizar os exames?",
      answer:
        "Sim, realizamos exames em pacientes de todas as idades, incluindo crianças. Nossa equipe é treinada para oferecer um atendimento especial aos pequenos pacientes, tornando a experiência mais tranquila e confortável.",
    },
    {
      question: "Gestantes podem fazer radiografias?",
      answer:
        "Embora nossa tecnologia utilize doses muito baixas de radiação, recomendamos que gestantes evitem exposição radiológica, especialmente no primeiro trimestre. Caso seja absolutamente necessário, utilizamos protocolos específicos de proteção. Consulte sempre seu médico antes de realizar qualquer exame.",
    },
    {
      question: "Como posso obter uma segunda via do meu exame?",
      answer:
        "Todos os exames ficam disponíveis em nosso portal por até 5 anos. Você pode acessá-los com seu login e senha ou solicitar uma segunda via diretamente em nossa clínica. Caso prefira, também podemos enviar por e-mail ou gerar um novo CD/DVD mediante taxa adicional.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as dúvidas mais comuns sobre nossos exames e serviços.
            Caso sua pergunta não esteja aqui, entre em contato conosco.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 last:border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-digitalx-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600">
            Ainda tem dúvidas?{" "}
            <a href="#contato" className="text-digitalx-500 hover:underline">
              Entre em contato
            </a>{" "}
            ou ligue para{" "}
            <a
              href="tel:+556730282890"
              className="text-digitalx-500 hover:underline"
            >
              (67) 3028-2890
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
