import Link from "next/link";
import { Container, Heading, Text, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <div className="text-8xl font-bold text-thunderbird mb-4">404</div>
          <Heading level={1} className="text-cod-gray mb-4">
            Page Not Found
          </Heading>
          <Text size="lg" className="text-tundora mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have 
            been moved or doesn&apos;t exist.
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/">Go Home</Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
