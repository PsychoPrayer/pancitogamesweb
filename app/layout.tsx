import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "PancitoGames - Creating Memorable Gaming Experiences",
  description: "PancitoGames develops educational and entertaining mobile games that connect culture, history, and fun. Discover Memory History and more.",
  keywords: ["PancitoGames", "Memory History", "educational games", "mobile games", "Venezuela", "cultural games"],
  authors: [{ name: "PancitoGames" }],
  creator: "PancitoGames",
  publisher: "PancitoGames",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pancitogames.com",
    siteName: "PancitoGames",
    title: "PancitoGames - Creating Memorable Gaming Experiences",
    description: "Educational and entertaining mobile games celebrating Latin American culture",
    images: [
      {
        url: "/LogoPancito.jpg",
        width: 1200,
        height: 630,
        alt: "PancitoGames Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PancitoGames",
    description: "Creating memorable gaming experiences",
    images: ["/LogoPancito.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="ink-body flex min-h-screen flex-col antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
