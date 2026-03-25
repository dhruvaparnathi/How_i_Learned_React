import React from "react";

const Center = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

      <h1 className="text-5xl font-semibold leading-tight max-w-4xl">
        Unleash Your Inner Champion Today. <br />
        All In One Place.
      </h1>

      <p className="mt-4 text-lg text-gray-200 max-w-2xl">
        Join the ultimate tennis experience – where passion meets performance,
        and every swing brings you closer to victory.
      </p>

      <button className="mt-6 bg-black text-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
  Start Your Own Journey
</button>

    </div>
  );
};

export default Center;