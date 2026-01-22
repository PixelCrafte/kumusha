import type { Metadata } from "next";
import { Check } from "lucide-react";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, Process, CTA } from "@/components/sections";
import { Container, Section, Heading, Text, Card } from "@/components/ui";

export const metadata: Metadata = pageMetadata.howItWorks;

const benefits = [
  {
    title: "No Upfront Fees",
    description: "We invest in your asset's success. You don't pay until you earn.",
  },
  {
    title: "Profit Sharing Model",
    description: "We earn when you earn—aligning our incentives completely.",
  },
  {
    title: "Full Transparency",
    description: "Real-time reporting and open communication at every step.",
  },
  {
    title: "Expert Management",
    description: "Specialized teams for each asset class with proven track records.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <HeroInner
        badge="Our Process"
        title="How Kumusha Asset Managers Works"
        description="From assessment to activation, we handle everything—you earn passively. Our proven 4-step process transforms your idle assets into consistent income streams."
      />

      <Process />

      {/* Benefits Section */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="text-cod-gray mb-4">
                What Makes Us Different
              </Heading>
              <Text size="lg" className="text-tundora mb-8">
                Unlike traditional asset managers, we operate on a partnership model. 
                Your success is our success, and every decision we make is designed 
                to maximize your returns.
              </Text>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-thunderbird rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-cod-gray">
                        {benefit.title}
                      </div>
                      <Text size="sm" className="text-tundora">
                        {benefit.description}
                      </Text>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-thunderbird text-white text-center">
                <div className="text-4xl font-bold mb-2">48hrs</div>
                <Text size="sm" className="text-mandys-pink">
                  Average proposal time
                </Text>
              </Card>
              <Card className="bg-desert-storm text-center">
                <div className="text-4xl font-bold text-thunderbird mb-2">0%</div>
                <Text size="sm" className="text-tundora">
                  Upfront fees
                </Text>
              </Card>
              <Card className="bg-desert-storm text-center">
                <div className="text-4xl font-bold text-thunderbird mb-2">100%</div>
                <Text size="sm" className="text-tundora">
                  Transparency
                </Text>
              </Card>
              <Card className="bg-cod-gray text-white text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <Text size="sm" className="text-stack">
                  Asset monitoring
                </Text>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="muted">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="text-cod-gray mb-4">
                Frequently Asked Questions
              </Heading>
              <Text size="lg" className="text-tundora">
                Got questions? We&apos;ve got answers.
              </Text>
            </div>
            <div className="space-y-4">
              {[
                {
                  question: "What types of assets do you manage?",
                  answer:
                    "We manage vehicles (cars, trucks, buses, fleets), real estate (residential and commercial), businesses (operational turnaround), farms (agricultural operations), and diaspora assets (remote management for Zimbabweans abroad).",
                },
                {
                  question: "How do I get started?",
                  answer:
                    "Simply submit your asset details through our contact form or call us directly. We'll assess your asset and provide a tailored proposal within 48 hours.",
                },
                {
                  question: "What are your fees?",
                  answer:
                    "We operate on a profit-sharing model with no upfront fees. We only earn when your asset generates income, typically taking a percentage of the revenue generated.",
                },
                {
                  question: "How often will I receive reports?",
                  answer:
                    "We provide monthly detailed reports including income statements, maintenance updates, and performance metrics. Diaspora clients also receive photo/video documentation.",
                },
                {
                  question: "Can I manage my asset from abroad?",
                  answer:
                    "Absolutely! Our diaspora asset management service is specifically designed for Zimbabweans living abroad. We handle everything locally while keeping you fully informed.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <Heading level={4} className="text-cod-gray mb-2">
                    {faq.question}
                  </Heading>
                  <Text className="text-tundora">{faq.answer}</Text>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTA
        title="Ready to Get Started?"
        description="Submit your asset details today and receive a tailored proposal within 48 hours."
        primaryCTA={{ label: "Submit Your Asset", href: "/contact" }}
        secondaryCTA={{ label: "Explore Asset Types", href: "/assets" }}
      />
    </>
  );
}
