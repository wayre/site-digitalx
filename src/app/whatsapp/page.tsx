"use client";

import { useEffect } from "react";

export default function WhatsappRedirectPage() {
  useEffect(() => {
    window.location.href =
      "https://api.whatsapp.com/send?phone=6730282890&text=Ol%C3%A1%2C%20vim%20do%20site%20da%20DigitalX%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
  }, []);

  // Como o redirect() interrompe a renderização,
  // nada abaixo dele será executado ou renderizado.
  // Você pode até retornar null.
  return null;
}
