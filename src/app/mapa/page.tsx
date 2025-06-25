import { redirect } from "next/navigation";

export default function MapaRedirectPage() {
  redirect("https://maps.app.goo.gl/xkgDaHdqNJG8Jks69");

  // Como o redirect() interrompe a renderização,
  // nada abaixo dele será executado ou renderizado.
  // Você pode até retornar null.
  return null;
}
