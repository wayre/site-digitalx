"use client";

import { useEffect } from "react";

export default function FacebookRedirectPage() {
  useEffect(() => {
    window.location.href = "https://www.facebook.com/digitalxms";
  }, []);

  // Como o redirect() interrompe a renderização,
  // nada abaixo dele será executado ou renderizado.
  // Você pode até retornar null.
  return null;
}
