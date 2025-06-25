"use client";
import { useState, useEffect, useMemo } from "react";
import { ArrowLeft, Phone, FileText, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { ConvenioTypes } from "@/app/convenios/page";
import Image from "next/image";

const ConvenioDetalhes = () => {
  const [conveniosData, setConveniosData] = useState<ConvenioTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { nomeConvenio } = useParams() as { nomeConvenio: string };
  const router = useRouter(); // Use useRouter for navigation

  useEffect(() => {
    document.body.classList.add("scrolled");

    // Remove a classe 'scrolled' ao sair da página
    return () => {
      document.body.classList.remove("scrolled");
    };
  }, []);

  useEffect(() => {
    const fetchConvenios = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/convenios.json"); // Assumindo que está na pasta public
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ConvenioTypes[] = await response.json();
        setConveniosData(data);
      } catch (e) {
        if (e instanceof Error) {
          console.error("Falha ao buscar convênios:", e.message);
        } else {
          console.error("Ocorreu um erro desconhecido ao buscar convênios");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchConvenios();
  }, []);

  const convenio = useMemo(() => {
    if (!nomeConvenio || conveniosData.length === 0) {
      return undefined;
    }
    return conveniosData.find((item) => item.id === nomeConvenio);
  }, [conveniosData, nomeConvenio]);

  useEffect(() => {
    if (convenio) {
      document.title = `${convenio.name} - Convênios - Digital X`;
    } else if (!isLoading && conveniosData.length > 0) {
      document.title = "Convênio Não Encontrado - Digital X";
    }
  }, [convenio, isLoading, conveniosData.length]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20 section-padding flex justify-center items-center">
          <div className="container mx-auto text-center">
            <p className="text-xl">Carregando informações do convênio...</p>
            {/* Você pode adicionar um componente de spinner aqui */}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!convenio) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20 section-padding flex justify-center items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Convênio não encontrado</h1>
            <p className="mb-4 text-gray-600">
              O convênio com o identificador "{nomeConvenio}" não foi
              localizado.
            </p>
            <Button onClick={() => router.push("/convenios")}>
              Voltar para Convênios
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de agendar um exame pelo convênio ${convenio.name}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "556730282890"; // Considere mover para uma constante ou variável de ambiente
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto">
            <Button
              variant="ghost"
              onClick={() => router.push("/convenios")}
              className="mb-4 text-[#078080] hover:text-[#066666]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Convênios
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {convenio.name}
            </h1>
            <p className="text-gray-600 mt-2">
              Informações sobre documentação e exames atendidos
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-12">
              {/* Primeira Coluna - Informações */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="text-center mb-8">
                    <Image
                      src={`/convenios/${convenio.logo}`}
                      alt={convenio.name}
                      width={256}
                      height={97}
                      className="w-48 h-auto mx-auto object-contain"
                    />
                  </div>

                  {/* Documentação Necessária */}
                  <div className="mb-8 w-4/5 ">
                    <div className="flex items-center mb-4">
                      <FileText className="text-[#078080] mr-3 h-6 w-6" />
                      <h3 className="text-xl font-semibold text-gray-800">
                        Documentação Necessária
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {convenio.documentos.map((doc: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#078080] mr-2">•</span>
                          <span className="text-gray-600">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exames Atendidos */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Calendar className="text-[#078080] mr-3 h-6 w-6" />
                      <h3 className="text-xl font-semibold text-gray-800">
                        Exames Atendidos
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {convenio.examesTodo.map(
                        (exame: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#078080] mr-2">•</span>
                            <span className="text-gray-600">{exame}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Segunda Coluna - Imagem e CTA */}
              <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1770&auto=format&fit=crop"
                    alt="Exame radiológico"
                    width={256}
                    height={97}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Pronto para agendar?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Nossa equipe está pronta para atendê-lo com toda a
                      segurança e qualidade que você merece.
                    </p>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-[#078080] hover:bg-[#066666] text-white text-lg px-8 py-3"
                      size="lg"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Agendar Agora
                    </Button>
                  </div>
                </div>

                {/* Informações de Contato */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Dúvidas sobre cobertura?
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Entre em contato conosco para esclarecer questões
                    específicas sobre seu plano.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Telefone:</strong> (67) 3028-2890
                    </p>
                    <p>
                      <strong>Endereço:</strong> R. Treze de Junho, 499 - Campo
                      Grande/MS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConvenioDetalhes;
