"use client";

import { useEffect } from "react";

export default function WhatsappRedirectPage() {
  useEffect(() => {
    window.location.href =
      "https://api.whatsapp.com/send?phone=5567992767508&text=Olá,%20vim%20do%20site%20da%20DigitalX%20e%20gostaria%20de%20fazer%20alguns%20exames%20solicitados%20pelo%20meu%20dentista.";
  }, []);

  // Como o redirect() interrompe a renderização,
  // nada abaixo dele será executado ou renderizado.
  // Você pode até retornar null.
  return null;
}
