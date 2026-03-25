import React from "react";

const BgImg = () => {
  return (
    <div className="w-full h-[520px] relative rounded-2xl overflow-hidden">
      
      <img
        src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8"
        className="w-full h-full object-cover"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

    </div>
  );
};

export default BgImg;