import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PRODUCTS_DATA } from '../assets/ProductsData'
const Products = () => {
  return (
    <div className="pt-32 px-6 md:px-12 pb-24 animate-in zoom-in-95 duration-500">
    <h2 className="text-4xl md:text-6xl font-medium mb-16 uppercase italic">Our Products</h2>
    <div className="space-y-4">
      {PRODUCTS_DATA.map((product, i) => (
        <Link 
          key={product.id} 
          to={`/products/${product.id}`}
          className="flex items-center justify-between p-8 border border-white/10 hover:border-orange-600 transition-colors group"
        >
          <div className="flex items-center gap-8">
            <span className="text-xs font-mono text-gray-500">0{i+1}</span>
            <div>
              <h3 className="text-2xl md:text-4xl font-medium group-hover:text-orange-600 transition-colors">{product.name}</h3>
              <p className="text-xs text-gray-500 font-mono mt-1 uppercase tracking-widest">{product.price}</p>
            </div>
          </div>
          <ArrowUpRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Products
