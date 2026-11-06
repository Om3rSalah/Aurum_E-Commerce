import React from 'react';
import { Truck } from 'lucide-react';

export default function CartFreeShippingBar() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6  space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight ">Your Shopping Cart</h1>
          <span className="text-xs font-semibold bg-indigo-50 text-[#3525cd] px-2.5 py-0.5 rounded-full">
            3 Items
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-gray-700 bg-indigo-50/60 px-4 py-2 rounded-xl">
          <Truck size={16} className="text-[#3525cd]" />
          <span>You are only <strong className="text-[#3525cd]">$15.01</strong> away from <strong>FREE Express Shipping!</strong></span>
        </div>
      </div>

      {/* شريط التقدم (Progress Bar) */}
      <div className="space-y-1">
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="bg-[#3525cd] h-full rounded-full w-[75%] transition-all duration-500"></div>
        </div>
        <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
          <span>Standard Tier ($0)</span>
          <span className='text-indigo-600 font-semibold text-[12px]' >Free Express at $205.00 (Current: $189.97)</span>
          <span>Next Day Courier</span>
        </div>
      </div>
    </div>
  );
}