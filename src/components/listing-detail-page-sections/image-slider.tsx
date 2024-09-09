"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Asset } from "contentful";

export const ListingImageSlider = ({ images }: { images: Asset[] }) => {
  console.log("images");
  console.log(images);

  return (
    <div className="relative mt-4">
      <div className="wiper-nav-wrapper absolute top-[-50px] right-0 mb-4 flex items-center gap-2">
        <button className="prev rounded-sm h-9 w-9 flex items-center justify-center shadow-sm disabled:pointer-events-none disabled:opacity-20 bg-white text-current hover:text-primary">
          <ChevronLeft />
        </button>
        <button className="next rounded-sm h-9 w-9 flex items-center justify-center shadow-sm disabled:pointer-events-none disabled:opacity-20 bg-white text-current hover:text-primary">
          <ChevronRight />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {images?.map((img) => {
          return (
            <SwiperSlide key={img.sys.id}>
              <Image
                height={
                  (img?.fields?.file?.details as { image: { height: number } })
                    .image?.height || 720
                }
                width={
                  (img?.fields?.file?.details as { image: { width: number } })
                    .image?.width || 1280
                }
                alt={img?.fields?.title || ("Image" as any)}
                className="h-[320px] lg:h-[420px] w-full object-cover object-center rounded-lg"
                priority
                src={`https:${img?.fields?.file?.url as any}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
