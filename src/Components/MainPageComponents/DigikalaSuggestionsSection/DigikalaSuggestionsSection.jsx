import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Grid } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import GridItem from "./GridItem";
import { useRef } from "react";

SwiperCore.use([Grid]);

const gridItems = [
  [
    { id: 0, src: "/images/laptop.jpg", title: "لپ تاپ و الترابوک" },
    { id: 1, src: "/images/tablet.jpg", title: "تبلت" },
  ],
  [
    { id: 3, src: "/images/laptop.jpg", title: "لپ تاپ و الترابوک" },
    { id: 4, src: "/images/tablet.jpg", title: "تبلت" },
  ],
  [
    { id: 5, src: "/images/laptop.jpg", title: "لپ تاپ و الترابوک" },
    { id: 6, src: "/images/tablet.jpg", title: "تبلت" },
  ],
  [
    { id: 7, src: "/images/laptop.jpg", title: "لپ تاپ و الترابوک" },
    { id: 8, src: "/images/tablet.jpg", title: "تبلت" },
  ],
  [
    { id: 9, src: "/images/laptop.jpg", title: "لپ تاپ و الترابوک" },
    { id: 10, src: "/images/tablet.jpg", title: "تبلت" },
  ],
  [
    { id: 11, src: "/images/laptop.jpg", title: "لپ تاپ و الترابوک" },
    { id: 12, src: "/images/tablet.jpg", title: "تبلت" },
  ],
  [
    { id: 13, src: "/images/laptop.jpg", title: "لپ تاپ و الترابوک" },
    { id: 14, src: "/images/tablet.jpg", title: "تبلت" },
  ],
  [
    { id: 15, src: "/images/laptop.jpg", title: "لپ تاپ و الترابوک" },
    { id: 16, src: "/images/tablet.jpg", title: "تبلت" },
  ],
];

export default function DigikalaSuggestionsSection() {
  const [swiper, setSwiper] = useState(null);
  const [slides, setSlides] = useState(8);
  const swiperContainerRef = useRef();

  useEffect(() => {
    function resizeHandler() {
      console.log(window.innerWidth);
      if (window.innerWidth < 1024) {
        setSlides(window.innerWidth / 154);
        console.log(window.innerWidth / 154);
      } else {
        setSlides(() => {
          return swiperContainerRef.current.getBoundingClientRect().width / 182;
        });
      }
    }
    resizeHandler();

    window.addEventListener("resize", resizeHandler, true);

    return () => window.removeEventListener("resize", resizeHandler, true);
  }, []);

  return (
    <div className="rounded-2xl relative px-5 lg:px-0 pb-3 lg:pb-0 mt-4 lg:mt-6">
      <div className="text-center py-3 lg:py-4">
        <h2 className="text-xl text-neutral-900 font-[500] leading-[2.1]">
          پیشنهاد دیجی‌کالا
        </h2>
      </div>
      <div
        className="border border-neutral-200 rounded-2xl mt-2"
        ref={swiperContainerRef}
      >
        <Swiper
          spaceBetween={0}
          dir="rtl"
          slidesPerView={slides}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          className="w-full grid-swiper-container"
        >
          {gridItems.map((item) => {
            return (
              <SwiperSlide key={item[0].id}>
                <div className="flex flex-col grid-col divide-y divide-neutral-200">
                  <GridItem src={item[0].src} title={item[0].title} />
                  <GridItem src={item[1]?.src} title={item[1]?.title} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
