import React from "react";

const footer_brands = [
  { id: 0, src: "/images/digikala-brands/digiclub.svg" },
  { id: 1, src: "/images/digikala-brands/digiexpress.svg" },
  { id: 2, src: "/images/digikala-brands/digify.svg" },
  { id: 3, src: "/images/digikala-brands/digikala-business.svg" },
  { id: 4, src: "/images/digikala-brands/digimag.svg" },
  { id: 5, src: "/images/digikala-brands/digiMehr.svg" },
  { id: 6, src: "/images/digikala-brands/diginext.svg" },
  { id: 7, src: "/images/digikala-brands/digipay.svg" },
  { id: 8, src: "/images/digikala-brands/digiplus.svg" },
  { id: 9, src: "/images/digikala-brands/digistyle.svg" },
  { id: 10, src: "/images/digikala-brands/fidibo.svg" },
  { id: 11, src: "/images/digikala-brands/ganjeh.svg" },
  { id: 12, src: "/images/digikala-brands/jet.svg" },
  { id: 13, src: "/images/digikala-brands/komodaa.svg" },
  { id: 14, src: "/images/digikala-brands/magnet.svg" },
  { id: 15, src: "/images/digikala-brands/pindo.svg" },
  { id: 16, src: "/images/digikala-brands/smartech.svg" },
];

export default function FooterBrands() {
  return (
    <div className="w-full bg-neutral-100">
      <div className="w-full max-w-[1676px] mx-auto flex items-start justify-end flex-wrap divide-x divide-y divide-neutral-200">
        {footer_brands.map((item) => {
          return (
            <a
              key={item.id}
              className="px-5 grow flex flex-col items-center justify-center h-[80px]"
              href="#"
            >
              <div style={{ height: "20px" }}>
                <img
                  src={item.src}
                  className="w-full h-[20px] object-contain"
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
