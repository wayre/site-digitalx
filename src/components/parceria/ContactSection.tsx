"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [action, setAction] = useState<{
    url: string;
    target: "_self" | "_blank";
  } | null>(null);

  useEffect(() => {
    if (action) {
      window.open(action.url, action.target);
      // Reseta a ação para permitir que seja disparada novamente
      setAction(null);
    }
  }, [action]);

  return (
    <section
      id="contato"
      className="py-20 bg-medical-green relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          {/* Título em branco conforme especificado */}
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Eleve Seus Resultados com a Digital X.
            <br />
            <span className="text-green-100">Comece Hoje!</span>
          </h2>
          <p className="font-opensans text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Agende uma demonstração gratuita e conheça nossa plataforma
            exclusiva para dentistas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          {/* Button 1: Borda branca, texto branco */}
          <Button
            onClick={() =>
              setAction({ url: "tel:6730282890", target: "_self" })
            }
            variant="outline"
            className="border-2 border-white text-stone-800 hover:bg-white hover:text-medical-green px-8 py-4 text-lg font-opensans font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            📞 Ligue Agora: (67) 3028-2890
          </Button>
          {/* Button 2: Fundo branco, texto verde */}
          <Button
            onClick={() =>
              setAction({
                url: "mailto:parcerias@digitalx.com.br",
                target: "_self",
              })
            }
            className="bg-white text-medical-green hover:bg-gray-100 px-8 py-4 text-lg font-opensans font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            📧 Envie um E-mail
          </Button>
        </div>

        <div className="text-center">
          <p className="font-opensans text-green-100 mb-4">
            Ou fale conosco pelo WhatsApp:
          </p>
          <Button
            onClick={() =>
              setAction({ url: "https://wa.me/556730282890", target: "_blank" })
            }
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-opensans font-semibold transition-all duration-300 hover:scale-105"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
