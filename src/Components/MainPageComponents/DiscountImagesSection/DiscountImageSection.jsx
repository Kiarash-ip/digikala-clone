import React from "react";

const discountImages = [
  { id: 0, src: "/images/discount-img-1.jpg" },
  { id: 1, src: "/images/discount-img-2.jpg" },
  { id: 2, src: "/images/discount-img-3.jpg" },
  { id: 3, src: "/images/discount-img-4.jpg" },
];

export default function DiscountImageSection() {
  return (
    <div className="mt-4 lg:mt-6 mx-5 lg:mx-0 grid lg:grid-cols-4 grid-cols-2 gap-[16px]">
      {discountImages.map((img) => (
        <a key={img.id} className="w-full flex items-center justify-center">
          <div className="w-full">
            <img src={img.src} className="w-full rounded-2xl object-fit" />
          </div>
        </a>
      ))}
    </div>
  );
}
