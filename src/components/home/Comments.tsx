import React from "react";
import fs from "fs/promises";
import CommentsCarousel from "./CommentsCarousel";

interface Comment {
  author_name: string;
  text: string;
  rating: number;
  relative_time_description: string;
  profile_photo_url: string;
}

const Comments = async () => {
  let comments: Comment[] = [];
  let error: string | null = null;

  if (error) {
    // No lado do servidor, o erro será logado no console do terminal.
    // Você pode optar por não renderizar nada ou mostrar uma mensagem de erro.
    console.error("Erro ao carregar comentários:", error);
    return null;
  }

  try {
    // Em Server Components, caminhos relativos são resolvidos a partir da raiz do projeto.
    const fileContents = await fs.readFile("src/data/comments.json", "utf8");
    comments = JSON.parse(fileContents);
  } catch (e) {
    if (e instanceof Error) {
      error = e.message;
    } else {
      error = "An unknown error occurred while reading comments.";
    }
    console.error(error);
    // Retornar null ou um componente de erro é uma boa prática.
    return null;
  }

  return (
    <section className="w-5/6 m-auto py-12 mt-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          O que nossos clientes dizem no google
        </h2>
        {error ? (
          <p className="text-center text-red-500">
            Não foi possível carregar os comentários.
          </p>
        ) : comments.length === 0 ? (
          <p className="text-center text-gray-600">
            Nenhum comentário encontrado.
          </p>
        ) : (
          <CommentsCarousel comments={comments} />
        )}
      </div>
    </section>
  );
};

export default Comments;
