import React from 'react';

export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-pulse">
      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="h-3.5 bg-gray-200 rounded w-12"></div>
        <div className="h-3.5 bg-gray-200 rounded w-2"></div>
        <div className="h-3.5 bg-gray-200 rounded w-12"></div>
        <div className="h-3.5 bg-gray-200 rounded w-2"></div>
        <div className="h-3.5 bg-gray-200 rounded w-48"></div>
      </div>

      {/* Main Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Section: Images (7 Columns on Desktop) */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails Column */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:w-20 shrink-0">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="w-20 h-24 bg-gray-200 rounded-lg shrink-0"
              ></div>
            ))}
          </div>

          {/* Main 2-Split Images */}
          <div className="flex-1 grid grid-cols-2 gap-1 rounded-xl overflow-hidden bg-gray-100 h-[450px] md:h-[580px]">
        
          </div>
        </div>

        {/* Right Section: Product Info (5 Columns on Desktop) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          
          {/* Category Badge & Stock Status */}
          <div className="flex items-center justify-between">
            <div className="h-5 bg-gray-200 rounded-full w-28"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>

          {/* Product Title (2 Lines) */}
          <div className="space-y-2.5">
            <div className="h-7 bg-gray-200 rounded w-11/12"></div>
            <div className="h-7 bg-gray-200 rounded w-2/3"></div>
          </div>

          {/* Rating & Reviews */}
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-28"></div>
          </div>

          {/* Price */}
          <div className="h-8 bg-gray-200 rounded w-24 pt-1"></div>

          <hr className="border-gray-100" />

          {/* Color Selector */}
          <div className="space-y-2.5">
            <div className="h-4 bg-gray-200 rounded w-28"></div>
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          </div>

          {/* Size Selector */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="grid grid-cols-5 gap-2.5">
              {[1, 2, 3, 4, 5].map((size) => (
                <div key={size} className="h-11 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex gap-3 pt-2">
            <div className="w-28 h-12 bg-gray-200 rounded-lg"></div>
            <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div>
          </div>

          {/* Buy Now Button */}
          <div className="w-full h-12 bg-gray-200 rounded-lg"></div>

          {/* 3 Trust Badges (Shipping, Returns, Secure) */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[1, 2, 3].map((badge) => (
              <div
                key={badge}
                className="h-20 bg-gray-100 rounded-xl p-3 flex flex-col items-center justify-center space-y-2"
              >
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                <div className="h-2.5 bg-gray-200 rounded w-16"></div>
                <div className="h-2.5 bg-gray-200 rounded w-12"></div>
              </div>
            ))}
          </div>

          {/* Product Description Accordion */}
          <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="h-4 bg-gray-200 rounded w-36"></div>
            <div className="h-4 bg-gray-200 rounded w-4"></div>
          </div>

        </div>
      </div>
    </div>
  );
}