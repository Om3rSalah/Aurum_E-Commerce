import React, { useState } from 'react';
import { Star, Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log('Added to cart:', { ...product, selectedColor, selectedSize, quantity });
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Title */}
      <div className="space-y-2 border-b border-gray-100 pb-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#3525cd] bg-indigo-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {product.stockStatus}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          {product.title}
        </h1>
        <div className="flex items-center gap-2 pt-1">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-500" />
            ))}
          </div>
          <span className="text-xs font-bold text-gray-800">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewsCount} reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 relative " style={{ textDecoration: 'line-through' }}> <div className='h-0.5 w-full bg-[#777587] absolute top-1/2 left-0'></div>
            ${product.originalPrice}
          </span>
        )}
        {product.discount && (
          <span className="text-xs font-bold bg-indigo-50 text-[#3525cd] px-2.5 py-1 rounded-md">
            {product.discount} OFF
          </span>
        )}
      </div>

      {/* Color Swatches */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold text-gray-800">
          <span>Color: <span className="text-gray-500 font-normal">{selectedColor}</span></span>
        </div>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-8 h-8 rounded-full ${color.bg} relative flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                selectedColor === color.name ? 'ring-2 ring-offset-2 ring-[#3525cd]' : ''
              }`}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="font-bold text-gray-800">Size: <span className="text-gray-500 font-normal">{selectedSize}</span></span>
          <Link to="/size-guide" className="text-[#3525cd] font-semibold hover:underline">Size Guide</Link>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                selectedSize === size
                  ? 'bg-[#3525cd] text-white border-[#3525cd] shadow-md shadow-indigo-100'
                  : 'bg-indigo-50/40 text-gray-700 border-transparent hover:border-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-4">
          {/* Quantity Counter */}
          <div className="flex items-center border border-gray-200 rounded-xl bg-indigo-50/30 overflow-hidden">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer text-sm font-bold"
            >
              -
            </button>
            <span className="px-4 text-sm font-bold text-gray-900">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer text-sm font-bold"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#3525cd] hover:bg-[#2a1cb2] text-white text-sm font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-indigo-100 cursor-pointer"
          >
            <span>Add to Cart</span>
          </button>

          {/* Wishlist Button */}
          <button className="p-3.5 border border-gray-200 rounded-xl hover:border-gray-300 text-gray-600 hover:text-red-500 transition-colors cursor-pointer bg-white">
            <Heart size={20} />
          </button>
        </div>

        {/* Buy Now Button */}
        <button className="w-full bg-indigo-50 hover:bg-indigo-100 text-[#3525cd] text-sm font-bold py-3.5 rounded-xl transition-all cursor-pointer">
          Buy Now
        </button>
      </div>

      {/* Shipping & Trust Badges */}
      <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-5 text-center text-xs text-gray-600">
        <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-indigo-50/40">
          <Truck size={18} className="text-[#3525cd]" />
          <span className="font-semibold leading-tight">Free Shipping On orders $75+</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-indigo-50/40">
          <RotateCcw size={18} className="text-[#3525cd]" />
          <span className="font-semibold leading-tight">Easy Returns 30-day window</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-indigo-50/40">
          <ShieldCheck size={18} className="text-[#3525cd]" />
          <span className="font-semibold leading-tight">Secure Payment 100% encrypted</span>
        </div>
      </div>

    </div>
  );
}