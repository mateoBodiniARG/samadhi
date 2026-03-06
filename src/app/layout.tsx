import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FloatingWA } from "@/components/layout/FloatingWA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Samadhi ~ Estética Facial y Corporal | Rosario",
  description:
    "Espacio de bienestar y belleza en Rosario. Tratamientos faciales, corporales, masajes, reiki, criolipólisis y más. Conectá con tu mejor versión en Samadhi.",
  keywords: [
    "estética facial",
    "estética corporal",
    "masajes rosario",
    "reiki rosario",
    "criolipólisis",
    "tratamientos faciales",
    "depilación definitiva",
    "belleza rosario",
    "samadhi estética",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${inter.className} min-h-screen bg-background text-foreground antialiased flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingWA />
      </body>
    </html>
  );
}
