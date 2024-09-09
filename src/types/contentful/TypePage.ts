import type { Entry, EntryFields } from "contentful";
import type { ChainModifiers, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePageFields {
  title: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  pageContent: EntryFields.RichText;
}

export type PageSkeleton = EntrySkeletonType<TypePageFields, "page">;

export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<PageSkeleton, Modifiers, Locales>;
