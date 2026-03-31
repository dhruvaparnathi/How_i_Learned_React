import React from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { PRODUCTS_DATA } from '../assets/ProductsData';
import { ChevronLeft, Plus } from 'lucide-react';

const ProductDetail = () => {

    const {productId} = useParams();
    const product = PRODUCTS_DATA.find(p => p.id === productId);

    if (!product) return <Navigate to="/products" />;


  return (
    <div className="pt-32 px-6 md:px-12 pb-24 animate-in fade-in duration-500">
      <Link to="/products" className="flex items-center gap-2 text-xs text-gray-500 hover:text-orange-600 transition-colors mb-12 font-mono uppercase tracking-widest group">
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Products
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-8xl font-medium tracking-tight mb-6">{product.name}</h1>
          <p className="text-2xl text-orange-600 font-mono mb-8">{product.price}</p>
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-12">
            {product.description}
          </p>
          <button className="bg-white text-black px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-orange-600 hover:text-white transition-colors hover:cursor-pointer flex items-center gap-2  border border-white/10 duration-300 ">
            Purchase License
          </button>
        </div>

        <div className="bg-[#222] border border-white/5 rounded-sm p-8 md:p-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-mono">Included Features</p>
          <ul className="space-y-6">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-4 text-lg border-b border-white/5 pb-4 last:border-0">
                <Plus size={16} className="text-orange-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
