import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Velora Estates | Beyond Properties. Into Possibilities.",
    template: "%s | Velora Estates",
  },
  description:
    "Independent luxury real estate agency. Discover exceptional homes and personalized real estate services across the United States.",
  keywords: [
    "luxury real estate",
    "luxury homes",
    "mansions for sale",
    "premium properties",
    "real estate agency",
    "Velora Estates",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Velora Estates",
    title: "Velora Estates | Exceptional Homes. Extraordinary Living.",
    description:
      "Discover exceptional properties and personalized real estate services with Velora Estates.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-matte-black text-ivory antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
