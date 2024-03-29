import React from "react";

const servicesData = [
  {
    id: 0,
    title: "کارت هدیه",
    src: "/images/services/gift-card.png",
  },
  {
    id: 1,
    title: "گیم نت",
    src: "/images/services/game-net.png",
  },
  {
    id: 2,
    title: "حراج پایان فصل",
    src: "/images/services/sale.png",
  },
  {
    id: 3,
    title: "خرید عمده و سازمانی",
    src: "/images/services/buy-major.png",
  },
  {
    id: 4,
    title: "خرید اقساطی",
    src: "/images/services/buy-installments.png",
  },
  {
    id: 5,
    title: "حراج استایل",
    src: "/images/services/sale-style.png",
  },
  {
    id: 6,
    title: `دیجی جت`,
    src: "/images/services/digi-jet.png",
  },
];

export default function ServicesSection() {
  return (
    <div className="lg:py-2 px-3 bg-white grid grid-cols-4 lg:flex lg:items-center flex-wrap justify-around mt-4 lg:mt-6">
      <div className="flex flex-col gap-2 justify-center items-center">
        <button className="w-[52px] h-[52px] rounded-full bg-neutral-100 flex items-center justify-center gap-1 cursor-pointer">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[6px] h-[6px] bg-icon-low_emphasis rounded-full"
            ></div>
          ))}
        </button>
        <span className="text-xs font-[400] leading-[2.17] text-neutral-700 mt-1">
          بیشتر
        </span>
      </div>
      {servicesData.map((item) => {
        return (
          <a
            key={item.id}
            href="#"
            className="flex flex-col items-center user-select-none lg:w-[auto] my-2 lg:my-0"
          >
            <div className="w-[52px] h-[52px]">
              <img src={item.src} className="w-full h-full object-contain" />
            </div>
            <span className="text-xs font-[400] leading-[2.17] text-neutral-700 mt-1">
              {item.title}
            </span>
          </a>
        );
      })}
    </div>
  );
}
