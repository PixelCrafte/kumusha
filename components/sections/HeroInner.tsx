import { Container, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

interface HeroInnerProps {
  title: string;
  description: string;
  badge?: string;
  align?: "left" | "center";
  background?: "white" | "muted" | "dark";
}

const backgroundStyles = {
  white: "bg-white",
  muted: "bg-desert-storm",
  dark: "bg-cod-gray text-white",
};

export function HeroInner({
  title,
  description,
  badge,
  align = "center",
  background = "muted",
}: HeroInnerProps) {
  return (
    <section className={cn("py-16 md:py-20", backgroundStyles[background])}>
      <Container>
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {badge && (
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-thunderbird bg-mandys-pink/50 rounded-full" data-aos="fade-down">
              {badge}
            </span>
          )}
          <Heading level={1} className={cn(background === "dark" ? "text-white" : "text-cod-gray", "mb-4")} data-aos="fade-up">
            {title}
          </Heading>
          <Text
            size="lg"
            className={cn(background === "dark" ? "text-stack" : "text-tundora")}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {description}
          </Text>
        </div>
      </Container>
    </section>
  );
}
