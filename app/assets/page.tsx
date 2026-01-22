import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, AssetCategories, CTA } from "@/components/sections";

export const metadata: Metadata = pageMetadata.assets;

export default function AssetsPage() {
  return (
    <>
      <HeroInner
        badge="Our Services"
        title="Asset Classes We Manage"
        description="From vehicles to farms, Kumusha Asset Managers activates idle assets across multiple categories. Explore our specialized management services and find the right solution for your assets."
      />
      <AssetCategories />
      <CTA
        title="Not Sure Which Category Fits?"
        description="Contact us for a free consultation. We'll assess your asset and recommend the best activation strategy."
        primaryCTA={{ label: "Get Free Consultation", href: "/contact" }}
      />
    </>
  );
}
