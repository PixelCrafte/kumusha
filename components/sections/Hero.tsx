import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Button, Heading, Text } from "@/components/ui";

interface HeroProps {
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  image?: string;
}

export function Hero({
  title,
  titleHighlight,
  description,
  primaryCTA,
  secondaryCTA,
  image = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=80",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cod-gray via-tundora to-cod-gray">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cod-gray/90 via-cod-gray/70 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-thunderbird/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-contessa/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Heading level={1} className="text-white mb-6">
              {title}{" "}
              {titleHighlight && (
                <span className="text-thunderbird">{titleHighlight}</span>
              )}
            </Heading>

            <Text size="xl" className="text-stack mb-8 max-w-2xl">
              {description}
            </Text>

            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Button href={primaryCTA.href} size="lg">
                  {primaryCTA.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cod-gray">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
