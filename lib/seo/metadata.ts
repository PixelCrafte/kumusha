import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from "./constants";

interface CreateMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "" ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_ZW",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// Pre-defined metadata for common pages
export const pageMetadata = {
  home: createMetadata({
    title: "Kumusha Asset Managers | Turn Idle Assets Into Income",
    description:
      "Transform underperforming assets into profitable ventures. Vehicles, real estate, farms, and businesses—we unlock their earning potential across Zimbabwe.",
    path: "",
  }),
  howItWorks: createMetadata({
    title: "How It Works",
    description:
      "Learn how Kumusha Asset Managers transforms your idle assets into income. From assessment to activation, we handle everything—you earn passively.",
    path: "/how-it-works",
  }),
  assets: createMetadata({
    title: "Asset Classes We Manage",
    description:
      "From vehicles to farms, Kumusha Asset Managers activates idle assets across multiple categories. Explore our specialized management services.",
    path: "/assets",
  }),
  vehicles: createMetadata({
    title: "Vehicle Asset Management",
    description:
      "Turn your idle vehicle into a revenue stream. Kumusha offers car rentals, professional refurbishment, and certified resale programs in Zimbabwe.",
    path: "/assets/vehicles",
  }),
  realEstate: createMetadata({
    title: "Real Estate Asset Management",
    description:
      "Maximize your property's earning potential. Kumusha manages residential and commercial real estate with full-service tenant and maintenance support.",
    path: "/assets/real-estate",
  }),
  businesses: createMetadata({
    title: "Business Asset Management",
    description:
      "Revive struggling or idle businesses. Kumusha provides operational management, turnaround strategies, and profit optimization for business owners.",
    path: "/assets/businesses",
  }),
  farms: createMetadata({
    title: "Farm Asset Management",
    description:
      "Activate idle farmland and equipment. Kumusha manages agricultural operations, connects you to markets, and maximizes farm productivity.",
    path: "/assets/farms",
  }),
  diaspora: createMetadata({
    title: "Diaspora Asset Management",
    description:
      "For Zimbabweans abroad: Kumusha manages your vehicles, properties, farms, and businesses back home. Full transparency, regular reporting, zero stress.",
    path: "/assets/diaspora-assets",
  }),
  whyKumusha: createMetadata({
    title: "Why Choose Kumusha",
    description:
      "Discover why asset owners trust Kumusha. Transparent profit sharing, professional management, and a proven track record across multiple asset classes.",
    path: "/why-kumusha",
  }),
  fleet: createMetadata({
    title: "Our Fleet",
    description:
      "Browse our available vehicles for rent or purchase. Quality-assured cars, trucks, and commercial vehicles ready for you.",
    path: "/fleet",
  }),
  contact: createMetadata({
    title: "Contact Us",
    description:
      "Ready to activate your idle assets? Contact Kumusha Asset Managers for a free consultation. Submit your asset details or reach us directly.",
    path: "/contact",
  }),
};
