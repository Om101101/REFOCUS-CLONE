import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full py-16 text-white border-b border-zinc-800">
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-xl mx-auto flex items-center justify-between gap-20"
      >
        {/* Title */}

        <h1 className="text-4xl font-semibold w-1/3">{val.title}</h1>

        {/* Description */}

        <div className="w-2/3">
          <p className="text-zinc-400 mb-6 leading-relaxed">
            {val.description}
          </p>

          {/* Buttons */}

          <div className="flex items-center gap-6">
            {val.live && <Button title="View Live" />}

            {val.case && <Button title="View Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
