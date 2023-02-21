import React from "react";

export default function ArticleSlice({ title, desc, h1 = false, h2 = false }) {
  return (
    <>
      {h1 ? (
        <h1 className="mb-2 text-sm font-[700] leading-[2.15]">{title}</h1>
      ) : (
        <h2 className="mb-2 text-sm font-[700] leading-[2.15]">{title}</h2>
      )}
      <p className="text-neutral-500 font-[400] text-xs leading-[2.17]">
        {desc}
      </p>
    </>
  );
}
