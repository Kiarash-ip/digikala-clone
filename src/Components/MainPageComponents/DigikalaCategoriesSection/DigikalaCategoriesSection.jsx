import React from "react";
import CategoryItem from "./CategoryItem";

const digiKalaCategories = [
  {
    id: 0,
    src: "/images/digi-categories/native-products.webp",
    title: "محصولات بومی و محلی",
  },
  {
    id: 1,
    src: "/images/digi-categories/market-products.webp",
    title: "کالاهای سوپرمارکتی",
  },
  {
    id: 2,
    src: "/images/digi-categories/clothing-products.webp",
    title: "مد و پوشاک",
  },
  {
    id: 3,
    src: "/images/digi-categories/mobile-products.webp",
    title: "موبایل",
  },
  {
    id: 4,
    src: "/images/digi-categories/digital-products.webp",
    title: "کالای دیجیتال",
  },
  {
    id: 5,
    src: "/images/digi-categories/tools-products.webp",
    title: "خودرو، ابزار و تجهیزات صنعتی",
  },
  {
    id: 6,
    src: "/images/digi-categories/sport-products.webp",
    title: "ورزش و سفر",
  },
  {
    id: 7,
    src: "/images/digi-categories/stationery-products.webp",
    title: "کتاب، لوازم تحریر و هنر",
  },
  {
    id: 8,
    src: "/images/digi-categories/kitchen-products.webp",
    title: "خانه و آشپزخانه",
  },
  {
    id: 9,
    src: "/images/digi-categories/beauty-products.webp",
    title: "زیبایی و سلامت",
  },
  {
    id: 10,
    src: "/images/digi-categories/toys-products.webp",
    title: "اسباب بازی، کودک و نوزاد",
  },
];

export default function DigikalaCategoriesSection() {
  return (
    <div className="w-full px-5 lg:px-4 py-3 lg:pt-4 lg:pb-10 flex flex-col items-center mt-4 lg:mt-6">
      <div className="mb-6 lg:mb-9 items-center">
        <h3 className="text-2xl font-[500]">دسته‌بندی‌های دیجی‌کالا</h3>
      </div>
      <div className="w-full flex items-start justify-center flex-wrap gap-5 gap-y-6 lg:gap-0 lg:gap-y-8">
        {digiKalaCategories.map((cat) => {
          return <CategoryItem src={cat.src} title={cat.title} />;
        })}
      </div>
    </div>
  );
}
