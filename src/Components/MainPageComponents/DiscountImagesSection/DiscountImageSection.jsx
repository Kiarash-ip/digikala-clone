import React from "react";

const discountImages = [
  { id: 0, src: "/images/discount-img-1.jpg" },
  { id: 1, src: "/images/discount-img-2.jpg" },
  { id: 2, src: "/images/discount-img-3.jpg" },
  { id: 3, src: "/images/discount-img-4.jpg" },
];

export default function DiscountImageSection() {
  return (
    <div className="w-full mt-6 lg:px-4">
      <div className="w-full max-w-[1336px] mx-auto grid grid-cols-4 gap-4">
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
