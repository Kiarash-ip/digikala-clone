import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import CardItem from "./CardItem";

const footerIcons = [
  {
    id: 0,
    src: "/images/footer/original-products.svg",
    title: "ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ",
  },
  {
    id: 1,
    src: "/images/footer/days-return.svg",
    title: "هفت روز ضمانت بازگشت کالا",
  },
  {
    id: 2,
    src: "/images/footer/support.svg",
    title: "۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ",
  },
  {
    id: 3,
    src: "/images/footer/cash-on-delivery.svg",
    title: "امکان پرداخت در محل",
  },
  {
    id: 4,
    src: "/images/footer/express-delivery.svg",
    title: "اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس",
  },
];

export default function FooterSection() {
  return (
    <div className="w-full pt-8 mt-12 border-t border-neutral-200">
      <div className="w-full max-w-[1676px] mx-auto">
        <div className="px-5">
          <div className="flex justify-between">
            <button className="px-3 sm:px-4 py-2 border border-neutral-200 rounded-lg flex items-center justify-center">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[24px] h-[24px]">
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="text-icon-low_emphasis text-xs"
                  />
                </div>
                <span className="ml-2 text-neutral-400 text-xs">
                  بازگشت به بالا
                </span>
              </div>
            </button>
            <div className="ml-4 h-[30px]">
              <img
                className="h-[100%]"
                src="https://www.digikala.com/statics/img/svg/digi.svg"
              />
            </div>
          </div>
          <div className="flex mb-8 mt-4 mt-3-md md:mb-0 items-center justify-end flex-wrap text-xs text-neutral-700">
            <p dir="rtl">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
            <div className="px-5 text-neutral-400 hidden md:inline-block">
              |
            </div>
            <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          </div>
          <div className="hidden lg:flex my-8 items-center justify-between select-none">
            {footerIcons.map((item) => (
              <CardItem src={item.src} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
