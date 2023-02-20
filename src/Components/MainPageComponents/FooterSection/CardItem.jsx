import React from "react";

export default function CardItem({ src, title }) {
  return (
    <a className="flex flex-col py-3 items-center justify-between text-center grow">
      <div className="w-[56px] h-[56px]">
        <img src={src} className="w-full h-full object-cover" />
      </div>
      <p className="text-neutral-700 text-xs">{title}</p>
    </a>
  );
}
