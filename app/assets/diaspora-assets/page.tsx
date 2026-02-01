import type { Metadata } from "next";
import Image from "next/image";
import { Check, Globe, FileText, MessageCircle, Banknote } from "lucide-react";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, CTA } from "@/components/sections";
import { Container, Section, Heading, Text, Card, Button } from "@/components/ui";

export const metadata: Metadata = pageMetadata.diaspora;

const features = [
  {
    icon: FileText,
    title: "Digital Reporting",
    description: "Monthly detailed reports delivered via email and our partner portal. Track income, expenses, and asset performance from anywhere.",
  },
  {
    icon: Globe,
    title: "Photo/Video Documentation",
    description: "See your assets regularly with photo and video updates. Never feel disconnected from what's happening on the ground.",
  },
  {
    icon: MessageCircle,
    title: "Flexible Communication",
    description: "WhatsApp, Zoom, email—your choice. We adapt to your timezone and preferred communication channels.",
  },
  {
    icon: Banknote,
    title: "Secure Disbursements",
    description: "Earnings sent to your preferred account—local or international. Transparent fee structures with no hidden costs.",
  },
];

const assetTypes = [
  {
    title: "Vehicles",
    description: "Rentals, maintenance, and resale",
    image: "https://images.unsplash.com/photo-1449965408869-ebd3fee56fd3?w=400&q=80",
  },
  {
    title: "Properties",
    description: "Tenant management, rent collection, maintenance",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
  {
    title: "Farms",
    description: "Agricultural operations and production",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80",
  },
  {
    title: "Businesses",
    description: "Operational management and turnaround",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

export default function DiasporaAssetsPage() {
  return (
    <>
      <HeroInner
        badge="For Zimbabweans Abroad"
        title="Diaspora Asset Management"
        description="Your assets in Zimbabwe. Managed with integrity. Living abroad shouldn't mean watching your assets deteriorate. Kumusha Asset Managers provides trusted, transparent management for Zimbabweans in the diaspora."
      />

      {/* What We Manage */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12" data-aos="fade-up">
            <Heading level={2} className="text-cod-gray mb-4">
              What We Manage for You
            </Heading>
            <Text size="lg" className="text-tundora max-w-2xl mx-auto">
              No matter what assets you own back home, we have the expertise to 
              manage them professionally.
            </Text>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetTypes.map((asset, index) => (
              <Card key={index} hover padding="none" className="overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-40">
                  <Image
                    src={asset.image}
                    alt={asset.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <Heading level={4} className="text-cod-gray mb-1">
                    {asset.title}
                  </Heading>
                  <Text size="sm" muted>
                    {asset.description}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Built for Remote Owners */}
      <Section background="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="text-cod-gray mb-4" data-aos="fade-right">
                Built for Remote Owners
              </Heading>
              <Text size="lg" className="text-tundora mb-6" data-aos="fade-right" data-aos-delay="100">
                We understand your challenges—distance, time zones, trust concerns. 
                Our service is designed specifically for diaspora asset owners.
              </Text>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} data-aos="fade-up" data-aos-delay={150 + index * 100}>
                      <div className="w-10 h-10 bg-mandys-pink/50 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-thunderbird" />
                      </div>
                      <Heading level={5} className="text-cod-gray mb-1">
                        {feature.title}
                      </Heading>
                      <Text size="sm" className="text-tundora">
                        {feature.description}
                      </Text>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden" data-aos="fade-left">
              <Image
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80"
                alt="Global connectivity"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section background="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level={2} className="text-white mb-4" data-aos="fade-up">
              Trust & Transparency
            </Heading>
            <Text size="lg" className="text-stack mb-8" data-aos="fade-up" data-aos-delay="100">
              Every transaction documented. Every decision communicated. We operate 
              as if your assets were our own.
            </Text>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { value: "100%", label: "Documented Transactions" },
                { value: "Monthly", label: "Detailed Reports" },
                { value: "24/7", label: "Portal Access" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6" data-aos="zoom-in" data-aos-delay={150 + index * 100}>
                  <div className="text-3xl font-bold text-thunderbird mb-1">
                    {stat.value}
                  </div>
                  <Text size="sm" className="text-stack">
                    {stat.label}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTA
        title="Join Hundreds of Diaspora Asset Owners"
        description="Register your asset today and start earning from your investments back home."
        primaryCTA={{ label: "Register Your Asset", href: "/contact" }}
        secondaryCTA={{ label: "See How It Works", href: "/how-it-works" }}
      />
    </>
  );
}
