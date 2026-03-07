import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Claudinei Alves | AI Engineer & Data Scientist",
  description:
    "Portfolio de Claudinei Alves — Desenvolvedor focado em Inteligência Artificial, Ciência de Dados e Engenharia de Software. Projetos com Python, Machine Learning, Next.js, React e análise de dados aplicada a problemas reais.",
  keywords: [
    "Claudinei Alves",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "Python Developer",
    "Next.js Portfolio",
    "React Developer",
    "Artificial Intelligence",
    "Computer Vision",
    "Data Analysis",
  ],
  authors: [{ name: "Claudinei Alves" }],

  openGraph: {
    title: "Claudinei Alves | AI & Data Science Portfolio",
    description:
      "Projetos em Inteligência Artificial, Ciência de Dados e Desenvolvimento de Software focados em resolver problemas reais com tecnologia.",
    url: "https://claudinei-alves.vercel.app",
    siteName: "Claudinei Alves Portfolio",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Claudinei Alves Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Claudinei Alves | AI Engineer",
    description:
      "Projetos de Inteligência Artificial, Machine Learning e desenvolvimento web moderno.",
    images: ["/portfolio-preview.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main className="text-white">
          <div className="container">{children}</div>
        </main>

        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}