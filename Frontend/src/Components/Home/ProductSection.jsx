import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, Plus, Minus, Truck, RotateCcw, ShieldCheck } from 'lucide-react';


export default function ProductSection() {
  // Product Images Array
  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDaBNp7P9OxHvq6wIALGzK5Fc04ZOSXJt6dZZqNWcUl2d8bfHB52NHauZEb4raehVjN39SntWDc1PfP1y44glSrUN7IhmKdFY2LN0aQi2aUIq4slDbIZYuFKxHP4FdN2tXUHifGX90B2bDDPwXxWqg1zJikbe2SHLfOM-Wz58n17dSOZWnFXbIxb5vOzqc-YtnuZ7atSj00tUgyNr0cwiTgHzVSdU0X6wJtpaEvYxovoq12odGBbP8U',
    'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=80',
  ];

  // Interactive States
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Navy Blue');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Available Options Data
  const colors = [
    { name: 'Navy Blue', class: 'bg-[#1e2952]' },
    { name: 'Dark Green', class: 'bg-[#2d4a3e]' },
    { name: 'Black', class: 'bg-[#18181b]' },
    { name: 'Terracotta', class: 'bg-[#8c3a2b]' },
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
      <div className="bg-white rounded-3xl border border-gray-100 p-6 lg:p-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Image Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            
            {/* Thumbnails List */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden transition-all flex-shrink-0 cursor-pointer ${
                    selectedImage === idx ? '' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Featured Image Box */}
            <div className="relative flex-1 h-[420px] sm:h-[520px] rounded-3xl overflow-hidden bg-gray-100">
              {/* Best Seller Badge */}
              <span className="absolute top-4 left-4 z-10 bg-indigo-700 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                BEST SELLER
              </span>

              {/* Favorite Wishlist Icon Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors shadow-sm cursor-pointer"
              >
                <Heart size={18} className={isWishlisted ? 'fill-red-500 text-red-500' : ''} />
              </button>

              {/* Main Image Display */}
              <img
                src={images[selectedImage]}
                alt="Premium Casual Shirt"
                className="w-full h-full object-cover object-top transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Column: Product Details & Purchase Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Category & Collection Tag */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                MENSWEAR • PREMIUM TAILORING
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-1">
                Premium Casual Shirt
              </h1>
            </div>

            {/* Star Ratings */}
            <div className="flex items-center gap-2">
              <div className="flex text-indgo-bg-indigo-700">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-indigo-700 " />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-900">4.8</span>
              <span className="text-xs text-gray-400 font-medium">(128 verified reviews)</span>
            </div>

            {/* Price Display */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-gray-900">$49.99</span>
              <span style={{ textDecoration: 'line-through' }} className="text-lg text-[#777587] line-through font-medium relative ">$69.99 <div className='h-0.5 w-full bg-[#777587] absolute top-1/2 left-0'></div></span>
              <span className="bg-indigo-50 text-indgo-bg-indigo-700 text-xs font-bold px-2.5 py-1 rounded-md">
                29% OFF
              </span>
            </div>

            {/* Color Selection */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-gray-700 mb-3 block">
                Color: <span className="font-bold text-gray-900">{selectedColor}</span>
              </span>
              <div className="flex items-center gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.class} transition-all cursor-pointer ${
                      selectedColor === color.name ? 'ring-2 ring-offset-2 ring-indigo-700 scale-110' : 'hover:scale-105'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-700">Select Size</span>
                <button className="text-indgo-bg-indigo-700 font-semibold hover:underline cursor-pointer">
                  Size Guide
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'bg-indigo-700 text-white shadow-md shadow-indigo-100'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-gray-700">Quantity</span>
              <div className="flex items-center bg-gray-100 rounded-xl px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-bold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action Buttons (Add to Cart & Instant Checkout) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <button className="flex-1 bg-indigo-700 hover:bg-[#2b1da7] text-white text-sm font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-100 cursor-pointer">
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3.5 bg-gray-100 hover:bg-gray-200 rounded-2xl text-gray-700 transition-colors cursor-pointer"
                >
                  <Heart size={20} className={isWishlisted ? 'fill-red-500 text-red-500' : ''} />
                </button>
              </div>

              <button className="w-full bg-indigo-50/80 hover:bg-indigo-100 text-indgo-bg-indigo-700 text-xs font-bold py-3 rounded-2xl transition-colors cursor-pointer">
                Instant Checkout with Apple Pay
              </button>
            </div>

            {/* Shipping & Guarantee Badges */}
            <div className="grid grid-cols-3 gap-2  text-[11px] text-gray-500">
              <div className="flex items-center gap-1.5 font-medium">
                <Truck size={18} className="text-indigo-700" />
                <span className='text-gray-600 font-semibold' >Ships in 24h</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <RotateCcw size={18} className="text-indigo-700" />
                <span className='text-gray-600 font-semibold' >Free 30d Returns</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck size={18} className="text-indigo-700" />
                <span className='text-gray-600 font-semibold' >2-Year Fabric Guarantee</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}