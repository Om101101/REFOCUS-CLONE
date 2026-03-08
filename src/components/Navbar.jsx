import React from "react";

function cla() {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center  py-6 ml-10">
      <img
        src="https://cdn.prod.website-files.com/6552fa0e9db1071c9d279ba9/6654005f64b18d1eaa48cf60_Refokus.png"
        alt="Refokus Logo"
        className="h-20 w-auto"
      />
      <div className="links flex gap-14 ">
        {["Home", "Work", "Culture"].map((elem,index) => (
          <a href="#" className="text-white  flex items-center gap-1 text-sm">
          {index=== 1 &&(<span style={{boxShadow:"0 0 0.45em #00FF19"}} className="inline-block rounded-full w-1 h-1 bg-green-500 "></span>) }  
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
}

export default cla;
