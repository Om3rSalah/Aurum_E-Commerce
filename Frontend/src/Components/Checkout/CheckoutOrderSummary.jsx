import React from 'react';
import { ShieldCheck, RotateCcw } from 'lucide-react';
import { BiCheckShield } from "react-icons/bi";
import { MdOutlineVerified } from "react-icons/md";
import { CgRedo } from "react-icons/cg";


export default function CheckoutOrderSummary({ items, subtotal, shipping, tax, total }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6  space-y-6">
      <div className="flex justify-between items-center border-b border-gray-100 pb-3">
        <h3 className="font-bold text-gray-900 text-base">Order Summary </h3>
        <button className="text-xs text-[#3525cd] font-semibold hover:underline">Edit Bag</button>
      </div>

      {/* قائمة المنتجات المصغرة */}
      <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.title} className="w-15 h-18 object-cover rounded-lg bg-stone-100 shrink-0" />
              <div>
                <h4 className="font-semibold text-base text-gray-900 leading-tight">{item.title}</h4>
                <span className="text-[12px] text-gray-500 block">Color: {item.color} • Size: {item.size}</span>
                {item.note && <span className="text-[12px] text-[#3525cd] font-semibold block">{item.note}</span>}
              </div>
            </div>
            <span className="font-semibold text-base text-gray-900 shrink-0">${item.price}</span>
          </div>
        ))}
      </div>

      {/* كود الخصم المطبق */}
      <div className="bg-indigo-50/60 p-3 rounded-xl flex items-center justify-between text-xs">
        <span className="font-bold text-[#3525cd]">AURUM-SPRING</span>
        <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">Applied</span>
      </div>

      {/* الحسابات */}
      <div className="space-y-2 text-xs border-t border-gray-100 pt-4">
        <div className="flex justify-between text-sm font-normal text-gray-700">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-700">
          <span>Shipping</span>
          <span className="font-bold text-indigo-700">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-700">
          <span>Estimated Sales Tax (8.0%)</span>
          <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* الإجمالي */}
      <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
        <div>
          <span className="text-xl font-bold text-gray-900  block">Total Due</span>
          <span className="text-[14px] text-gray-700">Including taxes & courier transit</span>
        </div>
        <span className="text-4xl font-bold text-[#3525cd]">${total.toFixed(2)}</span>
      </div>

      {/* زر إتمام الطلب */}
      <button className="w-full bg-[#3525cd] hover:bg-[#2a1cb2] text-white text-base font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-100 cursor-pointer">
        <BiCheckShield size={24}  />
        <span>Place Order (${total.toFixed(2)})</span>
      </button>

      <p className="text-[10px] text-center text-gray-400 leading-tight">
        By confirming, you agree to AURUM's <a href="#terms" className="underline">Terms of Sale</a> & <a href="#return" className="underline">Return Policy</a>.
      </p>

      {/* ميزات الأمان التحتية */}
      <div className="bg-indigo-200/30  rounded-2xl p-4 space-y-3.5">
        <div className="flex items-start gap-3">
          <div className=" rounded-lg text-indigo-700  flex items-center justify-center shrink-0 mt-0.5">
            <MdOutlineVerified size={26} />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-900 block leading-tight">256-Bit SSL Encrypted Checkout</span>
            <span className="text-[11px] text-gray-500 leading-relaxed block pt-0.5">Bank-level transactional protocol ensures your credentials remain private.</span>
          </div>
        </div>

        <div className="flex items-start gap-3 pt-2 border-t border-indigo-100/40">
          <div className=" rounded-lg text-indigo-700  flex items-center justify-center shrink-0 mt-0.5">
            <CgRedo size={30} />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-900 block leading-tight">30-Day Effortless Guarantee</span>
            <span className="text-[11px] text-gray-500 leading-relaxed block pt-0.5">Complimentary pickup returns with 100% money-back assurance.</span>
          </div>
        </div>
      </div>

    </div>
  );
}