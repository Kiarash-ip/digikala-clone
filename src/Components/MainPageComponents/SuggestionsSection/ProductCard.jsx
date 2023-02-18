import React from "react";
import { toPersianDigits, insertrialcamma } from "../../../../utils";

export default function ProductCard({ src, old_price, new_price, discount }) {
  return (
    <div className="flex flex-col bg-white py-3 px-3 lg:px-4">
      <div className="lg:w-[150px] lg:h-[150px] w-[130px] h-[130px] mb-1">
        <img src={src} className="w-full h-full object-contain" />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <span>تومان</span>
          <span className="text-base">{insertrialcamma(new_price)}</span>
        </div>
        <div className="flex items-center justify-center w-[34px] h-[20px] bg-primary-700 rounded-2xl">
          <span className="text-white text-xs">
            {toPersianDigits(discount)}%
          </span>
        </div>
      </div>
      <div className="pl-5">
        <span className="line-through text-neutral-300 decoration-neutral-300 text-xs">
          {insertrialcamma(old_price)}
        </span>
      </div>
    </div>
  );
}
