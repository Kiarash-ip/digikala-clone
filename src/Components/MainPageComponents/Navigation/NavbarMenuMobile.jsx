import React from "react";
import { navbarMenuData, navbarLinksData } from "../../../staticDatas";
import NavbarMenuMobileItem from "./NavbarMenuMobileItem";

export default function NavbarMenuMobile({ menoOpenMobile }) {
  return (
    <div
      dir="rtl"
      className="lg:hidden bg-white fixed top-0 right-0 h-full overflow-x-hidden overflow-y-auto pb-7 z-50 transition-all transition-500 ease-in-out"
      style={{ width: "312px", right: `${menoOpenMobile ? "0" : "-100%"}` }}
    >
      <a className="self-stretch py-5 flex justify-start items-center border-b border-neutral-100 mb-1 mx-5 order-1">
        <div className="h-[24px]">
          <img
            src="/images/digi.svg"
            className="w-full h-full object-contain"
          />
        </div>
      </a>
      {navbarLinksData.map((item) => (
        <div key={item.id}>
          <a className="flex items-center justify-between px-5 break-words text-neutral-700 cursor-pointer h-[52px]">
            <div className="flex items-center grow text-neutral-700">
              <span className="text-xs font-[700] leading-[2.15]">
                {item.title}
              </span>
            </div>
          </a>
        </div>
      ))}
      <div className="border-t border-neutral-100 mb-1 mt-2 mx-5"></div>
      <p className="text-sm font-[700] leading-[2.15] text-neutral-900 pr-5 my-4">
        دسته‌بندی کالاها
      </p>
      {navbarMenuData.map((item) => (
        <NavbarMenuMobileItem
          key={item.id}
          title={item.title}
          filters={item.filters}
        />
      ))}
    </div>
  );
}
