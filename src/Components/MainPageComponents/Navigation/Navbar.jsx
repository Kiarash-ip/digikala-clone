import React, { useEffect, useRef, useState, createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBars,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const navigationItems = [
  {
    title: "!در دیجی کالا بفروشید",
  },
  { title: "سوالی دارید؟" },
  { title: "شگفت انگیز ها" },
  { title: "تخفیف ها و پیشنهادها" },
  { title: "پرفروش ترین ها" },
  { title: "سوپرمارکت" },
  { title: "دسته بندی کالا ها" },
];

export default function Navbar() {
  const [widths, setWidths] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentItem, setCurrentItem] = useState({
    num: 0,
    rerenderer: new Date(),
  });
  const [left, setLeft] = useState(0);
  const elementsRef = useRef(navigationItems.map(() => createRef()));

  useEffect(() => {
    console.log(widths);
  }, [widths]);

  useEffect(() => {
    setTimeout(() => {
      setWidths(() => {
        return elementsRef.current.map((ref) => ref.current.clientWidth);
      });
    }, 500);
  }, []);

  useEffect(() => {
    console.log(left);
  }, [left]);

  useEffect(() => {
    let left = 0;
    for (let i = 0; i < currentItem.num; i++) {
      left += widths[i];
    }
    setLeft(left);
    setCurrentWidth(widths[currentItem.num]);
  }, [currentItem.rerenderer]);

  return (
    <nav className="w-full navbar-boxShadow flex flex-col">
      <div className="w-full max-w-[1644px] mx-auto flex flex-col">
        <div className="w-full flex items-center px-4 py-3">
          <img
            src="/images/shopping-cart.png"
            className="w-[24px] scale-x-[-1]"
          />
          <div className="h-[24px] w-[1px] bg-neutral-200 mx-3"></div>
          <button className="flex items-center text-button-black gap-2 border border-neutral-200 px-4 py-2 rounded-md">
            <span className="text-xs">ورود | ثبت نام</span>
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
        <div className="flex items-center justify-between h-[40px]">
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
            {navigationItems.map((item, i) => {
              return (
                <a
                  className="px-3 text-neutral-600 text-xs cursor-pointer"
                  onMouseEnter={() => {
                    setCurrentItem({ num: i, rerenderer: new Date() });
                  }}
                  ref={elementsRef.current[i]}
                >
                  {item.title}
                </a>
              );
            })}
            {/* <div className="flex items-center relative line-divider">
              <a
                className="px-3 text-neutral-600 text-xs cursor-pointer"
                ref={ref_1}
                onMouseEnter={() => {
                  setWidth({
                    width: ref_1.current.getBoundingClientRect().width,
                    num: 1,
                  });
                  console.log("ref1");
                }}
              >
                در دیجی&zwnj;کالا بفروشید
              </a>
              <a
                className="px-3 text-neutral-600 text-xs cursor-pointer"
                ref={ref_2}
                onMouseEnter={() => {
                  setWidth({
                    width: ref_1.current.getBoundingClientRect().width,
                    num: 2,
                  });
                  console.log(ref_2.current.getBoundingClientRect());
                }}
              >
                سوالی دارید؟
              </a>
            </div>
            <div className="flex items-center relative line-divider">
              <div className="px-3 text-neutral-600 text-xs" ref={ref_3}>
                <a className="cursor-pointer">شگفت&zwnj;انگیز&zwnj;ها</a>
              </div>
              <a
                className="px-3 text-neutral-600 text-xs cursor-pointer"
                ref={ref_4}
              >
                تخفیف&zwnj;ها و پیشنهاد&zwnj;ها
              </a>
              <a
                className="px-3 text-neutral-600 text-xs cursor-pointer"
                ref={ref_5}
              >
                پر&zwnj;فروش&zwnj;ترین&zwnj;ها
              </a>
              <a
                className="px-3 text-neutral-600 text-xs cursor-pointer"
                ref={ref_6}
              >
                سوپرمارکت
              </a>
            </div>
            <div
              className="px-3 text-neutral-700 flex items-center gap-2"
              ref={ref_7}
            >
              <a className="text-sm cursor-pointer">
                دسته&zwnj;بندی کالا&zwnj;ها
              </a>
              <FontAwesomeIcon
                icon={faBars}
                className="text-neutral-700 w-[20px w-[15px]"
              />
            </div> */}
            <div
              style={{ width: currentWidth, left: left }}
              className={`h-[2px] bg-primary-700 absolute underline-pos transition-all transition-300`}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
