"use client";

import { useEffect } from "react";

export default function WhatsappRedirectPage() {
  useEffect(() => {
    window.location.href =
      "https://api.whatsapp.com/send?phone=5567992767508&text=Olá,%20gostaria%20de%20mais%20informações.";
  }, []);

  // Como o redirect() interrompe a renderização,
  // nada abaixo dele será executado ou renderizado.
  // Você pode até retornar null.
  return null;
}
