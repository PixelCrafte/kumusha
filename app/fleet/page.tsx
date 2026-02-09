import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroInner, CTA } from "@/components/sections";
import { Container, Section, Heading, Text, Button } from "@/components/ui";
import { VehicleCard } from "@/components/fleet";

export const metadata: Metadata = pageMetadata.fleet;

// Sample fleet data - in production, this would come from a database/API
const vehicles = [
  {
    id: 1,
    name: "Honda Fit GD1",
    category: "Hatchback",
    image: "/images/honda-fit-gd1.webp",
    price: "$45/day 200km",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    available: true,
  },
  {
    id:2,
    name:"Honda Fit GE6",
    category:"Hatchback",
    image:"/images/honda-fit-ge6.webp",
    price:"$50/day 200km",
    seats:5,
    fuel:"Petrol",
    transmission:"Automatic",
    available:true,
  },
  {
    id:3,
    name:"Toyota Aqua",
    category:"Hatchback",
    image:"/images/toyota-aqua.webp",
    price:"$55/day 200km",
    seats:5,
    fuel:"Petrol",
    transmission:"Automatic",
    available:true,
  },
  {
    id:4,
    name:"Honda Shuttle GP7",
    category:"Wagon",
    image:"/images/honda-shuttle-gp7.webp",
    price:"$55/day 200km",
    seats:5,
    fuel:"Petrol",
    transmission:"Automatic",
    available:true,
  },
    {
    id:5,
    name:"Nissan Xtrial",
    category:"SUV",
    image:"/images/nissan-xtrial.webp",
    price:"$65/day 200km",
    seats:5,
    fuel:"Petrol",
    transmission:"Automatic",
    available:true,
  },
  {
    id:6,
    name:"Toyota Fortuner",
    category:"SUV",
    image:"/images/toyota-fortuner.webp",
    price:"$160/day 48hrs",
    seats:7,
    fuel:"Petrol",
    transmission:"Automatic",
    available:true,
  },
  {
    id:7,
    name:"Toyota Hilux",
    category:"Pickup",
    image:"/images/toyota-hilux.webp",
    price:"$160/day 48hrs",
    seats:5,
    fuel:"Petrol",
    transmission:"Manual",
    available:true,
  },
  {
    id:8,
    name:"Nissan NP300",
    category:"Pickup",
    image:"/images/nissan-np300.webp",
    price:"$90/day 48hrs",
    seats:5,
    fuel:"Diesel",
    transmission:"Manual",
    available:true,
  },
  {
    id:9,
    name:"Toyota Dyna",
    category:"Lorry",
    image:"/images/toyota-dyna.webp",
    price:"Available on request",
    seats:5,
    fuel:"Diesel",
    transmission:"Manual",
    available:true,
  },
  {
    id:10,
    name:"Toyota Quantum",
    category:"Minibus",
    image:"/images/toyota-quantum.webp",
    price:"Available on request",
    seats:5,
    fuel:"Petrol",
    transmission:"Automatic",
    available:true,
  },
  {
    id:11,
    name:"Toyota Travel Class",
    category:"Minibus",
    image:"/images/toyota-travel-class.webp",
    price:"Available on request",
    seats:5,
    fuel:"Diesel",
    transmission:"Manual",
    available:true,
  },

];

// const categories = ["All", "Hatchback", "Wagon", "SUV", "Pickup", "Minibus", "Lorry"];

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
          {/* <div className="flex flex-wrap gap-2 mb-8" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-desert-storm text-tundora hover:bg-mandys-pink hover:text-thunderbird first:bg-thunderbird first:text-white"
              >
                {category}
              </button>
            ))}
          </div> */}

          {/* Vehicle Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
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
