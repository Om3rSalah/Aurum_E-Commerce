import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CompleteTheLook() {
  // Wishlist state for individual items
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Recommended look items data
  const lookItems = [
    {
      id: 1,
      category: 'Footwear',
      title: 'Architect Leather Sneakers',
      price: '$115.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoEaFKvweXii08w3GB--M7o4JRob2FunBo9PcX6d23MNav9q8pig5S_zzLU-McXbl-Yq707TR3jS4xOjmMO5GXUrwAQd9SysA5YOjTvq8MLn1qsawZajdNRgnsELd7DGP2VcWXPt171lA3ludQzHCwpngv4SnMczzJ21j3yjDfY-mjmnBkvBYQ4LxfgF5Klkn8yCIhVyqEdUjUgbNsxEGTfUncHgF82CPPaHo8DajznD6WW_rsEmne',
    },
    {
      id: 2,
      category: 'Leather Goods',
      title: 'Cognac Saddle Leather Belt',
      price: '$42.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3lPTx1cxOL_tqMnGLZa-kV1rM-KIitRGwpRm_yvOvIUMeRGQDup-GVTSF0CUt9pzUJBOgnfS7kZAV8OEHGpm_hYFHrn0zoO-gqxVPdeMIJc8y_P2YRGpDoXdTJXDPiuh7nBNs-3w2BODZ3TsOqFQWz29BJERVhB4eiYQy-4-01pHDBY5rv9P4iK_VR9Jxjm2yPM39kifeTJ-dMVGqO7CdYN4rux2dH6fLAE2PL5cJxm0ROuuzwd22',
    },
    {
      id: 3,
      category: 'Eyewear',
      title: 'Nordic Acetate Frames',
      price: '$68.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaBB9Kgg8KPvVmX2m8VX9sxVOnrmbkxvW99jiiyOXY3vnx18NBnL4YDBZ77EadJn0ZxffOW5cSJJWAUTbN982KaRzKBfY538hyQTMn764sUuiWeLZ5ROOzeE4r7SI72eN0QF6XjKfwX1WDca1oi1Kn6s-EanUN6OTbWXXt700i4-eDW0KbgzRlQp05cDMOTVf-LK_Z42csxrpJvpIPaA5kpTX0mskW0xIxMAe0NH-aURqTEgb61mZ7',
    },
    {
      id: 4,
      category: 'Carry Essentials',
      title: 'Structure Canvas Tote',
      price: '$38.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxk0CpPUUwc4McXxzBwh9thErQtsj9K358VisfKZPK2TRJoepzo8-ej21V6IAbA1U9J3BxQe9e0Nk_F9ZUgHDl-T9cfZozjh2LcEMKBrqfUo9Penp1f4ZXuh3LKf2D3Gv5_v85g7JIqbepBebjld4lWOC-4uzLojYT8gEjA9mhUaXzDuBuoyA7WYEGT5AGvAV6GCvJ1Zq_C2CAqUYe4qpHfCbbyrAtz-A_SvfWV5kV0wZXkQQua7nL',
    },
  ];

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
          {lookItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              
              {/* Product Image Box */}
              <div className="relative aspect-[4/3] sm:aspect-square bg-[#f4f2ee] rounded-2xl overflow-hidden mb-4">
                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(item.id);
                  }}
                  aria-label="Save item"
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors shadow-sm cursor-pointer"
                >
                  <Heart
                    size={15}
                    className={wishlist[item.id] ? 'fill-red-500 text-red-500' : ''}
                  />
                </button>

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Details */}
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-gray-400 block">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#3525cd] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-gray-900 pt-0.5">
                  {item.price}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}