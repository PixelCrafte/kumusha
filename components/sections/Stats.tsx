import { Container, Section, Heading, Text } from "@/components/ui";
import { stats } from "@/lib/constants/stats";

export function Stats() {
  return (
    <Section background="dark">
      <Container>
        <div className="text-center mb-12" data-aos="fade-up">
          <Heading level={2} className="text-white mb-4">
            Trusted by Asset Owners
          </Heading>
          <Text size="lg" className="text-stack max-w-2xl mx-auto">
            Our track record speaks for itself. Join hundreds of satisfied asset
            owners earning passive income.
          </Text>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-thunderbird mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              {stat.description && (
                <Text size="sm" className="text-stack">
                  {stat.description}
                </Text>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
