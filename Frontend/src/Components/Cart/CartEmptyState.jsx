import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartEmptyState({ onToggleState }) {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl  p-10 sm:p-16 text-center shadow-sm space-y-6 my-8">
      {/* أيقونة الحقيبة */}
      <div className="w-20 h-20 bg-indigo-50 text-[#3525cd] rounded-full flex items-center justify-center mx-auto shadow-inner">
        <ShoppingBag size={36} />
      </div>

      {/* النصوص */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Your Bag is Currently Empty
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          Looks like you haven't added any luxury pieces to your cart yet. Explore our latest arrivals or seasonal drops to curate your wardrobe.
        </p>
      </div>

      {/* الأزرار */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Link
          to="/shop"
          className="w-full sm:w-auto bg-[#3525cd] hover:bg-[#2a1cb2] text-white text-xs font-bold py-3.5 px-8 rounded-xl transition-all shadow-md shadow-indigo-100"
        >
          Start Shopping Now
        </Link>
      </div>

      {/* زر تجريبي للتبديل بين الحالتين */}
      <div className="">
        <button
          onClick={onToggleState}
          className="text-[11px] font-semibold text-gray-400 hover:text-[#3525cd] underline cursor-pointer"
        >
          ⇄ Toggle to Filled Cart State
        </button>
      </div>
    </div>
  );
}