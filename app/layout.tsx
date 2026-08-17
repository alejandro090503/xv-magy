import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magy · Mis XV Años · 3 Octubre 2026",
  description:
    "Invitación digital a los XV Años de Magaly · 3 de Octubre de 2026 · West Valley City, UT.",
  metadataBase: new URL("https://xv-magy.vercel.app"),
  openGraph: {
    title: "Magy · Mis XV Años",
    description: "3 de Octubre de 2026 · West Valley City, UT.",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Magy · Mis XV Años" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magy · Mis XV Años",
    description: "3 de Octubre de 2026 · West Valley City, UT.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${greatVibes.variable} ${cormorant.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
