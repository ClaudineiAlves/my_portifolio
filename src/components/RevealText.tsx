// src/components/RevealText.tsx
"use client";

import { useTextReveal } from "@/hooks/useTextReveal";
import { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Component = "div",
}: RevealTextProps) {
  const { ref, isVisible } = useTextReveal();

  const directionStyles = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  };

  return (
    <Component
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${directionStyles[direction]}`}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
