import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Display serif for headings — Cormorant Garamond (SIL OFL, free for
// commercial use). To swap for licensed Tiempos later, replace this with
// next/font/local pointing at the .woff2 files.
const cormorant = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://catafract.com";
const description =
  "Desarrollamos soluciones de IA y software a medida para empresas que buscan escalar con mayor eficiencia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CATAFRACT — Automatización con IA y software a medida",
    template: "%s · CATAFRACT",
  },
  description,
  keywords: [
    "IA para empresas",
    "automatización de procesos",
    "agentes inteligentes",
    "software a medida",
    "consultoría tecnológica",
    "integraciones",
    "dashboards",
  ],
  applicationName: "CATAFRACT",
  authors: [{ name: "CATAFRACT" }],
  creator: "CATAFRACT",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "CATAFRACT",
    title: "CATAFRACT — Automatizamos procesos. Multiplicamos resultados.",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "CATAFRACT — Automatizamos procesos. Multiplicamos resultados.",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">{children}</body>
    </html>
  );
}
