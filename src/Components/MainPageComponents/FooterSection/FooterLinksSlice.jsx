import React from "react";

export default function FooterLinksSlice({ title, links }) {
  return (
    <div className="block lg:grow w-50 lg:w-[unset]">
      <p className="block text-neutral-700 font-[700] text-base mb-2">
        {title}
      </p>
      {links.map((link) => {
        return (
          <a
            href={link.href}
            className="block text-sm text-neutral-500 mb-2 font-[400] leading-[2.15]"
          >
            {link.sub_title}
          </a>
        );
      })}
    </div>
  );
}
