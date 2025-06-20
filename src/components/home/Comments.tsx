"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Ajuste o caminho se necessário
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card"; // Para estilizar os cards de comentário

interface Comment {
  author_name: string;
  text: string;
  rating: number;
  relative_time_description: string;
  profile_photo_url: string;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Ajuste o caminho para o arquivo JSON conforme necessário
        // Se o arquivo comentarios.json estiver na pasta public:
        // const response = await fetch('/comentarios.json');
        // Se estiver na pasta src e for importado diretamente (requer configuração do bundler): // Mantendo o nome original do arquivo JSON
        const response = await fetch("/comments.json"); // Assumindo que está na pasta public
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Comment[] = await response.json();
        setComments(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) {
    return <p>Carregando comentários...</p>;
  }

  if (error) {
    return <p>Erro ao carregar comentários: {error}</p>;
  }

  return (
    <section className="w-5/6 m-auto py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          O Que Nossos Clientes Dizem no Google
        </h2>
        {comments.length === 0 ? (
          <p className="text-center text-gray-600">
            Nenhum comentário encontrado.
          </p>
        ) : (
          <Carousel
            plugins={[autoplayPlugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={autoplayPlugin.current.stop}
            onMouseLeave={autoplayPlugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {comments.map((comment, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center mb-4">
                          <img
                            src={comment.profile_photo_url}
                            alt={comment.author_name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <strong className="block text-gray-800">
                              {comment.author_name}
                            </strong>
                            <span className="text-sm text-gray-500">
                              {comment.relative_time_description}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-5">
                          {comment.text}
                        </p>
                        <div className="mt-auto text-yellow-500">
                          {"★".repeat(comment.rating)}
                          {"☆".repeat(5 - comment.rating)}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {comments.length > 3 && ( // Mostrar botões apenas se houver mais de 3 comentários
              <>
                <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black hidden md:flex" />
                <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black hidden md:flex" />
              </>
            )}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Comments;
