import React from "react";
import Navbar from "./components/section1/Navbar";
import Hero from "./components/section1/Hero";
import Middle from "./components/section2/Middle";
import Bottom from "./components/section2/Bottom";
import Top from "./components/section2/Top";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <Navbar />
      <Hero />

      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <Top />
        <Middle />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
