import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Heading, Text, Card } from "@/components/ui";
import { assetCategories } from "@/lib/constants/assets";

export function AssetCategories() {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12" data-aos="fade-up">
          <Heading level={2} className="text-cod-gray mb-4">
            Asset Classes We Manage
          </Heading>
          <Text size="lg" className="text-tundora max-w-2xl mx-auto">
            From vehicles to farms, we specialize in transforming underperforming
            assets into income-generating opportunities.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {assetCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={category.slug} href={category.href} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                <Card hover padding="none" className="overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cod-gray/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 text-white">
                        <Icon className="h-5 w-5" />
                        <span className="font-semibold">{category.shortTitle}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <Text className="text-tundora mb-4 line-clamp-2">
                      {category.description}
                    </Text>
                    <div className="flex items-center text-thunderbird font-medium group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
