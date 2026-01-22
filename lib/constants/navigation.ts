export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "Assets",
    href: "/assets",
    children: [
      { label: "Vehicles", href: "/assets/vehicles" },
      { label: "Real Estate", href: "/assets/real-estate" },
      { label: "Businesses", href: "/assets/businesses" },
      { label: "Farms", href: "/assets/farms" },
      { label: "Diaspora Assets", href: "/assets/diaspora-assets" },
    ],
  },
  { label: "Fleet", href: "/fleet" },
  { label: "Why Kumusha", href: "/why-kumusha" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Why Kumusha", href: "/why-kumusha" },
    { label: "Contact", href: "/contact" },
  ],
  assetTypes: [
    { label: "Vehicles", href: "/assets/vehicles" },
    { label: "Real Estate", href: "/assets/real-estate" },
    { label: "Businesses", href: "/assets/businesses" },
    { label: "Farms", href: "/assets/farms" },
    { label: "Diaspora Assets", href: "/assets/diaspora-assets" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ],
};
