import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AccessibilityToggle from "./components/AccessibilityToggle";

// Fonte Geist com display swap para performance
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false, // Mono não precisa preload se uso for limitado
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

// Viewport separado (melhor prática Next.js 15)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark",
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale =
    (cookieStore.get("portfolio-locale")?.value as "pt" | "en") || "en";

  const data = metadataDict[locale];

  return {
    metadataBase: new URL("https://claudineiportifolio.vercel.app"),
    title: {
      default: data.title,
      template: "%s | Claudinei Alves",
    },
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
      "Deep Learning",
      "Portfolio",
    ],
    authors: [
      { name: "Claudinei Alves", url: "https://github.com/ClaudineiAlves" },
    ],
    creator: "Claudinei Alves",
    publisher: "Claudinei Alves",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: "https://claudineiportifolio.vercel.app",
      siteName: "Claudinei Alves Portfolio",
      images: [
        {
          url: "/portfolio-preview.png",
          width: 1200,
          height: 630,
          alt: "Claudinei Alves Portfolio Preview",
          type: "image/png",
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
      creator: "@claudinei_alves", // Adicione seu handle se tiver
    },
    alternates: {
      canonical: "https://claudineiportifolio.vercel.app",
      languages: {
        "pt-BR": "https://claudineiportifolio.vercel.app/pt",
        "en-US": "https://claudineiportifolio.vercel.app/en",
      },
    },
    verification: {
      google: "seu-código-do-google-search-console", // Adicione quando tiver
    },
    category: "technology",
  };
}

// JSON-LD Structured Data para SEO
function generateStructuredData(locale: string) {
  const isPt = locale === "pt";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Claudinei Alves",
    jobTitle: isPt
      ? "Engenheiro de IA & Cientista de Dados"
      : "AI Engineer & Data Scientist",
    url: "https://claudineiportifolio.vercel.app",
    sameAs: [
      "https://github.com/ClaudineiAlves",
      "https://linkedin.com/in/claudinei-alves", // Atualize com seu LinkedIn real
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Python",
      "Deep Learning",
      "Computer Vision",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const locale =
    (cookieStore.get("portfolio-locale")?.value as "pt" | "en") || "en";

  const structuredData = generateStructuredData(locale);

  return (
    <html lang={locale} suppressHydrationWarning className="dark" dir="ltr">
      <head>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Meta adicionais para PWA e mobile */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Claudinei Alves" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-bg-primary text-content-primary min-h-screen`}
      >
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />

            {/* Utilitários de UI */}
            <ScrollToTopButton />
            <AccessibilityToggle />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
