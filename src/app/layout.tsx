import type { Metadata } from "next";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

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

// Metadados traduzidos
const metadataDict = {
  pt: {
    title: "Claudinei Alves | Engenheiro de IA & Cientista de Dados",
    description:
      "Portfolio de Claudinei Alves — Desenvolvedor focado em Inteligência Artificial, Ciência de Dados e Engenharia de Software. Projetos com Python, Machine Learning e análise de dados aplicada a problemas reais.",
    ogTitle: "Claudinei Alves | Portfolio de IA & Ciência de Dados",
    ogDescription:
      "Projetos em Inteligência Artificial, Ciência de Dados e Desenvolvimento de Software focados em resolver problemas reais com tecnologia.",
    twitterTitle: "Claudinei Alves | Engenheiro de IA",
    twitterDescription:
      "Projetos de Inteligência Artificial, Machine Learning e desenvolvimento web moderno.",
    locale: "pt_BR",
  },
  en: {
    title: "Claudinei Alves | AI Engineer & Data Scientist",
    description:
      "Claudinei Alves' Portfolio — Developer focused on Artificial Intelligence, Data Science and Software Engineering. Projects with Python, Machine Learning and data analysis applied to real-world problems.",
    ogTitle: "Claudinei Alves | AI & Data Science Portfolio",
    ogDescription:
      "Projects in Artificial Intelligence, Data Science and Software Development focused on solving real problems with technology.",
    twitterTitle: "Claudinei Alves | AI Engineer",
    twitterDescription:
      "Projects in Artificial Intelligence, Machine Learning and modern web development.",
    locale: "en_US",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  // Lê o cookie de idioma (deve ser setado quando o usuário muda o idioma)
  const cookieStore = await cookies();
  const locale =
    (cookieStore.get("portfolio-locale")?.value as "pt" | "en") || "en";

  const data = metadataDict[locale];

  return {
    metadataBase: new URL("https://claudineiportifolio.vercel.app"),
    title: data.title,
    description: data.description,
    keywords: [
      "Claudinei Alves",
      "AI Engineer",
      "Data Scientist",
      "Machine Learning",
      "Python Developer",
      "Artificial Intelligence",
      "Computer Vision",
      "Data Analysis",
    ],
    authors: [{ name: "Claudinei Alves" }],
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
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
      locale: data.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.twitterTitle,
      description: data.twitterDescription,
      images: ["/portfolio-preview.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="text-white">
            <div className="container">{children}</div>
          </main>
          <ScrollToTopButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
