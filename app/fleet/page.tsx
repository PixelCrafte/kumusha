import type { Metadata } from "next";
import Image from "next/image";
import { Users, Fuel, Settings } from "lucide-react";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, CTA } from "@/components/sections";
import { Container, Section, Heading, Text, Card, Badge, Button } from "@/components/ui";

export const metadata: Metadata = pageMetadata.fleet;

// Sample fleet data - in production, this would come from a database/API
const vehicles = [
  {
    id: 1,
    name: "Toyota Hilux 2022",
    category: "Pickup",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&q=80",
    price: "$85/day",
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    available: true,
  },
  {
    id: 2,
    name: "Honda Fit 2021",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80",
    price: "$45/day",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    available: true,
  },
  {
    id: 3,
    name: "Toyota Quantum 2020",
    category: "Minibus",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    price: "$120/day",
    seats: 15,
    fuel: "Diesel",
    transmission: "Manual",
    available: true,
  },
  {
    id: 4,
    name: "Mazda CX-5 2023",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    price: "$95/day",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    available: false,
  },
  {
    id: 5,
    name: "Isuzu KB 2021",
    category: "Pickup",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    price: "$80/day",
    seats: 5,
    fuel: "Diesel",
    transmission: "Manual",
    available: true,
  },
  {
    id: 6,
    name: "Toyota Corolla 2022",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600&q=80",
    price: "$55/day",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    available: true,
  },
];

const categories = ["All", "Sedan", "SUV", "Pickup", "Minibus"];

export default function FleetPage() {
  return (
    <>
      <HeroInner
        badge="Our Fleet"
        title="Browse Available Vehicles"
        description="Quality-assured vehicles available for rent or purchase. Every vehicle in our fleet is inspected, maintained, and ready for you."
      />

      {/* Fleet Listing */}
      <Section background="white">
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-desert-storm text-tundora hover:bg-mandys-pink hover:text-thunderbird first:bg-thunderbird first:text-white"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <Card key={vehicle.id} hover padding="none" className="overflow-hidden" data-aos="fade-up" data-aos-delay={index * 50}>
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={vehicle.available ? "success" : "warning"}>
                      {vehicle.available ? "Available" : "Reserved"}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge>{vehicle.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <Heading level={4} className="text-cod-gray">
                      {vehicle.name}
                    </Heading>
                    <div className="text-thunderbird font-bold">
                      {vehicle.price}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="flex items-center gap-4 text-sm text-tundora mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{vehicle.seats}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="h-4 w-4" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings className="h-4 w-4" />
                      <span>{vehicle.transmission}</span>
                    </div>
                  </div>

                  <Button
                    href="/contact"
                    variant={vehicle.available ? "primary" : "outline"}
                    size="sm"
                    className="w-full"
                  >
                    {vehicle.available ? "Book Now" : "Join Waitlist"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Own a Vehicle Section */}
      <Section background="muted">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level={2} className="text-cod-gray mb-4" data-aos="fade-up">
              Own a Vehicle? List It With Us
            </Heading>
            <Text size="lg" className="text-tundora mb-8" data-aos="fade-up" data-aos-delay="100">
              Turn your idle vehicle into a revenue stream. We handle everything—
              marketing, vetting, maintenance, and customer service. You earn 
              passive income.
            </Text>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
              <Button href="/assets/vehicles">Learn About Vehicle Management</Button>
              <Button href="/contact" variant="outline">
                List Your Vehicle
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTA
        title="Need Help Choosing?"
        description="Contact us and we'll help you find the perfect vehicle for your needs."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
