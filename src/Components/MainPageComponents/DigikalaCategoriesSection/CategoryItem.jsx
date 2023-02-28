import React from "react";

export default function CategoryItem({ title, src }) {
  return (
    <a
      className="lg:w-2/12 w-[28%] flex flex-col items-center cursor-pointer"
      href="#"
    >
      <div className="lg:w-[170px] lg:h-[170px] w-[90px] h-[90px]">
        <img src={src} className="w-full h-full object-contain" />
      </div>
      <p className="mt-3.5 text-xs text-neutral-900 font-[700]">{title}</p>
    </a>
  );
}
