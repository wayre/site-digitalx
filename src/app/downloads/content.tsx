"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const tutorials = [
  {
    id: "dental-slice",
    title: "Dental Slice",
    description:
      "Aprenda como visualizar as tomografias realizadas na Digital X usando o software Dental Slice. Este visualizador permite análise detalhada das imagens geradas em nossos equipamentos Morita.",
    videoUrl: "https://www.youtube.com/embed/mC0qKkxYGYg",
    downloadLinks: [
      {
        label: "Baixar Dental Slice",
        href: "https://www.dentalslice.com.br/downloads/?lang=en",
      },
    ],
  },
  {
    id: "one-volume-viewer",
    title: "One Volume Viewer",
    description:
      "O One Volume Viewer é um visualizador próprio para arquivos gerados por equipamentos Morita. Neste vídeo, mostramos como navegar pelas imagens e ajustar cortes e contraste para melhor avaliação clínica.",
    videoUrl: "https://www.youtube.com/embed/mC0qKkxYGYg",
    downloadLinks: [
      {
        label: "Baixar One Volume Viewer",
        href: "https://volume-viewer.software.informer.com/6.0/",
      },
    ],
  },
  {
    id: "dicom-stl",
    title: "DICOM e STL",
    description:
      "Arquivos no formato DICOM ou STL podem ser visualizados com softwares específicos. Recomendamos o RadiAnt DICOM Viewer para leitura das imagens médicas em DICOM.",
    videoUrl: "https://www.youtube.com/embed/OHw7Z9aUzi8",
    downloadLinks: [
      {
        label: "Baixar RadiAnt DICOM Viewer (Windows)",
        href: "https://www.radiantviewer.com/download/", // link real
      },
    ],
  },
];

export default function DownloadPage() {
  const [selected, setSelected] = useState(tutorials[0].id);

  return (
    <section className="w-full mx-auto py-6">
      <h1 className="text-3xl font-bold mb-2">Downloads e Tutoriais</h1>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Encontre aqui os tutoriais e softwares necessários para visualizar as
        tomografias realizadas na Digital X. Os arquivos podem ser abertos nos
        softwares Dental Slice, One Volume Viewer ou em visualizadores DICOM
        como o RadiAnt.
      </p>

      <p className="text-xs uppercase">
        Escolha abaixo o seu visualizador desejado:
      </p>

      <Tabs
        defaultValue={selected}
        onValueChange={setSelected}
        className="space-y-6"
      >
        <TabsList className="flex gap-2 overflow-x-auto overflow-hidden justify-start min-w-[330px]">
          {tutorials.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="whitespace-nowrap bg-amber-600 text-white hover:bg-amber-500 text-xs tracking-tighter data-[state=active]:bg-amber-700 data-[state=active]:text-white"
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {tutorials.map((item) => (
          <TabsContent key={item.id} value={item.id}>
            <div className="grid md:grid-cols-2 gap-8 items-start mt-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="mb-4 text-muted-foreground">{item.description}</p>

                <div className="space-y-2">
                  {item.downloadLinks.map((link, index) => (
                    <Button
                      asChild
                      variant="outline"
                      className="gap-2"
                      key={index}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <DownloadIcon className="w-4 h-4" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {item.videoUrl ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="text-muted-foreground italic">
                  Nenhum vídeo disponível para este item.
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
