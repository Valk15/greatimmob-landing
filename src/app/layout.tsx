import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

/* ── Google Fonts ─────────────────────────────────────── */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

/* ── Metadata ─────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "GREATIMMOB — Premium Real Estate",
  description:
    "Discover luxury apartments and exclusive properties in Morocco with GREATIMMOB.",
};

/* ── Root Layout ──────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
