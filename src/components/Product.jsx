import React from "react";
import Button from "./Button";

function Product({ val }) {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-20">
        <h1 className="text-4xl font-semibold ">{val.titel}</h1>

        <div className="dets  w-2/3">
          <p className="text-zinc-400 mb-6 leading-relaxed">
            {val.description}
          </p>

         <div className="flex items-center gap-10">
             {val.live && <Button title="View Live" />}
          {val.case && <Button title="View Case Study" />}
         </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
