import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, Features, Stats, Testimonials, CTA } from "@/components/sections";
import { Container, Section, Heading, Text, Card } from "@/components/ui";

export const metadata: Metadata = pageMetadata.whyKumusha;

const values = [
  {
    title: "Partnership First",
    description:
      "We see ourselves as partners, not just service providers. Your success is our success, and we invest our resources to ensure positive outcomes.",
  },
  {
    title: "Integrity Always",
    description:
      "Honesty and transparency guide everything we do. From reporting to decision-making, we operate with the highest ethical standards.",
  },
  {
    title: "Excellence in Execution",
    description:
      "We don't just manage assets—we optimize them. Our team brings expertise, innovation, and dedication to every asset we handle.",
  },
  {
    title: "Community Impact",
    description:
      "By activating idle assets, we create jobs, improve communities, and contribute to Zimbabwe's economic growth.",
  },
];

export default function WhyKumushaPage() {
  return (
    <>
      <HeroInner
        badge="Our Difference"
        title="Why Choose Kumusha Asset Managers"
        description="We're not just managers—we're partners invested in your asset's success. Discover what makes Kumusha the trusted choice for asset owners across Zimbabwe and the diaspora."
      />

      <Features />

      {/* Our Story Section */}
      <Section background="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Kumusha team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <Heading level={2} className="text-cod-gray mb-4">
                Our Story
              </Heading>
              <Text size="lg" className="text-tundora mb-4">
                Kumusha Asset Managers was born from a simple observation: too many 
                valuable assets in Zimbabwe sit idle while their owners—many living 
                abroad—watch them depreciate.
              </Text>
              <Text className="text-tundora mb-4">
                We set out to change that. By combining local expertise with 
                professional management standards, we&apos;ve created a model that 
                transforms underperforming assets into income-generating opportunities.
              </Text>
              <Text className="text-tundora">
                Today, we manage over 500 assets across vehicles, real estate, farms, 
                and businesses, disbursing millions to our partner asset owners every 
                month.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} className="text-cod-gray mb-4">
              Our Values
            </Heading>
            <Text size="lg" className="text-tundora max-w-2xl mx-auto">
              These principles guide every decision we make and every asset we manage.
            </Text>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-thunderbird text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <Heading level={4} className="text-cod-gray mb-2">
                      {value.title}
                    </Heading>
                    <Text className="text-tundora">{value.description}</Text>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Stats />
      <Testimonials />

      <CTA
        title="Ready to Partner With Us?"
        description="Join hundreds of asset owners who trust Kumusha to manage and grow their investments."
        primaryCTA={{ label: "Get Started", href: "/contact" }}
        secondaryCTA={{ label: "See How It Works", href: "/how-it-works" }}
      />
    </>
  );
}
