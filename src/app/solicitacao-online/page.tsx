"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/FooterProtected";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Zod Schema
const formSchema = z
  .object({
    pacienteNome: z.string().min(1, "Nome do paciente é obrigatório."),
    dentistaNome: z.string().min(1, "Nome do dentista é obrigatório."),
    endereco: z.string().min(1, "Endereço é obrigatório."),
    periapicaisDente: z.boolean(),
    selectedTeeth: z.array(z.number()),
    periapicalBocaCompleta: z.boolean(),
    tecnicaDeClark: z.boolean(),
    interproximais: z.object({
      preMolaresDireitos: z.boolean(),
      molaresDireitos: z.boolean(),
      preMolaresEsquerdos: z.boolean(),
      molaresEsquerdos: z.boolean(),
      dentesAnteriores: z.boolean(),
    }),
    extrabucais: z.object({
      panoramica1para1: z.boolean(),
      panoramicaComTracado: z.boolean(),
      carpal: z.boolean(),
      panoramicaATM: z.boolean(),
      telerradiografiaLateral: z.boolean(),
      telerradiografiaFrontal: z.boolean(),
    }),
    analiseCefalometrica: z.object({
      valieri: z.boolean(),
      uspUnicamp: z.boolean(),
      ricketts: z.boolean(),
      trevisi: z.boolean(),
      analiseFacial: z.boolean(),
      bimler: z.boolean(),
      profis: z.boolean(),
      usp: z.boolean(),
      jarabak: z.boolean(),
      mcNamara: z.boolean(),
      outra: z.boolean(),
      outraAnaliseTexto: z.string().optional(),
    }),
    documentacoes: z.object({
      doc1: z.object({
        selected: z.boolean(),
        impressa: z.boolean(),
        digital: z.boolean(),
      }),
      doc2: z.object({
        selected: z.boolean(),
        impressa: z.boolean(),
        digital: z.boolean(),
      }),
      doc3: z.object({
        selected: z.boolean(),
        impressa: z.boolean(),
        digital: z.boolean(),
      }),
    }),
    escaneamento: z.object({
      tipoAlinhador: z.string().optional(),
      email: z
        .string()
        .email({ message: "Formato de e-mail inválido." })
        .optional()
        .or(z.literal("")),
      modelosFilamento: z.boolean(),
      fotosExtrabucais: z.boolean(),
      fotosIntrabucais: z.boolean(),
    }),
  })
  .superRefine((data, ctx) => {
    const intrabucaisSelected =
      data.periapicaisDente ||
      data.periapicalBocaCompleta ||
      data.tecnicaDeClark ||
      Object.values(data.interproximais).some((v) => v);

    const extrabucaisSelected = Object.values(data.extrabucais).some((v) => v);
    const analiseSelected = Object.values(data.analiseCefalometrica).some(
      (v) => typeof v === "boolean" && v
    );
    const docSelected = Object.values(data.documentacoes).some(
      (d) => d.selected
    );
    const escaneamentoSelected =
      !!data.escaneamento.tipoAlinhador ||
      data.escaneamento.modelosFilamento ||
      data.escaneamento.fotosExtrabucais ||
      data.escaneamento.fotosIntrabucais;

    if (
      !intrabucaisSelected &&
      !extrabucaisSelected &&
      !analiseSelected &&
      !docSelected &&
      !escaneamentoSelected
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["form"],
        message:
          "Pelo menos um item de exame de qualquer um dos grupos (radiografias intrabucais, extrabucais, análise cefalométrica, doc. ortontônticas ou escaneamento) deve ser selecionado.",
      });
    }
  });

type FormData = z.infer<typeof formSchema>;

// Componente para o diagrama de dentes interativo
const DentalChart = ({
  selectedTeeth,
  onToggleTooth,
}: {
  selectedTeeth: number[];
  onToggleTooth: (tooth: number) => void;
}) => {
  const quadrants = {
    upperRight: [18, 17, 16, 15, 14, 13, 12, 11],
    upperLeft: [21, 22, 23, 24, 25, 26, 27, 28],
    lowerRight: [48, 47, 46, 45, 44, 43, 42, 41],
    lowerLeft: [31, 32, 33, 34, 35, 36, 37, 38],
  };

  const renderQuadrant = (teeth: number[]) => (
    <div className="flex space-x-1">
      {teeth.map((tooth) => {
        const isSelected = selectedTeeth.includes(tooth);
        return (
          <Button
            key={tooth}
            type="button"
            variant={isSelected ? "default" : "outline"}
            size="sm"
            onClick={() => onToggleTooth(tooth)}
            className="h-8 w-8"
          >
            {tooth}
          </Button>
        );
      })}
    </div>
  );

  return (
    <div className="p-4 border rounded-md bg-gray-50 space-y-2">
      <div className="flex justify-between">
        {renderQuadrant(quadrants.upperRight)}
        {renderQuadrant(quadrants.upperLeft)}
      </div>
      <div className="flex justify-between">
        {renderQuadrant(quadrants.lowerRight)}
        {renderQuadrant(quadrants.lowerLeft)}
      </div>
    </div>
  );
};

export default function SolicitacaoExamesPage() {
  const [formData, setFormData] = useState<FormData>({
    pacienteNome: "",
    dentistaNome: "",
    endereco: "",
    periapicaisDente: false,
    selectedTeeth: [],
    periapicalBocaCompleta: false,
    tecnicaDeClark: false,
    interproximais: {
      preMolaresDireitos: false,
      molaresDireitos: false,
      preMolaresEsquerdos: false,
      molaresEsquerdos: false,
      dentesAnteriores: false,
    },
    extrabucais: {
      panoramica1para1: false,
      panoramicaComTracado: false,
      carpal: false,
      panoramicaATM: false,
      telerradiografiaLateral: false,
      telerradiografiaFrontal: false,
    },
    analiseCefalometrica: {
      valieri: false,
      uspUnicamp: false,
      ricketts: false,
      trevisi: false,
      analiseFacial: false,
      bimler: false,
      profis: false,
      usp: false,
      jarabak: false,
      mcNamara: false,
      outra: false,
      outraAnaliseTexto: "",
    },
    documentacoes: {
      doc1: { selected: false, impressa: false, digital: false },
      doc2: { selected: false, impressa: false, digital: false },
      doc3: { selected: false, impressa: false, digital: false },
    },
    escaneamento: {
      tipoAlinhador: "",
      email: "",
      modelosFilamento: false,
      fotosExtrabucais: false,
      fotosIntrabucais: false,
    },
  });

  const [errors, setErrors] = useState<z.ZodError["errors"] | null>(null);

  const handleSimpleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleNestedChange = (
    section: string,
    field: string,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section as keyof typeof prev] as object),
        [field]: value,
      },
    }));
  };

  const handleDocChange = (doc: string, field: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      documentacoes: {
        ...prev.documentacoes,
        [doc]: {
          ...prev.documentacoes[doc as keyof typeof prev.documentacoes],
          [field]: value,
        },
      },
    }));
  };

  const handleToggleTooth = (tooth: number) => {
    setFormData((prev) => {
      const selectedTeeth = prev.selectedTeeth.includes(tooth)
        ? prev.selectedTeeth.filter((t) => t !== tooth)
        : [...prev.selectedTeeth, tooth];
      return { ...prev, selectedTeeth };
    });
  };

  useEffect(() => {
    if (!formData.periapicaisDente) {
      setFormData((prev) => ({ ...prev, selectedTeeth: [] }));
    }
  }, [formData.periapicaisDente]);

  useEffect(() => {
    if (!formData.analiseCefalometrica.outra) {
      handleNestedChange("analiseCefalometrica", "outraAnaliseTexto", "");
    }
  }, [formData.analiseCefalometrica.outra]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (result.success) {
      console.log("Formulário enviado:", JSON.stringify(formData, null, 2));
      alert("Solicitação enviada com sucesso!");
      setErrors(null);
      // Aqui você pode adicionar a lógica para enviar os dados para um backend
    } else {
      setErrors(result.error.errors);
      alert("Por favor, corrija os erros no formulário.");
    }
  };

  const getError = (path: string) => {
    if (!errors) return null;
    const error = errors.find((e) => e.path.includes(path));
    return error ? (
      <p className="text-red-500 text-sm">{error.message}</p>
    ) : null;
  };

  const formError = errors?.find((e) => e.path.includes("form"));

  const renderCheckbox = (
    id: string,
    label: string,
    section: string,
    field: string
  ) => (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={
          formData[section as keyof typeof formData][
            field as keyof (typeof formData)[keyof typeof formData]
          ]
        }
        onCheckedChange={(checked) =>
          handleNestedChange(section, field, Boolean(checked))
        }
      />
      <Label htmlFor={id} className="font-normal">
        {label}
      </Label>
    </div>
  );

  return (
    <>
      <header className={cn("w-full border-b border-b-gray-300 py-2 px-3")}>
        <Link href="/" className="font-bold">
          <Image
            src="/logo-digitalx.svg"
            alt="Digital X"
            width={110}
            height={55}
            className="w-auto h-[60px]"
          />
        </Link>
      </header>

      <div className="container mx-auto py-10">
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                REQUISIÇÃO DE EXAMES
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {formError && (
                <p className="text-red-500 text-sm font-bold">
                  {formError.message}
                </p>
              )}
              {/* Dados do Paciente e Dentista */}
              <Card>
                <CardHeader>
                  <CardTitle>Dados do Paciente e Dentista</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="pacienteNome">Nome do Paciente</Label>
                    <Input
                      id="pacienteNome"
                      name="pacienteNome"
                      value={formData.pacienteNome}
                      onChange={handleSimpleChange}
                    />
                    {getError("pacienteNome")}
                  </div>
                  <div>
                    <Label htmlFor="dentistaNome">Dentista</Label>
                    <Input
                      id="dentistaNome"
                      name="dentistaNome"
                      value={formData.dentistaNome}
                      onChange={handleSimpleChange}
                    />
                    {getError("dentistaNome")}
                  </div>
                  <div>
                    <Label htmlFor="endereco">Endereço</Label>
                    <Textarea
                      id="endereco"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleSimpleChange}
                    />
                    {getError("endereco")}
                  </div>
                </CardContent>
              </Card>

              {/* Radiografias Intrabucais */}
              <Card>
                <CardHeader>
                  <CardTitle>Radiografias Intrabucais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">PERIAPICAIS</h4>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="periapicaisDente"
                        name="periapicaisDente"
                        checked={formData.periapicaisDente}
                        onCheckedChange={(checked) =>
                          setFormData((p) => ({
                            ...p,
                            periapicaisDente: Boolean(checked),
                          }))
                        }
                      />
                      <Label htmlFor="periapicaisDente">Dente</Label>
                    </div>
                    {formData.periapicaisDente && (
                      <DentalChart
                        selectedTeeth={formData.selectedTeeth}
                        onToggleTooth={handleToggleTooth}
                      />
                    )}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="periapicalBocaCompleta"
                        name="periapicalBocaCompleta"
                        checked={formData.periapicalBocaCompleta}
                        onCheckedChange={(checked) =>
                          setFormData((p) => ({
                            ...p,
                            periapicalBocaCompleta: Boolean(checked),
                          }))
                        }
                      />
                      <Label htmlFor="periapicalBocaCompleta">
                        Periapical Boca Completa
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="tecnicaDeClark"
                        name="tecnicaDeClark"
                        checked={formData.tecnicaDeClark}
                        onCheckedChange={(checked) =>
                          setFormData((p) => ({
                            ...p,
                            tecnicaDeClark: Boolean(checked),
                          }))
                        }
                      />
                      <Label htmlFor="tecnicaDeClark">Técnica de Clark</Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">INTERPROXIMAIS</h4>
                    {renderCheckbox(
                      "preMolaresDireitos",
                      "Pré-Molares Direitos",
                      "interproximais",
                      "preMolaresDireitos"
                    )}
                    {renderCheckbox(
                      "molaresDireitos",
                      "Molares Direitos",
                      "interproximais",
                      "molaresDireitos"
                    )}
                    {renderCheckbox(
                      "preMolaresEsquerdos",
                      "Pré-Molares Esquerdos",
                      "interproximais",
                      "preMolaresEsquerdos"
                    )}
                    {renderCheckbox(
                      "molaresEsquerdos",
                      "Molares Esquerdos",
                      "interproximais",
                      "molaresEsquerdos"
                    )}
                    {renderCheckbox(
                      "dentesAnteriores",
                      "Dentes Anteriores",
                      "interproximais",
                      "dentesAnteriores"
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Radiografias Extrabucais */}
              <Card>
                <CardHeader>
                  <CardTitle>Radiografias Extrabucais</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderCheckbox(
                    "panoramica1para1",
                    "Panorâmica 1:1",
                    "extrabucais",
                    "panoramica1para1"
                  )}
                  {renderCheckbox(
                    "panoramicaComTracado",
                    "Panorâmica (traçado p/ implantes)",
                    "extrabucais",
                    "panoramicaComTracado"
                  )}
                  {renderCheckbox(
                    "carpal",
                    "Carpal (avaliação idade óssea)",
                    "extrabucais",
                    "carpal"
                  )}
                  {renderCheckbox(
                    "panoramicaATM",
                    "Panorâmica de ATM",
                    "extrabucais",
                    "panoramicaATM"
                  )}
                  {renderCheckbox(
                    "telerradiografiaLateral",
                    "Telerradiografia Lateral",
                    "extrabucais",
                    "telerradiografiaLateral"
                  )}
                  {renderCheckbox(
                    "telerradiografiaFrontal",
                    "Telerradiografia Frontal",
                    "extrabucais",
                    "telerradiografiaFrontal"
                  )}
                </CardContent>
              </Card>

              {/* Análise Cefalométrica */}
              <Card>
                <CardHeader>
                  <CardTitle>Análise Cefalométrica</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderCheckbox(
                    "valieri",
                    "Valieri",
                    "analiseCefalometrica",
                    "valieri"
                  )}
                  {renderCheckbox(
                    "uspUnicamp",
                    "USP/UNICAMP",
                    "analiseCefalometrica",
                    "uspUnicamp"
                  )}
                  {renderCheckbox(
                    "ricketts",
                    "Ricketts",
                    "analiseCefalometrica",
                    "ricketts"
                  )}
                  {renderCheckbox(
                    "trevisi",
                    "Trevisi",
                    "analiseCefalometrica",
                    "trevisi"
                  )}
                  {renderCheckbox(
                    "analiseFacial",
                    "Análise Facial",
                    "analiseCefalometrica",
                    "analiseFacial"
                  )}
                  {renderCheckbox(
                    "bimler",
                    "Bimler",
                    "analiseCefalometrica",
                    "bimler"
                  )}
                  {renderCheckbox(
                    "profis",
                    "Profis",
                    "analiseCefalometrica",
                    "profis"
                  )}
                  {renderCheckbox("usp", "USP", "analiseCefalometrica", "usp")}
                  {renderCheckbox(
                    "jarabak",
                    "Jarabak",
                    "analiseCefalometrica",
                    "jarabak"
                  )}
                  {renderCheckbox(
                    "mcNamara",
                    "McNamara",
                    "analiseCefalometrica",
                    "mcNamara"
                  )}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="outra"
                      checked={formData.analiseCefalometrica.outra}
                      onCheckedChange={(checked) =>
                        handleNestedChange(
                          "analiseCefalometrica",
                          "outra",
                          Boolean(checked)
                        )
                      }
                    />
                    <Label htmlFor="outra">Outra Análise</Label>
                  </div>
                  {formData.analiseCefalometrica.outra && (
                    <Input
                      placeholder="Especifique a outra análise"
                      value={formData.analiseCefalometrica.outraAnaliseTexto}
                      onChange={(e) =>
                        handleNestedChange(
                          "analiseCefalometrica",
                          "outraAnaliseTexto",
                          e.target.value
                        )
                      }
                    />
                  )}
                </CardContent>
              </Card>

              {/* Documentações Ortodônticas */}
              <Card>
                <CardHeader>
                  <CardTitle>Documentações Ortodônticas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      key: "doc1",
                      label:
                        "Radiografia panorâmica, telerradiografia com traçados e 8 fotos",
                    },
                    {
                      key: "doc2",
                      label:
                        "Radiografia panorâmica, telerradiografia com traçados, 8 fotos e modelos em gesso",
                    },
                    {
                      key: "doc3",
                      label:
                        "Radiografia panorâmica, telerradiografia com traçados, 8 fotos e escaneamento intraoral",
                    },
                  ].map((doc) => (
                    <div
                      key={doc.key}
                      className="space-y-2 p-2 border rounded-md"
                    >
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={doc.key}
                          checked={
                            formData.documentacoes[
                              doc.key as keyof typeof formData.documentacoes
                            ].selected
                          }
                          onCheckedChange={(checked) =>
                            handleDocChange(
                              doc.key,
                              "selected",
                              Boolean(checked)
                            )
                          }
                        />
                        <Label htmlFor={doc.key}>{doc.label}</Label>
                      </div>
                      {formData.documentacoes[
                        doc.key as keyof typeof formData.documentacoes
                      ].selected && (
                        <div className="pl-6 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`${doc.key}-impressa`}
                              checked={
                                formData.documentacoes[
                                  doc.key as keyof typeof formData.documentacoes
                                ].impressa
                              }
                              onCheckedChange={(checked) =>
                                handleDocChange(
                                  doc.key,
                                  "impressa",
                                  Boolean(checked)
                                )
                              }
                            />
                            <Label
                              htmlFor={`${doc.key}-impressa`}
                              className="font-normal"
                            >
                              Documentação Impressa
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`${doc.key}-digital`}
                              checked={
                                formData.documentacoes[
                                  doc.key as keyof typeof formData.documentacoes
                                ].digital
                              }
                              onCheckedChange={(checked) =>
                                handleDocChange(
                                  doc.key,
                                  "digital",
                                  Boolean(checked)
                                )
                              }
                            />
                            <Label
                              htmlFor={`${doc.key}-digital`}
                              className="font-normal"
                            >
                              Documentação Digital
                            </Label>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Escaneamento / Modelos / Fotografias */}
              <Card>
                <CardHeader>
                  <CardTitle>Escaneamento / Modelos / Fotografias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="tipoAlinhador">
                      Tipo de alinhador ortodôntico
                    </Label>
                    <Input
                      id="tipoAlinhador"
                      value={formData.escaneamento.tipoAlinhador}
                      onChange={(e) =>
                        handleNestedChange(
                          "escaneamento",
                          "tipoAlinhador",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.escaneamento.email}
                      onChange={(e) =>
                        handleNestedChange(
                          "escaneamento",
                          "email",
                          e.target.value
                        )
                      }
                    />
                    {getError("email")}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {renderCheckbox(
                      "modelosFilamento",
                      "Modelos de filamento",
                      "escaneamento",
                      "modelosFilamento"
                    )}
                    {renderCheckbox(
                      "fotosExtrabucais",
                      "Fotos Extrabucais",
                      "escaneamento",
                      "fotosExtrabucais"
                    )}
                    {renderCheckbox(
                      "fotosIntrabucais",
                      "Fotos Intrabucais",
                      "escaneamento",
                      "fotosIntrabucais"
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end mt-6">
                <Button type="submit" size="lg">
                  Enviar Solicitação
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
      <Footer />
    </>
  );
}
