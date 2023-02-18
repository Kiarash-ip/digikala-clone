import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Pagination, Autoplay, Parallax } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// Import Swiper styles
import "swiper/css";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

const products = [
  {
    id: 0,
    old_price: 1500000,
    new_price: 499000,
    discount: 67,
    src: "/images/brown-box.webp",
  },
  {
    id: 1,
    old_price: 1500000,
    new_price: 499000,
    discount: 67,
    src: "/images/camera.webp",
  },
  {
    id: 2,
    old_price: 1500000,
    new_price: 499000,
    discount: 67,
    src: "/images/brown-box.webp",
  },
  {
    id: 3,
    old_price: 1500000,
    new_price: 499000,
    discount: 67,
    src: "/images/camera.webp",
  },
  {
    id: 4,
    old_price: 1500000,
    new_price: 499000,
    discount: 67,
    src: "/images/brown-box.webp",
  },
  {
    id: 5,
    old_price: 1500000,
    new_price: 499000,
    discount: 67,
    src: "/images/camera.webp",
  },
  {
    id: 6,
    old_price: 1500000,
    new_price: 499000,
    discount: 67,
    src: "/images/brown-box.webp",
  },
  {
    id: 7,
    old_price: 1500000,
    new_price: 499000,
    discount: 67,
    src: "/images/camera.webp",
  },
];
SwiperCore.use([Autoplay]);

export default function SuggestionSection() {
  const [swiper, setSwiper] = useState(null);
  const [slides, setSlides] = useState(2);
  const [isEnd, setIsEnd] = useState(true);
  const [isBeginning, setIsBeginning] = useState(false);
  const swiperContainerRef = useRef();

  //   useEffect(() => {
  //     swiper?.isNext();
  //   });

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
    <div className="w-full lg:px-4">
      <div
        ref={swiperContainerRef}
        className="w-full max-w-[1336px] relative mx-auto bg-gradient-to-t from-primary-500 to-primary-700 lg:rounded-2xl mt-6 py-5 px-0.5 flex items-center"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={2}
          slidesPerView={slides}
          onReachEnd={() => setIsEnd(true)}
          onSlideChange={(swiper) => {
            console.log(swiper);
            if (!swiper.isEnd) {
              setIsEnd(false);
            }
            if (swiper.isBeginning) {
              setIsBeginning(true);
            } else {
              setIsBeginning(false);
            }
          }}
          autoplay={{
            delay: 0,
            reverseDirection: true,
          }}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          className="w-full"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard
                src={p.src}
                old_price={p.old_price}
                new_price={p.new_price}
                discount={p.discount}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="w-[92px] h-[77px]">
                <img
                  src="/images/suggestion.svg"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[145px] h-[115px]">
                <img
                  src="/images/box.png"
                  className="w-full h-full object-contain"
                />
              </div>
              <a href="#" className="mt-1 flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-xs text-white"
                />
                <span className="text-white text-sm">مشاهده همه</span>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          onClick={() => swiper.slidePrev()}
          style={{ display: `${isBeginning ? "none" : "inline-block"}` }}
          className="absolute t-[50%] left-[16px] border border-neutral-200 z-20 p-2 bg-white rounded-full"
        >
          <div className="w-[24px] h-[24px]">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-icon-high_emphasis text-xs"
            />
          </div>
        </button>
        <button
          onClick={() => swiper.slideNext()}
          style={{ display: `${isEnd ? "none" : "inline-block"}` }}
          className="absolute t-[50%] right-[16px] border border-neutral-200 z-20 p-2 bg-white rounded-full"
        >
          <div className="w-[24px] h-[24px]">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-icon-high_emphasis text-xs"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
