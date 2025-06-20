import { redirect } from "next/navigation";

export default function FacebookRedirectPage() {
  redirect("https://www.facebook.com/digitalxms");

  // Como o redirect() interrompe a renderização,
  // nada abaixo dele será executado ou renderizado.
  // Você pode até retornar null.
  return null;
}
