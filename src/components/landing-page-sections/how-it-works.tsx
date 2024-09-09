import React from "react";
import { Heading, Text } from "../typography";

interface WorkSectionProps {
  idx: number;
  title: string;
  description: string;
}

const entries = [
  {
    title: "Browse & Pick a Car From Our Listings",
    description:
      " Explore our wide range of vehicles online and choose the perfect car for your needs. Filter by type, features, and availability, then select your vehicle to start your booking.",
  },
  {
    title: "Book the Car for the Selected Dates",
    description:
      "After selecting your car, fill out a simple reservation form with your preferred dates. A sales agent will promptly contact you to confirm availability and guide you through the payment process to finalize your booking.",
  },
  {
    title: "We Deliver the Car for Use",
    description:
      "On the agreed date, we&apos;ll deliver the car to your preferred location, ensuring it&apos;s ready for you to hit the road without any hassle.",
  },
  {
    title: "Return",
    description:
      "When your rental period ends, return the car to our office. Our team will handle the check-in process and ensure everything is in order.",
  },
];

const HowItWorksEntry = ({ idx, title, description }: WorkSectionProps) => {
  return (
    <div className="bg-white group px-4 py-3 rounded-md">
      <Heading
        font="display"
        size="heading4"
        as="span"
        className="block text-primary"
      >
        {idx.toString()}
      </Heading>

      <Heading
        className="mb-1 group-hover:text-primary"
        size="heading6"
        weight="bold"
      >
        {title}
      </Heading>

      <Text as="p" size="body1">
        {description}
      </Text>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <div className="py-24">
      <Heading className="text-primary-500" size="heading3" font="display">
        How It Works
      </Heading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        {entries.map((section, idx) => {
          return (
            <HowItWorksEntry
              key={idx}
              idx={idx + 1}
              title={section.title}
              description={section.description}
            />
          );
        })}
      </div>
    </div>
  );
};
