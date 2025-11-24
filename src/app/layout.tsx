import type { Metadata } from "next";
import { Montserrat, Inter, Agdasima, Bebas_Neue, Goldman, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const agdasima = Agdasima({
  variable: "--font-agdasima",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AQUA ROOKS | L'Eau Minérale – Source De Vie",
  description: "Premium mineral water from natural sources in Togo. Promoting sustainability and social responsibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} ${agdasima.variable} ${bebasNeue.variable} ${goldman.variable} ${libreBaskerville.variable} antialiased font-sans`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
