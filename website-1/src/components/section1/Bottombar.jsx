import React from "react";

const Bottombar = () => {
  return (
    <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end text-white text-sm">

      <p className="text-gray-200">
        "Train with real Professionals. <br />
        Get the real Results."
      </p>

      <div className="flex gap-6">
  <button className="flex items-center gap-1 hover:translate-x-1 transition hover:underline">
    Instagram <i className="ri-arrow-right-up-line"></i>
  </button>

  <button className="flex items-center gap-1 hover:translate-x-1 transition hover:underline">
    Facebook <i className="ri-arrow-right-up-line"></i>
  </button>

  <button className="flex items-center gap-1 hover:translate-x-1  transition hover:underline">
    Tik-Tok <i className="ri-arrow-right-up-line"></i>
  </button>
</div>

    </div>
  );
};

export default Bottombar;