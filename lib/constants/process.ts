import {
  ClipboardCheck,
  FileText,
  Settings,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Asset Assessment",
    description:
      "Submit your asset details through our online form or in-person consultation. We evaluate its current state, market potential, and optimal activation strategy.",
    icon: ClipboardCheck,
  },
  {
    step: 2,
    title: "Strategy Proposal",
    description:
      "Within 48 hours, you'll receive a tailored proposal outlining how we'll activate your asset—whether through rentals, refurbishment, resale, or operational management.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Activation & Management",
    description:
      "Once you approve, we take over. Our team handles all operations—maintenance, marketing, tenant/customer management, and compliance.",
    icon: Settings,
  },
  {
    step: 4,
    title: "Earnings & Reporting",
    description:
      "Receive regular income disbursements and transparent performance reports. Track your asset's earnings through our partner portal.",
    icon: TrendingUp,
  },
];
