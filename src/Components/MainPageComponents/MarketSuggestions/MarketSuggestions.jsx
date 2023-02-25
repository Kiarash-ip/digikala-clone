import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import MarketItem from "./MarketItem";

const marketItems = [
  {
    id: 0,
    src: "/images/market/market-1.webp",
    discount: 35,
  },
  {
    id: 1,
    src: "/images/market/market-2.webp",
    discount: 18,
  },
  {
    id: 2,
    src: "/images/market/market-3.webp",
    discount: 40,
  },
  {
    id: 3,
    src: "/images/market/market-4.webp",
    discount: 18,
  },
  {
    id: 4,
    src: "/images/market/market-5.webp",
    discount: 10,
  },
  {
    id: 5,
    src: "/images/market/market-6.webp",
    discount: 30,
  },
];

export default function MarketSuggestions() {
  return (
    <div className="w-full mt-2 lg:px-4 2xl:px-0">
      <div className="w-full max-w-[1336px] mx-auto py-4 px-10 bg-neutral-100 rounded-2xl">
        <div
          className="w-full flex lg:items-center justify-betweenbg-fresh-pattern bg-no-repeat bg-left-center flex-col lg:flex-row"
          dir="rtl"
        >
          <div className="flex items-center">
            <div className="lg:w-[66px] lg:h-[62px] w-[40px] h-[38px]">
              <img
                src="/images/fresh.png"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="lg:w-[250px] lg:h-[28px] w-[190px] h-[20px] mx-2 lg:mx-5">
              <img
                src="/images/fresh.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-3 bg-fresh-700 rounded-full hidden xl:flex items-center justify-center">
              <p className="text-sm text-white leading-7">تا ۴۵٪ تخفیف</p>
            </div>
          </div>
          <div className="flex items-center justify-between lg:justify-start mt-4 lg:mt-0 lg:mr-4">
            <div className="flex flex-nowrap lg:justify-end lg:flex-wrap overflow-hidden max-h-[74px]">
              {marketItems.map((item) => (
                <MarketItem src={item.src} discount={item.discount} />
              ))}
            </div>
            <div className="flex items-center gap-2 p-3 lg:py-3 lg:px-5 bg-white rounded-full text-xs font-[700] leading-[2.17]">
              <span className="hidden lg:inline text-fresh-700 whitespace-nowrap">
                بیش از ۹۰ کالا
              </span>
              <FontAwesomeIcon icon={faArrowLeft} className="text-fresh-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
