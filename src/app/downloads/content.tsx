"use client";

import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const tutorials = [
  {
    id: "tutorial-one-volume-viewer",
    category: "Tutorial",
    title: "ON VOLUME VIEWER",
    description:
      "Aprenda como visualizar as tomografias realizadas na Digital X usando o software Dental Slice. Este visualizador permite análise detalhada das imagens geradas em nossos equipamentos Morita.",
    videoUrl: "https://www.youtube.com/embed/mC0qKkxYGYg", // Exemplo de URL de vídeo
    downloadLinks: [
      {
        label: "Download One Volume Viewer",
        href: "https://volume-viewer.software.informer.com/6.0/",
      },
    ],
  },
];

const downloads = [
  {
    id: "software-blue-sky",
    category: "Software Visualizador",
    title: "BLUE SKY",
    description:
      "O Blue Sky é um visualizador próprio para arquivos gerados por equipamentos Morita.",
    videoUrl: "", // Exemplo de URL de vídeo
    downloadLabel: "DOWNLOAD",
    downloadHref: "https://www.blueskybio.com/software/download-free-viewer/",
  },
  {
    id: "software-radiant",
    category: "Software Visualizador",
    title: "Radiant",
    description:
      "Arquivos no formato DICOM ou STL recomendamos o RadiAnt DICOM Viewer para leitura das imagens.",
    videoUrl: "", // Exemplo de URL de vídeo
    downloadLabel: "DOWNLOAD",
    downloadHref: "https://www.radiantviewer.com/download/",
  },
];

export default function DownloadPage() {
  const categoriesTutoriais = Array.from(
    new Set(tutorials.map((item) => item.category))
  );
  const categoriesDownloads = Array.from(
    new Set(downloads.map((item) => item.category))
  );

  return (
    <section className="w-full mx-auto py-6 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">DOWNLOADS</h1>

      {/* tutoriais */}
      {categoriesTutoriais.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold uppercase border-b pb-2 mb-4">
            {category}
          </h2>

          <div className="grid gap-8">
            {" "}
            {/* Changed to gap-8 for more spacing between items */}
            {tutorials
              .filter((item) => item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "grid gap-8 items-start border p-4 rounded-lg shadow-sm",
                    item.videoUrl ? "md:grid-cols-2" : "md:grid-cols-1"
                  )}
                >
                  <div>
                    <h3 className="text-lg font-medium mb-2 uppercase">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {item.description}
                    </p>{" "}
                    {/* Re-added description */}
                    <div className="space-y-2">
                      {item.downloadLinks.map((link, index) => (
                        <Button asChild key={index} className="gap-2">
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

                  {item.videoUrl && (
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src={item.videoUrl}
                        title={item.title}
                        className="w-full h-full"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}

      <div>
        <h2 className="text-xl font-semibold uppercase border-b pb-2 mb-4">
          Software Visualizador
        </h2>
        <div className="mb-8">
          <div className="grid gap-8">
            <div
              className={cn(
                "grid gap-8 items-start border p-4 rounded-lg shadow-sm  md:grid-cols-2"
              )}
            >
              {downloads.map((download) => (
                <div key={download.id}>
                  <h3 className="text-lg font-medium mb-2 uppercase">
                    {download.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {download.description}
                  </p>{" "}
                  {/* Re-added description */}
                  <div className="space-y-2">
                    <Button asChild className="gap-2">
                      <a
                        href={download.downloadHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <DownloadIcon className="w-4 h-4" />
                        {download.downloadLabel}
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Downloads */}
    </section>
  );
}
