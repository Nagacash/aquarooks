import type { Metadata } from "next";
import { Montserrat, Inter, Agdasima, Bebas_Neue, Goldman, Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
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

const ysabeau = localFont({
  src: [
    {
      path: "../../public/FontText/Ysabeau-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/FontText/Ysabeau-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/FontText/Ysabeau-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/FontText/Ysabeau-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/FontText/Ysabeau-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/FontText/Ysabeau-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/FontText/Ysabeau-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/FontText/Ysabeau-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/FontText/Ysabeau-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/FontText/Ysabeau-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/FontText/Ysabeau-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/FontText/Ysabeau-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/FontText/Ysabeau-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/FontText/Ysabeau-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/FontText/Ysabeau-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/FontText/Ysabeau-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/FontText/Ysabeau-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/FontText/Ysabeau-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-ysabeau",
  display: "swap",
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
        className={`${montserrat.variable} ${inter.variable} ${agdasima.variable} ${bebasNeue.variable} ${goldman.variable} ${libreBaskerville.variable} ${ysabeau.variable} antialiased font-sans`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
