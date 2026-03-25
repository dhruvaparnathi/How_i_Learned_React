import React from "react";
import BgImg from "./BgImg";
import Center from "./Center";
import Bottombar from "./Bottombar";

const Hero = () => {
  return (
    <div className="px-6 py-8">
      <div className="relative max-w-[1400px] mx-auto">
        <BgImg />
        <Center />
        <Bottombar />
      </div>
    </div>
  );
};

export default Hero;