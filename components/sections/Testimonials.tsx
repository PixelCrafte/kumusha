import Image from "next/image";
import { Quote } from "lucide-react";
import { Container, Section, Heading, Text, Card } from "@/components/ui";

const testimonials = [
  {
    quote:
      "Kumusha transformed my idle fleet into a consistent income stream. Their transparency and professionalism exceeded my expectations.",
    author: "Tendai Moyo",
    role: "Fleet Owner, Harare",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "Living in the UK, I was worried about my properties back home. Kumusha's regular reports and video updates give me complete peace of mind.",
    author: "Grace Mutasa",
    role: "Diaspora Investor, London",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "Our farm was underperforming for years. Within one season, Kumusha had it producing and connected us to reliable buyers.",
    author: "David Chikwanha",
    role: "Farm Owner, Marondera",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export function Testimonials() {
  return (
    <Section background="muted">
      <Container>
        <div className="text-center mb-12" data-aos="fade-up">
          <Heading level={2} className="text-cod-gray mb-4">
            What Our Partners Say
          </Heading>
          <Text size="lg" className="text-tundora max-w-2xl mx-auto">
            Hear from asset owners who have transformed their idle assets into
            income with Kumusha.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
              <Quote className="absolute top-6 right-6 h-8 w-8 text-mandys-pink" />
              <div className="pt-2">
                <Text className="text-tundora mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </Text>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-cod-gray">
                      {testimonial.author}
                    </div>
                    <Text size="sm" muted>
                      {testimonial.role}
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
