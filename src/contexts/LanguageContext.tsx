"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, defaultLocale, locales } from "@/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Helper para setar cookie
function setCookie(name: string, value: string, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
}

// Helper para ler cookie
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  return (
    (path.split(".").reduce((acc: unknown, key: string) => {
      if (acc && typeof acc === "object") {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj) as string) ?? path
  ); // fallback: retorna a própria chave se não encontrar
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isReady, setIsReady] = useState(false);

  // Inicializa o idioma (client-side only)
  useEffect(() => {
    // 1. Tenta ler do localStorage primeiro
    const savedLocal = localStorage.getItem(
      "portfolio-locale",
    ) as Locale | null;

    // 2. Tenta ler do cookie (para sincronizar com servidor)
    const savedCookie = getCookie("portfolio-locale") as Locale | null;

    // Prioriza localStorage, mas usa cookie se não houver localStorage
    const saved = savedLocal || savedCookie;

    if (saved && saved in locales) {
      setLocaleState(saved);
      // Sincroniza cookie se vier do localStorage
      if (!savedCookie || savedCookie !== saved) {
        setCookie("portfolio-locale", saved);
      }
    } else {
      // Se não há preferência salva, seta o cookie com o default
      setCookie("portfolio-locale", defaultLocale);
    }

    setIsReady(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
    // Seta cookie para o servidor poder ler
    setCookie("portfolio-locale", newLocale);
    // Atualiza o atributo lang do HTML para acessibilidade e SEO
    document.documentElement.lang = newLocale;
  };

  const t = (key: string): string => {
    return getNestedValue(
      locales[locale] as unknown as Record<string, unknown>,
      key,
    );
  };

  // Evita flash de conteúdo errado durante hidratação
  if (!isReady) {
    return (
      <LanguageContext.Provider
        value={{ locale: defaultLocale, setLocale: () => {}, t: (key) => key }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
