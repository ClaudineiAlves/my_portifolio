"use client";

import { useEffect, useState } from "react";

/**
 * Detecta dispositivos sem hover preciso (celulares/tablets).
 * Usado para desligar efeitos de tilt/parallax, que no toque competem
 * com o gesto de scroll e só adicionam custo de renderização.
 *
 * Retorna `false` no SSR e no primeiro render para manter a hidratação estável.
 */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isTouch;
}
