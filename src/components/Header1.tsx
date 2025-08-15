"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { User, Menu, X, PhoneIcon, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0); // To store the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY === 0);

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
    // { id: "", label: "HOME" },
    { id: "sobre", label: "SOBRE" },
    { id: "exames", label: "EXAMES" },
    { id: "downloads", label: "DOWNLOADS" },
    { id: "convenios", label: "CONVÊNIOS" },
    { id: "duvidas-frequentes", label: "SAC" },
    { id: "contato", label: "CONTATO" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed w-full text-[#0a3c44] bg-white flex items-end justify-center flex-col z-30 transition-all ease-out duration-300",
          headerVisible ? "translate-y-0" : "-translate-y-[200%]",
          isScrolled ? "bg-white shadow-md" : "bg-white shadow-none"
        )}
      >
        {/* barra endereco */}
        <div
          className={cn(
            "flex flex-row",
            "flex-row justify-center md:justify-center items-center w-full text-xs py-2 px-3 border-b-gray-200 border-b max-w-[1480px] m-auto",
            isAtTop ? "hidden md:flex" : "hidden"
          )}
        >
          <div className="hidden md:flex flex-row items-center justify-center tracking-tighter text-gray-500">
            <MapPin className="h-3 w-3 ml-2 mr-1" />
            <div className="mt-[2px]">
              R. Treze de Junho, 499 - Campo Grande/MS
            </div>
            <PhoneIcon className="h-3 w-3 ml-2 mr-1" />
            <div className="mt-[2px]">(67) 3028-2890</div>
          </div>
        </div>

        {/* Main Menu */}
        <div
          className={cn(
            "flex flex-row w-full max-w-[1480px] m-auto px-4 sm:px-6 pb-2",
            isScrolled ? "mt-4" : "mt-6"
          )}
        >
          {/* nav menu */}
          <nav
            className={cn(
              "transition-all ease-out duration-300",
              "w-full text-center justify-between flex items-center font-bold text-base text-gray-900 uppercase tracking-wide whitespace-nowrap"
            )}
          >
            {/* logo */}
            <Link
              href="/"
              className={cn("font-bold z-50", isScrolled ? "" : "md:hidden")}
            >
              <Image
                src="/logo-digitalx.svg"
                alt="Digital X"
                width={110}
                height={55}
                className="w-auto h-[60px] mx-4"
              />
            </Link>

            {/* navLinks */}
            <div className="hidden md:block tracking-normal">
              <ul className="flex text-[12px]">
                {navLinks.map((item) => (
                  <li key={item.id} className="flex items-center">
                    <Link
                      href={`/${item.id}`}
                      className="hover:text-gray-700 border-y-2 border-transparent hover:border-gray-300 transition-all duration-[1600ms] py-1 px-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* buttons rapidos */}
            <div className="md:w-[160px] lg:w-auto flex flex-row gap-2 uppercase leading-3 text-[10px] flex-wrap md:flex-nowrap justify-end mr-4 sm:mr-0">
              <Link
                href="/solicitacao-online"
                className="bg-[#1AFBFF] hover:bg-[#36d7da] py-1 px-3 rounded-md"
              >
                Solicitação Online
              </Link>
              <Link
                href="http://189.7.79.145:8090/account/login"
                target="_blank"
                className="bg-[#1AFBFF] hover:bg-[#36d7da] py-1 px-3 rounded-md"
              >
                Acessar Exames
              </Link>
            </div>

            <button
              onClick={toggleMenu}
              className="block md:hidden focus:outline-none z-50 mr-3"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
              <Link
                href="#solicitacao-online"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitação Online
              </Link>
            </Button>
            <Button
              asChild
              className="mt-6 w-full bg-digitalx-500 hover:bg-digitalx-600 text-white font-semibold"
            >
              <Link
                href="http://189.7.79.145:8090/account/login"
                onClick={() => setIsMenuOpen(false)}
              >
                Acessar Exames
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      {/* <div className="h-[70px] sm:h-[76px]"></div> */}
    </>
  );
};

export default Header1;
