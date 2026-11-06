import React from 'react';
import SearchHeader from '../Components/ShopCatalog/SearchHeader';
import FilterSidebar from '../Components/ShopCatalog/FilterSidebar';
import CatalogHeader from '../Components/ShopCatalog/CatalogHeader';
import ProductGrid from '../Components/ShopCatalog/ProductGrid';
import { Link} from 'react-router-dom';

export default function ShopCatalogPage() {
  return (
    <div className="bg-gray-50/80 min-h-screen py-6 ">
      <div className="max-w-7xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8 ">

      {/* Breadcrumb Navigation & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 mt-1 text-xs text-gray-500 gap-2">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gray-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Search-For-Item</span>
        </div>

      </div>

        <SearchHeader />

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">

          <div className="lg:col-span-3 lg:sticky lg:top-27">
            <FilterSidebar />
          </div>

   
          <div className="lg:col-span-9">
            <CatalogHeader />
            <ProductGrid />
          </div>

        </div>

      </div>
    </div>
  );
}