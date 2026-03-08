import React from "react";
import Button from "./Button";

function Product() {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-20">

        <h1 className="text-4xl font-semibold ">
          Arqitel
        </h1>

        <div className="dets  w-2/3">
          <p className="text-zinc-400 mb-6 leading-relaxed">
            We had an ambitious goal for Arqitel's new website: Reduce the
            complexity of their industry through stunning 3D visualisations that
            combine interaction and storytelling. We wanted to be able to tell
            what they do in a single page, while positioning their brand as a
            leader in their sector.
          </p>

          <Button />
        </div>

      </div>
    </div>
  );
}

export default Product;