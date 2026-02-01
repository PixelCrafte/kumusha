import { Container, Section, Heading, Text, Card } from "@/components/ui";
import { features } from "@/lib/constants/features";

export function Features() {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12" data-aos="fade-up">
          <Heading level={2} className="text-cod-gray mb-4">
            Why Choose Kumusha
          </Heading>
          <Text size="lg" className="text-tundora max-w-2xl mx-auto">
            We&apos;re not just managers—we&apos;re partners invested in your asset&apos;s
            success.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-12 h-12 bg-mandys-pink/50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-thunderbird" />
                </div>

                <Heading level={4} className="text-cod-gray mb-2">
                  {feature.title}
                </Heading>

                <Text className="text-tundora">{feature.description}</Text>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
