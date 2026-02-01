import type { Metadata } from "next";
import Image from "next/image";
import { Check, Home, Building2, Hammer } from "lucide-react";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, CTA } from "@/components/sections";
import { Container, Section, Heading, Text, Card, Button } from "@/components/ui";

export const metadata: Metadata = pageMetadata.realEstate;

const services = [
  {
    icon: Home,
    title: "Residential Property Management",
    description:
      "From single homes to apartment buildings, we handle tenant sourcing, rent collection, maintenance, and compliance.",
    features: [
      "Tenant vetting and lease management",
      "Rent collection and disbursement",
      "Property maintenance coordination",
      "Regular inspections and reporting",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Property Management",
    description:
      "Offices, retail spaces, and warehouses. We optimize occupancy, manage tenant relationships, and ensure your property performs.",
    features: [
      "Market-rate rent optimization",
      "Multi-tenant coordination",
      "Facility management",
      "Lease renewals and negotiations",
    ],
  },
  {
    icon: Hammer,
    title: "Property Turnaround",
    description:
      "Have a neglected property? We assess, renovate, and reposition it for maximum market appeal and rental potential.",
    features: [
      "Property condition assessment",
      "Renovation project management",
      "Market repositioning strategy",
      "Value enhancement consultation",
    ],
  },
];

export default function RealEstatePage() {
  return (
    <>
      <HeroInner
        badge="Real Estate Management"
        title="Real Estate Asset Management"
        description="Maximize your property's earning potential. Vacant or underperforming properties drain value. Kumusha Asset Managers transforms your real estate into reliable, income-generating assets."
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

      {/* Why Trust Us */}
      <Section background="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="text-cod-gray mb-4" data-aos="fade-right">
                Why Property Owners Trust Kumusha
              </Heading>
              <Text size="lg" className="text-tundora mb-6" data-aos="fade-right" data-aos-delay="100">
                Managing property is complex—tenants, maintenance, compliance, and 
                market dynamics. We handle it all so you can enjoy the returns 
                without the stress.
              </Text>
              <ul className="space-y-4 mb-8">
                {[
                  "Transparent monthly reporting",
                  "No hidden fees or surprise costs",
                  "Local expertise with professional standards",
                  "24/7 emergency response for tenants",
                  "Legal compliance management",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3" data-aos="fade-right" data-aos-delay={150 + index * 50}>
                    <Check className="w-5 h-5 text-thunderbird" />
                    <Text className="text-tundora">{item}</Text>
                  </li>
                ))}
              </ul>
              <div data-aos="fade-right" data-aos-delay="400">
                <Button href="/contact">Submit Your Property</Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden" data-aos="fade-left">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Modern property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTA
        title="Put Your Property to Work"
        description="Whether residential or commercial, we'll maximize your property's earning potential."
        primaryCTA={{ label: "Submit Your Property", href: "/contact" }}
        secondaryCTA={{ label: "Explore Other Assets", href: "/assets" }}
      />
    </>
  );
}
