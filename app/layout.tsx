import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "PancitoGames - Indie Game Studio",
  description: "PancitoGames is an indie studio making games with passion: history adventures, arcade challenges and more. Play Memory History, Pancito and the Pieces of Time and Tavern Golf in your browser.",
  keywords: ["PancitoGames", "indie games", "web games", "Memory History", "Pancito y las Piezas del Tiempo", "Tavern Golf", "educational games"],
  authors: [{ name: "PancitoGames" }],
  creator: "PancitoGames",
  publisher: "PancitoGames",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pancitogames.com",
    siteName: "PancitoGames",
    title: "PancitoGames - Indie Game Studio",
    description: "Indie games made with passion. Play them in your browser.",
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
    description: "Indie games made with passion",
    images: ["/LogoPancito.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${chakra.variable}`}>
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
