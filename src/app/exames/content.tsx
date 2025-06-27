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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      title: "Tomografia Expressa",
      description: "Laudos e imagens disponíveis em até 4 horas",
      icon: <Zap className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Entrega em até 4 horas",
        "Segunda a sexta, 8h às 14h30",
        "Máxima agilidade",
      ],
    },
    {
      title: "Escaneamento Intraoral",
      description:
        "Alternativa moderna à moldagem convencional com modelos digitais 3D",
      icon: <Camera className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Arquivo STL",
        "Alta precisão",
        "Conforto para o paciente",
        "Invisalign® compatível",
      ],
    },
    {
      title: "Radiografias Odontológicas",
      description: "Ampla gama de radiografias extrabucais e intrabucais",
      icon: <FileText className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Panorâmica",
        "Telerradiografia",
        "Periapical",
        "Interproximal",
        "Oclusal",
        "ATM",
      ],
    },
  ];

  const documentationTypes = [
    {
      title: "Documentação Padrão",
      items: [
        "Radiografia Panorâmica",
        "Telerradiografia Lateral e Frontal",
        "Radiografia Carpal (até 15 anos)",
        "Complemento Periapical",
        "Escaneamento Intraoral",
        "Modelos de estudo e trabalho",
        "Fotografias digitais",
        "Laudos e traçados cefalométricos",
      ],
    },
    {
      title: "Documentação para Alinhadores",
      items: [
        "X Aligner",
        "Invisalign®",
        "Clear Aligner",
        "Esthetic Aligner",
        "Easysolution",
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center sm:text-left mb-16 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Na Digital X Diagnóstico por Imagem, oferecemos uma ampla gama de
              exames odontológicos com tecnologia avançada, rapidez na entrega e
              conforto para o paciente.
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mt-12">
              Conheça nossa ampla gama de exames especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {examTypes.map((exam, index) => (
              <div
                key={exam.title}
                className={cn(
                  "group animate-in fade-in duration-500",
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

      {/* Documentation Section */}
      <section className="py-2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-2 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Documentação Ortodôntica
            </h2>
            <p className="text-xl text-gray-600">Completa e especializada</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {documentationTypes.map((doc, index) => (
              <div
                key={doc.title}
                className="animate-in fade-in slide-in-from-bottom-8 duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-base text-gray-800 flex items-center gap-3">
                      <FileText className="h-6 w-6 text-blue-600" />
                      {doc.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      {doc.items.map((item, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="justify-start p-1 font-normal bg-slate-100"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Serviços Avançados
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologia de ponta para diagnósticos precisos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedServices.map((service, index) => (
              <div
                key={service.title}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center animate-in fade-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Softwares e Arquivos Digitais
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                Fornecemos softwares especializados para visualização das
                imagens
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="text-sm p-3">
                  Dental Slice
                </Badge>
                <Badge variant="outline" className="text-sm p-3">
                  ImplantViewer
                </Badge>
                <Badge variant="outline" className="text-sm p-3">
                  CareStream
                </Badge>
                <Badge variant="outline" className="text-sm p-3">
                  DICOM
                </Badge>
                <Badge variant="outline" className="text-sm p-3">
                  STL
                </Badge>
              </div>
              <p className="text-gray-600 text-[13px]">
                Imagens disponíveis nos formatos DICOM ou STL, <br />
                conforme a necessidade do profissional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exams;
