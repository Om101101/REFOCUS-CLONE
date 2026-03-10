import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Marquee({ imagesurl, direction = 1 }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;

    const tl = gsap.to(el, {
      xPercent: direction === 1 ? -50 : 50,
      ease: "none",
      duration: 25,
      repeat: -1
    });

    const stop = () => tl.pause();
    const start = () => tl.play();

    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);

    return () => {
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
    };
  }, [direction]);

  const logos = [...imagesurl, ...imagesurl];

  return (
    <div className="relative w-full overflow-hidden py-10">

      <div
        ref={marqueeRef}
        className="flex gap-32 w-max"
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="h-12 opacity-60 hover:opacity-100 transition"
          />
        ))}
      </div>

      {/* gradient fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent"></div>

    </div>
  );
}

export default Marquee;