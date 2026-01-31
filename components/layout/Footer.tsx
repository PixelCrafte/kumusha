import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Container } from "@/components/ui";
import { footerNavigation } from "@/lib/constants/navigation";
import { COMPANY_INFO, SITE_NAME } from "@/lib/seo/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cod-gray text-white">
      {/* Main Footer */}
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <svg
                  viewBox="0 0 40 40"
                  className="h-10 w-10"
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
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white leading-tight">
                    Kumusha
                  </span>
                  <span className="text-xs text-stack">Asset Managers</span>
                </div>
              </Link>
              <p className="text-stack text-sm leading-relaxed mb-6">
                Transform idle assets into income-generating opportunities.
                Vehicles, real estate, farms, and businesses—we unlock their
                earning potential.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com/kumusha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stack hover:text-thunderbird transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/kumusha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stack hover:text-thunderbird transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/kumusha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stack hover:text-thunderbird transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {footerNavigation.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-stack hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Asset Types */}
            <div>
              <h3 className="text-white font-semibold mb-4">Asset Types</h3>
              <ul className="space-y-3">
                {footerNavigation.assetTypes.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-stack hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-thunderbird shrink-0 mt-0.5" />
                  <span className="text-stack text-sm">
                    {COMPANY_INFO.address.street}
                    <br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-thunderbird shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-stack hover:text-white transition-colors text-sm"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-thunderbird shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-stack hover:text-white transition-colors text-sm"
                  >
                    {COMPANY_INFO.phone2}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-thunderbird shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-stack hover:text-white transition-colors text-sm"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-tundora">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-stack text-sm">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerNavigation.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-stack hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
