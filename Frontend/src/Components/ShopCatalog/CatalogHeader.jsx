import React from 'react';
import { useProductFilterStore } from '../../Store/useProductFilterStore';
import { LayoutGrid, LayoutList } from 'lucide-react';

export default function CatalogHeader() {
  const { sortBy, setSortBy, viewMode, setViewMode } = useProductFilterStore();

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
      <span className="text-xs font-medium text-gray-500">
        Showing <span className="font-bold text-gray-900">1–6</span> of <span className="font-bold text-gray-900">18</span> products
      </span>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-400 font-medium uppercase tracking-wider">SORT:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-indigo-50/50 border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 outline-none focus:border-[#3525cd] cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>

        {/* View Mode Grid/List Icons */}
        <div className="flex items-center gap-1 border-l border-gray-200 pl-4">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-[#3525cd] text-white' : 'text-gray-400 hover:text-gray-700 bg-gray-50'}`}
          >
            <LayoutGrid size={16} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-colors cursor-pointer ${viewMode === 'list' ? 'bg-[#3525cd] text-white' : 'text-gray-400 hover:text-gray-700 bg-gray-50'}`}
          >
            <LayoutList size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}