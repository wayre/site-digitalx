"use client";

import React from "react";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/button";
import { User, Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link"; // Mantém esta importação
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Nova importação para obter o caminho da URL
import path from "path";

const HeaderInternas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0); // To store the last scroll position

  const pathname = usePathname(); // Obtém o caminho da URL atual
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsScrolled(false); // Not scrolled when at the very top
        setHeaderVisible(true); // Always visible at the top
      } else {
        setIsScrolled(currentScrollY > 20); // Considered "scrolled" if past 20px (for bg/shadow)

        const scrollDelta = currentScrollY - lastScrollY.current;

        if (scrollDelta > 10) {
          // Scrolled down more than 10px
          setHeaderVisible(false);
        } else if (scrollDelta < -5) {
          // Scrolled up more than 5px (to avoid jitter)
          setHeaderVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    // Initialize lastScrollY and call handleScroll on mount
    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array, effect runs once.

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "sobre", label: "DIGITAL X" },
    { id: "exames", label: "EXAMES" },
    { id: "servicos", label: "SERVIÇOS" },
    { id: "convenios", label: "CONVÊNIOS" },
    { id: "central-de-ajuda", label: "CENTRAL DE AJUDA" },
    { id: "contato", label: "CONTATO" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed w-full transform-3d text-[#0a3c44] bg-white flex items-center justify-center flex-col z-30 transition-all ease-out duration-300",
          // Animation for hide/show
          headerVisible ? "translate-y-0" : "-translate-y-[200%]",
          // Styling for scrolled state (e.g., background, shadow)
          isScrolled
            ? "bg-white shadow-md backdrop-blur-sm bg-white/80"
            : "bg-white shadow-none backdrop-blur-none"
        )}
      >
        {/* barra superior */}
        {/* <div className="hidden sm:flex w-full text-[13px] bg-[#35555C] text-[#8EAAB0] flex-row justify-center py-2">
        Referência em Exames de Imagem Odontologica em Campo Grande /MS
      </div> */}

        <div className="w-full grid grid-cols-[90px_1fr_70px] px-2 py-2 max-w-[1280px] mx-auto">
          <div></div>
          {/* nav */}
          <div className="flex flex-col justify-center items-center">
            <Link href="/" className="font-bold">
              <Image
                src="/logo-digitalx.svg"
                alt="Digital X"
                width={110}
                height={55}
                className="min-w-[90px] mb-1.5"
              />
            </Link>
            <div className="flex flex-col items-center justify-end">
              <nav className="hidden sm:block">
                <ul className="flex space-x-2 md:space-x-2 justify-center items-center gap-1">
                  {navLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/${item.id}`} // Garante que o href seja um caminho absoluto
                        className={cn(
                          "uppercase text-[12px] md:text-[13px] font-bold tracking-tighter",
                          // pathname === `/${item.id}`
                          pathname.includes(item.id)
                            ? "text-cyan-500"
                            : "text-black hover:text-cyan-300" // Aplica a classe 'text-cyan-500' se for o link ativo
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* icons */}
          <div className="flex flex-row gap-1.5 justify-end items-end pb-1 z-50 pr-1">
            {/* facebook button */}
            <Link
              href="/facebook"
              target="_blank"
              className="text-teal-700 hover:text-cyan-700"
            >
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
                className="lucide lucide-facebook-icon lucide-facebook w-5 h-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>

            {/* instagram button */}
            <Link
              href="/instagram"
              target="_blank"
              className="text-teal-700 hover:text-red-600"
            >
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
                className="lucide lucide-instagram-icon lucide-instagram w-5 h-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>

            <button
              onClick={toggleMenu}
              className="block sm:hidden focus:outline-none w-5 h-5 mb-0.5 flex-nowrap"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col p-8 pt-24 transform transition-transform duration-300 ease-in-out h-[100vh]",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/${link.id}`} // Garante que o href seja um caminho absoluto
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-xl font-medium transition-colors py-4",
                  pathname === `/${link.id}`
                    ? "text-digitalx-500 bg-gray-100"
                    : "text-gray-800 hover:text-digitalx-500 hover:bg-gray-100" // Aplica a classe se for o link ativo
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="h-[100px] sm:h-[100px]"></div>
    </>
  );
};

export default HeaderInternas;
