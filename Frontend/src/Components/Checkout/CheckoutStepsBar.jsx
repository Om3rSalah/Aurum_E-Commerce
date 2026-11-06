import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CheckoutStepsBar() {
  return (
    <div className="border-b border-gray-200 pb-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link to="/cart" className="text-xs font-bold text-[#3525cd] flex items-center gap-1.5 hover:underline">
        <ArrowLeft size={14} /> Return to Cart
      </Link>

      {/* الخطوات */}
      <div className="flex items-center gap-3 text-xs font-semibold text-gray-400">
        <span className="text-gray-900 flex items-center gap-1">✓ Cart</span>
        <span>—</span>
        <span className="text-[#3525cd] font-bold flex items-center gap-1 bg-indigo-50 px-3 py-1 rounded-full">
          2 Shipping & Payment
        </span>
        <span>—</span>
        <span>3 Confirmation</span>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl">
        <ShieldCheck size={16} />
        <span>256-bit Secure</span>
      </div>
    </div>
  );
}