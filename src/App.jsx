import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Maruees from "./components/Maruees";
import Cards from './components/Cards';

function App() {
  return (
    <div className="bg-zinc-900 w-full font-['satoshi'] min-h-screen text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Maruees />
      <Cards />
    </div>
  );
}

export default App;
