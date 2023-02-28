import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NavbarMenuItem from "./NavbarMenuItem";
import { useEffect } from "react";
import { navbarMenuData } from "../../../staticDatas";

export default function NavbarMenu({ open }) {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [menuHeight, setMenuHeight] = useState(0);

  function mouseEnterHandler(index) {
    setCurrentFieldIndex(index);
  }

  function setMenuHeightHandler(amount) {
    setMenuHeight((prevState) => prevState + amount);
  }

  return (
    <div
      className="navbar-menu absolute z-40 top-full bg-white w-[100vw] max-w-[1644px] rounded-bl rounded-br right-0 navbar-menu-box-shadow bg-white"
      style={{
        height: open ? "80vh" : "0",
        maxHeight: `${menuHeight}px`,
        overflow: "hidden",
      }}
    >
      <div className="w-full h-full flex">
        <div className="grow h-full p-5 border-r border-neutral-100 overflow-auto">
          <div className="w-full h-full">
            <div className="flex flex-col flex-1 grow h-full">
              <a
                className="flex items-center text-xs font-[700] leading-[2.17] text-neutral-700 mb-5"
                dir="rtl"
              >
                همه محصولات
                {` ${navbarMenuData[currentFieldIndex].title}`}
                <div className="w-[16px] h-[16px] flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="text-[9px]"
                  />
                </div>
              </a>
              <ul
                className="flex flex-col flex-wrap h-full max-h-[400px]"
                dir="rtl"
              >
                {navbarMenuData[currentFieldIndex].filters?.map((item) => {
                  let headerLink = (
                    <a className="flex items-center text-neutral-900 hover:text-primary-500 text-sm font-[700] leading-[2.15] max-w-[25%] navbar_head-title">
                      <span>{item.title}</span>
                      <div className="w-[16px] h-[16px] flex justify-center items-center">
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          className="text-[9px] text-inherit"
                        />
                      </div>
                    </a>
                  );
                  let sub_links = item.options.map((o) => {
                    return (
                      <a
                        key={o.id}
                        className="text-neutral-500 hover:text-primary-500 text-xs leading-[2.17] max-w-[25%]"
                      >
                        <span>{o.sub_title}</span>
                      </a>
                    );
                  });
                  sub_links.unshift(headerLink);
                  return sub_links;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[200px] overflow-y-auto">
          {navbarMenuData.map((item, i) => {
            return (
              <NavbarMenuItem
                key={item.id}
                data={item}
                index={i}
                mouseEnterHandler={mouseEnterHandler}
                setMenuHeight={setMenuHeight}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
