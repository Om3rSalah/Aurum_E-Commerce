import React from 'react';
import ProductCard from './ProductCard';
import { useProductFilterStore } from '../../Store/useProductFilterStore';

export default function ProductGrid() {
  const { viewMode } = useProductFilterStore();

  const products = [
    {
      id: 1,
      title: 'Sage Slub Linen Shirt',
      category: 'Breezy Weaves',
      price: 45.99,
      originalPrice: 58.00,
      rating: 4.9,
      reviews: 48,
      badge: '21% OFF',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop',
      description: 'Masterfully tailored from pure French flax linen. Features mother-of-pearl buttons...'
    },
    {
      id: 2,
      title: 'Relaxed Linen Shirt',
      category: 'Sartorial Essentials',
      price: 45.99,
      originalPrice: 62.00,
      rating: 4.8,
      reviews: 112,
      badge: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop',
      description: 'Pre-washed for cloud-soft tactility with dual chest flap pockets and subtle...'
    },
    {
      id: 3,
      title: 'Casual Polo T-Shirt',
      category: 'Resort Knitwear',
      price: 29.99,
      originalPrice: 39.00,
      rating: 4.7,
      reviews: 36,
      badge: null,
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop',
      description: 'Refined knitted linen-cotton blend with ribbed trims and an open Johnny collar f...'
    },
    {
      id: 4,
      title: 'Classic Chino Pants',
      category: 'Trousers',
      price: 49.99,
      originalPrice: 68.00,
      rating: 4.9,
      reviews: 84,
      badge: 'New In',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop',
      description: 'Tapered leg profile crafted with slight stretch. Pairs seamlessly with relaxed...'
    },
    {
      id: 5,
      title: 'Linen-Lined Denim Jacket',
      category: 'Outerwear',
      price: 79.99,
      originalPrice: 105.00,
      rating: 4.8,
      reviews: 63,
      badge: null,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop',
      description: 'Structured 12oz denim exterior bonded with breathable Belgian linen inner lining...'
    },
    {
      id: 6,
      title: 'Oversized Linen T-Shirt',
      category: 'Tees & Base',
      price: 24.99,
      originalPrice: 34.00,
      rating: 4.6,
      reviews: 95,
      badge: 'Eco Yarn',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop',
      description: 'Boxy relaxed silhouette with raw roll hems and slub weave texture that grows softe...'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Products Grid / List */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex flex-col items-center justify-center space-y-4 pt-6">
        <button className="bg-indigo-50 hover:bg-[#3525cd] text-[#3525cd] hover:text-white px-8 py-3.5 rounded-xl font-bold text-xs transition-all duration-300 shadow-sm cursor-pointer">
          Load More Products (Showing 6 of 18)
        </button>

        {/* Pagination Numbers */}
        <div className="flex items-center gap-1.5 pt-2">
          <button className="w-9 h-9 rounded-lg bg-[#3525cd] text-white text-xs font-bold flex items-center justify-center">1</button>
          <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-bold flex items-center justify-center">2</button>
          <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-bold flex items-center justify-center">3</button>
          <span className="text-gray-400 px-1">...</span>
          <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-bold flex items-center justify-center">&gt;</button>
        </div>
      </div>
    </div>
  );
}