import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Shirt, ShoppingBag, Watch, Glasses } from 'lucide-react';
import { TbHanger , TbJacket    } from "react-icons/tb";
import { PiDressFill , PiPants  } from "react-icons/pi";



export default function CuratedCategories() {
  // Categories data array for easy management and mapping
  const categories = [
    { id: 1, name: "T-Shirts", count: "120+ Styles", icon: Shirt, path: "/shop/t-shirts" },
    { id: 2, name: "Shirts", count: "Featured", icon: TbHanger, path: "/shop/shirts", active: true },
    { id: 3, name: "Kurtis", count: "48 Styles", icon: ShoppingBag, path: "/shop/kurtis" },
    { id: 4, name: "Dresses", count: "65 Styles", icon: PiDressFill , path: "/shop/dresses" },
    { id: 5, name: "Jeans", count: "34 Cuts", icon: PiPants , path: "/shop/jeans" },
    { id: 6, name: "Jackets", count: "29 Outerwear", icon: TbJacket , path: "/shop/jackets" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
      
      {/* Section Header: Title and Navigation Arrows */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          Curated Categories
        </h2>
        
        {/* Slider Navigation Buttons */}
       
      </div>

      {/* Categories Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.id}
              to={category.path}
              className={`group relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border transition-all duration-300 ${
                category.active 
                  ? 'border-[#3525cd] shadow-sm' 
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {/* Category Icon Container */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors ${
                category.active 
                  ? 'bg-indigo-50 text-[#3525cd]' 
                  : 'bg-gray-50 text-gray-600 group-hover:bg-indigo-50 group-hover:text-[#3525cd]'
              }`}>
                <IconComponent size={22} />
              </div>

              {/* Category Name */}
              <span className={`text-sm font-semibold mb-1 transition-colors ${
                category.active ? 'text-[#3525cd]' : 'text-gray-900 group-hover:text-[#3525cd]'
              }`}>
                {category.name}
              </span>

              {/* Category Item Count / Subtext */}
              <span className="text-xs text-gray-400 font-medium">
                {category.count}
              </span>
            </Link>
          );
        })}
      </div>

    </section>
  );
}