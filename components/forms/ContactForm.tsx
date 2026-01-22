"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button, Text } from "@/components/ui";
import type { ContactFormData, FormState } from "@/types/forms";

const assetTypes = [
  { value: "", label: "Select asset type" },
  { value: "vehicle", label: "Vehicle" },
  { value: "real-estate", label: "Real Estate" },
  { value: "business", label: "Business" },
  { value: "farm", label: "Farm" },
  { value: "other", label: "Other" },
];

const sources = [
  { value: "", label: "How did you hear about us?" },
  { value: "google", label: "Google Search" },
  { value: "social", label: "Social Media" },
  { value: "referral", label: "Friend/Family Referral" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    assetType: "",
    assetLocation: "",
    description: "",
    source: "",
  });

  const [formState, setFormState] = useState<FormState>({
    status: "idle",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setFormState({
        status: "success",
        message: "Thank you! We'll be in touch within 48 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        assetType: "",
        assetLocation: "",
        description: "",
        source: "",
      });
    } catch {
      setFormState({
        status: "error",
        message: "Something went wrong. Please try again or call us directly.",
      });
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-border bg-white text-cod-gray placeholder:text-stack focus:outline-none focus:ring-2 focus:ring-thunderbird focus:border-transparent transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-cod-gray mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="John Doe"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cod-gray mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-cod-gray mb-1">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+263 77 123 4567"
          />
        </div>
      </div>

      {/* Asset Type & Location */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="assetType" className="block text-sm font-medium text-cod-gray mb-1">
            Asset Type *
          </label>
          <select
            id="assetType"
            name="assetType"
            required
            value={formData.assetType}
            onChange={handleChange}
            className={inputClasses}
          >
            {assetTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="assetLocation" className="block text-sm font-medium text-cod-gray mb-1">
            Asset Location *
          </label>
          <input
            type="text"
            id="assetLocation"
            name="assetLocation"
            required
            value={formData.assetLocation}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Harare, Zimbabwe"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-cod-gray mb-1">
          Brief Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Tell us about your asset - type, condition, current use, etc."
        />
      </div>

      {/* Source */}
      <div>
        <label htmlFor="source" className="block text-sm font-medium text-cod-gray mb-1">
          How did you hear about us?
        </label>
        <select
          id="source"
          name="source"
          value={formData.source}
          onChange={handleChange}
          className={inputClasses}
        >
          {sources.map((source) => (
            <option key={source.value} value={source.value}>
              {source.label}
            </option>
          ))}
        </select>
      </div>

      {/* Status Messages */}
      {formState.status === "success" && (
        <div className="p-4 rounded-lg bg-green-50 text-green-800">
          {formState.message}
        </div>
      )}
      {formState.status === "error" && (
        <div className="p-4 rounded-lg bg-red-50 text-red-800">
          {formState.message}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={formState.status === "loading"}
      >
        {formState.status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Your Asset
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <Text size="sm" muted className="text-center">
        By submitting, you agree to our{" "}
        <a href="/legal/privacy" className="text-thunderbird hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/legal/terms" className="text-thunderbird hover:underline">
          Terms of Service
        </a>
        .
      </Text>
    </form>
  );
}
