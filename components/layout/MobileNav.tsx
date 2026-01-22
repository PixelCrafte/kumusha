"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { mainNavigation } from "@/lib/constants/navigation";
import { Button } from "@/components/ui";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <div className="lg:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="p-2 text-tundora hover:text-thunderbird transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-bold text-lg text-thunderbird">Menu</span>
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 text-tundora hover:text-thunderbird transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {mainNavigation.map((item) => {
                const isActive = item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
                const hasChildren = item.children && item.children.length > 0;
                const isSubmenuOpen = openSubmenu === item.label;

                return (
                  <li key={item.href}>
                    {hasChildren ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => toggleSubmenu(item.label)}
                          className={cn(
                            "flex items-center justify-between w-full py-3 px-4 rounded-lg text-left font-medium transition-colors",
                            isActive
                              ? "text-thunderbird bg-mandys-pink/30"
                              : "text-tundora hover:bg-desert-storm"
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform",
                              isSubmenuOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {isSubmenuOpen && (
                          <ul className="mt-2 ml-4 space-y-1 border-l-2 border-desert-storm pl-4">
                            {item.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={closeMenu}
                                    className={cn(
                                      "block py-2 px-3 rounded-lg text-sm transition-colors",
                                      isChildActive
                                        ? "text-thunderbird bg-mandys-pink/30"
                                        : "text-tundora hover:bg-desert-storm"
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          "block py-3 px-4 rounded-lg font-medium transition-colors",
                          isActive
                            ? "text-thunderbird bg-mandys-pink/30"
                            : "text-tundora hover:bg-desert-storm"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="p-4 border-t border-border">
            <Button href="/contact" className="w-full" onClick={closeMenu}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
