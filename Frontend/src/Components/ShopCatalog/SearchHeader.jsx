import React from 'react';
import { useProductFilterStore } from '../../Store/useProductFilterStore';
import { X } from 'lucide-react';

export default function SearchHeader() {
  const { searchQuery, totalItems, selectedCategories, selectedSizes, selectedColors, clearAllFilters, removeFilter } = useProductFilterStore();

  const hasFilters = selectedCategories.length > 0 || selectedSizes.length > 0 || selectedColors.length > 0;

  return (
    <div className="space-y-4 mb-6 border-b border-gray-100 pb-4">
      {/* Search Query Title & Count */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#3525cd] bg-indigo-50 px-2.5 py-0.5 rounded-full">
            SEARCH QUERY
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight pt-1">
            Search results for <span className="italic font-serif text-[#3525cd]">"{searchQuery}"</span>
          </h1>
        </div>
        <span className="text-xs font-semibold text-gray-500">{totalItems} items located</span>
      </div>

      {/* Applied Filters Tags Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-gray-400 font-medium uppercase tracking-wider text-[10px]">APPLIED FILTERS:</span>
          
          {selectedCategories.map((cat) => (
            <span key={cat} className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md font-medium">
              Category: {cat}
              <button onClick={() => removeFilter('category', cat)} className="hover:text-red-500 cursor-pointer">
                <X size={12} />
              </button>
            </span>
          ))}

          {selectedColors.map((col) => (
            <span key={col} className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md font-medium">
              Color: {col}
              <button onClick={() => removeFilter('color', col)} className="hover:text-red-500 cursor-pointer">
                <X size={12} />
              </button>
            </span>
          ))}

          {selectedSizes.map((sz) => (
            <span key={sz} className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md font-medium">
              Size: {sz}
              <button onClick={() => removeFilter('size', sz)} className="hover:text-red-500 cursor-pointer">
                <X size={12} />
              </button>
            </span>
          ))}
        </div>

        {hasFilters && (
          <button 
            onClick={clearAllFilters}
            className="text-[#3525cd] font-semibold hover:underline cursor-pointer"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
}