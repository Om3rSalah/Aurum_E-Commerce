import React from 'react';
import { BiSolidCheckShield } from "react-icons/bi";
import { MdLock } from "react-icons/md";

export default function OrderSummary({ subtotal, shipping, tax, total }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6  space-y-6">
      <h3 className="font-bold text-gray-900 text-base  pb-3">
        Order Summary
      </h3>

      {/* تفاصيل الأسعار */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal (3 items)</span>
          <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Estimated Shipping</span>
          <span className="font-bold text-emerald-600">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Estimated Sales Tax</span>
          <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* المجموع الكلي */}
      <div className='bg-indigo-100/20 px-3 py-2 rounded-xl '>
        <div className=" pt-4 flex justify-between items-center">
        <span className="text-sm font-bold text-gray-900 ">Total Amount</span>
        <span className="text-xl font-bold text-[#3525cd]">${total.toFixed(2)}</span>
      </div>
      <p className="text-[13px] font-semibold text-gray-600 leading-tight">Includes VAT and all local handling fees</p>

      </div>
      {/* أزرار الدفع */}
      <div className="space-y-2 pt-2">
        <button className="w-full bg-[#3525cd] hover:bg-[#2a1cb2] text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-md shadow-indigo-100 cursor-pointer">
          Proceed to Checkout
        </button>
        <button className="w-full bg-indigo-50 hover:bg-indigo-100 text-[#3525cd] text-xs font-bold py-3.5 rounded-xl transition-all cursor-pointer">
          Instant Apple Pay
        </button>
      </div>

      {/* شعارات الأمان */}
      <div className="pt-2 text-center space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">GUARANTEED SAFE CHECKOUT</span>
        <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-600 bg-gray-50 py-2 rounded-lg">
          <span>VISA</span> • <span>MASTERCARD</span> • <span>AMEX</span> • <span>PAYPAL</span> • <span>APPLE PAY</span>
        </div>
      </div>

      {/* علبة هدايا تكميلية */}
      <div className="border border-indigo-100 bg-indigo-50/30 p-3 rounded-xl flex items-start gap-3">
        <input type="checkbox" className="mt-0.5 rounded border-gray-300 text-[#3525cd] accent-[#3525cd]" />
        <div className="text-[11px] leading-tight">
          <span className="font-bold text-gray-900 block">Complementary Gift Packaging</span>
          <span className="text-gray-500">Include an FSC-certified embossed AURUM signature box with personalized calligraphy note.</span>
        </div>
      </div>

    </div>
  );
}