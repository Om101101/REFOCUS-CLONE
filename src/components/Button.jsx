import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button() {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2 bg-zinc-100 text-black rounded-full text-sm font-medium cursor-pointer hover:bg-white transition">
      <span>Get Started</span>
      <IoIosReturnRight className="text-lg" />
    </div>
  );
}

export default Button;