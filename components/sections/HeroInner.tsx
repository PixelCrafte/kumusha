"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container, Heading, Text, Button, AnimatedBackground } from "@/components/ui";
import { cn } from "@/lib/utils/cn";
import { ArrowRight } from "lucide-react";

interface HeroInnerProps {
  title: string;
  description: string;
  badge?: string;
  align?: "left" | "center";
  background?: "white" | "muted" | "dark" | "gradient";
  image?: string;
  cta?: {
    label: string;
    href: string;
  };
}

export function HeroInner({
  title,
  description,
  badge,
  align = "center",
  background = "gradient",
  image,
  cta,
}: HeroInnerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isDark = background === "dark" || background === "gradient";

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 overflow-hidden",
        background === "white" && "bg-white",
        background === "muted" && "bg-desert-storm",
        background === "dark" && "bg-cod-gray",
        background === "gradient" && "bg-linear-to-br from-cod-gray via-tundora to-cod-gray"
      )}
    >
      {/* Background image if provided */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-50 scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-cod-gray/70 via-cod-gray/50 to-cod-gray/40" />
          <div className="absolute inset-0 bg-linear-to-t from-cod-gray/60 via-transparent to-cod-gray/30" />
        </div>
      )}

      {/* Animated floating shapes */}
      {isDark && <AnimatedBackground variant="shapes" className="opacity-50" />}

      {/* Decorative elements for gradient/dark backgrounds */}
      {isDark && (
        <>
          {/* Animated gradient orbs - more prominent when no image */}
          <div className={cn(
            "absolute top-0 right-0 w-96 h-96 bg-thunderbird/10 rounded-full blur-3xl animate-pulse-soft",
            image && "opacity-60"
          )} />
          <div className={cn(
            "absolute bottom-0 left-0 w-80 h-80 bg-contessa/10 rounded-full blur-3xl animate-pulse-soft",
            image && "opacity-60"
          )} style={{ animationDelay: "1s" }} />
          <div className={cn(
            "absolute top-1/3 left-1/4 w-64 h-64 bg-thunderbird/5 rounded-full blur-3xl animate-pulse-soft hidden lg:block",
            image && "opacity-40"
          )} style={{ animationDelay: "2s" }} />
          
          {/* Geometric decorations */}
          <div className="absolute top-10 right-10 w-24 h-24 border border-thunderbird/20 rounded-full animate-pulse-soft hidden md:block" />
          <div className="absolute top-20 right-32 w-12 h-12 border border-contessa/15 rounded-full animate-pulse-soft hidden lg:block" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-10 left-10 w-20 h-20 border border-contessa/20 rotate-45 animate-pulse-soft hidden md:block" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-20 left-32 w-10 h-10 border border-thunderbird/15 rotate-12 animate-pulse-soft hidden lg:block" style={{ animationDelay: "0.8s" }} />
          
          {/* Floating dots */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-thunderbird/50 rounded-full animate-pulse hidden md:block" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-contessa/40 rounded-full animate-pulse hidden md:block" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-mandys-pink/50 rounded-full animate-pulse hidden md:block" style={{ animationDelay: "1s" }} />
          
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Bottom gradient fade to white */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white to-transparent z-10" />
        </>
      )}

      {/* Decorative elements for light backgrounds */}
      {!isDark && (
        <>
          <div className="absolute top-0 right-0 w-72 h-72 bg-mandys-pink/40 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-thunderbird/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-contessa/10 rounded-full blur-3xl animate-pulse-soft hidden lg:block" style={{ animationDelay: "1.5s" }} />
          
          {/* Geometric decorations */}
          <div className="absolute top-10 right-10 w-16 h-16 border border-thunderbird/10 rounded-full animate-pulse-soft hidden md:block" />
          <div className="absolute bottom-10 left-10 w-12 h-12 border border-contessa/10 rotate-45 animate-pulse-soft hidden md:block" style={{ animationDelay: "0.5s" }} />
          
          {/* Subtle line patterns */}
          <div className="absolute top-1/2 left-0 w-40 h-px bg-linear-to-r from-transparent via-thunderbird/20 to-transparent hidden md:block" />
          <div className="absolute top-1/2 right-0 w-40 h-px bg-linear-to-l from-transparent via-thunderbird/20 to-transparent hidden md:block" />
        </>
      )}

      <Container className="relative z-10">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {/* Animated badge */}
          {badge && (
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm font-medium rounded-full transition-all duration-500",
                isDark
                  ? "bg-thunderbird/20 text-mandys-pink border border-thunderbird/30"
                  : "bg-mandys-pink/50 text-thunderbird",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              )}
            >
              <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
              {badge}
            </span>
          )}

          {/* Title with animated underline */}
          <h1
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-5 transition-all duration-500 delay-100",
              isDark ? "text-white" : "text-cod-gray",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {title}
            {align === "center" && (
              <span className="block w-16 h-1 bg-linear-to-r from-thunderbird to-contessa rounded-full mx-auto mt-4" />
            )}
          </h1>

          {/* Description */}
          <Text
            size="lg"
            className={cn(
              "transition-all duration-500 delay-200",
              isDark ? "text-stack" : "text-tundora",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {description}
          </Text>

          {/* Optional CTA */}
          {cta && (
            <div
              className={cn(
                "mt-8 transition-all duration-500 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <Button href={cta.href} size="lg" className="group">
                {cta.label}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
