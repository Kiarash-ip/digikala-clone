import React from "react";

const discountImages = [
  { id: 0, src: "/images/discount-product-1.jpg" },
  { id: 1, src: "/images/discount-product-2.jpg" },
];

export default function DiscountImageSection_2() {
  return (
    <div className="w-full mt-6 lg:px-4">
      <div className="w-full max-w-[1336px] mx-auto grid grid-cols-2 gap-4">
        {discountImages.map((img) => (
          <a key={img.id} className="w-full flex items-center justify-center">
            <div className="w-full">
              <img src={img.src} className="w-full rounded-2xl object-fit" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
