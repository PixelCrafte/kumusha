import { Hero, AssetCategories, Process, Features, Stats, Testimonials, CTA } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Transform Idle Assets Into"
        titleHighlight="Steady Income"
        description="Kumusha Asset Managers specializes in converting underperforming assets—vehicles, real estate, farms, and businesses—into profitable ventures. Whether you're in Zimbabwe or abroad, we put your assets to work."
        primaryCTA={{ label: "Get Started", href: "/contact" }}
        secondaryCTA={{ label: "See How It Works", href: "/how-it-works" }}
        image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=80"
      />
      <AssetCategories />
      <Process />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
