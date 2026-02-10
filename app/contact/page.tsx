import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Video } from "lucide-react";
import { pageMetadata } from "@/lib/seo/metadata";
import { COMPANY_INFO } from "@/lib/seo/constants";
import { HeroInner } from "@/components/sections";
import { Container, Section, Heading, Text, Card } from "@/components/ui";
import { ContactForm } from "@/components/forms";

export const metadata: Metadata = pageMetadata.contact;

const contactMethods = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone}`,
    description: "Call or WhatsApp us directly",
  },
  {
    icon: Mail,
    title: "Email",
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    title: "Office",
    value: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}`,
    href: "https://maps.google.com",
    description: "Visit us in person",
  },
  {
    icon: Clock,
    title: "Hours",
    value: `Mon-Fri: ${COMPANY_INFO.hours.weekdays}`,
    description: `Sat: ${COMPANY_INFO.hours.saturday}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroInner
        badge="Get In Touch"
        title="Contact Us"
        description="Ready to activate your idle assets? Contact Kumusha Asset Managers for a free consultation. Submit your asset details or reach us directly."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
      />

      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3" data-aos="fade-right">
              <Card padding="lg">
                <Heading level={3} className="text-cod-gray mb-2">
                  Submit Your Asset
                </Heading>
                <Text className="text-tundora mb-6">
                  Fill out the form below with your asset details. Our team will 
                  review and respond within 48 hours with a tailored proposal.
                </Text>
                <ContactForm />
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Methods */}
              <Card data-aos="fade-left" data-aos-delay="100">
                <Heading level={4} className="text-cod-gray mb-4">
                  Reach Us Directly
                </Heading>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    const content = (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-mandys-pink/50 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-thunderbird" />
                        </div>
                        <div>
                          <div className="font-medium text-cod-gray">
                            {method.title}
                          </div>
                          <div className="text-tundora">{method.value}</div>
                          {method.description && (
                            <Text size="sm" muted>
                              {method.description}
                            </Text>
                          )}
                        </div>
                      </div>
                    );

                    return method.href ? (
                      <a
                        key={index}
                        href={method.href}
                        className="block hover:bg-desert-storm rounded-lg p-2 -m-2 transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index} className="p-2 -m-2">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Diaspora Notice */}
              <Card className="bg-cod-gray text-white" data-aos="fade-left" data-aos-delay="200">
                <div className="flex items-start gap-3">
                  <Video className="h-6 w-6 text-thunderbird shrink-0 mt-1" />
                  <div>
                    <Heading level={5} className="text-white mb-2">
                      For Diaspora Clients
                    </Heading>
                    <Text size="sm" className="text-stack">
                      We offer virtual consultations via Zoom or WhatsApp video. 
                      Mention your timezone when submitting the form and we&apos;ll 
                      arrange a convenient time.
                    </Text>
                  </div>
                </div>
              </Card>

              {/* Interactive Map */}
              <Card padding="none" className="overflow-hidden" data-aos="fade-left" data-aos-delay="300">
                <div className="relative h-64">
                  <iframe
                    title="Kumusha Asset Managers Location"
                    src={`https://www.google.com/maps?q=${encodeURIComponent('82 Blakeway Drive, Belvedere, Harare, Zimbabwe')}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-3 bg-white border-t border-border">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.country}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-thunderbird hover:text-roof-terracotta transition-colors font-medium"
                  >
                    <MapPin className="h-4 w-4" />
                    Get Directions — {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
