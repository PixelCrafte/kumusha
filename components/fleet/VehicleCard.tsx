"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Fuel, Settings, Eye, X } from "lucide-react";
import { Card, Badge, Button, Heading } from "@/components/ui";

interface Vehicle {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  seats: number;
  fuel: string;
  transmission: string;
  available: boolean;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

export function VehicleCard({ vehicle, index }: VehicleCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        hover
        padding="none"
        className="overflow-hidden"
        data-aos="fade-up"
        data-aos-delay={index * 50}
      >
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
          {/* View Full Image Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
            aria-label={`View full image of ${vehicle.name}`}
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <Heading level={4} className="text-cod-gray">
              {vehicle.name}
            </Heading>
            <div className="text-thunderbird font-bold text-sm">
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

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-cod-gray">
                {vehicle.name}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-desert-storm rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-tundora" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full aspect-16/10">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-contain bg-desert-storm"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-tundora">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{vehicle.seats} seats</span>
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
              <div className="text-thunderbird font-bold">
                {vehicle.price}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
