import React from "react";
import { Heading, Text } from "../typography";

const reasons = [
  {
    id: 1,
    title: "Affordable Rates",
    description: "We provide competitive pricing with no hidden fees.",
  },
  {
    id: 2,
    title: "Wide Selection",
    description:
      "Choose from our extensive fleet of well-maintained cars, including economy, luxury, and specialty vehicles.",
  },
  {
    id: 3,
    title: "Flexible Rentals",
    description:
      "Whether you need a car for a day, a week, or longer, our flexible rental options cater to your schedule.",
  },
  {
    id: 4,
    title: "24/7 Customer Support",
    description:
      "Our team is available around the clock to assist you with any inquiries or issues.",
  },
];

export const WhyUsSection = () => {
  return (
    <div className="py-24">
      <Heading className="text-white" size="heading3" font="display">
        Why Us?
      </Heading>

      <div className="mt-8 grid grid-cols-12 gap-4">
        {reasons.map((reason) => {
          return (
            <div
              key={reason.id}
              className="bg-white bg-opacity-5 text-white p-4 rounded-md col-span-12 md:col-span-6"
            >
              <Heading font="display" size="heading6">
                {reason.title}
              </Heading>

              <Text className="mt-2">{reason.description}</Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};
