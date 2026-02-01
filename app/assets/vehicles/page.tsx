import type { Metadata } from "next";
import Image from "next/image";
import { Check, Car, Wrench, BadgeDollarSign } from "lucide-react";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, CTA } from "@/components/sections";
import { Container, Section, Heading, Text, Card, Button } from "@/components/ui";

export const metadata: Metadata = pageMetadata.vehicles;

const services = [
  {
    icon: Car,
    title: "Rental Program",
    description:
      "We market your vehicle to vetted renters—individuals and businesses. You earn monthly rental income while we handle everything.",
    features: [
      "Vetted renters with deposit protection",
      "Regular maintenance included",
      "Monthly income disbursements",
      "Insurance coordination",
    ],
  },
  {
    icon: Wrench,
    title: "Refurbishment Services",
    description:
      "Vehicles in poor condition? Our certified mechanics restore them to market-ready standards, increasing their rental or resale value.",
    features: [
      "Mechanical overhaul",
      "Interior and exterior detailing",
      "Compliance and certification",
      "Quality assurance inspection",
    ],
  },
  {
    icon: BadgeDollarSign,
    title: "Resale Program",
    description:
      "Ready to sell? We position your vehicle in the market, handle negotiations, and ensure you get fair value—fast.",
    features: [
      "Professional valuation",
      "Marketing across multiple channels",
      "Secure transaction handling",
      "Documentation support",
    ],
  },
];

const idealFor = [
  "Vehicle owners with idle cars",
  "Fleet operators seeking management support",
  "Diaspora Zimbabweans with vehicles at home",
  "Businesses with underutilized transport assets",
];

export default function VehiclesPage() {
  return (
    <>
      <HeroInner
        badge="Vehicle Management"
        title="Vehicle Asset Management"
        description="Your vehicle. Our expertise. Shared profits. Whether you own a single car or an entire fleet, Kumusha Asset Managers transforms idle vehicles into consistent income streams."
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

      {/* Image + Content Section */}
      <Section background="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden" data-aos="fade-right">
              <Image
                src="https://images.unsplash.com/photo-1449965408869-ebd3fee56fd3?w=800&q=80"
                alt="Fleet of vehicles"
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
                Our vehicle management services are designed for asset owners who 
                want to generate income without the hassle of day-to-day operations.
              </Text>
              <ul className="space-y-4 mb-8">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-3" data-aos="fade-left" data-aos-delay={150 + index * 50}>
                    <div className="w-2 h-2 bg-thunderbird rounded-full" />
                    <Text className="text-tundora">{item}</Text>
                  </li>
                ))}
              </ul>
              <div data-aos="fade-left" data-aos-delay="400">
                <Button href="/contact">Start Earning From Your Vehicle</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTA
        title="Ready to Activate Your Vehicle?"
        description="Submit your vehicle details and receive a tailored proposal within 48 hours."
        primaryCTA={{ label: "Submit Your Vehicle", href: "/contact" }}
        secondaryCTA={{ label: "See How It Works", href: "/how-it-works" }}
      />
    </>
  );
}
