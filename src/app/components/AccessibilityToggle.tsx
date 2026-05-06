"use client";

import { useState, useEffect } from "react";
import { Accessibility, Type, Contrast, Moon } from "lucide-react";

type AccessibilitySettings = {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
};

export default function AccessibilityToggle() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  // Carregar configurações do localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("accessibility-settings");
      if (saved) {
        setSettings(JSON.parse(saved));
      }
    } catch {
      // Ignora erro
    }
  }, []);

  // Aplicar configurações ao documento
  useEffect(() => {
    const { highContrast, largeText, reducedMotion } = settings;

    // Alto contraste
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }

    // Texto grande
    if (largeText) {
      document.documentElement.classList.add("large-text");
    } else {
      document.documentElement.classList.remove("large-text");
    }

    // Redução de motion
    if (reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }

    // Salvar no localStorage
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Botão principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        aria-label="Opções de acessibilidade"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Menu de opções */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 bg-bg-secondary border border-bg-tertiary rounded-2xl shadow-xl p-4 min-w-[220px] space-y-3">
          <h3 className="text-sm font-bold text-content-primary mb-2">
            Acessibilidade
          </h3>

          {/* Alto contraste */}
          <button
            onClick={() => toggleSetting("highContrast")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
              settings.highContrast
                ? "bg-primary-500/20 text-primary-400"
                : "hover:bg-bg-tertiary text-content-secondary"
            }`}
            aria-pressed={settings.highContrast}
          >
            <Contrast className="w-5 h-5" />
            <span className="text-sm">Alto contraste</span>
          </button>

          {/* Texto grande */}
          <button
            onClick={() => toggleSetting("largeText")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
              settings.largeText
                ? "bg-primary-500/20 text-primary-400"
                : "hover:bg-bg-tertiary text-content-secondary"
            }`}
            aria-pressed={settings.largeText}
          >
            <Type className="w-5 h-5" />
            <span className="text-sm">Texto grande</span>
          </button>

          {/* Reduzir motion */}
          <button
            onClick={() => toggleSetting("reducedMotion")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
              settings.reducedMotion
                ? "bg-primary-500/20 text-primary-400"
                : "hover:bg-bg-tertiary text-content-secondary"
            }`}
            aria-pressed={settings.reducedMotion}
          >
            <Moon className="w-5 h-5" />
            <span className="text-sm">Reduzir animações</span>
          </button>
        </div>
      )}
    </div>
  );
}
