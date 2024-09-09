"use client";

import Link from "next/link";
import { CarListing } from "../car-listing";
import { Heading } from "../typography";
import { TypeCarListing } from "@/types/contentful";

const CarListings = ({ listings }: { listings: TypeCarListing[] }) => {
  return (
    <div className="py-24">
      <div className="w-full flex items-center justify-between">
        <Heading className="text-primary-500" size="heading3" font="display">
          Cars For Hire
        </Heading>

        <Link
          className="text-base font-medium text-current hover:text-primary"
          href="/listings"
        >
          Browse all Cars
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-8">
        {listings.map((listing: TypeCarListing) => {
          return <CarListing key={listing.sys.id} listing={listing} />;
        })}
      </div>
    </div>
  );
};

export default CarListings;
