import React from 'react'
import { Plus } from 'lucide-react'
const Projects = () => {
  return (
    <div className="pt-32 px-6 md:px-12 pb-24 animate-in slide-in-from-bottom-4 duration-700">
    <div className="flex justify-between items-end mb-12">
      <h2 className="text-4xl md:text-6xl font-medium uppercase tracking-tighter italic">Selected Work</h2>
      <span className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">2023—2024</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="group relative aspect-[16/10] bg-[#222] overflow-hidden rounded-sm cursor-pointer border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            <p className="text-xs font-mono text-orange-600 mb-1 uppercase tracking-widest">Case Study 0{i}</p>
            <h3 className="text-2xl font-bold">Project Alpha Dynamics</h3>
          </div>
          <div className="w-full h-full bg-white/5 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
             <Plus size={48} className="text-white/10 group-hover:text-orange-600/30 transition-colors" />
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Projects
