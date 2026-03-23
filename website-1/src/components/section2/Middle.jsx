import React from "react";

const Middle = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-12 mb-16">

      {/* Image 1 */}
      <div className="h-[260px] rounded-3xl overflow-hidden ">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
          alt="tennis court"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Image 2 */}
      <div className="h-[260px] rounded-3xl overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
          alt="trainer"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />

        {/* overlay label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white/30 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm">
            Private & Group Lessons
          </span>
        </div>
      </div>

      {/* Image 3 */}
      <div className="h-[260px] rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
          alt="coach"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

    </div>
  );
};

export default Middle;