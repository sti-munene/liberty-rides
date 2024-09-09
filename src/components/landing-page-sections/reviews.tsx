"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Heading } from "../typography";
import { Review } from "../review";
import { Pagination } from "swiper/modules";

const reviews = [
  {
    id: 1,
    rating: 4,
    user: {
      name: "James B",
      image: null,
    },
    review:
      "Best customer service. Wouldn't hesitate to refer many more. Thank you Moses and your team",
  },
  {
    id: 2,
    rating: 4,
    user: {
      name: "Abbi Summers",
      image: null,
    },
    review:
      "Great experience. Good car, super service and no stress. Lots of understanding for the local situation so they won’t charge you for a little scratch or some dust, as you can see on the picture :)",
  },
  {
    id: 3,
    rating: 4,
    user: {
      name: "Terry B",
      image: null,
    },
    review: "Exemplary operation. Definitely 100% recommended!",
  },
  {
    id: 4,
    rating: 4.5,
    user: {
      name: "Simon Murphy",
      image: null,
    },
    review:
      "It was a pleasure dealing with Zak. Very professional and helpful approach. The car was in a good condition with no problems at all. If you want to rent a car in Kenya , Zak is the guy :)",
  },
  {
    id: 5,
    rating: 4.5,
    user: {
      name: "Aaron Paul",
      image: null,
    },
    review:
      "The vehicle was excellent. Very professional service and support. Rented for 3 week self drive around Kenya, no problems. Would highly recommend",
  },
];

export const Reviews = () => {
  return (
    <div className="py-24">
      <Heading className="text-primary-500" size="heading3" font="display">
        What Our Customers are Saying
      </Heading>

      <div className="mt-8">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
        >
          {reviews.map((r) => {
            return (
              <SwiperSlide key={r.id}>
                <Review review={r} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
