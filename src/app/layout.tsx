import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "VREYES — Proyectos Inmobiliarios",
  description: "Compra con confianza: proyectos seleccionados, agenda online y asesoría cercana.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans text-brand-text antialiased">
        <Navbar />
        <main className="bg-transparent">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
