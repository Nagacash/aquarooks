import type { Metadata, Viewport } from "next";
import { Montserrat, Inter, Agdasima, Bebas_Neue, Goldman, Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { StructuredData } from "@/components/seo/structured-data";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aqua-rooks.com"),
  title: {
    default: "AQUA ROOKS | Premium Mineral Water from Togo | L'Eau Minérale – Source De Vie",
    template: "%s | AQUA ROOKS",
  },
  description: "AQUA ROOKS - Premium natural mineral water from Togo, West Africa. High-quality bottled water company producing mineral water in PET bottles and sachets. Sustainable water production in Commune Lac 2, Togo. Leading water brand in Togo with superior quality compared to imported water from Ghana, Benin, and Burkina Faso.",
  keywords: [
    "AQUA ROOKS",
    "ROOK'S AQUA",
    "mineral water Togo",
    "bottled water Togo",
    "water company Togo",
    "premium mineral water",
    "natural mineral water",
    "PET bottled water",
    "water production Togo",
    "West Africa water",
    "Togo water brand",
    "mineral water company",
    "bottled water manufacturer",
    "water sachets Togo",
    "sachets d'eau minérale",
    "Lomé water",
    "Togo drinking water",
    "sustainable water production",
    "water quality Togo",
    "mineral water source Togo",
    "Commune Lac 2",
    "Atoèta-Alaroya",
    "water firms Togo",
    "water companies West Africa",
  ],
  authors: [{ name: "AQUA ROOKS S.A." }],
  creator: "Maurice Holda | Naga Codex",
  publisher: "AQUA ROOKS S.A.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logos/logo.ico",
    shortcut: "/images/logos/logo.ico",
    apple: "/images/logos/logo.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE", "fr_FR", "ru_RU"],
    url: "/",
    siteName: "AQUA ROOKS",
    title: "AQUA ROOKS | Premium Mineral Water from Togo",
    description: "Premium natural mineral water from Togo, West Africa. High-quality bottled water company producing mineral water in PET bottles and sachets.",
    images: [
      {
        url: "/images/logos/logo1.png",
        width: 1200,
        height: 630,
        alt: "AQUA ROOKS - Premium Mineral Water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AQUA ROOKS | Premium Mineral Water from Togo",
    description: "Premium natural mineral water from Togo, West Africa. High-quality bottled water company.",
    images: ["/images/logos/logo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/de",
      "en-US": "/",
      "fr-FR": "/fr",
      "ru-RU": "/ru",
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "verification_token_here",
  },
  category: "Food & Beverage",
  classification: "Mineral Water Company",
  other: {
    "geo.region": "TG",
    "geo.placename": "Togo",
    "geo.position": "6.1375;1.2123",
    "ICBM": "6.1375, 1.2123",
    "DC.title": "AQUA ROOKS - Premium Mineral Water from Togo",
    "DC.creator": "AQUA ROOKS S.A.",
    "DC.subject": "Mineral Water, Bottled Water, Water Company, Togo",
    "DC.description": "Premium natural mineral water from Togo, West Africa",
    "DC.publisher": "AQUA ROOKS S.A.",
    "DC.contributor": "Maurice Holda, Naga Codex",
    "DC.coverage": "Togo, West Africa",
    "DC.type": "Company Website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="TG" />
        <meta name="geo.placename" content="Togo" />
        <meta name="geo.position" content="6.1375;1.2123" />
        <meta name="ICBM" content="6.1375, 1.2123" />
        <meta name="DC.contributor" content="Maurice Holda, Naga Codex" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${agdasima.variable} ${bebasNeue.variable} ${goldman.variable} ${libreBaskerville.variable} ${ysabeau.variable} antialiased font-sans`}
      >
        <StructuredData />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
