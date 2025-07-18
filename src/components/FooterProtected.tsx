"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024); // Initialize with a default year

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-base bg-gray-900 text-white pt-8 pb-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Digital X. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
