import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import CardItem from "./CardItem";
import FooterLinksSlice from "./FooterLinksSlice";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import AppStoresItem from "./AppStoresItem";
import FooterAccordionSection from "./FooterAccordionSection/FooterAccordionSection";
import FooterBrands from "./FooterBrands/FooterBrands";

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

const footerLinks = [
  {
    id: 0,
    title: "با دیجی‌کالا",
    links: [
      {
        id: 0,
        sub_title: "اتاق خبر دیجی‌کالا",
        href: "#",
      },
      {
        id: 1,
        sub_title: "فروش در دیجی‌کالا",
        href: "#",
      },
      {
        id: 2,
        sub_title: "فرصت‌های شغلی",
        href: "#",
      },
      {
        id: 3,
        sub_title: "گزارش تخلف در دیجی‌کالا",
        href: "#",
      },
      {
        id: 4,
        sub_title: "تماس با دیجی‌کالا",
        href: "#",
      },
      {
        id: 5,
        sub_title: "درباره دیجی‌کالا",
        href: "#",
      },
    ],
  },
  {
    id: 1,
    title: "خدمات مشتریان",
    links: [
      {
        id: 0,
        sub_title: "پاسخ به پرسش‌های متداول",
        href: "#",
      },
      {
        id: 1,
        sub_title: "رویه‌های بازگرداندن کالا",
        href: "#",
      },
      {
        id: 2,
        sub_title: "شرایط استفاده",
        href: "#",
      },
      {
        id: 3,
        sub_title: "حریم خصوصی",
        href: "#",
      },
      {
        id: 4,
        sub_title: "گزارش باگ",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    title: "راهنمای خرید از دیجی‌کالا",
    links: [
      {
        id: 0,
        sub_title: "نحوه ثبت سفارش",
        href: "#",
      },
      {
        id: 1,
        sub_title: "رویه ارسال سفارش",
        href: "#",
      },
      {
        id: 2,
        sub_title: "شیوه‌های پرداخت",
        href: "#",
      },
    ],
  },
];

const footerAppStores = [
  {
    id: 0,
    src: "/images/footer/appStores/sib-app.svg",
  },
  {
    id: 1,
    src: "/images/footer/appStores/myket.svg",
  },
  {
    id: 2,
    src: "/images/footer/appStores/coffe-bazzar.svg",
  },
  {
    id: 3,
    src: "/images/footer/appStores/google-play.svg",
  },
];

export default function FooterSection() {
  function scrollToTopHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-full pt-8 mt-12 border-t border-neutral-200">
      <div className="w-full max-w-[1676px] mx-auto">
        <div className="px-5">
          <div className="flex justify-between">
            <button
              className="px-3 sm:px-4 py-2 border border-neutral-200 rounded-lg flex items-center justify-center"
              onClick={scrollToTopHandler}
            >
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
          <div className="flex flex-wrap w-full justify-between mb-8" dir="rtl">
            {footerLinks.map((f) => (
              <FooterLinksSlice title={f.title} links={f.links} />
            ))}
            <div className="w-100 lg:w-[unset] shrink-0">
              <div className="w-full flex lg:block lg:flex-row justify-between items-start mt-8 sm:mt-0">
                <h4 className="mb-3 text-neutral-700 font-[700] text-base">
                  همراه ما باشید!
                </h4>
                <div className="flex items-center">
                  <a className="ml-6 lg:ml-8">
                    <img
                      src="/images/aparat-logo.png"
                      className="w-[40px] h-[40px]"
                    />
                  </a>
                  <a className="ml-6 lg:ml-8">
                    <div className="w-[40px] h-[40px] flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-3xl text-icon-low_emphasis"
                      />
                    </div>
                  </a>
                  <a className="ml-6 lg:ml-8">
                    <div className="w-[40px] h-[40px] flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-3xl text-icon-low_emphasis"
                      />
                    </div>
                  </a>
                  <a className="ml-6 lg:ml-8">
                    <div className="w-[40px] h-[40px] flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-3xl text-icon-low_emphasis"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full flex flex-col items-start mt-4 sm:mt-8">
                <h4 className="hidden md:block text-h5 color-700 mb-3 text-neutral-700 font-[700] text-base">
                  با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
                </h4>
                <div className="w-full flex items-center">
                  <form className="w-full flex items-center">
                    <label className="w-full grow bg-neutral-100 px-2 flex items-center h-[3rem] rounded-lg">
                      <input
                        type="email"
                        className="reset-default"
                        placeholder="ایمیل شما"
                      />
                    </label>
                    <button
                      className="rounded-lg py-3 px-4 text-white border border-button-disable bg-button-disable mr-2"
                      type="submit"
                    >
                      ثبت
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mb-7 lg:px-5 radius text-white select-none py-2 items-center justify-between bg-[#3c4b6d] rounded-lg">
            <div className="flex items-center justify-end grow">
              <a className="hidden lg:block mr-4" href="#">
                <div className="border-neutral-200 bg-white w-[44px] h-[44px] rounded flex items-center justify-center">
                  <img
                    src="/images/footer/More.svg"
                    className="w-full h-full"
                  />
                </div>
              </a>
              <div className="flex items-center justify-center lg:justify-start flex-wrap lg:grow">
                {footerAppStores.map((item) => (
                  <AppStoresItem key={item.id} src={item.src} />
                ))}
              </div>
            </div>
            <div className="flex items-center text-white mb-4 lg:mb-0">
              <div className="text-xl shrink-0 mr-4">
                دانلود اپلیکیشن دیجی‌کالا
              </div>
              <div className="w-[44px] h-[44px] flex items-center justify-center">
                <img
                  src="/images/footer/footerlogo2.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <FooterAccordionSection />
          <div
            dir="rtl"
            className="flex text-xs text-neutral-500 text-center items-center flex-col justify-between border-t border-neutral-100 py-8 leading-[2.17] font-[400]"
          >
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.
          </div>
        </div>
      </div>
      <FooterBrands />
    </div>
  );
}
