import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formulário Solicitação de Exames",
  description: "Solicitacao de Exames para clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full m-auto">{children}</div>;
}
