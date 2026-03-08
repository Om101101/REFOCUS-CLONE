import React from "react";
import Strip from "./Strip";

function Stripes() {
  var data = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b97202d2e093f2a48876a_goologo-onLight.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg",
      number: 11,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ed1253edc0166ecbad_Lavendar-logo-black.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
      number: 11,
    },
  ];

  return (
    <div className="flex items-center mt-35 ">
      {data.map((elem, index) => (
        <Strip val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
