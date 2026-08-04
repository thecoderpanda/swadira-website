import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Cinzel,
  Inter,
  Tiro_Devanagari_Hindi,
  Bebas_Neue,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display-alt",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  title: "SwadIra — A Legacy by Mr. Sanjay Naidu | Premium Catering in Nagpur",
  description:
    "SwadIra — the modern legacy of Sanjay Naidu Caterers (est. 1990). Weddings · Corporate · Private · Destination catering across Nagpur and Central India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${bebas.variable} ${inter.variable} ${tiro.variable}`}
    >
      <body className="font-sans antialiased overflow-x-hidden bg-ink text-cream-50">
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
