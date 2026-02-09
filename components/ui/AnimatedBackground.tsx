"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils/cn";

interface FloatingShape {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface AnimatedBackgroundProps {
  variant?: "dots" | "gradient" | "shapes";
  className?: string;
}

// Pre-defined shapes to avoid hydration mismatch
const STATIC_SHAPES: FloatingShape[] = [
  { id: 0, size: 250, x: 15, y: 20, duration: 18, delay: 0, opacity: 0.08 },
  { id: 1, size: 180, x: 75, y: 60, duration: 22, delay: 2, opacity: 0.06 },
  { id: 2, size: 300, x: 55, y: 80, duration: 25, delay: 1, opacity: 0.05 },
  { id: 3, size: 150, x: 85, y: 15, duration: 20, delay: 3, opacity: 0.07 },
  { id: 4, size: 200, x: 30, y: 70, duration: 23, delay: 1.5, opacity: 0.06 },
  { id: 5, size: 220, x: 65, y: 35, duration: 19, delay: 2.5, opacity: 0.08 },
];

export function AnimatedBackground({ variant = "shapes", className }: AnimatedBackgroundProps) {
  const shapes = useMemo(() => STATIC_SHAPES, []);

  if (variant === "dots") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-linear-to-bl from-thunderbird/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-linear-to-tr from-contessa/15 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute rounded-full bg-thunderbird/10 blur-3xl animate-float"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
