import type { Asset, Entry, EntryFields } from "contentful";
import type { ChainModifiers, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCarListingFields {
  title: EntryFields.Symbol;
  description: EntryFields.Symbol;
  featuredImage?: Asset;
  transmission: "Automatic" | "Manual";
  yearOfManufacture: EntryFields.Date;
  fuelType: "Diesel" | "Petrol";
  isElectric: EntryFields.Boolean;
  seatingCapacity: EntryFields.Integer;
  bodyStyle:
    | "Bus"
    | "Convertible"
    | "Coup"
    | "Hatchback"
    | "Limousine"
    | "SUV"
    | "Sedan";
  chauffeurDriven: EntryFields.Boolean;
  images?: Asset[];
}

export type CarListingSkeleton = EntrySkeletonType<
  TypeCarListingFields,
  "carListing"
>;

export type TypeCarListing<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<CarListingSkeleton, Modifiers, Locales>;
