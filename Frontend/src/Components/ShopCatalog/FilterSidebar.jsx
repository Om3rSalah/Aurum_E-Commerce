import React from 'react';
import { useProductFilterStore } from "../../Store/useProductFilterStore";
import { SlidersHorizontal } from 'lucide-react';

export default function FilterSidebar() {
  const { 
    selectedCategories, toggleCategory, 
    priceRange, setPriceRange, 
    selectedSizes, toggleSize, 
    selectedColors, toggleColor, 
    clearAllFilters 
  } = useProductFilterStore();

  const categories = [
    { name: 'Shirts & Tunics', count: 12 },
    { name: 'Linen Tops', count: 6 },
    { name: 'Casual Polos', count: 4 },
    { name: 'Oversized Tees', count: 8 },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Olive', bg: 'bg-emerald-800' },
    { name: 'Natural', bg: 'bg-stone-300' },
    { name: 'Black', bg: 'bg-gray-900' },
    { name: 'Navy', bg: 'bg-blue-950' },
    { name: 'Cognac', bg: 'bg-amber-800' },
    { name: 'Slate', bg: 'bg-slate-500' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-6 shadow-sm">
      
      {/* Refine By Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={20} className="text-indigo-700" />
          <h2 className="font-semibold text-gray-900 text-lg">Refine By</h2>
        </div>
        <button onClick={clearAllFilters} className="text-xs text-gray-600 hover:text-gray-700 cursor-pointer">
          Reset
        </button>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm font-semibold text-gray-800 ">
          <span>Categories</span>
          <span>^</span>
        </div>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.name} className="flex items-center justify-between text-xs text-gray-600 cursor-pointer">
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.name)}
                  onChange={() => toggleCategory(cat.name)}
                  className="rounded h-4 w-4 border-gray-300 text-indigo-700 accent-indigo-700 focus:ring-indigo-700"
                />
                <span className="text-sm">
                  {cat.name}
                </span>
              </div>
              <span className="text-gray-600">{cat.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3 border-t border-gray-100 pt-4">
        <div className="flex justify-between items-center text-sm font-semibold text-gray-800 ">
          <span>Price Range</span>
          <span className="text-indigo-700 font-semibold">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
        <input 
          type="range" 
          min="20" 
          max="200" 
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full accent-indigo-700 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 font-medium">
          <span>$20</span>
          <span>$150</span>
        </div>
      </div>

      {/* Size */}
      <div className="space-y-3 border-t border-gray-100 pt-4">
        <div className="flex justify-between items-center text-sm font-semibold text-gray-800  tracking-wider">
          <span >Size</span>
          <span className="text-gray-600 text-[11px] font-medium cursor-pointer hover:underline">Size Guide</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => {
            const isSelected = selectedSizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`py-2 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-indigo-700 text-white border-indigo-700' 
                    : 'bg-indigo-50/50 text-gray-700 border-transparent hover:border-gray-200'
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Palette */}
      <div className="space-y-3 border-t border-gray-100 pt-4">
        <div className="flex justify-between items-center text-xs font-bold text-gray-800 uppercase tracking-wider">
          <span>Color Palette</span>
          <span className="text-gray-400 font-normal text-[11px]">7 colors</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {colors.map((color) => {
            const isSelected = selectedColors.includes(color.name);
            return (
              <button
                key={color.name}
                onClick={() => toggleColor(color.name)}
                className={`w-7 h-7 rounded-full ${color.bg} relative flex items-center justify-center transition-all hover:scale-110 cursor-pointer ${
                  isSelected ? 'ring-2 ring-offset-2 ring-indigo-700' : ''
                }`}
                title={color.name}
              />
            );
          })}
        </div>
      </div>

    </div>
  );
}