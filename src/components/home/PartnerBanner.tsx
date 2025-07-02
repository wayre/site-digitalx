import Image from "next/image";
import Link from "next/link";

const PartnerBanner = () => {
  return (
    // Container principal com a cor de fundo solicitada (usando valor arbitrário do Tailwind)
    <section className="bg-[#DBE1DA]">
      <div className="container mx-auto">
        {/* Grid responsivo:
          - 1 coluna em telas pequenas (padrão)
          - 2 colunas em telas grandes (lg) e superiores
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Coluna Esquerda: Conteúdo de Texto */}
          <div className="flex flex-col justify-center p-8 lg:p-16 max-w-[550px] lg:max-w-max  mx-auto">
            <span className="mb-2 text-center sm:text-left">
              Você dentista,
            </span>
            <h2 className="text-2xl md:text-2xl tracking-tight font-light text-gray-800 leading-tight text-center sm:text-left">
              Seja parceiro da Digital X e dedique-se ao que realmente importa:
              o sorriso dos seus pacientes!
            </h2>
            <p className="mt-4 text-gray-700 text-center sm:text-left">
              Entre em contato com nossa Central de Atendimento no telefone (57)
              3026-2890 para cadastrar suas informações.
            </p>
            <div className="mt-8 flex flex-row justify-center sm:justify-start">
              <Link
                href="/parceria"
                // Botão com a cor de fundo customizada e efeito de transição
                className="bg-[#A5CC3A] hover:bg-[#8eb32d] text-gray-900 font-bold tracking-wider uppercase text-sm px-8 py-3 rounded-lg shadow-md transition-colors duration-300"
              >
                Seja Parceiro
              </Link>
            </div>
          </div>

          {/* Coluna Direita: Imagem */}
          {/* A imagem é ocultada em telas pequenas (hidden) e exibida a partir de 'lg' */}
          <div className="order-first flex justify-center">
            <Image
              src="/partnerBanner.webp"
              alt="Profissional da saúde sorrindo em um consultório"
              // layout="fill"
              // objectFit="cover"
              // A prioridade na otimização da imagem pode ser útil para o LCP
              width={1103}
              height={759}
              className="h-full w-auto object-cover min-h-[230px] sm:min-h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanner;
