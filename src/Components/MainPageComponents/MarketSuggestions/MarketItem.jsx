import React from "react";
import { insertrialcamma } from "../../../../utils";

export default function MarketItem({ src, discount }) {
  return (
    <div className="p-2 relative bg-white rounded-full ml-2">
      <div className="lg:w-[58px] lg:h-[58px] w-[53px] h-[53px]">
        <img src={src} className="w-full h-full object-contain" />
      </div>
      <div className="flex items-center justify-center w-[34px] h-[20px] bg-primary-700 rounded-2xl absolute bottom-0 right-[-25%] z-10 translate-x-[-50%]">
        <span className="text-white text-xs ">
          {insertrialcamma(discount)}%
        </span>
      </div>
    </div>
  );
}
