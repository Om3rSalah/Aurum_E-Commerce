import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ArrowRight, ShoppingBag } from 'lucide-react';

export default function NewArrivals() {
  // Wishlist state to toggle favorite status for product items
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Quick Add click handler
  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    // Logic for quick adding product to cart
    console.log('Quick added product:', product);
  };

  // New Arrivals products data array matching the design images
  const products = [
    {
      id: 1,
      tag: 'Relaxed Fit',
      tagColor: 'bg-white/80 text-gray-800 backdrop-blur-sm',
      category: 'COTTON ESSENTIALS',
      title: 'Oversized T-Shirt',
      price: '$24.99',
      originalPrice: '$34.00',
      rating: '4.9',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlElte-_oOTsw9v51ni54HK09EXuQox09pOvzdUjaToLJ-E9pFQqd3spkl3frMxAeqFbrOuQfm1RTM_nOin_bqyYKzE8MvtVDDzYfb5Vrd5927reUxW7V-xTl7tnQviRyV1uB8U85pExPiwV7P4VJ_Ne1r8522pnp4hRiiMvP3EGWVfgHeAQONRIC6h2wY3MvWqTd87X-KeRi8q4hs8WZzc8p6F0sb6rv7YOHyjnxdLWD6z9TCpwRe',
    },
    {
      id: 2,
      tag: 'Artisan Edition',
      tagColor: 'bg-[#3525cd] text-white font-semibold',
      category: 'ETHNIC SARTORIAL',
      title: 'Floral Printed Kurti',
      price: '$36.99',
      originalPrice: '$48.00',
      rating: '4.7',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfbkAtek5BfEAlJCayzzPC8nhxfd0ZnsoKbCmm_fHtEdFgRKCimTBGitxQRdNzUSa3DKZmbPcmJoNpA23Fe6-NZfYz4aNUVx7Z3Z0Y9KwMQ7t6s8xtKQ_JBHoVZeLGL-7jBwk4QVAG-CGht1hDOaSNscIP70Xu10SdbG07hC8J1TwjegofgGxkpSNUVdTc7sSYMbs92oVbILhNDUrTqsgRY1Pe8Lzjk2mOz6mjtwoqCYgJC4LZlzW1',
    },
    {
      id: 3,
      tag: 'Heavy 14oz',
      tagColor: 'bg-white/80 text-gray-800 backdrop-blur-sm',
      category: 'DENIM & OUTERWEAR',
      title: 'Washed Denim Trucker',
      price: '$79.99',
      originalPrice: '$99.00',
      rating: '5.0',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdyFnf-BB7GCIWbs1A2Kw7S1XUUL6zc0KaoMpqglbT9tVdEZN-2h-kYV0-1qB4ORAfwKWXVKcP-0Ao5mzXEZxz55AD7jX44Qx4NyJOC1m0XbrOJ4aEjZfOoUbzzdibHlH5GqTI3rMT2YckwA6Kl5889VWojwnEiFNPZjNbFWy2yn-TDvzxtJwmUl-EWvNVdLSb4gh-cXMOg_rAjkdLyz-I-Q1gkmu8N5rxyYOda8_SzjMoIuZlhQWf',
    },
    {
      id: 4,
      tag: 'New',
      tagColor: 'bg-[#3525cd] text-white font-semibold',
      category: 'BREEZY WEAVES',
      title: 'Sage Slub Linen Shirt',
      price: '$45.99',
      originalPrice: '$58.00',
      rating: '4.8',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw-B2VcSnC1Y69Pwve8U4lbH_-PewtljloAGfTEXOe4z6xSlUTZiA6V6Lnde3bRXXvgSrC74h0ei-52Ol7Lk01irBuh6tMuR9bl-pMykrCkdqXG7_C8g-PQDSKPBtJSjpYrq-9skvGyCf-jbx--gzzw5xgd8fGYabNtB0obSoI9TNfdKTFgj3ebk648r2g5GInE7upa4ssbfyrVA9UVOTUV7RUVFyi8nGv2WCahC523n__IchBdxjs',
    },
    {
      id: 5,
      tag: 'Stretch Twill',
      tagColor: 'bg-white/80 text-gray-800 backdrop-blur-sm',
      category: 'BOTTOMS & TROUSERS',
      title: 'Tapered Chino Pants',
      price: '$49.99',
      originalPrice: '$65.00',
      rating: '4.6',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsS06Z06iaNSa2YbhrsNbDfPLnQbkXtNnzZJa0veIbxpZK7rE2vKFNDJ_ms7EGSAbhKrLJ40f437bpQSzpvseRk9udgu8t7quXdj06vuzDdGovwSFM3uUx9W2A03ujsRRpsMXgqEgRgVQ8Cnf9zdbkgSU9fUr5ABeE_e2sVE79i87K8TscZFkJpZk6uuZIVQNbs0QvQBSLh8qRh7ygeLUuHquRNVYd6PmB5GAJyvVfIHYZDrVWlERA',
    },
    {
      id: 6,
      tag: 'Mercerized',
      tagColor: 'bg-indigo-100 text-[#3525cd] font-semibold',
      category: 'EVERYDAY SMART',
      title: 'Casual Piqué Polo',
      price: '$29.99',
      originalPrice: '$40.00',
      rating: '4.9',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmeA7PbP-6Hf3-KH2J-g62ZTHNn6RguErcI1mk3AeXk33aryjLuRww5kg-c9XfMALrVqjCV2VLjl_A9uWdCw8h6N455-0PCcA7BgukPIigLNapL8vUqsRL76XGYYU9EbNPs2YPUxWmoxWSL36BTc6x12FCE7C6jOXByY7e6bSJEGof7h_R5wv_VI50_PrV0WSoEsN4PNjlK3XGdK_gXZ3pBi4cq_c8SZeEgZ267e8dULFggKEsZ8rT',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
      
      {/* Header: Title, Subtitle, and View All Link */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#3525cd]">
            SEASONAL ROTATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-0.5">
            New Arrivals
          </h2>
        </div>

        <Link
          to="/shop/new-arrivals"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#3525cd] hover:text-[#2b1da7] transition-colors group"
        >
          <span>View All 128 Items</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Product Cards Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Image Container with Badges & Quick Add */}
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
              {/* Product Badge Tag */}
              <span className={`absolute top-4 left-4 z-10 text-[11px] px-3 py-1 rounded-md shadow-sm ${product.tagColor}`}>
                {product.tag}
              </span>

              {/* Wishlist Heart Icon Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product.id);
                }}
                aria-label="Add to wishlist"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors cursor-pointer shadow-sm"
              >
                <Heart
                  size={16}
                  className={wishlist[product.id] ? 'fill-red-500 text-red-500' : ''}
                />
              </button>

              {/* Main Product Image with Zoom Hover Effect */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Quick Add Button Container */}
              <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="w-full bg-[#3525cd] hover:bg-[#2b1da7] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <ShoppingBag size={14} />
                  <span>Quick Add</span>
                </button>
              </div>
            </div>

            {/* Product Meta & Pricing Content */}
            <div className="p-5 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider mb-0 text-gray-500 block">
                {product.category}
              </span>

              <h3 className="text-[20px] font-semibold text-gray-900 tracking-tight group-hover:text-[#3525cd] transition-colors line-clamp-1">
                {product.title}
              </h3>

              <div className="flex items-center justify-between">
                {/* Price Display */}
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <span className="text-xs text-gray-500 font-medium relative">
                    {product.originalPrice}
                    <div className="h-[1px] w-full bg-[#777587] absolute top-1/2 left-0"></div>
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                  <Star size={14} className="fill-[#3525cd] text-[#3525cd]" />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}