import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarMenu from "./NavbarMenu";

export default function DesktopNav({
  currentWidth,
  setCurrentWidth,
  shrink,
  setCurrentItem,
  left,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <nav
      className="hidden lg:flex items-center justify-between h-[40px] transition-all transition-200 ease-in-out px-4"
      style={{
        height: shrink ? "0" : "40px",
        overflow: shrink ? "hidden" : "visible",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="text-neutral-700 text-xs">
          لطفا شهر خود را انتخاب کنید
        </span>
        <FontAwesomeIcon
          icon={faLocationDot}
          className="w-[20px] text-low_emphasis"
        />
      </div>
      <div
        className="flex items-center relative h-full"
        onMouseLeave={() => setCurrentWidth(0)}
      >
        <div className="flex items-center relative line-divider h-full">
          <div
            className="h-full flex items-center px-3"
            onMouseEnter={() => {
              setCurrentItem({ num: 0, rerenderer: new Date() });
            }}
          >
            <a
              dir="rtl"
              className="text-neutral-600 text-xs cursor-pointer text-center font-[400] leading-[2.17]"
            >
              در دیجی&zwnj;کالا بفروشید!
            </a>
          </div>
          <div
            className="h-full flex items-center px-3"
            onMouseEnter={() => {
              setCurrentItem({ num: 0, rerenderer: new Date() });
            }}
          >
            <a
              className="text-neutral-600 text-xs cursor-pointer text-center font-[400] leading-[2.17]"
              onMouseEnter={() => {
                setCurrentItem({ num: 1, rerenderer: new Date() });
              }}
            >
              سوالی دارید؟
            </a>
          </div>
        </div>
        <div className="flex items-center relative line-divider h-full">
          <div
            className="h-full flex items-center px-3"
            onMouseEnter={() => {
              setCurrentItem({ num: 2, rerenderer: new Date() });
            }}
          >
            <a className="text-neutral-600 text-xs cursor-pointer text-center font-[400] leading-[2.17]">
              شگفت&zwnj;انگیز&zwnj;ها
            </a>
          </div>
          <div
            className="h-full flex items-center px-3"
            onMouseEnter={() => {
              setCurrentItem({ num: 3, rerenderer: new Date() });
            }}
          >
            <a className="text-neutral-600 text-xs cursor-pointer text-center font-[400] leading-[2.17]">
              تخفیف&zwnj;ها و پیشنهاد&zwnj;ها
            </a>
          </div>
          <div
            className="h-full flex items-center px-3"
            onMouseEnter={() => {
              setCurrentItem({ num: 4, rerenderer: new Date() });
            }}
          >
            <a className="text-neutral-600 text-xs cursor-pointer text-center font-[400] leading-[2.17]">
              پر&zwnj;فروش&zwnj;ترین&zwnj;ها
            </a>
          </div>
          <div
            className="h-full flex items-center px-3"
            onMouseEnter={() => {
              setCurrentItem({ num: 5, rerenderer: new Date() });
            }}
          >
            <a className="text-neutral-600 text-xs cursor-pointer text-center font-[400] leading-[2.17]">
              سوپرمارکت
            </a>
          </div>
        </div>
        <div
          className="navbar-category px-3 text-neutral-700 flex items-center gap-2 h-full cursor-pointer"
          onMouseEnter={() => {
            setCurrentItem({ num: 6, rerenderer: new Date() });
            setMenuOpen(true);
            document.body.classList.add("lock-body-scroll");
          }}
          onMouseLeave={() => {
            setMenuOpen(false);
            document.body.classList.remove("lock-body-scroll");
          }}
        >
          <a className="text-sm">دسته&zwnj;بندی کالا&zwnj;ها</a>
          <FontAwesomeIcon
            icon={faBars}
            className="text-neutral-700 w-[20px] w-[15px]"
          />
          <NavbarMenu open={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <div
          style={{ width: currentWidth, left: left }}
          className={`h-[2px] bg-primary-700 absolute underline-pos transition-all transition-300 select-none pointer-events-none`}
        ></div>
      </div>
    </nav>
  );
}
