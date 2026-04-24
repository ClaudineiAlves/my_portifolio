// src/hooks/useTextReveal.ts
"use client";

import { useEffect, useRef, useState } from "react";

interface UseTextRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useTextReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseTextRevealOptions = {},
) {
  const { threshold = 0.2, triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isVisible };
}
