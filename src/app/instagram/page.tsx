"use client";

import { useEffect } from "react";

export default function InstagramRedirectPage() {
  useEffect(() => {
    window.location.href = "https://www.instagram.com/digitalxms/";
  }, []);

  // Como o redirect() interrompe a renderização,
  // nada abaixo dele será executado ou renderizado.
  // Você pode até retornar null.
  return null;
}
