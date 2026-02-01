import type { Metadata } from "next";
import Image from "next/image";
import { Check, Sprout, Tractor, Store } from "lucide-react";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, CTA } from "@/components/sections";
import { Container, Section, Heading, Text, Card, Button } from "@/components/ui";

export const metadata: Metadata = pageMetadata.farms;

const services = [
  {
    icon: Sprout,
    title: "Land Activation",
    description:
      "We assess your land's potential, develop a production plan, and execute—whether crops, livestock, or mixed farming.",
    features: [
      "Soil and land assessment",
      "Crop/livestock planning",
      "Input sourcing and financing",
      "Seasonal production management",
    ],
  },
  {
    icon: Tractor,
    title: "Equipment Utilization",
    description:
      "Own tractors, irrigation systems, or processing equipment? We deploy them productively—on your land or through rental to neighboring farms.",
    features: [
      "Equipment maintenance",
      "Operator management",
      "Rental program coordination",
      "Utilization optimization",
    ],
  },
  {
    icon: Store,
    title: "Market Linkages",
    description:
      "Production is only half the equation. We connect your farm's output to buyers—local markets, exporters, and processors—for maximum value.",
    features: [
      "Buyer network access",
      "Price negotiation",
      "Logistics coordination",
      "Quality certification support",
    ],
  },
];

export default function FarmsPage() {
  return (
    <>
      <HeroInner
        badge="Farm Management"
        title="Farm Asset Management"
        description="From idle land to productive harvests. Farmland and agricultural equipment sitting idle? Kumusha Asset Managers activates your farming assets, manages operations, and delivers returns."
      />

      {/* Services Grid */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} hover className="h-full" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="w-14 h-14 bg-mandys-pink/50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-thunderbird" />
                  </div>
                  <Heading level={3} className="text-cod-gray mb-3">
                    {service.title}
                  </Heading>
                  <Text className="text-tundora mb-6">{service.description}</Text>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-thunderbird shrink-0 mt-0.5" />
                        <Text size="sm" className="text-tundora">
                          {feature}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Reporting Section */}
      <Section background="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="text-cod-gray mb-4" data-aos="fade-right">
                Transparent Farm Reporting
              </Heading>
              <Text size="lg" className="text-tundora mb-6" data-aos="fade-right" data-aos-delay="100">
                Receive regular updates on every aspect of your farm&apos;s 
                operations. Know exactly how your agricultural asset is performing.
              </Text>
              <ul className="space-y-4 mb-8">
                {[
                  "Planting and growth progress updates",
                  "Weather and condition reports",
                  "Harvest yield tracking",
                  "Sales and revenue reporting",
                  "Photo and video documentation",
                  "Input cost breakdowns",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3" data-aos="fade-right" data-aos-delay={150 + index * 50}>
                    <Check className="w-5 h-5 text-thunderbird" />
                    <Text className="text-tundora">{item}</Text>
                  </li>
                ))}
              </ul>
              <div data-aos="fade-right" data-aos-delay="450">
                <Button href="/contact">Activate Your Farm</Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden" data-aos="fade-left">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80"
                alt="Farm landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTA
        title="Ready to Activate Your Farm?"
        description="Submit your farm details and receive a tailored agricultural activation proposal."
        primaryCTA={{ label: "Submit Your Farm", href: "/contact" }}
        secondaryCTA={{ label: "Explore Other Assets", href: "/assets" }}
      />
    </>
  );
}
