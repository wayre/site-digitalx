import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

function Aside() {
  return (
    <section className="w-full bg-[#DBE1DA] mt-3 md:-mt-20 px-6 py-8 z-20">
      {/* diagnostico por imagem */}
      <div className="flex gap-2 flex-col text-2xl lg:text-3xl font-bold text-center mb-8 leading-7">
        Diagnóstico por Imagem de Alta Resolução
        <span className="text-base leading-4 font-semibold">
          Referência em Exames de Imagens em Odontologia
        </span>
        <Link
          href="/whatsapp"
          target="_blank"
          className="bg-[#078080] py-2 px-4 text-sm text-white rounded-md"
        >
          Agende seu Exame
        </Link>
      </div>

      {/* seja parceiro aside */}
      <div className="flex justify-center gap-2 flex-col">
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
        {/* Coluna Esquerda: Conteúdo de Texto */}
        <div className="flex flex-col justify-center max-w-[550px] gap-1">
          <h3 className="text-2xl md:text-[14px] text-center tracking-tight font-light text-gray-800 leading-tight">
            Seja parceiro da Digital X e dedique-se ao que realmente importa: o
            sorriso dos seus pacientes!
          </h3>
        </div>

        {/* horario de atendimento */}
        <div className="flex flex-col gap-1 mt-8 text-center text-sm">
          <h5 className="text-base text-center">HORÁRIO DE ATENDIMENTO</h5>
          <div className="bg-[#E6E6E6] p-2 rounded-md text-sm">
            Estamos abertos de:
            <br />
            Segunda a Sexta
            <br />
            08:00 às 18:00
          </div>
          <span className="block text-gray-700 tracking-tight">
            E também aos <b>Sábado</b> as 9h às 13h
          </span>
        </div>

        {/* Telefone */}
        <Link href="tel:6730282890">
          <div className="flex items-start space-x-4 justify-center mt-3">
            <Phone className="h-6 w-6 text-[#1E5B94]" />
            <p className="text-[#555555]">(67) 3028 2890</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Aside;
