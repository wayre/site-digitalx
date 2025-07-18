"use client";

import React from "react";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/button";
import { User, Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const HeaderProtected = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0); // To store the last scroll position

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

  // DIGITAL X
  // EXAMES
  // SERVIÇOS
  // CONVÊNIOS
  // CENTRAL DE AJUDA
  // CONTATO
  const navLinks = [
    { id: "1", label: "HOME" },
    { id: "2", label: "PACIENTES" },
    { id: "3", label: "RESULTADOS" },
    { id: "4", label: "INFO" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed w-full text-[#0a3c44] bg-white flex items-end justify-center flex-col pb-1 sm:pb-4 z-30 transition-all ease-out duration-300",
          // Animation for hide/show
          headerVisible ? "translate-y-0" : "-translate-y-[200%]",
          // Styling for scrolled state (e.g., background, shadow)
          isScrolled ? "bg-white shadow-md" : "bg-white shadow-none"
        )}
      >
        {/* Top Section */}
        <div
          className={cn(
            "lfirst",
            styles.lfirst,
            isScrolled ? "sm:hidden" : "block"
          )}
        >
          <div className="w-[70px]"></div>

          {/* Center Text */}
          <div
            className={cn(
              "transition-all ease-out duration-300",
              isScrolled ? "sm:hidden" : "",
              "flex-1 text-center justify-center flex items-center"
            )}
          >
            {/* <p className="hidden sm:flex flex-col text-[#3b3b3b] tracking-tighter text-[11px] sm:text-[16px] p-2 sm:p-0 leading-3 sm:leading-4">
              Referência em
              <br className="" /> Exames de Imagens em Odontologia
              
            </p> */}
            <Link href="/" className="font-bold">
              <Image
                src="/logo-digitalx.svg"
                alt="Digital X"
                width={110}
                height={55}
                className="w-auto h-[60px]"
              />
            </Link>
          </div>

          {/* Social Icons */}
          <div
            className={cn(
              "transition-all ease-out duration-300 mb-1",
              "items-center space-x-1 w-[40px] justify-end z-50",
              isScrolled ? "flex sm:hidden" : "flex"
            )}
          >
            {/* <span className="text-[#0a3c44] text-[9px] hidden sm:block">
              Siga:{" "}
            </span> */}

            {/* facebook button */}
            <Link
              href="/facebook"
              target="_blank"
              className="text-cyan-700 hover:text-cyan-600"
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
                className="lucide lucide-facebook-icon lucide-facebook w-4 h-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>

            {/* instagram button */}
            <Link
              href="/instagram"
              target="_blank"
              className="text-red-800 hover:text-red-700"
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
                className="lucide lucide-instagram-icon lucide-instagram w-4 h-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>

            <button
              onClick={toggleMenu}
              className="block sm:hidden focus:outline-none"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div
          className={cn(
            "absolute w-full",
            isScrolled
              ? "-bottom-[12px] md:-bottom-[12px]"
              : "-bottom-[12px] md:-bottom-[12px]"
          )}
        >
          <nav
            className={cn(
              "navMenu hidden sm:block shadow-md",
              "mx-auto bg-[#08424A] border-t border-[#1a5a66] rounded-full relative",
              styles.navMenu,
              isScrolled ? "isScrolled" : ""
            )}
          >
            <div className="wayre mx-auto px-150 py-1 flex items-center justify-center">
              <ul className="flex space-x-0.5 md:space-x-2">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.id == "1" ? "/" : `#`}
                      className="uppercase tracking-wide text-white hover:text-cyan-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {/* <li>
                  <Link
                    href="#contato"
                    className={cn("bg-cyan-700 hover:bg-cyan-600", "ml-3")}
                  >
                    Solicitação de Exames
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/resultados-online"
                    className={cn(
                      "flex items-center justify-center border border-cyan-100 hover:bg-cyan-900"
                    )}
                  >
                    <User className="w-2.5 h-2.5" />
                    <span>Login</span>
                  </Link>
                </li> */}
              </ul>

              {/* <div className="absolute right-2 flex space-x-4">
            <Link href="#" className={cn("bg-cyan-700 hover:bg-cyan-600")}>
              Solicitação de Exame Online
            </Link>
            <Link
              href="#"
              className={cn("border border-cyan-300 hover:bg-cyan-900")}
            >
              <User className="w-3 h-3" />
              <span>Login</span>
            </Link>
          </div> */}
            </div>
          </nav>
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
                href={`${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium text-gray-800 hover:text-digitalx-500 hover:bg-gray-100 transition-colors py-4"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-6 w-full bg-digitalx-500 hover:bg-digitalx-600 text-white font-semibold"
            >
              <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                Solicitação de Exames
              </Link>
            </Button>
            <Button
              asChild
              className="mt-6 w-full bg-digitalx-500 hover:bg-digitalx-600 text-white font-semibold"
            >
              <Link
                href="/resultados-online"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      {/* <div className="h-[70px] sm:h-[76px]"></div> */}
    </>
  );
};

export default HeaderProtected;
