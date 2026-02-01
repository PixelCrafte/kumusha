import type { Metadata } from "next";
import Image from "next/image";
import { Check, Settings, TrendingUp, Users } from "lucide-react";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, CTA } from "@/components/sections";
import { Container, Section, Heading, Text, Card, Button } from "@/components/ui";

export const metadata: Metadata = pageMetadata.businesses;

const services = [
  {
    icon: Settings,
    title: "Operational Management",
    description:
      "Don't have time to run your business? We provide hands-on management—staffing, operations, financials—while you retain ownership.",
    features: [
      "Day-to-day operations management",
      "Staff hiring and supervision",
      "Financial management and reporting",
      "Supplier and vendor relationships",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Turnaround",
    description:
      "Struggling businesses need strategic intervention. We diagnose issues, implement changes, and restore profitability.",
    features: [
      "Operational audit and diagnosis",
      "Cost optimization strategies",
      "Revenue strategy redesign",
      "Performance monitoring",
    ],
  },
  {
    icon: Users,
    title: "Partnership & Profit Sharing",
    description:
      "We operate on a profit-sharing model. Our success is tied to your business's performance—aligning our interests completely.",
    features: [
      "Aligned incentives",
      "No upfront management fees",
      "Shared risk and reward",
      "Long-term partnership approach",
    ],
  },
];

const idealFor = [
  "Diaspora business owners",
  "Inherited businesses without active management",
  "Entrepreneurs with multiple ventures",
  "Businesses facing operational challenges",
];

export default function BusinessesPage() {
  return (
    <>
      <HeroInner
        badge="Business Management"
        title="Business Asset Management"
        description="Revive, operate, and profit. Idle or struggling businesses represent untapped potential. Kumusha Asset Managers steps in to operate, optimize, and turn your business into a profitable venture."
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

      {/* Ideal For Section */}
      <Section background="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden" data-aos="fade-right">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Business operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <Heading level={2} className="text-cod-gray mb-4" data-aos="fade-left">
                Ideal For
              </Heading>
              <Text size="lg" className="text-tundora mb-6" data-aos="fade-left" data-aos-delay="100">
                Our business management services are designed for owners who need 
                professional management without giving up ownership.
              </Text>
              <ul className="space-y-4 mb-8">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-3" data-aos="fade-left" data-aos-delay={150 + index * 50}>
                    <div className="w-2 h-2 bg-thunderbird rounded-full" />
                    <Text className="text-tundora">{item}</Text>
                  </li>
                ))}
              </ul>
              <div data-aos="fade-left" data-aos-delay="350">
                <Button href="/contact">Let&apos;s Activate Your Business</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTA
        title="Ready to Revive Your Business?"
        description="Submit your business details and let's discuss how we can turn it around."
        primaryCTA={{ label: "Submit Your Business", href: "/contact" }}
        secondaryCTA={{ label: "See How It Works", href: "/how-it-works" }}
      />
    </>
  );
}
