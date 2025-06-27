"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-0">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src={cn(
                  isScrolled
                    ? "/logo-digitalx-black.webp"
                    : "/logo-digitalx-white.webp"
                )}
                alt="logo DigitalX"
                height={120}
                width={0}
                sizes="100vw"
                // style={{ width: "auto", height: 120 }}
                className={cn("w-auto h-28 m-2", isScrolled ? "h-14" : "h-20")}
              />{" "}
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`font-opensans transition-colors ${
                isScrolled
                  ? "text-digital-blue hover:text-[#7aaebe]"
                  : "text-white hover:text-[#7aaebe]"
              }`}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`font-opensans transition-colors ${
                isScrolled
                  ? "text-digital-blue hover:text-[#7aaebe]"
                  : "text-white hover:text-[#7aaebe]"
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className={`font-opensans transition-colors ${
                isScrolled
                  ? "text-digital-blue hover:text-[#7aaebe]"
                  : "text-white hover:text-[#7aaebe]"
              }`}
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("parceria")}
              className={`font-opensans transition-colors ${
                isScrolled
                  ? "text-digital-blue hover:text-[#7aaebe]"
                  : "text-white hover:text-[#7aaebe]"
              }`}
            >
              Parceria
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contato")}
            className={cn(
              "bg-[#39af7a] hover:bg-green-600 text-white px-6 py-2 font-opensans font-semibold",
              isScrolled ? "text-white" : "text-digital-blue"
            )}
          >
            Contato
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
