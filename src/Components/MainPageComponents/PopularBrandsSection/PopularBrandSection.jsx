import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// Import Swiper styles
import "swiper/css";
import { useRef } from "react";

const brands = [
  { id: 0, src: "/images/brand-logos/logo-1.png" },
  { id: 1, src: "/images/brand-logos/logo-2.jpg" },
  { id: 2, src: "/images/brand-logos/logo-3.jpg" },
  { id: 3, src: "/images/brand-logos/logo-4.png" },
  { id: 4, src: "/images/brand-logos/logo-5.png" },
  { id: 5, src: "/images/brand-logos/logo-6.jpg" },
  { id: 6, src: "/images/brand-logos/logo-7.png" },
  { id: 7, src: "/images/brand-logos/logo-8.png" },
  { id: 8, src: "/images/brand-logos/logo-9.png" },
  { id: 9, src: "/images/brand-logos/logo-10.png" },
];

export default function PopularBrandSection() {
  const [swiper, setSwiper] = useState(null);
  const [slides, setSlides] = useState(5);
  const swiperContainerRef = useRef();

  useEffect(() => {
    function resizeHandler() {
      console.log(window.innerWidth);
      if (window.innerWidth < 1024) {
        setSlides(window.innerWidth / 130);
        console.log(window.innerWidth / 154);
      } else {
        setSlides(() => {
          return swiperContainerRef.current.getBoundingClientRect().width / 142;
        });
      }
    }
    resizeHandler();

    window.addEventListener("resize", resizeHandler, true);

    return () => window.removeEventListener("resize", resizeHandler, true);
  }, []);

  return (
    <div className="w-full mt-4 lg:mt-6 px-5 lg:px-4">
      <div className="w-full max-w-[1336px] mx-auto border border-neutral-200 rounded-2xl py-6 flex flex-col items-center">
        <p className="text-neutral-900 text-2xl">محبوب‌ترین برندها</p>
        <div className="w-full mt-3" ref={swiperContainerRef}>
          <Swiper
            spaceBetween={0}
            slidesPerView={slides}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            className="w-full"
          >
            {brands.map((img) => {
              return (
                <SwiperSlide key={img.id} className="cursor-pointer brand-item">
                  <a className="px-4 py-1 flex items-center justify-center ">
                    <div className="w-[110px] h-[110px]">
                      <img
                        src={img.src}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
