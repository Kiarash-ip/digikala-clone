import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import NavbarMenuItem from "./NavbarMenuItem";
import { useEffect } from "react";

const navbarMenuData = [
  {
    id: 0,
    title: "موبایل",
    filters: [
      {
        id: 0,
        title: "برندهای مختلف گوشی موبایل",
        options: [
          { id: 0, sub_title: "گوشی اپل" },
          { id: 1, sub_title: "گوشی سامسونگ" },
          { id: 2, sub_title: "گوشی شیائومی" },
          { id: 3, sub_title: "گوشی نوکیا" },
          { id: 4, sub_title: "گوشی هواوی" },
          { id: 5, sub_title: "گوشی آنر" },
          { id: 6, sub_title: "گوشی موتورولا" },
          { id: 7, sub_title: "گوشی جی پلاس" },
          { id: 8, sub_title: "گوشی وان پلاس" },
          { id: 9, sub_title: "گوشی جی ال ایکس" },
          { id: 10, sub_title: "گوشی بلو" },
          { id: 11, sub_title: "گوشی کاترپیلار" },
          { id: 12, sub_title: "گوشی ویوو" },
        ],
      },
      {
        id: 1,
        title: "گوشی براساس قیمت",
        options: [
          { id: 0, sub_title: "گوشی تا ۲ میلیون تومان" },
          { id: 1, sub_title: "گوشی تا ۵ میلیون تومان" },
          { id: 2, sub_title: "گوشی تا ۷ میلیون تومان" },
          { id: 3, sub_title: "گوشی تا ۱۵ میلیون تومان" },
          { id: 4, sub_title: "گوشی بالای ۱۵ میلیون تومان" },
        ],
      },
      {
        id: 2,
        title: "گوشی براساس حافظه داخلی",
        options: [
          { id: 0, sub_title: "گوشی تا ۱۶ گیگابایت" },
          { id: 1, sub_title: "گوشی تا ۳۲ گیگابایت" },
          { id: 2, sub_title: "گوشی تا ۶۴ گیگابایت" },
          { id: 3, sub_title: "گوشی تا ۱۲۸ گیگابایت" },
          { id: 4, sub_title: "گوشی تا ۲۵۶ گیگابایت" },
          { id: 5, sub_title: "گوشی تا ۱ ترابایت" },
        ],
      },
      {
        id: 3,
        title: "رزولوشن عکس",
        options: [
          { id: 0, sub_title: "تا ۱۳ مگاپیکسل" },
          { id: 1, sub_title: "تا ۱۶ مگاپیکسل" },
          { id: 2, sub_title: "تا ۴۸ مگاپیکسل" },
          { id: 3, sub_title: "تا ۶۴ مگاپیکسل" },
          { id: 4, sub_title: "تا ۱۰۸ مگاپیکسل" },
        ],
      },
      {
        id: 4,
        title: "گوشی براساس کاربری",
        options: [
          { id: 0, sub_title: "گوشی اقتصادی" },
          { id: 1, sub_title: "گوشی میان رده" },
          { id: 2, sub_title: "گوشی دانش آموزی" },
          { id: 3, sub_title: "گوشی گیمینگ" },
          { id: 4, sub_title: "گوشی پرچمدار" },
          { id: 5, sub_title: "گوشی ضدآب" },
          { id: 6, sub_title: "گوشی مناسب عکاسی" },
          { id: 7, sub_title: "گوشی 5G" },
          { id: 8, sub_title: "دو سیم‌کارت" },
          { id: 9, sub_title: "Android (اندروید)" },
          { id: 10, sub_title: "IOS" },
          { id: 11, sub_title: "سایر سیستم عامل ها" },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "کالای دیجیتال",
    filters: [
      {
        id: 0,
        title: "لوازم جانبی گوشی",
        options: [
          { id: 0, sub_title: "کیف و کاور گوشی" },
          { id: 1, sub_title: "پاور بانک (شارژر همراه)" },
          { id: 2, sub_title: "پایه نگهدارنده گوشی" },
        ],
      },
      {
        id: 1,
        title: "گوشی موبایل",
        options: [
          { id: 0, sub_title: "اپل" },
          { id: 1, sub_title: "سامسونگ" },
          { id: 2, sub_title: "شیائومی" },
          { id: 3, sub_title: "نوکیا" },
          { id: 4, sub_title: "هوآوی" },
          { id: 5, sub_title: "آنر" },
        ],
      },
      {
        id: 2,
        title: "واقعیت مجازی",
        options: [],
      },
      {
        title: "مچ‌بند و ساعت هوشمند",
        options: [],
      },
      {
        id: 3,
        title: "تلویزیون",
        options: [
          { id: 0, sub_title: "جی پلاس" },
          { id: 1, sub_title: "ایکس‌ویژن" },
          { id: 2, sub_title: "دوو" },
          { id: 3, sub_title: "اسنوا" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "خودرو، ابزار و تجهیزات صنعتی",
  },
  {
    id: 3,
    title: "مد و پوشاک",
  },
  {
    id: 4,
    title: "کالاهای سوپرمارکتی",
  },
  {
    id: 5,
    title: "محصولات بومی و محلی",
  },
  {
    id: 6,
    title: "اسباب بازی، کودک و نوزاد",
  },
  {
    id: 7,
    title: "زیبایی و سلامت",
  },
  {
    id: 8,
    title: "خانه و آشپزخانه",
  },
  {
    id: 9,
    title: "کتاب، لوازم تحریر و هنر",
  },
  {
    id: 10,
    title: "ورزش و سفر",
  },
];

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
