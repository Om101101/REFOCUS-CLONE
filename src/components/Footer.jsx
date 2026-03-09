import React from "react";

function Footer() {
  return (
    <div className="w-full border-t border-zinc-800">
      <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left Side */}
        <div className="md:basis-1/2">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>

        {/* Right Side */}
        <div className="md:basis-1/2 flex flex-col sm:flex-row gap-10">
          {/* Social */}
          <div className="sm:basis-1/3">
            <h4 className="mb-6 text-zinc-500 capitalize">Social</h4>
            {["Instagram", "Twitter (X)", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block mt-2 text-zinc-400 hover:text-white transition capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Company */}
          <div className="sm:basis-1/3">
            <h4 className="mb-6 text-zinc-500 capitalize">Company</h4>
            {["About", "Careers", "Contact"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block mt-2 text-zinc-400 hover:text-white transition capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Info */}
          <div className="sm:basis-1/3 sm:text-right">
            <p className="text-zinc-400 text-sm leading-relaxed">
              We build digital experiences that help brands grow and stand out
              in the modern world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
