// /www/next-aula01/src/hooks/useScreenOrientation.ts
"use client";

import { useState, useEffect, useCallback } from "react";

const calculateIsLandscape = (): boolean => {
  // Retorna false no lado do servidor ou se window não estiver definido
  if (typeof window === "undefined") {
    return false;
  }
  return window.innerWidth > window.innerHeight;
};

export const useScreenOrientation = (): boolean => {
  const [isLandscape, setIsLandscape] = useState(calculateIsLandscape());

  const handleResize = useCallback(() => {
    setIsLandscape(calculateIsLandscape());
  }, []);

  useEffect(() => {
    // Adiciona o event listener apenas no cliente
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      // Opcional: 'orientationchange' pode ser útil para dispositivos móveis,
      // embora 'resize' geralmente cubra essa necessidade.
      // window.addEventListener('orientationchange', handleResize);

      // Remove o event listener ao desmontar o componente
      return () => {
        window.removeEventListener("resize", handleResize);
        // window.removeEventListener('orientationchange', handleResize);
      };
    }
  }, [handleResize]); // handleResize é memoizado com useCallback

  return isLandscape;
};
