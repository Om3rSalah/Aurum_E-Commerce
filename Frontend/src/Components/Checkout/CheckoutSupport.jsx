import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function CheckoutSupport() {
  return (
    <div className="bg-indigo-50/50 rounded-xl border border-indigo-100 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#3525cd] text-white flex items-center justify-center shrink-0">
          <MessageSquare size={14} />
        </div>
        <div className="text-xs">
          <span className="font-bold text-gray-900 block">Need help with checkout?</span>
          <span className="text-gray-500">Our concierge is live 24/7</span>
        </div>
      </div>
      <button className="text-xs font-bold text-[#3525cd] hover:underline cursor-pointer">
        Chat Now
      </button>
    </div>
  );
}