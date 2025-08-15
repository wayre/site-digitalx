import React from "react";
import {
  Stethoscope,
  Camera,
  Scan,
  FileText,
  Download,
  Layers,
  Zap,
  Clock,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Exams = () => {
  const examTypes = [
    {
      title: "Tomografia Computadorizada",
      description:
        "Exame não invasivo com tecnologia avançada para imagens 3D das estruturas ósseas",
      icon: <Scan className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Identificação de processos patológicos",
        "Planejamento ortodôntico e cirúrgico",
        "Avaliação dos seios da face",
        "Dentes inclusos",
        "Implantes dentários",
        "Diagnóstico de traumas",
        "Estudo da ATM",
      ],
    },
    {
      title: "Radiografias Odontológicas",
      description: "Radiografias extrabucais e intrabucais",
      icon: <FileText className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Panorâmica",
        "Telerradiografia",
        "Periapical",
        "Interproximal",
        "ATM",
      ],
    },
    {
      title: "Escaneamento Intraoral",
      description:
        "Alternativa moderna à moldagem convencional com modelos digitais 3D",
      icon: <Camera className="h-8 w-8" />,
      color: "from-yellow-400 to-orange-500",
      features: [
        "Arquivo STL",
        "Alta precisão",
        "Conforto para o paciente",
        "Invisalign®",
      ],
    },
    {
      title: "Documentação para Alinhadores",
      description:
        "Exames completos para planejamento de todos linhadores disponíveis no mercado",
      icon: <Camera className="h-8 w-8" />,
      color: "from-green-400 to-emerald-600",
      features: [
        "X Aligner",
        "Invisalign®",
        "Clear Aligner",
        "Esthetic Aligner",
        "Easysolution",
      ],
    },
  ];

  const documentationTypes = [
    {
      title: "Documentação Ortodôntica Padrão",
      description: "",
      color: "from-blue-500 to-indigo-700",
      features: [
        "Radiografia Panorâmica",
        "Telerradiografia Lateral",
        "Modelos de estudo",
        "Fotografias digitais",
        "Laudos e traçados cefalométricos",
      ],
    },

    {
      title: "Documentação Ortodôntica com Escaneamento",
      description: "",
      color: "from-purple-500 to-violet-800",
      features: [
        "Radiografia Panorâmica",
        "Telerradiografia Lateral",
        "Escaneamento Intra-oral",
        "Fotografias digitais",
        "Laudos e traçados cefalométricos",
      ],
    },
  ];

  const advancedServices = [
    {
      title: "Fotografia Digital Odontológica",
      description:
        "Fotografias para fins diagnósticos e acompanhamento clínico",
      icon: <Camera className="h-6 w-6" />,
    },
    {
      title: "Modelos em Gesso",
      description: "Moldagens para reprodução das arcadas dentárias",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Protocolos Avançados",
      description: "SYM, SEG, COMPASS com tomografia da cabeça",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Prototipagem 3D",
      description: "Modelos 3D digitais prontos para impressão",
      icon: <Download className="h-6 w-6" />,
    },
  ];

  return (
    <div>
      {/* Main Exam Types */}

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center sm:text-left mb-16 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Exames
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Na Digital X, oferecemos uma ampla gama de exames odontológicos
              com tecnologia avançada e conforto para o paciente.
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mt-12">
              Conheça nossos exames especializados e de alta precisão
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-y-12 flex-wrap">
            {examTypes.map((exam, index) => (
              <div
                key={exam.title}
                className={cn(
                  "w-full md:w-[45%] ml-4 group animate-in fade-in duration-500",
                  index % 2 === 0
                    ? "slide-in-from-left-8"
                    : "slide-in-from-right-8"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${exam.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div>
                        <CardTitle className="text-xl text-gray-800">
                          {exam.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {exam.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {exam.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-700 text-sm"
                        >
                          <div
                            className={`w-1 h-1 rounded-full bg-gradient-to-r ${exam.color}`}
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* documentacao ortodontica */}

          <div className="flex flex-col md:flex-row justify-center gap-y-12 flex-wrap mt-12">
            {documentationTypes.map((exam, index) => (
              <div
                key={exam.title}
                className={cn(
                  "w-full md:w-[45%] ml-4 group animate-in fade-in duration-500",
                  index % 2 === 0
                    ? "slide-in-from-left-8"
                    : "slide-in-from-right-8"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${exam.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div>
                        <CardTitle className="text-xl text-gray-800">
                          {exam.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {exam.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {exam.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-700 text-sm"
                        >
                          <div
                            className={`w-1 h-1 rounded-full bg-gradient-to-r ${exam.color}`}
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exams;
