"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container, Button, Heading, Text, AnimatedBackground } from "@/components/ui";

interface HeroProps {
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  image?: string;
}

export function Hero({
  title,
  titleHighlight,
  description,
  primaryCTA,
  secondaryCTA,
  image = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=80",
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  // Highlights for the typing effect
  const highlights = titleHighlight ? [titleHighlight] : [];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Rotate highlights if multiple
  useEffect(() => {
    if (highlights.length > 1) {
      const interval = setInterval(() => {
        setCurrentHighlightIndex((prev) => (prev + 1) % highlights.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [highlights.length]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-cod-gray via-tundora to-cod-gray">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-40 scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-cod-gray/80 via-cod-gray/50 to-cod-gray/30" />
        <div className="absolute inset-0 bg-linear-to-t from-cod-gray/70 via-transparent to-cod-gray/40" />
      </div>

      {/* Animated Floating Elements */}
      <AnimatedBackground variant="shapes" />

      {/* Decorative geometric elements */}
      <div className="absolute top-20 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 border border-thunderbird/20 rounded-full animate-pulse-soft" />
      <div className="absolute bottom-40 right-20 md:right-40 w-20 h-20 md:w-40 md:h-40 border border-contessa/20 rotate-45 animate-pulse-soft" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-thunderbird rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-contessa/50 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-thunderbird/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-40 w-96 h-96 bg-contessa/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-thunderbird/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <Container className="relative z-10">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* Animated badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-thunderbird/10 border border-thunderbird/20 rounded-full transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-2 h-2 bg-thunderbird rounded-full animate-pulse" />
              <span className="text-sm font-medium text-mandys-pink">Asset Management Experts</span>
            </div>

            {/* Main heading with animated highlight */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {title}{" "}
              {highlights.length > 0 && (
                <span className="relative inline-block">
                  <span className="text-thunderbird">{highlights[currentHighlightIndex]}</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-thunderbird to-contessa rounded-full" />
                </span>
              )}
            </h1>

            {/* Description */}
            <Text
              size="xl"
              className={`text-stack mb-8 max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {description}
            </Text>

            {/* CTA buttons with hover effects */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {primaryCTA && (
                <Button
                  href={primaryCTA.href}
                  size="lg"
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {primaryCTA.label}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-cod-gray backdrop-blur-sm"
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>

            {/* Tagline */}
            <p
              className={`text-mandys-pink/80 mt-8 text-sm font-medium tracking-wide uppercase transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Unlocking Value, Preserving Wealth
            </p>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent z-10" />
    </section>
  );
}
