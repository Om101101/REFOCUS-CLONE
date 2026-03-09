import React from "react";
import { GoArrowRight } from "react-icons/go";

function Card({ width, start, para, hover }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between `}
    >
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>Some heading </h3>
          <GoArrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever heading </h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className=" border-[1px] border-zinc-400 text-white font-bold py-2 px-5 rounded-full mt-5">
              Get Started
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
