import React from 'react'

const Contact = () => {
  return (
    <div className="pt-32 px-6 md:px-12 pb-24 flex flex-col justify-center min-h-[80vh]">
    <p className="text-[10px] uppercase tracking-[0.4em] text-orange-600 font-bold mb-4 font-mono">Ready to start?</p>
    <h2 className="text-5xl md:text-9xl font-medium tracking-tighter mb-12 break-words hover:text-orange-600 transition-colors cursor-pointer">
      hello@xyz-zoomer.studio
    </h2>
    <div className="flex flex-wrap gap-8 text-sm uppercase tracking-widest font-bold">
      <a href="#" className="hover:text-orange-600">Twitter</a>
      <a href="#" className="hover:text-orange-600">Behance</a>
      <a href="#" className="hover:text-orange-600">Save as VCard</a>
    </div>
  </div>
  )
}

export default Contact
