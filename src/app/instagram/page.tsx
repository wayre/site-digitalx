import { redirect } from "next/navigation";

export default function InstagramRedirectPage() {
  redirect("https://www.instagram.com/digitalxms/");

  // Como o redirect() interrompe a renderização,
  // nada abaixo dele será executado ou renderizado.
  // Você pode até retornar null.
  return null;
}
