"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contato() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative h-52 flex items-center overflow-hidden bg-[#1E5B94]">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for background image */}
          <div className="w-full h-full bg-gradient-to-r from-[#1E5B94] to-[#3AADA8] opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Entre em Contato
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl">
            Estamos à disposição para atendê-lo
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#333333] animate-fade-in">
            Informações de Contato
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E5F1FB] p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#1E5B94]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#333333] mb-2">
                      Endereço
                    </h3>
                    <p className="text-[#555555]">
                      R. Treze de Junho, 499 - Centro
                    </p>
                    <p className="text-[#555555]">Campo Grande - MS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E5F1FB] p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#1E5B94]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#333333] mb-2">
                      Telefone
                    </h3>
                    <Link href="tel:6730282890">
                      <p className="text-[#555555]">(67) 3028 2890</p>
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E5F1FB] p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#1E5B94]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#333333] mb-2">
                      E-mail
                    </h3>
                    <p className="text-[#555555]">contato@digitalxms.com.br</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-medium text-[#333333] mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-[#555555]">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-[#555555]">Sábado: 8h às 12h</p>
                </div>

                <div className="pt-6">
                  <Button asChild className="bg-[#25D366] hover:bg-[#20BD5A]">
                    <Link href="/whatsapp" target="_blank">
                      Agendar Consulta
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-[#E5F1FB] h-full min-h-[300px] rounded-lg flex items-center justify-center">
                {/* Placeholder for map */}
                <div className="text-[#1E5B94] text-center h-full w-full hover:cursor-pointer transform-gpu hover:scale-105 transition-transform duration-300 ">
                  <Link href={"/mapa"} target="_blank">
                    <Image
                      width={1530}
                      height={616}
                      src="/mapa.webp"
                      className="w-full h-full object-cover"
                      alt="Mapa Digital X"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#333333]">
            Envie uma Mensagem
          </h2>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#555555] mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#555555] mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#555555] mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#555555] mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#555555] mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>

              <div>
                <Button className="w-full bg-[#1E5B94] hover:bg-[#174A7A]">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
