import React from 'react'

const About = () => {
  return (
    <div className="pt-32 px-6 md:px-12 pb-24 max-w-4xl animate-in fade-in duration-1000">
    <h2 className="text-4xl md:text-7xl font-medium mb-12">Driven by <br/> <span className="text-orange-600 italic">curiosity</span> and craft.</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
      <p>We are a small team of designers and developers based in Berlin, working with partners worldwide. We believe that great digital products are born at the intersection of aesthetic beauty and technical precision.</p>
      <p>Our process is collaborative, transparent, and focused on delivering long-term value. We don't just build websites; we build identities that command attention.</p>
    </div>
  </div>
  )
}

export default About
