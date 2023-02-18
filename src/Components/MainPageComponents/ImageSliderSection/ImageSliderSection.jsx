import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// Import Swiper styles
import "swiper/css";

SwiperCore.use([Pagination, Autoplay]);

const imageSlides = [
  {
    id: 0,
    src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/24f45fa07698c6586ca8a167d9e165d808714adb_1675855160.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: 1,
    src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/6b587037ba33622733a3ca2496b1c00436b82a8e_1675952069.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: 2,
    src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/fe84f62b9228730aa7966dea4dab98539d246d86_1675871368.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: 3,
    src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/02275c197291f237f7d57c98a0fbed5d42ac2e12_1675856355.jpg?x-oss-process=image/quality,q_95",
  },
];

export default function ImageSliderSection() {
  const [swiper, setSwiper] = useState(null);
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: false }}
        spaceBetween={0}
        autoplay={{ delay: 3000 }}
        centeredSlides={true}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        className="w-full swiper-image-slider"
      >
        {imageSlides.map((img) => {
          return (
            <SwiperSlide key={img.id} className="w-full cursor-pointer">
              <a className="w-full">
                <img src={img.src} className="w-full" />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
