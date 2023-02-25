import React, { useEffect, useRef, useState, createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBars,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  const [widths, setWidths] = useState([
    131.7, 90, 93.4, 136.5, 99.4, 79.6, 145.3,
  ]);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentItem, setCurrentItem] = useState({
    num: 0,
    rerenderer: new Date(),
  });
  const [left, setLeft] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const previousScrollPos = useRef(0);
  const currentScrollPos = useRef(0);
  const navbarRef = useRef();

  useEffect(() => {
    function scrollHandler(e) {
      // console.log(window.pageYOffset);
      previousScrollPos.current = currentScrollPos.current;
      currentScrollPos.current = window.scrollY;
      let sub = currentScrollPos.current - previousScrollPos.current;
      if (sub > 0 && !menuOpen) {
        console.log("shrinked");
        setShrink(true);
      } else if (sub < 0 && !menuOpen) {
        console.log("unshrinked");
        setShrink(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [menuOpen]);

  useEffect(() => {
    let left = 0;
    for (let i = 0; i < currentItem.num; i++) {
      left += widths[i];
    }
    setLeft(left);
    setCurrentWidth(widths[currentItem.num]);
  }, [currentItem.rerenderer]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 w-full navbar-boxShadow flex flex-col z-30 bg-white transition-height"
        style={{
          height: shrink ? "72px" : "112px",
          paddingRight: menuOpen ? "10px" : "0",
        }}
        ref={navbarRef}
      >
        <div className="w-full max-w-[1644px] mx-auto flex flex-col relative ">
          <div className="w-full flex items-center px-4 py-3">
            <img
              src="/images/shopping-cart.png"
              className="w-[24px] scale-x-[-1]"
            />
            <div className="h-[24px] w-[1px] bg-neutral-200 mx-3"></div>
            <button className="flex items-center text-button-black gap-2 border border-neutral-200 px-4 py-2 rounded-md">
              <span className="text-xs font-[700] leading-[2.17]">
                ورود | ثبت نام
              </span>
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="scale-x-[-1] text-button-black text-lg"
              />
            </button>
            <div className="bg-neutral-100 px-4 py-3 max-w-[600px] w-full rounded-md flex items-center justify-between ml-[auto]">
              <input
                placeholder="جستجو"
                dir="auto"
                className="reset-default placeholder:text-gray-md placeholder:text-right grow px-4"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-icon-low_emphasis"
              />
            </div>
            <div className="w-[140px] flex justify-center">
              <img
                src="https://www.digikala.com/statics/img/svg/logo.svg"
                className="w-[120px]"
              />
            </div>
          </div>
          <div
            className="flex items-center justify-between h-[40px] transition-all transition-200 ease-in-out px-4"
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
          </div>
        </div>
        <div
          className="absolute w-screen h-screen bg-neutral-900 opacity-75 z-20 top-[100%]"
          style={{ display: menuOpen ? "block" : "none" }}
        ></div>
      </nav>
    </>
  );
}
