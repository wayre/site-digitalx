"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contato() {
  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden bg-[#1E5B94]">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Placeholder for background image */}
          <div className="w-full h-full bg-gradient-to-r from-[#1E5B94] to-[#3AADA8] opacity-80"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Entre em Contato
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Estamos à disposição para atendê-lo
          </motion.p>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-12 text-[#333333]"
            variants={itemVariants}
          >
            Informações de Contato
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E5F1FB] p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#1E5B94]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#333333] mb-2">Endereço</h3>
                    <p className="text-[#555555]">R. Treze de Junho, 499 - Centro</p>
                    <p className="text-[#555555]">Campo Grande - MS</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E5F1FB] p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#1E5B94]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#333333] mb-2">Telefone</h3>
                    <p className="text-[#555555]">(67) 3028 2890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E5F1FB] p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#1E5B94]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#333333] mb-2">E-mail</h3>
                    <p className="text-[#555555]">contato@digitalxms.com.br</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-xl font-medium text-[#333333] mb-2">Horário de Funcionamento</h3>
                  <p className="text-[#555555]">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-[#555555]">Sábado: 8h às 12h</p>
                </div>
                
                <div className="pt-6">
                  <Button asChild className="bg-[#25D366] hover:bg-[#20BD5A]">
                    <Link href="https://wa.me/5567XXXXXXXX">Agendar Consulta</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-[#E5F1FB] h-full min-h-[300px] rounded-lg flex items-center justify-center">
                {/* Placeholder for map */}
                <div className="text-[#1E5B94] text-center">
                  <div className="text-5xl font-light mb-2">Mapa</div>
                  <p className="text-lg">Google Maps embed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Contact Form Section */}
      <motion.section 
        className="py-16 bg-[#F5F5F5]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-12 text-[#333333]"
            variants={itemVariants}
          >
            Envie uma Mensagem
          </motion.h2>
          
          <motion.div 
            className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#555555] mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#555555] mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#555555] mb-1">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#555555] mb-1">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5B94] focus:border-transparent"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#555555] mb-1">Mensagem</label>
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
          </motion.div>
        </div>
      </motion.section>
      
      {/* Quick Access Section */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-12 text-[#333333]"
            variants={itemVariants}
          >
            Acesso Rápido para Dentistas
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-[#E5F1FB] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <div className="text-[#1E5B94] text-2xl font-bold">SO</div>
                  </div>
                  <CardTitle className="text-[#1E5B94]">Solicitação Online</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6">
                    Solicite exames para seus pacientes de forma rápida e segura.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button className="bg-[#1E5B94] hover:bg-[#174A7A]">Acessar</Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-[#E5F1FB] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <div className="text-[#1E5B94] text-2xl font-bold">ER</div>
                  </div>
                  <CardTitle className="text-[#1E5B94]">Exames Realizados</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6">
                    Acesse os resultados dos exames de seus pacientes.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button className="bg-[#1E5B94] hover:bg-[#174A7A]">Acessar</Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-[#E5F1FB] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <div className="text-[#1E5B94] text-2xl font-bold">PDF</div>
                  </div>
                  <CardTitle className="text-[#1E5B94]">Requisição em PDF</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6">
                    Baixe o formulário de requisição de exames em PDF.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="border-[#1E5B94] text-[#1E5B94] hover:bg-[#E5F1FB]">Baixar</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
