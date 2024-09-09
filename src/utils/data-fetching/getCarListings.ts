import { contentfulClient } from "@/lib/contentful";
import {
  CarListingSkeleton,
  TypeCarListing,
} from "@/types/contentful/TypeCarListing";
import { PageSkeleton } from "@/types/contentful/TypePage";

export async function getListings(limit: number = 6) {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "carListing", // Replace with your model ID
      limit: limit, // limit the results to the latest 6 entries
    });

    console.log(response.items);

    return response.items;
  } catch (error) {
    console.error("Error fetching car listings:", error);
    return [];
  }
}

export async function getCarById(entryId: string) {
  try {
    const response = await contentfulClient.getEntry(entryId);
    console.log(response);
    console.log("response");

    return response as any;
  } catch (error) {
    console.error("Error fetching entry by ID:", error);
    return null;
  }
}

// Adjust the function to use the Entry type correctly
export async function getPageBySlug(slug: string) {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "page", // Replace with your content type ID
      "fields.slug": slug, // Filter by the slug field
      limit: 1, // Ensure only one entry is returned
    });

    if (response.items.length > 0) {
      return response.items[0] as any; // Return the first entry found
    }

    return null; // No entry found
  } catch (error) {
    console.error("Error fetching entry by slug:", error);
    return null;
  }
}
