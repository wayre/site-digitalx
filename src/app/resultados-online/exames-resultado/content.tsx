"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react"; // Importe useEffect também
// Dados mockados para exemplo
const examesMock = [
  {
    id: "exam001",
    nome: "Tomografia Computadorizada (Cone Beam)",
    data: "2025-06-15",
    status: "Disponível",
    tipo: "TCFC",
    previewUrl: "/images/preview-tcfc.jpg", // Imagem de exemplo na pasta public
    downloadUrl: "/downloads/exam001-tcfc.zip",
  },
  {
    id: "exam002",
    nome: "Radiografia Panorâmica",
    data: "2025-05-28",
    status: "Disponível",
    tipo: "Panorâmica",
    previewUrl: "/images/preview-panoramica.jpg",
    downloadUrl: "/downloads/exam002-panoramica.zip",
  },
  {
    id: "exam003",
    nome: "Documentação Ortodôntica",
    data: "2025-05-10",
    status: "Disponível",
    tipo: "Orto",
    previewUrl: "/images/preview-orto.jpg",
    downloadUrl: "/downloads/exam003-orto.zip",
  },
  {
    id: "exam004",
    nome: "Tomografia | Thaís Avelar",
    data: "2025-04-22",
    status: "Em Análise",
    tipo: "TDA",
    previewUrl: null, // Sem preview para exames em análise
    downloadUrl: null,
  },
];

export default function ExamesResultados() {
  const [exames, setExames] = useState(examesMock);
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para controlar se os elementos estão "montados" e podem animar
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Define isMounted como true após o componente ser montado, permitindo as animações
    setIsMounted(true);
  }, []);

  const filteredExames = exames.filter(
    (exame) =>
      exame.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exame.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- */}

        <div
          className={`bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 ${
            isMounted ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Meus Resultados de Exames
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            Acesse e faça o download dos seus exames radiológicos odontológicos
            de forma rápida e segura.
          </p>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Buscar por nome ou tipo de exame..."
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* --- */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExames.length > 0 ? (
            filteredExames.map((exame, index) => (
              <div
                key={exame.id}
                // Aplica a animação escalonada
                className={`bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out
                            ${isMounted ? "animate-fadeInItem" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }} // Atraso baseado no índice para efeito cascata
              >
                {exame.previewUrl ? (
                  <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                    <Image
                      src="/exames/AnalisesCefalometricas.webp"
                      width={300}
                      height={0}
                      alt={`Preview do exame ${exame.nome}`}
                      // layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-center p-4">
                    <p>
                      Preview não disponível. Exame em análise ou processamento.
                    </p>
                  </div>
                )}

                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {exame.nome}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Data:</span>{" "}
                    {new Date(exame.data).toLocaleDateString("pt-BR")}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <span className="font-semibold">Status:</span>{" "}
                    <span
                      className={`font-semibold ${
                        exame.status === "Disponível"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {exame.status}
                    </span>
                  </p>

                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    {exame.status === "Disponível" ? (
                      <>
                        <Link
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-150 ease-in-out"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Visualizar
                        </Link>
                        <Link
                          href="#"
                          download
                          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md transition duration-200 ease-in-out"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                            <path
                              fillRule="evenodd"
                              d="M10 2a1 1 0 011 1v9a1 1 0 11-2 0V3a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Download
                        </Link>
                      </>
                    ) : (
                      <span className="text-gray-500 italic">
                        Aguardando liberação
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-700 text-lg">
                Nenhum exame encontrado. Tente ajustar sua busca.
              </p>
            </div>
          )}
        </div>

        {/* --- */}

        <div
          className={`mt-10 bg-white rounded-lg shadow-lg p-6 md:p-8 ${
            isMounted ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Informações Importantes
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Para visualizar os exames, certifique-se de ter um visualizador de
              imagens compatível.
            </li>
            <li>
              Os arquivos de download podem estar em formato `.zip` e conter
              diversas imagens e laudos.
            </li>
            <li>
              Em caso de dúvidas sobre seus resultados, entre em contato com
              nossa central de atendimento.
            </li>
            <li>
              Exames com status "Em Análise" serão liberados em breve. Você será
              notificado por e-mail.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
