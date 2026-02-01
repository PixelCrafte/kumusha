import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { HeroInner } from "@/components/sections";
import { Container, Section, Heading, Text } from "@/components/ui";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Learn how Kumusha Asset Managers collects, uses, and protects your personal information.",
  path: "/legal/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroInner
        title="Privacy Policy"
        description="Last updated: January 2026"
        background="muted"
      />

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg" data-aos="fade-up">
            <Heading level={2} className="text-cod-gray mb-4">
              Introduction
            </Heading>
            <Text className="text-tundora mb-6">
              Kumusha Asset Managers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy 
              and is committed to protecting your personal data. This privacy policy 
              explains how we collect, use, and safeguard your information when you 
              use our services or visit our website.
            </Text>

            <Heading level={2} className="text-cod-gray mb-4 mt-8">
              Information We Collect
            </Heading>
            <Text className="text-tundora mb-4">
              We collect information you provide directly to us, including:
            </Text>
            <ul className="list-disc pl-6 text-tundora space-y-2 mb-6">
              <li>Name, email address, and phone number</li>
              <li>Asset details and location information</li>
              <li>Communication preferences</li>
              <li>Financial information for payment processing</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <Heading level={2} className="text-cod-gray mb-4 mt-8">
              How We Use Your Information
            </Heading>
            <Text className="text-tundora mb-4">
              We use the information we collect to:
            </Text>
            <ul className="list-disc pl-6 text-tundora space-y-2 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate about promotions and events</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <Heading level={2} className="text-cod-gray mb-4 mt-8">
              Information Sharing
            </Heading>
            <Text className="text-tundora mb-6">
              We do not sell, trade, or otherwise transfer your personal information 
              to third parties without your consent, except as described in this policy. 
              We may share information with service providers who assist us in operating 
              our business, provided they agree to keep this information confidential.
            </Text>

            <Heading level={2} className="text-cod-gray mb-4 mt-8">
              Data Security
            </Heading>
            <Text className="text-tundora mb-6">
              We implement appropriate technical and organizational measures to protect 
              your personal data against unauthorized access, alteration, disclosure, 
              or destruction. However, no method of transmission over the Internet is 
              100% secure.
            </Text>

            <Heading level={2} className="text-cod-gray mb-4 mt-8">
              Your Rights
            </Heading>
            <Text className="text-tundora mb-4">
              You have the right to:
            </Text>
            <ul className="list-disc pl-6 text-tundora space-y-2 mb-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>

            <Heading level={2} className="text-cod-gray mb-4 mt-8">
              Contact Us
            </Heading>
            <Text className="text-tundora mb-6">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@kumusha.co.zw" className="text-thunderbird hover:underline">
                privacy@kumusha.co.zw
              </a>
              .
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
}
