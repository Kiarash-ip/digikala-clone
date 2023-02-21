import React from "react";
import { useState } from "react";
import ArticleSlice from "./ArticleSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const logos = [
  {
    id: 0,
    src: "/images/kasbokar.png",
  },
  {
    id: 1,
    src: "/images/kasbokar.png",
  },
  {
    id: 2,
    src: "/images/rezi.png",
  },
];

const articles = [
  {
    id: 0,
    h1: true,
    title: "فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین",
    desc: "یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.",
  },
  {
    id: 1,
    h2: true,
    title: "کدام محصولات در دیجی‌کالا قابل سفارش هستند؟",
    desc: "تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل حراج شگفت انگیز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم.",
  },
  {
    id: 2,
    h2: true,
    title: "خودرو، ابزار و تجهیزات صنعتی",
    desc: "انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل ",
  },
  {
    id: 3,
    h2: true,
    title: "اسباب بازی کودک و نوزاد",
    desc: "در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش، ",
  },
];

export default function FooterAccordionSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-start justify-between border-t py-8 border-neutral-100 flex-wrap lg:flex-nowrap">
      <div className="w-full lg:w-[auto] flex items-center mt-4 lg:mt-0 justify-center lg:justify-end">
        {logos.map((l) => {
          return (
            <div
              key={l.id}
              className="cursor-pointer p-2 lg:p-4 flex items-center justify-center border border-neutral-200 rounded mr-2"
            >
              <div className="w-[75px] h-[75px]">
                <img src={l.src} className="w-full h-full object-contain" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="grow" dir="rtl">
        <div
          className={`overflow-hidden relative ${!open ? "footer-fade" : ""}`}
          style={{
            height: open ? "auto" : "125px",
          }}
        >
          {articles.map((s) => (
            <ArticleSlice
              key={s.id}
              title={s.title}
              desc={s.desc}
              h1={s.h1}
              h2={s.h2}
            />
          ))}
        </div>
        <span
          className="inline-flex items-center cursor-pointer flex mt-2 items-center font-700 text-xs leading-[2.17] text-button-secondary"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <span>{open ? "بستن" : "مشاهده بیشتر"}</span>
          <div className="w-[18px] h-[18px] flex items-center justify-center">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-button-secondary"
            />
          </div>
        </span>
      </div>
    </div>
  );
}
