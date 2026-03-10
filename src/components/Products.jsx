import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "We had an ambitious goal for Arqitel's new website: Reduce the complexity of their industry through stunning 3D visualisations that combine interaction and storytelling. We wanted to be able to tell what they do in a single page, while positioning their brand as a leader in their sector.",
      live: true,
      case: false,
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      title: "Meridian",
      description:
        "The first Visibility Engine that gets your brand ranked #1 by AI. In a nutshell, Meridian helps brands see what AI is saying about them, uncover opportunities to improve, and take action before anyone else.",
      live: true,
      case: false,
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      title: "Heimdall Power",
      description:
        "The Heimdall Power website is a meeting point of technology, Scandinavian roots, high-end design, and a vision of improving the efficiency of grid systems around the world. Our process was deeply rooted in strategic workshops that enabled us to deliver narrative pieces that combined with precision storytelling, technical specifications, and high-end development.",
      live: true,
      case: false,
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      title: "Cula",
      description:
        "We've had a ton of fun creating a new website for Cula! This time, we immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      title: "Layout Land",
      description:
        "We collaborated with the Webflow University team to develop an educational experience aimed at helping designers and newcomers grasp the core fundamentals of the product. This partnership allowed us to leverage our expertise as a leading Webflow agency, enabling us to create an educational platform that seamlessly combines instructional principles with engaging elements.",
      live: true,
      case: true,
      video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: 0, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[36rem] h-[24rem] left-[38%] overflow-hidden rounded-sm"
        >
          {products.map((val, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full flex-shrink-0"
            >
              <video
                src={val.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;