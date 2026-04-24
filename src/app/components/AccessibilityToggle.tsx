"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AccessibilityToggle() {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Verifica preferência salva
    const saved = localStorage.getItem("high-contrast");
    if (saved === "true") {
      setHighContrast(true);
      document.documentElement.classList.add("high-contrast");
    }
  }, []);

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);

    if (newValue) {
      document.documentElement.classList.add("high-contrast");
      localStorage.setItem("high-contrast", "true");
    } else {
      document.documentElement.classList.remove("high-contrast");
      localStorage.setItem("high-contrast", "false");
    }
  };

  return (
    <button
      onClick={toggleHighContrast}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-background-secondary border border-primary-700 hover:border-primary-500 transition-all shadow-glow-sm hover:shadow-glow-md"
      aria-label={
        highContrast ? "Desativar alto contraste" : "Ativar alto contraste"
      }
      title={
        highContrast ? "Desativar alto contraste" : "Ativar alto contraste"
      }
    >
      {highContrast ? (
        <Eye className="w-5 h-5 text-primary-400" />
      ) : (
        <EyeOff className="w-5 h-5 text-text-muted" />
      )}
    </button>
  );
}
