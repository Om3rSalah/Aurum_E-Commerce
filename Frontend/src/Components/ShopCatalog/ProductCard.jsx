import React from 'react';
import { Heart, Star } from 'lucide-react';
import { useProductFilterStore } from '../../Store/useProductFilterStore';

export default function ProductCard({ product }) {
  const { viewMode } = useProductFilterStore();

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300 flex ${viewMode === 'list' ? 'flex-row items-center' : 'flex-col'}`}>
      
      {/* Product Image Container */}
      <div className={`relative bg-stone-100 overflow-hidden ${viewMode === 'list' ? 'w-48 h-56 shrink-0' : 'w-full h-72'}`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#3525cd] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md tracking-wider">
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors cursor-pointer">
          <Heart size={16} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-gray-400 uppercase tracking-widest font-semibold">{product.category}</span>
            <span className="flex items-center gap-1 font-bold text-amber-600">
              <Star size={12} className="fill-amber-500 text-amber-500" /> {product.rating} ({product.reviews})
            </span>
          </div>
          <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#3525cd] transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-gray-700 line-clamp-2 ">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between  mt-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900 text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-[#777587] relative" style={{ textDecoration: 'line-through' }}>
                ${product.originalPrice} <div className='h-0.5 w-full bg-[#777587] absolute top-1/2 left-0'></div>
              </span>
            )}
          </div>
          <button className="bg-indigo-50 hover:bg-[#3525cd] text-[#3525cd] hover:text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer">
            + Add
          </button>
        </div>
      </div>

    </div>
  );
}