import React from "react";

function Maruee({ imagesurl }) {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex items-center gap-16 whitespace-nowrap">
        {imagesurl.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="logo"
            className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition duration-300 flex-shrink-0"
          />
        ))}
        {imagesurl.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="logo"
            className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition duration-300 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default Maruee;
