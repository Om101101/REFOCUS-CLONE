import React from "react";

function Strip({ val }) {
  return (
    <div className="w-[16.66%] px-10 py-4 border-t-2 border-b-2 border-r-2 border-zinc-600 flex items-center justify-between bg-amber-50 hover:bg-amber-100 transition">
      <img src={val.url} alt="" className="h-6 object-contain" />

      <span className="font-semibold  text-sm text-black">{val.number}</span>
    </div>
  );
}

export default Strip;
