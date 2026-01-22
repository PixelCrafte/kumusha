import {
  Shield,
  Handshake,
  BarChart3,
  Globe,
  Users,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: "Profit-Sharing Model",
    description:
      "We don't charge flat fees that eat into your returns. We earn when you earn—aligning our incentives completely.",
    icon: Handshake,
  },
  {
    title: "Radical Transparency",
    description:
      "No hidden costs. No vague reports. You'll always know exactly how your asset is performing and what you're earning.",
    icon: BarChart3,
  },
  {
    title: "Multi-Asset Expertise",
    description:
      "Vehicles, real estate, farms, businesses—we have specialized teams for each asset class, not a one-size-fits-all approach.",
    icon: Shield,
  },
  {
    title: "Diaspora-First Design",
    description:
      "Many of our clients are abroad. Our systems—digital reporting, flexible communication, secure payments—are built for remote asset owners.",
    icon: Globe,
  },
  {
    title: "Trusted Network",
    description:
      "Vetted renters, reliable contractors, and established market connections ensure your assets are in good hands.",
    icon: Users,
  },
  {
    title: "Fast Activation",
    description:
      "From assessment to activation in as little as 48 hours. We move quickly so your assets start earning sooner.",
    icon: Clock,
  },
];
