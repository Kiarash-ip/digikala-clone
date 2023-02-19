import React from "react";

export default function GridItem({ src, title }) {
  return (
    <div className="flex flex-col items-center py-4 px-1">
      <div className="bg-neutral-100 rounded-full p-3 flex items-center justify-center">
        <div className="w-[60px] h-[60px]">
          <img src={src} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="mt-2">
        <h4 className="text-neutral-900 text-sm">{title}</h4>
      </div>
    </div>
  );
}
