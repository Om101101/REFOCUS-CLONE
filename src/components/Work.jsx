import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203-p-1080.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6907b86ee1d9f9874214c5d4_Case-Study-caseStudy-thumbnail_A-16_9.png",
      top: "25%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203.webp",
      top: "25%",
      left: "65%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/69134f698821bc458be7c318_Case-Study-thumbnail_4_3%20B.png",
      top: "50%",
      left: "80%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/56/5b/c7/565bc7bb2424392735117828b7f06141.jpg",
      top: "75%",
      left: "65%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/1200x/94/95/0d/94950da78cd126f2a0f08d9b4ceaf0e9.jpg",
      top: "75%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/1200x/20/4f/4b/204f4bce6a8c622248a6997ca7ab1665.jpg",
      top: "50%",
      left: "20%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    switch(Math.floor(data * 100)) {  
      case 0:
        break;
        case 1:
        break;
        case 2:
        break;
        case 3:
        break;
        case 4:
        break;case 5:
        break;case 6:
        break;
        case 0:
        break;

    }
  })  

  

  return (
    <div className="w-full mt-10 ">
      <div className=" relative max-w-screen-xl mx-auto  text-center">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%] "
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
