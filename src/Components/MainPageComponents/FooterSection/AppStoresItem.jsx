import React from "react";

export default function AppStoresItem({ src }) {
  return (
    <a className="m-2 max-w-[142px]">
      <div className="rounded h-[44px]">
        <img src={src} className="w-full h-full object-contain" />
      </div>
    </a>
  );
}
