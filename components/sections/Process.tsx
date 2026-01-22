import { Container, Section, Heading, Text, Card } from "@/components/ui";
import { processSteps } from "@/lib/constants/process";

export function Process() {
  return (
    <Section background="muted">
      <Container>
        <div className="text-center mb-12">
          <Heading level={2} className="text-cod-gray mb-4">
            How It Works
          </Heading>
          <Text size="lg" className="text-tundora max-w-2xl mx-auto">
            A simple 4-step process to transform your idle assets into consistent
            income streams.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.step} hover className="relative">
                {/* Step number */}
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-thunderbird text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                <div className="pt-4">
                  <div className="w-12 h-12 bg-mandys-pink/50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-thunderbird" />
                  </div>

                  <Heading level={4} className="text-cod-gray mb-2">
                    {step.title}
                  </Heading>

                  <Text size="sm" className="text-tundora">
                    {step.description}
                  </Text>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
