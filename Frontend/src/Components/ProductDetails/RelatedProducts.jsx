import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RelatedProducts({ products = [] }) {
  // كروت افتراضية مطابقة للصورة لو مفيش data جاية
  const defaultProducts = [
    {
      id: 1,
      title: 'Linen Shirt',
      category: 'Casual Shirts',
      price: 45.99,
      rating: 4.9,
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Printed Kurti',
      category: 'Kurtis & Tunics',
      price: 38.99,
      rating: 4.7,
      badge: null,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Denim Jacket',
      category: 'Outerwear',
      price: 79.99,
      rating: 4.8,
      badge: null,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Chino Pants',
      category: 'Trousers',
      price: 49.99,
      rating: 4.6,
      badge: null,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Casual Polo T-Shirt',
      category: 'Polos',
      price: 29.99,
      rating: 4.9,
      badge: null,
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop',
    },
  ];

  const itemsList = products.length > 0 ? products : defaultProducts;

  return (
    <div className="space-y-6 pt-4">
      {/* Header & Carousel Navigation */}
      <div className="space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#3525cd]">
          TAILORED PAIRINGS
        </span>
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            You May Also Like
          </h2>
          
          {/* أسهم التقليب اليمين والشمال */}
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors cursor-pointer bg-white">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors cursor-pointer bg-white">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid الكروت المصغرة */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {itemsList.map((item) => (
          <div key={item.id} className="group cursor-pointer p-2 bg-white hover:shadow-sm rounded-xl transition-all space-y-2">
            
            {/* الصورة الكارت */}
            <div className="relative aspect-[3/4] bg-stone-100 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Tag لو فيه Badge زي NEW */}
              {item.badge && (
                <span className="absolute top-2.5 left-2.5 bg-[#3525cd] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                  {item.badge}
                </span>
              )}

              {/* زر المفضلة */}
              <button className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                <Heart size={14} />
              </button>
            </div>

            {/* تفاصيل الكارت المقصوصة البسيطة */}
            <div className="space-y-0.5 px-0.5">
              <span className="text-[12px] font-semibold text-gray-400 block uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="text-sm font-bold text-gray-900 truncate group-hover:text-[#3525cd] transition-colors">
                {item.title}
              </h3>
              
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-bold text-gray-900">${item.price}</span>
                {item.rating && (
                  <span className="flex items-center gap-0.5 text-[11px] font-semibold text-gray-500">
                    <Star size={11} className="fill-amber-400 text-amber-400" />
                    {item.rating}
                  </span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}