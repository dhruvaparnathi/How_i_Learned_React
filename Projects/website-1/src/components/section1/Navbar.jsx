import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-6 max-w-[1400px] mx-auto">

      <h2 className="text-lg font-semibold">Horizon Courts</h2>

      <div className="flex gap-8 text-gray-600">
  <button className="bg-gray-200 px-4 py-1 rounded-full">About Us</button>

  <h3 className="hover:text-black cursor-pointer transition">
    Services
  </h3>

  <h3 className="hover:text-black cursor-pointer transition">
    Coaches
  </h3>

  <h3 className="hover:text-black cursor-pointer transition">
    Events
  </h3>

  <h3 className="hover:text-black cursor-pointer transition">
    Contacts
  </h3>
</div>

      <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition duration-300 hover:translate-x-1 hover:cursor-pointer">
        Book Now
        <i className="ri-arrow-right-up-line"></i>
      </button>

    </div>
  );
};

export default Navbar;