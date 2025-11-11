import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className={inter.className}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
