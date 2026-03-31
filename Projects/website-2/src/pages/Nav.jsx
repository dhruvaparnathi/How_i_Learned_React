import React, { use } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Plus } from 'lucide-react';
import { RiInstagramLine, RiLinkedinLine, RiGithubLine } from '@remixicon/react';
import { useState } from "react";

const Nav = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1a1a1a]">
        <Link to="/" className="flex items-center cursor-pointer" onClick={() => setIsOpen(false)}>
          <div className="text-2xl font-black tracking-tighter uppercase italic">Zoomer</div>
        </Link>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity font-bold"
          >
            {isOpen ? 'Close' : 'Menu'} {isOpen ? <X size={16} /> : <Plus size={16} />}
          </button>
          
          <div className="hidden md:flex items-center border border-white/20 rounded-sm overflow-hidden">
            <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors border-r border-white/20">
              Let's work together
            </button>
            <button className="p-2 hover:bg-white hover:text-black transition-colors">
              <Plus size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu */}
      <div className={`fixed inset-0 z-40 bg-[#222] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full w-full pt-24 pb-12 px-6 md:px-12 flex flex-col lg:flex-row gap-12 overflow-y-auto">
          
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-2 md:space-y-4">
              {navLinks.map((link) => (
                <li 
                  key={link.path} 
                  className="flex items-center group cursor-pointer"
                >
                  <div className={`w-3 h-3 md:w-4 md:h-4 bg-orange-600 mr-4 transition-transform duration-300 ${location.pathname === link.path ? 'scale-100' : 'scale-0 group-hover:scale-50 opacity-50'}`} />
                  <Link 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`relative text-5xl md:text-8xl font-medium tracking-tight transition-all duration-500
    bg-left-bottom bg-no-repeat
    bg-gradient-to-r from-orange-600 to-orange-600
    ${
      location.pathname === link.path
        ? "text-orange-600 bg-[length:100%_2px] bg-[center_left_50%]"
        : "text-white bg-[length:0%_2px] bg-[center_left_50%] hover:text-orange-600 hover:bg-[length:100%_2px]"
    }`}
    style={{ backgroundPosition: "left 50%" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

              {/* Side Div */}

          <div className="flex-1 flex flex-col justify-center max-w-sm border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-mono">Contact</p>
                <a href="mailto:contact@abc-Zoomer.com" className="block text-sm md:text-base hover:text-orange-600 transition-colors">contact@abc-Zoomer.com</a>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><RiGithubLine /> GitHub</p>
                <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><RiLinkedinLine /> LinkedIn</p>
                <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><RiInstagramLine /> Instagram</p>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-orange-600 animate-pulse" />
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white">Accepting projects</p>
                </div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-gray-500">Waitlist: 3 spots left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
