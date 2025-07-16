import { cn } from "@/lib/utils";
import Link from "next/link";

function HeroButtonColors() {
  return (
    <>
      {/* button colors */}
      <div className="w-full h-auto sm:h-[168px] md:max-h-[80px] grid grid-cols-2 md:grid-cols-4 max-w-[1920px] mx-auto">
        <div className="flex items-center justify-center px-6 sm:px-2 py-4 text-white bg-lime-500 lg:min-h-0">
          <Link
            href="/requisicao-digital_x.pdf"
            target="_blank"
            // className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
            className={cn(
              "flex flex-row items-center justify-center gap-2 transform",
              "hover:scale-105 transition-transform duration-300"
            )}
          >
            {/* icon */}
            <div className="relative flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-80"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute -top-[6px] -left-1 text-lime-200"
              >
                <path d="M12 17V3" />
                <path d="m6 11 6 6 6-6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[15px] font-bold uppercase lg:normal-case md:text-[17px] tracking-tight sm:font-semibold leading-4 md:tracking-tighter">
                Requisições de Exames
              </h3>
              <p className="hidden sm:block md:hidden lg:block mt-1 text-[12px] sm:text-[14px] tracking-tight sm:tracking-tight opacity-80 leading-3">
                Faça o download do arquivo.
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center px-6 sm:px-2 py-4 text-white bg-blue-700 lg:min-h-0">
          <Link
            href="https://api.whatsapp.com/send?phone=6730282890&text=Ol%C3%A1%2C%20vim%20do%20site%20da%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            className={cn(
              "flex items-center justify-center gap-4 transform",
              "hover:scale-105 transition-transform duration-300 "
            )}
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-search-icon lucide-calendar-search"
              >
                <path d="M16 2v4" />
                <path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" />
                <path d="m22 22-1.875-1.875" />
                <path d="M3 10h18" />
                <path d="M8 2v4" />
                <circle cx="18" cy="18" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase lg:normal-case md:text-[17px] tracking-tight sm:font-semibold leading-4 md:tracking-tighter">
                Agendamento de Exames
              </h3>
              <p className="hidden sm:block md:hidden lg:block mt-1 text-[12px] sm:text-[14px] tracking-tight sm:tracking-tight opacity-80 leading-3">
                Marque sua consulta!
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center px-6 sm:px-2 py-4 text-white bg-sky-600 lg:min-h-0">
          <Link
            href="/resultados-online"
            className={cn(
              "flex items-center justify-center gap-4 transform",
              "hover:scale-105 transition-transform duration-300"
            )}
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-check2-icon lucide-file-check-2"
              >
                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="m3 15 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase lg:normal-case md:text-[17px] tracking-tight sm:font-semibold leading-4 md:tracking-tighter">
                Resultados Online
              </h3>
              <p className="hidden sm:block md:hidden lg:block mt-1 text-[12px] sm:text-[14px] tracking-tight sm:tracking-tight opacity-80 leading-3">
                Resultados do exame
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center px-6 sm:px-2 py-4 text-white bg-teal-500 lg:min-h-0">
          <Link
            href="/central-de-ajuda"
            className={cn(
              "flex items-center justify-center gap-4 transform",
              "hover:scale-105 transition-transform duration-300"
            )}
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle-question-icon lucide-message-circle-question"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-bold uppercase lg:normal-case md:text-[17px] tracking-tight sm:font-semibold leading-4 md:tracking-tighter">
                Dúvidas Frequentes
              </h3>
              <p className="hidden sm:block md:hidden lg:block mt-1 text-[12px] sm:text-[14px] tracking-tight sm:tracking-tight opacity-80 leading-3">
                Tire suas dúvidas
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroButtonColors;
