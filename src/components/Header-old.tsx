"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ButtonSmall } from "@/components/ui/buttonSmall";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./Header";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Sempre mostra o header no topo
      if (currentPosition === 0) {
        setIsScrolled(false);
        setHeaderVisible(true);
        setScrollPosition(currentPosition);
        return;
      }

      setIsScrolled(currentPosition > 20);

      // Lógica de mostrar/ocultar header com base na direção
      if (currentPosition > scrollPosition) {
        // Scroll para baixo
        if (currentPosition - scrollPosition > 5) {
          setHeaderVisible(false);
        }
      } else {
        // Scroll para cima
        if (scrollPosition - currentPosition > 5) {
          setHeaderVisible(true);
        }
      }

      setScrollPosition(currentPosition);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setIsMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "sobre", label: "Digital X" },
    { id: "exames", label: "Exames" },
    { id: "convenios", label: "Convênios" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <>
      <SiteHeader />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col",
          headerVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-95",
          isScrolled
            ? "bg-digitalx-transp shadow-md backdrop-blur"
            : "bg-transparent"
        )}
      >
        {/* HEADER PRINCIPAL COM NAV */}
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={() => handleLinkClick("home")}
              className="animate-fade-in"
            >
              <h1
                className={cn(
                  "font-bold transition-colors duration-300 flex items-center",
                  isScrolled || isMenuOpen
                    ? "text-digitalx-700"
                    : "text-digitalx-700"
                )}
              >
                <span className="text-3xl mr-1">
                  {isScrolled ? (
                    <Image
                      src="/logo-digitalx-black.webp"
                      alt="logo DigitalX"
                      height={55}
                      width={0}
                      sizes="100vw"
                      style={{ width: "auto", height: 55 }}
                      className="min-w-[130px] m-2"
                    />
                  ) : (
                    <Image
                      src="/logo-digitalx-white.webp"
                      alt="logo DigitalX"
                      height={55}
                      width={0}
                      sizes="100vw"
                      style={{ width: "auto", height: 55 }}
                      className="min-w-[130px] m-2"
                    />
                  )}
                </span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={cn(
              "hidden sm:flex items-center animate-fade-in mx-0.5 gap-2"
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={cn(
                  "nav-link p-1 px-1 whitespace-nowrap font-bold tracking-tighter uppercase",
                  activeLink === link.id ? "active" : "",
                  isScrolled
                    ? "text-gray-900 hover:text-gray-950"
                    : "text-gray-300 hover:text-gray-200"
                )}
              >
                {link.label}
              </a>
            ))}
            <ButtonSmall
              onClick={() => handleLinkClick("contato")}
              variant="outline"
              className={cn(
                "text-[11px] h-7 bg-transparent text-gray-300 border-gray-500 uppercase",
                isScrolled ? "bg-gray-300 text-gray-900" : ""
              )}
            >
              <span>Resultado Online</span>
            </ButtonSmall>
          </nav>

          {/* Mobile Menu Button */}
          <div
            className={cn(
              "sm:hidden flex items-center space-x-5 font-bold",
              isScrolled ? "text-gray-600" : "text-gray-400"
            )}
          >
            <a
              href="tel:(67) 3028-2890"
              className="flex items-center hover:text-gray-200"
            >
              <Phone size={18} className="mr-1" />
              <span className="text-sm">(67) 3028-2890</span>
            </a>
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col p-8 pt-24 transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className="text-xl font-medium text-gray-800 hover:text-digitalx-500 transition-colors py-4"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => handleLinkClick("contato")}
              className="mt-6 w-full bg-digitalx-500 hover:bg-digitalx-600 text-white font-semibold"
            >
              Agende seu Exame
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderOld;
