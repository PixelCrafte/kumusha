import { ArrowRight } from "lucide-react";
import { Container, Section, Heading, Text, Button } from "@/components/ui";

interface CTAProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export function CTA({
  title = "Ready to Unlock Your Asset's Potential?",
  description = "Get started today. Our team will assess your asset and propose a tailored activation strategy within 48 hours.",
  primaryCTA = { label: "Get Started", href: "/contact" },
  secondaryCTA = { label: "Learn How It Works", href: "/how-it-works" },
}: CTAProps) {
  return (
    <Section background="primary">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Heading level={2} className="text-white mb-4" data-aos="fade-up">
            {title}
          </Heading>
          <Text size="lg" className="text-mandys-pink mb-8" data-aos="fade-up" data-aos-delay="100">
            {description}
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button href={primaryCTA.href} variant="white" size="lg">
              {primaryCTA.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-thunderbird"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
