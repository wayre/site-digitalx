"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useScreenOrientation } from "@/hooks/useScreenOrientation";
import HeroLinks from "./hero-links";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [currentSubPhrase, setCurrentSubPhrase] = useState(""); // Mantém a string do subtítulo
  const [displayedText, setDisplayedText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const isLandscape = useScreenOrientation();
  const [isMounted, setIsMounted] = useState(false);

  const slides = [
    "/cover-bg-1.webp",
    "/cover-bg-2.webp",
    "/cover-bg-3.webp",
    "/cover-bg-4.webp",
    "/cover-bg-5.webp",
  ];

  const impactPhrases = [
    "Precisão em cada diagnóstico",
    "Tecnologia avançada \npara sua saúde",
    "Exames radiológicos \nde excelência",
    "Resultados confiáveis, \ncuidado especializado",
  ];

  const subtitles = [
    "A clareza que seu sorriso merece.",
    "Imagens de alta definição para um tratamento seguro.",
    "Detalhes que fazem a diferença na sua saúde bucal.",
    "A segurança e a atenção que você e seu dentista precisam.",
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setCurrentPhrase((prev) => (prev + 1) % impactPhrases.length);
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length); // Atualiza o índice do subtítulo
      setDisplayedText("");
      setShowSubtitle(false);
      setShowButton(false);
    }, 10000);

    return () => clearInterval(slideInterval);
  }, [slides.length, impactPhrases.length, subtitles.length]);

  // Efeito para atualizar a string currentSubPhrase quando o índice ou os subtítulos mudarem
  useEffect(() => {
    if (subtitles.length > 0) {
      // Garante que o índice esteja dentro dos limites, embora o % deva cuidar disso.
      const newIndex = currentSubtitleIndex % subtitles.length;
      setCurrentSubPhrase(subtitles[newIndex]);
    } else {
      setCurrentSubPhrase(""); // Define como vazio se não houver subtítulos
    }
  }, [currentSubtitleIndex, subtitles]);

  useEffect(() => {
    const phrase = impactPhrases[currentPhrase];
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < phrase.length) {
        setDisplayedText(phrase.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowSubtitle(true);
          setTimeout(() => {
            setShowButton(true);
          }, 800);
        }, 1000);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, [currentPhrase]);

  const handleCTAClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative w-full bg-[#415462]">
        <section
          id="home"
          className={cn(
            "relative flex items-center pt-16 overflow-hidden max-w-[1920px] mx-auto shadow-md",
            isMounted && isLandscape ? "min-h-[600px]" : "min-h-[78vh]"
          )}
        >
          {/* Background Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
              style={{
                backgroundImage: `url('${slide}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          {/* box text */}
          <div
            className={cn(
              "absolute inset-0 flex items-end sm:items-center pb-[22vh] sm:pb-0 scroll-pb-6",
              isMounted && isLandscape
                ? "justify-start pl-[13vw] sm:pl-[3vw]"
                : "justify-center sm:justify-start"
            )}
          >
            {/* <div className="w-full sm:w-5/6 min-h-[50vh] flex flex-col pt-[10vh] mx-auto text-center md:text-left p-2 gap-0  bg-[url('/bg-hero-text.webp')] bg-cover sm:bg-contain bg-no-repeat bg-center"> */}
            <div
              className={cn(
                "flex flex-col p-2 z-20 gap-1",
                isMounted && isLandscape
                  ? "sm:w-4/6 text-left sm:pl-[10%] md:pl-[15%] pt-[10vh]"
                  : "sm:w-5/6 text-center sm:text-left sm:pl-24 md:pl-32 lg:pl-[20%]"
              )}
            >
              <h1
                className={cn(
                  "text-[#20383B] flex font-semibold",
                  isMounted && isLandscape
                    ? "text-2xl sm:text-3xl md:text-4xl justify-start"
                    : "text-3xl justify-center sm:justify-start"
                )}
              >
                {/* {displayedText} */}
                {displayedText.split("\n").map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>

              <p
                className={cn(
                  "text-xl md:text-1xl text-[#20383B] transition-all duration-400 transform tracking-tight",
                  isMounted && isLandscape ? "sm:pr-[10vw]" : "px-8 sm:px-0",
                  showSubtitle
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                {currentSubPhrase}
              </p>

              <div
                className={`pt-2 transition-all duration-400 transform ${
                  showButton
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Button
                  onClick={() => handleCTAClick("contato")}
                  className="bg-[#078080] hover:bg-[#066666] text-white font-semibold py-4 px-8 text-lg group"
                  size="lg"
                >
                  Agendar Agora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            {/* bg-hero-text */}
            <div className="absolute inset-0 top-0 left-0 right-0 bg-[url('/bg-hero-text.webp')] bg-auto bg-bottom sm:bg-cover bg-no-repeat z-10"></div>
          </div>

          {/* Wave shape divider */}
          {/* <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#ffffff"
          >
            <path d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div> */}
        </section>

        {/* button colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1920px] mx-auto">
          <div className="flex items-center justify-center px-6 py-4 text-white bg-lime-500 lg:min-h-0">
            <Link
              href="/requisicao-digital_x.pdf"
              target="_blank"
              // className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
              className={cn(
                "flex flex-row items-left justify-center gap-4 transform",
                "hover:scale-105 transition-transform duration-300"
              )}
            >
              {/* icon */}
              <div className="relative flex-shrink-0 pt-[16px]">
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
                  className="absolute top-[12px] -left-1 text-lime-200"
                >
                  <path d="M12 17V3" />
                  <path d="m6 11 6 6 6-6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] sm:text-[16px] tracking-tighter font-semibold leading-4">
                  Requisições de Exames
                </h3>
                <div className="mt-2">
                  <span className="bg-lime-100 text-lime-800 text-[10px] sm:text-sm] font-bold px-4 py-0.5 sm:py-1 rounded-full shadow-md whitespace-nowrap">
                    Baixar Agora
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center px-6 py-4 text-white bg-blue-700 lg:min-h-0">
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
                <h3 className="text-base sm:text-[16px] tracking-tighter font-semibold leading-4">
                  Agendamento de Exames
                </h3>
                <p className="text-[10px] lg:text-[12px] tracking-tight sm:tracking-tight opacity-80">
                  Marque sua consulta!
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center px-6 py-4 text-white bg-sky-600 lg:min-h-0">
            <Link
              href="#"
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
                <h3 className="text-base sm:text-[16px] tracking-tighter font-semibold leading-4">
                  Resultados Online
                </h3>
                <p className="text-[10px] lg:text-[12px] tracking-tight sm:tracking-tight opacity-80">
                  Acesse os resultados do exame
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center px-6 py-4 text-white bg-teal-500 lg:min-h-0">
            <Link
              href="#"
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
                <h3 className="text-base sm:text-[16px] tracking-tighter font-semibold leading-4">
                  Central de Ajuda
                </h3>
                <p className="text-[10px] lg:text-[12px] tracking-tight sm:tracking-tight opacity-80">
                  Tire suas dúvidas
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
