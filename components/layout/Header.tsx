import Link from "next/link";
import { Phone } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { mainNavigation } from "@/lib/constants/navigation";
import { COMPANY_INFO } from "@/lib/seo/constants";
import { MobileNav } from "./MobileNav";
import { DesktopNavItem } from "./DesktopNavItem";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="hidden md:block bg-cod-gray text-white">
        <Container>
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{COMPANY_INFO.phone}</span>
              <span className="mx-2 text-stack">|</span>
              <span>{COMPANY_INFO.email}</span>
            </div>
            <div className="text-stack">
              Mon-Fri: {COMPANY_INFO.hours.weekdays}
            </div>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <svg
                viewBox="0 0 40 40"
                className="h-10 w-10 lg:h-12 lg:w-12"
                aria-hidden="true"
              >
                <circle cx="20" cy="20" r="20" fill="#c41719" />
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
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-thunderbird leading-tight">
                Kumusha
              </span>
              <span className="text-xs text-stack hidden sm:block">
                Asset Managers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <DesktopNavItem key={item.href} item={item} />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}
