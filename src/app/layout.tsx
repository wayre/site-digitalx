import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google"; // Import Open_Sans and Poppins

import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import WhatsButton from "@/components/WhatsButton";

// Configure Open Sans
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  // display: 'swap', // Optional
});

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Poppins has 900 weight
  // display: 'swap', // Optional
});

export const metadata: Metadata = {
  title: "DigitalX - Exames Radiológicos Odontológicos",
  description: "Exames Radiológicos Odontológicos de Alta Qualidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} antialiased min-w-[390px] flex flex-col`}
      >
        {children}
        <Toaster />
        <WhatsButton />
      </body>
    </html>
  );
}
