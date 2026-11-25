import React, { useEffect, useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProductStore } from '../../../Store/useProductStore';
import { Link } from 'react-router-dom';

export default function CompleteTheLook() {
  // Wishlist state for individual items
  const [wishlist, setWishlist] = useState({});
  const { homeAccessories , getAllAccessories } = useProductStore();


  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() =>{
    getAllAccessories();
  },[])


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 lg:p-6 ">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3525cd]">
              STYLIST RECOMMENDATIONS
            </span>
            <h2 className="lg:text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-0.5">
              Complete the Look
            </h2>
          </div>

         
        </div>

        {/* Recommended Look Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeAccessories?.map((item) => (
            <Link key={item.id} to={`/shop/${item.slug}`} className="group cursor-pointer">
              
              {/* Product Image Box */}
              <div className="relative aspect-[4/3] sm:aspect-square bg-[#f4f2ee] rounded-2xl overflow-hidden mb-4">
                
                {/* Image */}
                <img
                  src={item.images[0].imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Details */}
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-gray-400 block">
                  {item.category.name}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#3525cd] transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-sm font-bold text-gray-900 pt-0.5">
                  ${Number(item.basePrice).toFixed(2)}
                </p>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}