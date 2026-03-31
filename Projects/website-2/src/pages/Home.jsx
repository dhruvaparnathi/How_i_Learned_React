import React from 'react'

const Home = () => {
  return (
    <div className="pt-32 px-6 md:px-12 animate-in fade-in duration-700">
    <div className="max-w-5xl">
      <h1 className="text-5xl md:text-9xl font-medium tracking-tighter leading-[0.9] mb-12">
        Creative <br/> Studio for <br/> <span className="text-orange-600 italic">Bold</span> Brands.
      </h1>
      <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-16 leading-relaxed">
        We bridge the gap between design and technology. Building digital products that define the next generation of the web.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
        {[
          { label: 'Services', val: 'Strategy, Design, Code' },
          { label: 'Location', val: 'Remote / Berlin' },
          { label: 'Focus', val: 'Web3 & Interaction' },
        ].map((item, i) => (
          <div key={i} className="border-t border-white/10 pt-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-mono">{item.label}</p>
            <p className="text-sm font-medium">{item.val}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Home
