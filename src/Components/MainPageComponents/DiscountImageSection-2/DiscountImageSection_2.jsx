import React from "react";

const discountImages = [
  { id: 0, src: "/images/discount-product-1.jpg" },
  { id: 1, src: "/images/discount-product-2.jpg" },
];

export default function DiscountImageSection_2() {
  return (
    <div className="flex flex-wrap mt-4 lg:mt-6 mx-5 lg:mx-0 gap-[16px]">
      {discountImages.map((img) => (
        <a
          key={img.id}
          className="flex items-center justify-center"
          style={{ width: "calc((100% - 16px) / 2)" }}
        >
          <div className="w-full">
            <img src={img.src} className="w-full rounded-2xl object-fit" />
          </div>
        </a>
      ))}
    </div>
  );
}
