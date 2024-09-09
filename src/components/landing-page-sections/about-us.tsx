import React from "react";
import { Heading } from "../typography";

export const AboutUs = () => {
  return (
    <div className="py-24">
      <Heading className="text-primary-500" size="heading3" font="display">
        Who Are We?
      </Heading>

      <div className="mt-8">
        <Heading as="p" size="subtitle1">
          At Liberty Rides, we offer a wide range of vehicles to meet all your
          transportation needs. Whether you&apos;re looking for a compact car
          for city driving, a spacious SUV for a family vacation, or a luxury
          vehicle for a special occasion, we&apos;ve got you covered.
        </Heading>
      </div>
    </div>
  );
};
