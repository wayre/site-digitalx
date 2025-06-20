// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <Image
        src="/logo-digitalx-black.webp"
        alt="logo DigitalX"
        height={120}
        width={0}
        sizes="100vw"
        style={{ width: "auto", height: 120 }}
        className="min-w-[130px] m-2"
      />
      <h1 className="text-6xl font-bold text-digitalx-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Página não encontrada
      </h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        A página que você está tentando acessar não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-digitalx-600 text-white font-semibold rounded-lg hover:bg-digitalx-700 transition-colors"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
