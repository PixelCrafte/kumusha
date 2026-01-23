"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Home, 
  Layers, 
  Car, 
  Building2, 
  Briefcase, 
  Wheat, 
  Globe, 
  Truck, 
  Heart, 
  Mail,
  Phone,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { mainNavigation } from "@/lib/constants/navigation";
import { COMPANY_INFO } from "@/lib/seo/constants";

// Icon mapping for navigation items
const iconMap: Record<string, React.ElementType> = {
  "Home": Home,
  "How It Works": Layers,
  "Assets": Sparkles,
  "Vehicles": Car,
  "Real Estate": Building2,
  "Businesses": Briefcase,
  "Farms": Wheat,
  "Diaspora Assets": Globe,
  "Fleet": Truck,
  "Why Kumusha": Heart,
  "Contact": Mail,
};

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const getIcon = (label: string) => {
    const Icon = iconMap[label] || Layers;
    return Icon;
  };

  if (!mounted) return null;

  return (
    <div className="lg:hidden flex items-center">
      {/* Animated Hamburger Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="relative z-50 p-2.5 rounded-xl bg-gradient-to-br from-thunderbird to-roof-terracotta text-white shadow-lg shadow-thunderbird/25 hover:shadow-xl hover:shadow-thunderbird/30 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-out",
              isOpen ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-out",
              isOpen ? "opacity-0 scale-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-out",
              isOpen ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </div>
      </button>

      {/* Backdrop with blur */}
      <div
        className={cn(
          "fixed inset-0 bg-cod-gray/60 backdrop-blur-sm z-40 transition-all duration-500",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-[380px] z-50 transform transition-all duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-mandys-pink/20" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-thunderbird/5 to-mandys-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-thunderbird/5 to-contessa/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-thunderbird/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-thunderbird/20 rounded-xl blur-lg" />
                <svg
                  viewBox="0 0 40 40"
                  className="relative h-10 w-10"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c41719" />
                      <stop offset="100%" stopColor="#a01e22" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="20" fill="url(#logoGradient)" />
                  <text
                    x="20"
                    y="26"
                    textAnchor="middle"
                    fill="white"
                    fontSize="18"
                    fontWeight="bold"
                    fontFamily="system-ui"
                  >
                    K
                  </text>
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-thunderbird to-roof-terracotta bg-clip-text text-transparent">
                  Kumusha
                </span>
                <p className="text-xs text-stack">Asset Managers</p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 rounded-xl bg-desert-storm hover:bg-mandys-pink/30 text-tundora hover:text-thunderbird transition-all duration-300"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-1">
              {mainNavigation.map((item, index) => {
                const isActive = item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
                const hasChildren = item.children && item.children.length > 0;
                const isSubmenuOpen = openSubmenu === item.label;
                const Icon = getIcon(item.label);

                return (
                  <li 
                    key={item.href}
                    className={cn(
                      "transform transition-all duration-500 ease-out",
                      isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                    )}
                    style={{ transitionDelay: isOpen ? `${index * 50 + 100}ms` : "0ms" }}
                  >
                    {hasChildren ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => toggleSubmenu(item.label)}
                          className={cn(
                            "group flex items-center gap-3 w-full py-3.5 px-4 rounded-2xl text-left font-medium transition-all duration-300",
                            isActive
                              ? "bg-gradient-to-r from-thunderbird to-roof-terracotta text-white shadow-lg shadow-thunderbird/20"
                              : "text-tundora hover:bg-desert-storm/80"
                          )}
                        >
                          <span className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                            isActive 
                              ? "bg-white/20" 
                              : "bg-gradient-to-br from-thunderbird/10 to-mandys-pink/20 group-hover:from-thunderbird/20 group-hover:to-mandys-pink/30"
                          )}>
                            <Icon className={cn(
                              "h-5 w-5 transition-colors",
                              isActive ? "text-white" : "text-thunderbird"
                            )} />
                          </span>
                          <span className="flex-1">{item.label}</span>
                          <ChevronRight
                            className={cn(
                              "h-5 w-5 transition-all duration-300",
                              isSubmenuOpen && "rotate-90",
                              isActive ? "text-white/70" : "text-stack"
                            )}
                          />
                        </button>
                        <div className={cn(
                          "overflow-hidden transition-all duration-300 ease-out",
                          isSubmenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}>
                          <ul className="mt-2 ml-6 space-y-1 border-l-2 border-gradient-to-b from-thunderbird/30 to-mandys-pink/30 pl-4">
                            {item.children?.map((child, childIndex) => {
                              const isChildActive = pathname === child.href;
                              const ChildIcon = getIcon(child.label);
                              return (
                                <li 
                                  key={child.href}
                                  className={cn(
                                    "transform transition-all duration-300",
                                    isSubmenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                                  )}
                                  style={{ transitionDelay: isSubmenuOpen ? `${childIndex * 50}ms` : "0ms" }}
                                >
                                  <Link
                                    href={child.href}
                                    onClick={closeMenu}
                                    className={cn(
                                      "group flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm transition-all duration-300",
                                      isChildActive
                                        ? "bg-thunderbird/10 text-thunderbird font-medium"
                                        : "text-tundora hover:bg-desert-storm/60 hover:text-thunderbird"
                                    )}
                                  >
                                    <ChildIcon className={cn(
                                      "h-4 w-4 transition-colors",
                                      isChildActive ? "text-thunderbird" : "text-stack group-hover:text-thunderbird"
                                    )} />
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          "group flex items-center gap-3 py-3.5 px-4 rounded-2xl font-medium transition-all duration-300",
                          isActive
                            ? "bg-gradient-to-r from-thunderbird to-roof-terracotta text-white shadow-lg shadow-thunderbird/20"
                            : "text-tundora hover:bg-desert-storm/80"
                        )}
                      >
                        <span className={cn(
                          "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                          isActive 
                            ? "bg-white/20" 
                            : "bg-gradient-to-br from-thunderbird/10 to-mandys-pink/20 group-hover:from-thunderbird/20 group-hover:to-mandys-pink/30"
                        )}>
                          <Icon className={cn(
                            "h-5 w-5 transition-colors",
                            isActive ? "text-white" : "text-thunderbird"
                          )} />
                        </span>
                        <span className="flex-1">{item.label}</span>
                        {isActive && (
                          <span className="flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white/40" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                          </span>
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="relative p-5 border-t border-thunderbird/10 bg-gradient-to-t from-mandys-pink/10 to-transparent">
            {/* Contact info */}
            <div className="flex items-center gap-4 mb-4 text-sm text-tundora">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 hover:text-thunderbird transition-colors"
              >
                <Phone className="h-4 w-4 text-thunderbird" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
            
            {/* CTA Button */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="group relative flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-thunderbird via-roof-terracotta to-thunderbird bg-[length:200%_100%] text-white font-semibold shadow-xl shadow-thunderbird/25 hover:shadow-2xl hover:shadow-thunderbird/30 hover:bg-right transition-all duration-500 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Sparkles className="h-5 w-5" />
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            {/* Trust badge */}
            <p className="mt-4 text-center text-xs text-stack">
              Trusted by <span className="font-semibold text-thunderbird">500+</span> clients across Zimbabwe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
