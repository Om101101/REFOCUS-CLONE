import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
    <Card
  width={"basis-1/3"}
  start={false}
  para={true}
  hoverColor="#7dd3fc"
/>

<Card
  width={"basis-2/3"}
  start={true}
  para={false}
  hoverColor="#c4b5fd" 
/>
      </div>
    </div>
  );
}

export default Cards;