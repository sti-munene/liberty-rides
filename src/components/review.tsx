import React from "react";
import { Heading, Text } from "./typography";
import { Star, StarHalf } from "lucide-react";

const RatingStars = ({ rating }: { rating: number }) => {
  const totalStars = 5;

  // Get the integer part of the rating for full stars
  const fullStars = Math.floor(rating);

  // Check if there's a decimal part for a half star
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="mt-2 text-amber-500 flex items-center gap-1">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <Star key={`full-${index}`} className="h-5" />
      ))}

      {/* Render half star if present */}
      {hasHalfStar && <StarHalf className="h-5" />}
    </div>
  );
};

export const Review = ({ review }: { review: Review }) => {
  return (
    <div className="text-white">
      <div className="flex items-center gap-2">
        <span className="h-10 w-10 flex items-center justify-center bg-primary text-sm text-white rounded-full">
          AM
        </span>
        <Heading weight="medium" size="subtitle2" as="h6">
          {review.user.name}
        </Heading>
      </div>

      <div className="mt-2 text-amber-500 flex items-center gap-1">
        <RatingStars rating={review.rating} />
      </div>

      <div className="mt-2">
        <Text>{review.review}</Text>
      </div>
    </div>
  );
};
