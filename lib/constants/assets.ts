import {
  Car,
  Building2,
  Briefcase,
  Tractor,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface AssetCategory {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
  features: string[];
}

export const assetCategories: AssetCategory[] = [
  {
    slug: "vehicles",
    title: "Vehicle Asset Management",
    shortTitle: "Vehicles",
    description:
      "Cars, trucks, buses, and fleet vehicles. We offer rental programs, professional refurbishment, and strategic resale.",
    icon: Car,
    href: "/assets/vehicles",
    image: "https://images.unsplash.com/photo-1449965408869-ebd3fee56fd3?w=800&q=80",
    features: [
      "Rental programs with vetted customers",
      "Professional refurbishment services",
      "Certified resale programs",
      "Fleet management solutions",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Asset Management",
    shortTitle: "Real Estate",
    description:
      "Residential and commercial properties. From tenant management to rental optimization, we maximize your property's returns.",
    icon: Building2,
    href: "/assets/real-estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    features: [
      "Tenant sourcing and vetting",
      "Rent collection and disbursement",
      "Property maintenance coordination",
      "Commercial space optimization",
    ],
  },
  {
    slug: "businesses",
    title: "Business Asset Management",
    shortTitle: "Businesses",
    description:
      "Struggling or idle businesses. We provide operational turnaround, management, and profit optimization services.",
    icon: Briefcase,
    href: "/assets/businesses",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    features: [
      "Operational management",
      "Business turnaround strategies",
      "Staff hiring and supervision",
      "Financial management and reporting",
    ],
  },
  {
    slug: "farms",
    title: "Farm Asset Management",
    shortTitle: "Farms",
    description:
      "Agricultural land and equipment. We activate farming operations, manage production, and connect you to markets.",
    icon: Tractor,
    href: "/assets/farms",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
    features: [
      "Land activation and planning",
      "Crop and livestock management",
      "Equipment utilization",
      "Market linkages",
    ],
  },
  {
    slug: "diaspora-assets",
    title: "Diaspora Asset Management",
    shortTitle: "Diaspora Assets",
    description:
      "For Zimbabweans abroad. We manage your assets locally with full transparency and regular reporting.",
    icon: Globe,
    href: "/assets/diaspora-assets",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    features: [
      "Digital reporting and updates",
      "Photo/video documentation",
      "Flexible communication channels",
      "Secure international disbursements",
    ],
  },
];

export function getAssetCategory(slug: string): AssetCategory | undefined {
  return assetCategories.find((category) => category.slug === slug);
}
