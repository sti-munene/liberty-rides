import React from "react";
import { Heading, Text } from "./typography";
import Image from "next/image";
import { FuelIcon } from "./icons/fuel";
import { SeatingCapacityIcon } from "./icons/seating-capacity";
import { Car } from "lucide-react";
import { TransmissionIcon } from "./icons/transmission";
import { extractYear } from "@/utils";
import Link from "next/link";
import { TypeCarListing } from "@/types/contentful";
import { type Asset } from "contentful";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface CarListingProps {
  listing: TypeCarListing;
}

export const CarListing = ({ listing }: CarListingProps) => {
  return (
    <div className="bg-white col-span-12 md:col-span-6 lg:col-span-4">
      <Link className="group" href={`/listings/${listing.sys.id}`}>
        <div className="relative overflow-hidden w-full h-64">
          {listing.fields.chauffeurDriven && (
            <Text
              as="span"
              weight="medium"
              className="absolute top-4 left-0 px-2 h-10 w-fit flex items-center bg-primary text-white z-[50]"
            >
              Chauffuer Driven
            </Text>
          )}

          {listing.fields.featuredImage?.fields && (
            <Image
              height={500}
              width={500}
              src={`https:${
                (listing.fields.featuredImage.fields as Asset["fields"])?.file
                  ?.url as any
              }`}
              alt={""}
              className="h-64 object-cover w-full rounded-sm group-hover:scale-105 group-hover:-rotate-1 duration-500"
            />
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <Heading as="h4" size="subtitle2" weight="bold">
              {listing.fields.title as any}
            </Heading>

            <Text size="body3" weight="medium">
              ({extractYear(listing.fields.yearOfManufacture as any)} Model)
            </Text>
          </div>

          <div className="border-t border-slate-100 grid grid-cols-4 gap-1 pt-1 mb-2">
            <div className="flex items-center gap-2">
              <FuelIcon className="text-primary" />

              <Text
                className="text-slate-800"
                weight="medium"
                size="body3"
                as="p"
              >
                {listing.fields.fuelType as any}
              </Text>
            </div>

            <div className="flex items-center gap-2">
              <SeatingCapacityIcon className="text-primary" />

              <Text
                className="text-slate-800"
                weight="medium"
                size="body3"
                as="p"
              >
                {listing.fields.seatingCapacity as any} Seater
              </Text>
            </div>

            <div className="flex items-center gap-2">
              <Car className="h-7 w-7 text-primary" />

              <Text
                className="text-slate-800"
                weight="medium"
                size="body3"
                as="p"
              >
                {listing.fields.bodyStyle as any}
              </Text>
            </div>

            <div className="flex items-center gap-2">
              <TransmissionIcon className="text-primary" />

              <Text
                className="text-slate-800"
                weight="medium"
                size="body3"
                as="p"
              >
                {listing.fields.transmission as any}
              </Text>
            </div>
          </div>
        </div>
      </Link>

      <Link
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "bg-black w-full"
        )}
        href={`/listings/${listing.sys.id}`}
      >
        Rent Now
      </Link>
    </div>
  );
};
