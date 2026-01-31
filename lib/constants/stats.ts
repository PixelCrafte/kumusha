export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    value: "150+",
    label: "Assets Managed",
    description: "Vehicles, properties, farms, and businesses under our care",
  },
  {
    value: "100%",
    label: "Client Retention",
    description: "Asset owners who continue partnering with us year after year",
  },
  {
    value: "$100k+",
    label: "Monthly Disbursements",
    description: "Earnings distributed to our asset owner partners",
  },
  {
    value: "24hrs",
    label: "Response Time",
    description: "Average time to receive your tailored asset proposal",
  },
];
