"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { Locale, defaultLocale, locales } from "@/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const VALID_LOCALES: readonly string[] = ["en", "pt"];

function sanitizeLocale(value: unknown): Locale {
  if (typeof value === "string" && VALID_LOCALES.includes(value)) {
    return value as Locale;
  }
  return defaultLocale;
}

function setClientCookie(name: string, value: string, days = 365): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  const cookieParts = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    `expires=${date.toUTCString()}`,
    `path=/`,
    `SameSite=Lax`,
  ];

  if (typeof window !== "undefined" && window.location.protocol === "https:") {
    cookieParts.push("Secure");
  }

  document.cookie = cookieParts.join(";");
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(
    new RegExp(
      `(?:^|; )${encodeURIComponent(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`,
    ),
  );

  return match ? decodeURIComponent(match[1]) : null;
}

function getNestedValue(
  obj: Record<string, unknown>,
  path: string,
): string | undefined {
  const result = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && acc !== null) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);

  return typeof result === "string" ? result : undefined;
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof document !== "undefined") {
      const htmlLocale = document.documentElement.getAttribute(
        "data-locale",
      ) as Locale | null;
      if (htmlLocale && VALID_LOCALES.includes(htmlLocale)) return htmlLocale;

      const langAttr = document.documentElement.lang as Locale | null;
      if (langAttr && VALID_LOCALES.includes(langAttr)) return langAttr;
    }
    return sanitizeLocale(initialLocale);
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const savedLocal = localStorage.getItem("portfolio-locale");
      const savedCookie = getCookie("portfolio-locale");

      const saved = sanitizeLocale(savedLocal || savedCookie);

      if (saved !== locale) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
        document.documentElement.setAttribute("data-locale", saved);
      }

      if (!savedCookie || savedCookie !== saved) {
        setClientCookie("portfolio-locale", saved);
      }
    } catch (error) {
      console.error("[LanguageProvider] Erro ao inicializar idioma:", error);
    } finally {
      setIsReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      const sanitized = sanitizeLocale(newLocale);

      if (sanitized === locale) return;

      setLocaleState(sanitized);

      try {
        localStorage.setItem("portfolio-locale", sanitized);
        setClientCookie("portfolio-locale", sanitized);
        document.documentElement.lang = sanitized;
        document.documentElement.setAttribute("data-locale", sanitized);

        fetch("/api/locale", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ locale: sanitized }),
        }).catch((err) => {
          console.warn(
            "[LanguageProvider] Falha ao sync cookie com servidor:",
            err,
          );
        });
      } catch (error) {
        console.error("[LanguageProvider] Erro ao salvar locale:", error);
      }
    },
    [locale],
  );

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(
        locales[locale] as unknown as Record<string, unknown>,
        key,
      );

      if (value === undefined) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            `[i18n] Tradução ausente: "${key}" no locale "${locale}"`,
          );
        }
        return "";
      }

      return value;
    },
    [locale],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      isReady,
    }),
    [locale, setLocale, t, isReady],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
