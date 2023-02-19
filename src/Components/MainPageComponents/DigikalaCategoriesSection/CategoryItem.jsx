import React from "react";

export default function CategoryItem({ title, src }) {
  return (
    <a className="w-2/12 flex flex-col items-center cursor-pointer" href="#">
      <div className="w-[170px] h-[170px]">
        <img src={src} className="w-full h-full object-contain" />
      </div>
      <p className="mt-3.5 text-xs text-neutral-900 font-[700]">{title}</p>
    </a>
  );
}
