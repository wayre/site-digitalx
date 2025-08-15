import Image from "next/image";
import Link from "next/link";
import { Bold, Phone } from "lucide-react";

function Aside() {
  return (
    <section className="w-full bg-[#DBE1DA] mt-3 md:-mt-20 px-6 py-8 z-20">
      {/* Diagnóstico por imagem */}
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

      <div className="flex justify-center gap-4 flex-col">
        <Image
          src="/dentista-e-paciente.webp"
          alt="Profissional da saúde sorrindo em um consultório"
          width={1103}
          height={759}
          className="h-full w-auto object-cover min-h-[230px] sm:min-h-full rounded-md"
          priority
        />

        {/* Diferenciais */}
        <div className="bg-white bg-opacity-25  p-4 rounded-md shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 text-center">
            Por que escolher a Digital X?
          </h3>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1 marker:text-gray-400">
            <li>Equipamentos de última geração</li>
            <li>Equipe especializada</li>
            <li>Laudos rápidos e precisos</li>
          </ul>
        </div>

        {/* Serviços mais procurados */}
        <div className="bg-white bg-opacity-25  p-4 rounded-md shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 text-center">
            Exames mais procurados
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-700 text-center">
            <li>Tomografia Computadorizada 3D</li>
            <li>Radiografia Panorâmica</li>
            <li>Telerradiografia</li>
            <li>Escaneamento Intraoral</li>
          </ul>
          <div className="text-center mt-2">
            <Link
              href="/exames"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Ver todos os exames ›
            </Link>
          </div>
        </div>

        {/* Convênios */}
        <div className="bg-white bg-opacity-25 p-4 rounded-md shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 text-center">
            Convênios Atendidos
          </h3>
          <p className="mt-1 text-sm text-gray-700 text-center">
            Consulte a lista completa de convênios disponíveis.
          </p>
          <div className="text-center mt-2">
            <Link
              href="/convenios"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Ver convênios ›
            </Link>
          </div>
        </div>

        {/* Horário de atendimento */}
        <div className="flex flex-col gap-1 mt-6 text-center text-sm">
          <h5 className="text-base font-semibold">HORÁRIO DE ATENDIMENTO</h5>
          <div className="bg-white bg-opacity-25  p-2 rounded-md text-sm pt-3">
            <b>Segunda a Sexta</b> 08:00 às 18:00 <br />
            <small>(Horario de almoço: 12h as 13h)</small>
          </div>
          <div className="bg-white bg-opacity-25  p-2 rounded-md text-sm pt-3">
            <b>Aos Sábados</b> 08:00 às 12:00
          </div>
        </div>

        {/* Telefone */}
        <Link href="tel:6730282890">
          <div className="flex items-center space-x-2 justify-center mt-3">
            <Phone className="h-6 w-6 text-[#1E5B94]" />
            <p className="text-[#555555] font-medium">(67) 3028 2890</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Aside;
