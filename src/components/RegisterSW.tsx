"use client";

import { useEffect } from "react";

// Componente para registrar o Service Worker
// Adicione <RegisterSW /> no seu layout.tsx, dentro do <body>
export function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("[SW] Registrado:", reg.scope))
        .catch((err) => console.error("[SW] Erro:", err));
    }
  }, []);

  return null;
}
