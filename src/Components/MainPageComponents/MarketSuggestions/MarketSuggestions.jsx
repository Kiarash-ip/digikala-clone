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
    <div className="w-full mt-2">
      <div className="w-full max-w-[1336px] mx-auto py-4 px-10 bg-neutral-100 rounded-2xl">
        <div className="flex items-center justify-between bg-fresh-pattern bg-no-repeat bg-left-center">
          <div className="flex items-center">
            <div className="flex items-center gap-2 py-3 px-5 bg-white rounded-full">
              <FontAwesomeIcon icon={faArrowLeft} className="text-fresh-700" />
              <span className="text-xs text-fresh-700">بیش از ۹۰ کالا</span>
            </div>
            <div className="flex">
              {marketItems.map((item) => (
                <MarketItem src={item.src} discount={item.discount} />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-3 bg-fresh-700 rounded-full">
              <p className="text-sm text-white leading-7">تا ۴۵٪ تخفیف</p>
            </div>
            <div className="w-[250px] h-[28px] mx-5">
              <img
                src="/images/fresh.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[66px] h-[62px]">
              <img
                src="/images/fresh.png"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
