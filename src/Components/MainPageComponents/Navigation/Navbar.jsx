import React, { useEffect, useRef, useState, createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBars,
  faChevronLeft,
  faLocationDot,
  faMagnifyingGlass,
  faQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import NavbarMenu from "./NavbarMenu";
import useResize from "../../../customHooks/useResize";
import DesktopNav from "./DesktopNav";

export default function Navbar() {
  const { width } = useResize();
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
    <header
      className="lg:fixed relative top-0 left-0 right-0 w-full navbar-boxShadow flex flex-col z-30 transition-height pt-3 pb-1 px-4 lg:p-0 relative border-b lg:border-0 border-neutral-100 bg-white"
      style={{
        ...(width > 1024 && {
          height: shrink ? "72px" : "112px",
          paddingRight: menuOpen ? "10px" : "0",
        }),
      }}
      ref={navbarRef}
    >
      <div className="w-full h-full max-w-[1644px] mx-auto flex flex-col relative justify-between">
        <div className="w-full flex lg:flex-row flex-col-reverse items-center lg:px-4 lg:py-3">
          <div className="w-full flex items-center pt-2 lg:p-0">
            <a className="inline-flex py-2 pr-2 pl-0 lg:p-2 bg-white">
              <div className="flex items-center justify-center">
                <img
                  src="/images/shopping-cart.png"
                  className="w-[22px] scale-x-[-1]"
                />
              </div>
            </a>
            <div className="hidden lg:inline-block h-[24px] w-[1px] bg-neutral-200 mx-3"></div>
            <a className="flex items-center text-button-black gap-2 lg:border border-neutral-200 px-4 py-2 rounded-md ml-2 lg:ml-0">
              <span className="text-xs font-[700] leading-[2.17]">
                ورود {width > 1024 ? "| ثبت نام" : ""}
              </span>
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="scale-x-[-1] text-button-black text-lg"
              />
            </a>
            <div className="flex items-center justify-end grow lg:m-0 ml-4">
              <div className="flex items-center grow h-[44px] bg-neutral-100 text-xs font-[400] leading-[2.17] rounded-lg lg:max-w-[600px]">
                <div className="flex items-center justify-between grow px-2 min-w-0">
                  <span className="flex items-center justify-end grow px-2">
                    <div className="text-neutral-500 flex items-center">
                      جستجو
                    </div>
                  </span>
                  <div className="flex justify-center items-center w-[24px] h-[24px]">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="h-[20px] w-[20px] text-icon-low_emphasis"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full lg:w-[unset] justify-between lg:p-0 pb-3 lg:border-0 border-b border-neutral-100">
            <div className="lg:hidden flex justify-center items-center w-[24px] h-[24px]">
              <div className="flex justify-center items-center border-2 border-icon-high_emphasis px-[4px] py-[1px] rounded-md">
                <FontAwesomeIcon
                  icon={faQuestion}
                  className="text-base text-icon-high_emphasis"
                />
              </div>
            </div>
            <a className="lg:ml-5 shrink-0" href="/">
              <div className="lg:w-[115px] lg:h-[30px] w-[92px] h-[24px]">
                <img
                  src="https://www.digikala.com/statics/img/svg/logo.svg"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="lg:hidden cursor-pointer flex items-center justify-center w-[24px] h-[24px]">
              <FontAwesomeIcon
                icon={faBars}
                className="text-icon-high_emphasis text-base"
              />
            </div>
          </div>
        </div>
        <nav
          className="lg:flex items-center justify-between h-[40px] transition-all transition-200 ease-in-out lg:px-4 mt-2 pt-2 lg:pt-0 lg:mt-0 border-t lg:border-0 border-neutral-100"
          style={{
            height: shrink ? "0" : "40px",
            overflow: shrink ? "hidden" : "visible",
          }}
        >
          <div className="flex pb-1 items-center text-neutral-700 pointer">
            <div className="lg:hidden flex mr-auto">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-icon-high_emphasis text-xs"
              />
            </div>
            <div className="text-xs font-[400] leading-[2.17] text-neutral-700">
              لطفا شهر خود را انتخاب کنید
            </div>
            <div className="flex ml-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="lg:text-icon-high_emphasis text-icon-warning"
              />
            </div>
          </div>
          <div
            className="lg:inline-block hidden relative top-0 right-0 flex items-center h-full bg-white"
            onMouseLeave={() => setCurrentWidth(0)}
          >
            <a className="lg:hidden self-stretch py-5 flex justify-end items-center border-b border-neutral-100 mb-1 mx-5 order-1">
              <div className="h-[24px]">
                <img
                  src="/images/digi.svg"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="flex items-end relative line-divider h-full ">
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
                  در دیجی‌کالا بفروشید!
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
            <div className="flex items-end relative line-divider h-full ">
              <div
                className="h-full flex items-center px-3"
                onMouseEnter={() => {
                  setCurrentItem({ num: 2, rerenderer: new Date() });
                }}
              >
                <a className="text-neutral-600 text-xs cursor-pointer text-center font-[400] leading-[2.17]">
                  شگفت‌انگیزها
                </a>
              </div>
              <div
                className="h-full flex items-center px-3"
                onMouseEnter={() => {
                  setCurrentItem({ num: 3, rerenderer: new Date() });
                }}
              >
                <a className="text-neutral-600 text-xs cursor-pointer text-center font-[400] leading-[2.17]">
                  تخفیف‌ها و پیشنهادها
                </a>
              </div>
              <div
                className="h-full flex items-center px-3"
                onMouseEnter={() => {
                  setCurrentItem({ num: 4, rerenderer: new Date() });
                }}
              >
                <a className="text-neutral-600 text-xs cursor-pointer text-center font-[400] leading-[2.17]">
                  پرفروش‌ترین‌ها
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
              className="navbar-category px-3 text-neutral-700 flex justify-center items-center gap-2 h-full cursor-pointer "
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
              <a className="text-sm">دسته‌بندی کالاها</a>
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
      </div>
      <div
        className="absolute w-screen h-screen bg-neutral-900 opacity-75 z-20 top-[100%]"
        style={{ display: menuOpen ? "block" : "none" }}
      ></div>
    </header>
  );
}
