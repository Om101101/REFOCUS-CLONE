import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      titel: "Arqitel",
      description:
        "We had an ambitious goal for Arqitel's new website: Reduce the complexity of their industry through stunning 3D visualisations that combine interaction and storytelling. We wanted to be able to tell what they do in a single page, while positioning their brand as a leader in their sector.",
      live: true,
      case: false,
    },
    {
      titel: "Meridian",
      description:
        "The first Visibility Engine that gets your brand ranked #1 by AI. In a nutshell, Meridian helps brands see what AI is saying about them, uncover opportunities to improve, and take action before anyone else.",

      live: true,
      case: false,
    },
    {
      titel: "Heimdall Power",
      description:
        "The Heimdall Power website is a meeting point of technology, Scandinavian roots, high-end design, and a vision of improving the efficiency of grid systems around the world. Our process was deeply rooted in strategic workshops that enabled us to deliver narrative pieces that combined with precision storytelling, technical specifications, and high-end development.",

      live: true,
      case: false,
    },
    {
      titel: "Cula",
      description:
        "We've had a ton of fun creating a new website for Cula! This time, we immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",

      live: true,
      case: true,
    },
    {
      titel: "Layout Land",
      description:
        "We collaborated with the Webflow University team to develop an educational experience aimed at helping designers and newcomers grasp the core fundamentals of the product. This partnership allowed us to leverage our expertise as a leading Webflow agency, enabling us to create an educational platform that seamlessly combines instructional principles with engaging elements.",

      live: true,
      case: true,
    },
  ];
  return (
    <div>
       {products.map((val,index)=> <Product key={index} val={val} />)} 
     
    </div>
  );
}

export default Products;
