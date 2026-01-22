"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { NavItem } from "@/lib/constants/navigation";

interface DesktopNavItemProps {
  item: NavItem;
}

export function DesktopNavItem({ item }: DesktopNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === "/"
    ? pathname === "/"
    : pathname.startsWith(item.href);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-desert-storm",
          isActive ? "text-thunderbird" : "text-tundora hover:text-thunderbird"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-desert-storm",
          isActive ? "text-thunderbird" : "text-tundora hover:text-thunderbird"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[200px] animate-scale-in">
            {item.children?.map((child) => {
              const isChildActive = pathname === child.href;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "block px-4 py-2 text-sm transition-colors",
                    isChildActive
                      ? "text-thunderbird bg-mandys-pink/30"
                      : "text-tundora hover:bg-desert-storm hover:text-thunderbird"
                  )}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
