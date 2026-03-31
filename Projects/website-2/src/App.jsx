import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Nav from './pages/Nav'
import About from './pages/About'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);


  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-orange-600 selection:text-white">
      <Nav isOpen={isMenuOpen} 
          setIsOpen={setIsMenuOpen} />
      <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="*" element={
              <div className="pt-32 px-6 md:px-12 pb-24 flex flex-col justify-center min-h-[80vh]">
              <h2 className="text-5xl md:text-9xl font-medium tracking-tighter mb-12 break-words hover:text-orange-600 transition-colors cursor-pointer">
                404 - Page Not Found
              </h2>
              <p className="text-lg text-gray-500">The page you're looking for doesn't exist.</p>
            </div>
          } />
          </Routes>
        </main>

        <footer className="px-6 md:px-12 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.2em] text-gray-600 font-mono">
          <span>&copy; 2026 Zoomer Studio</span>
          <div className="flex gap-6 items-center">
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
            <span>Systems Operational</span>
          </div>
        </footer>
    </div>
  )
}

export default App
