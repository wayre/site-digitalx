"use client"; // Marca este arquivo como um Client Component

// app/solicitacao-exames/page.tsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function SolicitacaoExamesPage() {
  const [step, setStep] = useState(1); // Etapas do formulário
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    tiposExames: [] as string[],
    // Campos específicos por tipo de exame
    periapicalCompleta: false,
    periapicalDentes: "",
    interproximaisAnteriores: false,
    interproximaisPosteriores: false,
    interproximaisIndicados: false,
    oclusalMaxila: false,
    oclusalMandibula: false,
    observacoes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleExameToggle = (exame: string) => {
    setFormData((prev) => {
      const tiposExames = prev.tiposExames.includes(exame)
        ? prev.tiposExames.filter((t) => t !== exame)
        : [...prev.tiposExames, exame];
      return { ...prev, tiposExames };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Solicitação enviada com sucesso!");
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Solicitação de Exames</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <form onSubmit={() => setStep(2)}>
              <div className="space-y-4">
                <div className="flex flex-row">
                  <div>
                    <Label htmlFor="nome">Nome do Paciente</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="sobrenome">Sobrenome</Label>
                    <Input
                      id="sobrenome"
                      name="sobrenome"
                      value={formData.sobrenome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="button" onClick={() => setStep(2)}>
                  Próximo
                </Button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Tipos de Exames */}
                <div className="space-y-2">
                  <h3 className="font-semibold">Tipos de Solicitações</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Radiografias Intrabucais",
                      "Radiografias Extrabucais",
                      "Documentacao Ortodontica",
                      "Escaneamento Intraoral",
                      "Fotos",
                      "Tomografia Computadorizada",
                      "Cirurgia Guiada",
                    ].map((exame) => (
                      <div key={exame} className="flex items-center space-x-2">
                        <Checkbox
                          id={exame}
                          checked={formData.tiposExames.includes(exame)}
                          onCheckedChange={() => handleExameToggle(exame)}
                        />
                        <Label htmlFor={exame}>{exame}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Campos específicos por tipo */}
                {formData.tiposExames.includes("Radiografias Intrabucais") && (
                  <div className="border p-4 rounded-md">
                    <h4 className="font-medium mb-2">
                      Radiografias Intrabucais
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="periapicalCompleta"
                          checked={formData.periapicalCompleta}
                          onCheckedChange={(checked: boolean) =>
                            setFormData((prev) => ({
                              ...prev,
                              periapicalCompleta: Boolean(checked),
                            }))
                          }
                        />
                        <Label htmlFor="periapicalCompleta">
                          Levantamento Periapical (boca completa)
                        </Label>
                      </div>
                      <div>
                        <Label htmlFor="periapicalDentes">
                          Periapical(is) do(s) dente(s) indicados(s)
                        </Label>
                        <Input
                          id="periapicalDentes"
                          name="periapicalDentes"
                          value={formData.periapicalDentes}
                          onChange={handleChange}
                        />
                      </div>
                      {/* Adicione outros campos aqui */}
                    </div>
                  </div>
                )}

                {/* Adicione outros blocos para os tipos de exame */}
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                >
                  Voltar
                </Button>
                <Button type="submit">Enviar Solicitação</Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
