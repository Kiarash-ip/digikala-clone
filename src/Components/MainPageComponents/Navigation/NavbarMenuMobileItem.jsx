import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import NavbarMenuMobileSubItem from "./NavbarMenuMobileSubItem";
import { useEffect } from "react";

export default function NavbarMenuMobileItem({ title, filters }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div>
      <div
        className="flex items-center justify-between px-5 break-words text-neutral-700 cursor-pointer h-[52px]"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <div className="flex items-center grow text-neutral-700">
          <span
            className={`text-xs font-[700] leading-[2.15] ${
              open ? "text-primary-500" : ""
            }`}
          >
            {title}
          </span>
        </div>
        <div className="flex items-center justify-center h-[24px] h-[24px]">
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${
              open ? "text-primary-500" : "text-icon-high_emphasis"
            } text-xs`}
            style={{
              transform: `rotate(${open ? "180deg" : "0"})`,
            }}
          />
        </div>
      </div>
      <div
        className="bg-neutral-100 border-b border-neutral-100 overflow-hidden"
        style={{
          height: `${open ? "auto" : "0"}`,
        }}
      >
        <div className="pr-5">
          <div>
            <a className="flex items-center justify-between px-5 break-words text-neutral-400 cursor-pointer h-[52px]">
              <div className="flex items-center grow text-neutal-700">
                <a className="flex items-center">
                  <span className="text-xs font-[700] leading-[2.15]">
                    همه موارد این دسته
                  </span>
                  <div className="flex items-center justify-center w-[16px] h-[16px]">
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="text-[10px] text-icon-low_emphasis"
                    />
                  </div>
                </a>
              </div>
            </a>
          </div>
          {filters?.map((f) => (
            <NavbarMenuMobileSubItem title={f.title} options={f.options} />
          ))}
        </div>
      </div>
    </div>
  );
}
