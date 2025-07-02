"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import WhatsappIcon from "./ui/whatsapp-icon";
import Link from "next/link";

export default function WhatsButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Exibe o botão se o scroll for maior que 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", toggleVisibility);

    // Remove o listener quando o componente for desmontado para evitar memory leaks
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out hover:scale-110",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <Link href="/whatsapp" target="_blank" className="rounded-full w-14 h-14">
        <WhatsappIcon />
      </Link>
    </div>
  );
}
