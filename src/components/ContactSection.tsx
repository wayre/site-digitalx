"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    examType: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExamTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, examType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        examType: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      id="contato"
      className="w-full sm:w-5/6 m-auto section-padding bg-white overflow-y-hidden"
      ref={sectionRef}
    >
      <div className="w-5/6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Preencha o formulário abaixo ou
            utilize um de nossos canais de contato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Formulário */}
          <div
            className={`bg-white rounded-xl shadow-card p-6 transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome"
                  className="form-input"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Digite seu e-mail"
                    className="form-input"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="examType">Tipo de exame</Label>
                <Select
                  value={formData.examType}
                  onValueChange={handleExamTypeChange}
                >
                  <SelectTrigger className="form-input">
                    <SelectValue placeholder="Selecione o tipo de exame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tomografia">
                      Tomografia Computadorizada
                    </SelectItem>
                    <SelectItem value="panoramica">
                      Radiografia Panorâmica
                    </SelectItem>
                    <SelectItem value="cefalometrica">
                      Radiografia Cefalométrica
                    </SelectItem>
                    <SelectItem value="periapical">
                      Radiografia Periapical
                    </SelectItem>
                    <SelectItem value="interproximal">
                      Radiografia Interproximal
                    </SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem"
                  className="form-input min-h-[100px]"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-digitalx-500 hover:bg-digitalx-600"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>

          {/* Informações de contato e mapa */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="bg-white rounded-xl shadow-card p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Informações de contato
              </h3>

              <div className="space-y-5">
                <div className="contact-info-item">
                  <MapPin className="contact-info-icon" />
                  <div>
                    <p className="font-medium">Endereço:</p>
                    <p className="text-gray-600">
                      R. Treze de Junho, 499 - Campo Grande/MS
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Phone className="contact-info-icon" />
                  <div>
                    <p className="font-medium">Telefone:</p>
                    <p className="text-gray-600">
                      <a
                        href="tel:+556730282890"
                        className="hover:text-digitalx-500"
                      >
                        (67) 3028-2890
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Mail className="contact-info-icon" />
                  <div>
                    <p className="font-medium">E-mail:</p>
                    <p className="text-gray-600">
                      <a
                        href="mailto:contato@digitalx.com.br"
                        className="hover:text-digitalx-500"
                      >
                        contato@digitalx.com.br
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Clock className="contact-info-icon" />
                  <div>
                    <p className="font-medium">Horário de funcionamento:</p>
                    <p className="text-gray-600">Segunda à Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-xl overflow-hidden h-80 shadow-card relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.066850825501!2d-54.6165075849074!3d-20.463200786307073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6726b2b9539%3A0x9e67c0abad0aef63!2sR.%20Treze%20de%20Junho%2C%20499%20-%20Centro%2C%20Campo%20Grande%20-%20MS%2C%2079004-420!5e0!3m2!1spt-BR!2sbr!4v1650316358975!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Digital X"
                aria-label="Mapa mostrando a localização da Digital X"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
