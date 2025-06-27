"use client"; // Marca este arquivo como um Client Component

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import ExamModal, { ExamDetails } from "./ExamModal";
import { cn } from "@/lib/utils";

const ExamsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<ExamDetails | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const exams = [
    {
      id: "tomografia",
      title: "Tomografia Digital Cone Beam",
      shortDescription:
        "Imagens tridimensionais de alta resolução da cavidade oral e maxilofacial.",
      fullDescription:
        "A Tomografia Computadorizada Cone Beam (TCCB) é um tipo de exame de imagem que permite visualizar estruturas ósseas e dentárias em três dimensões com alta precisão e baixa dose de radiação. Esta tecnologia inovadora é essencial para diagnósticos odontológicos complexos.",
      applications: [
        "Planejamento de implantes dentários",
        "Avaliação de dentes inclusos e impactados",
        "Diagnóstico de patologias ósseas e articulação temporomandibular (ATM)",
        "Planejamento ortodôntico",
        "Avaliação de canais radiculares em endodontia",
      ],
      benefits: [
        "Visualização tridimensional detalhada",
        "Menor dose de radiação comparada à tomografia convencional",
        "Diagnóstico mais preciso",
        "Imagens de alta resolução",
        "Planejamento de tratamento mais eficaz",
      ],
      imageUrl: "/TomografiaComputadorizadaConeBeam.webp",
    },
    {
      id: "radiografias-extraorais",
      title: "Radiografias Extra-Orais",
      shortDescription:
        "Radiografias da região facial, incluindo panorâmicas e cefalométricas.",
      fullDescription:
        "As radiografias extra-orais são realizadas com o filme radiográfico posicionado fora da boca do paciente, permitindo a visualização ampla das estruturas maxilofaciais. São essenciais para avaliações ortodônticas e detecção de patologias.",
      applications: [
        "Avaliação geral dos dentes, maxilares e estruturas adjacentes",
        "Planejamento ortodôntico",
        "Diagnóstico de patologias ósseas e articulares",
        "Avaliação de dentes impactados",
        "Planejamento cirúrgico",
      ],
      benefits: [
        "Visão panorâmica de toda a arcada dentária",
        "Avaliação das articulações temporomandibulares",
        "Detecção de patologias em estágios iniciais",
        "Menor desconforto para o paciente",
        "Complemento para o planejamento de tratamentos complexos",
      ],
      imageUrl: "/RadiografiasExtra-Orais.webp",
    },
    {
      id: "radiografias-intraorais",
      title: "Radiografias Intra-Orais",
      shortDescription:
        "Radiografias realizadas com o filme posicionado dentro da boca do paciente.",
      fullDescription:
        "As radiografias intra-orais são exames com o filme radiográfico posicionado dentro da cavidade oral do paciente, fornecendo imagens detalhadas de um ou poucos dentes e suas estruturas adjacentes. São os exames radiográficos mais comuns na rotina odontológica.",
      applications: [
        "Diagnóstico de cáries interproximais",
        "Avaliação das condições periodontais",
        "Detecção de lesões periapicais",
        "Acompanhamento de tratamentos endodônticos",
        "Verificação da adaptação de próteses e restaurações",
      ],
      benefits: [
        "Alta definição e detalhamento das estruturas dentárias",
        "Precisão na detecção de alterações ósseas pequenas",
        "Baixa dose de radiação",
        "Custo acessível",
        "Rapidez na execução e processamento",
      ],
      imageUrl: "/RadiografiasIntra-Orais.webp",
    },
  ];

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

  const openModal = (exam: ExamDetails) => {
    setSelectedExam(exam);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="exames"
      className="section-padding bg-slate-100"
      ref={sectionRef}
    >
      <div className="container mx-auto p-1">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Exames Odontológicos com Alta Precisão
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Utilizamos equipamentos de última geração e seguimos rigorosos
            protocolos de qualidade para garantir resultados precisos e
            confiáveis.
          </p>
        </div>

        <div className="w-full flex flex-row gap-2 sm:gap-4 md:gap-2 justify-center flex-wrap md:flex-nowrap">
          {exams.map((exam, index) => (
            <div
              key={exam.id}
              className={cn(
                " bg-white rounded-xl shadow-card overflow-hidden transition-all duration-700 transform",
                "max-w-[45%] min-w-[290px] sm:min-w-[240px] lg:max-w-[340px] w-auto scale-95 hover:scale-100",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${exam.imageUrl})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-5 md:leading-normal">
                  {exam.title}
                </h3>
                <p className="text-gray-600 mb-5">{exam.shortDescription}</p>
                <Button
                  onClick={() => openModal(exam)}
                  variant="outline"
                  className="w-full flex items-center justify-center bg-[#257c42] hover:bg-[#2b964e] text-white hover:text-white"
                >
                  <Info className="mr-2 h-4 w-4" />
                  Saiba Mais
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ExamModal
        isOpen={isModalOpen}
        onClose={closeModal}
        exam={selectedExam}
      />
    </section>
  );
};

export default ExamsSection;
