import React, { useState } from 'react';

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryMethod, setDeliveryMethod] = useState('standard');

  return (
    <div className="space-y-6">
      
      {/* Express Checkout */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8  space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">EXPRESS CHECKOUT</span>
        <div className="grid grid-cols-3 gap-3">
          {/* Apple Pay Button */}
          <button className="bg-black text-white py-3 rounded-md text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.1-1.9-14.24-6.08-3.59-2.94-7.46-7.7-11.62-14.28-6.1-9.75-10.93-20.35-14.51-31.81-3.58-11.46-5.37-22.38-5.37-32.75 0-14.15 3.65-25.5 10.95-34.05 7.3-8.55 16.36-12.92 27.18-13.12 4.47 0 9.53 1.16 15.18 3.48 5.65 2.32 9.4 3.51 11.25 3.51 1.63 0 5.66-1.29 16.08-3.87 10.42-2.58 19.31-3.63 26.68-3.15 16.48 1.09 29.35 7.47 38.62 19.14-14.15 8.65-21.08 20.44-20.78 35.39.27 12.18 5.14 22.03 14.61 29.56 4.35 3.55 9.49 6.03 15.42 7.44-2.88 8.69-6.38 17.27-10.5 25.74zM119.22 31.96c0-7.74 2.76-14.98 8.28-21.72 5.52-6.74 12.39-10.54 20.61-11.24.11 1.09.16 2.01.16 2.76 0 7.85-2.9 15.35-8.71 22.51-5.81 7.17-12.87 11.05-21.19 11.63-.11-.87-.15-1.74-.15-2.94z"/>
            </svg>
            Pay
          </button>

          <button className="bg-gray-100 text-gray-900 py-3 rounded-md text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer">
            G Pay
          </button>
          
          <button className="bg-blue-600 text-white py-3 rounded-md text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors cursor-pointer">
            P PayPal
          </button>
        </div>
        <div className="relative flex items-center justify-center pt-2">
          <div className="border-t border-gray-100 w-full"></div>
          <span className="bg-white px-3 text-[10px] uppercase font-bold text-gray-400 absolute">
            OR CONTINUE WITH SHIPPING ADDRESS
          </span>
        </div>
      </div>

      {/* 1. Contact Information */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8  space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-900 text-lg">1. Contact Information</h3>
          <span className="text-xs text-gray-500">Already have an account? <a href="#login" className="text-[#3525cd] font-semibold underline">Log in</a></span>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-[11px] font-bold text-gray-700 block mb-1">Email address</label>
            <input 
              type="email" 
              defaultValue="alexandra.vance@studio-nordic.com" 
              className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-gray-700 block mb-1">Phone Number (for delivery updates)</label>
            <input 
              type="tel" 
              defaultValue="+1 (555) 234-8901" 
              className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
            />
          </div>
          <label className="flex items-center gap-2 pt-1 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded w-4 h-4 border-gray-300 text-[#3525cd] accent-[#3525cd]" />
            <span className="text-xs text-gray-600">Keep me updated on exclusive offers & private sales</span>
          </label>
        </div>
      </div>

      {/* 2. Shipping Destination */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8  space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">2. Shipping Destination</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[11px] font-bold text-gray-700 block mb-1">First name</label>
            <input 
              type="text" 
              defaultValue="Alexandra" 
              className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-gray-700 block mb-1">Last name</label>
            <input 
              type="text" 
              defaultValue="Vance" 
              className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
            />
          </div>
        </div>
        <div>
          <label className="text-[11px] font-bold text-gray-700 block mb-1">Street address</label>
          <input 
            type="text" 
            defaultValue="742 Evergreen Terrace, Penthouse B" 
            className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-[11px] font-bold text-gray-700 block mb-1">City</label>
            <input 
              type="text" 
              defaultValue="Portland" 
              className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-gray-700 block mb-1">State / Province</label>
            <select className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all">
              <option>OR (Oregon)</option>
            </select>
          </div>
          <div>
            <label className="text-[11px] font-bold text-gray-700 block mb-1">Postal code</label>
            <input 
              type="text" 
              defaultValue="97201" 
              className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
            />
          </div>
        </div>
      </div>

      {/* 3. Delivery Method */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8  space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">3. Delivery Method</h3>
        <div className="space-y-3">
          <label onClick={() => setDeliveryMethod('standard')} className={`flex items-center justify-between bg-indigo-300/20 p-4 rounded-xl border-2 cursor-pointer transition-all ${deliveryMethod === 'standard' ? 'border-[#3525cd] ' : 'border-gray-200'}`}>
            <div className="flex items-center gap-3">
              <input type="radio" checked={deliveryMethod === 'standard'} onChange={() => {}} className="accent-[#3525cd] w-5 h-5" />
              <div>
                <span className="text-md tracking-tight  font-semibold text-gray-900 block">Standard Ground Delivery</span>
                <span className="text-[14px] text-gray-500">Estimated arrival in 3–5 business days</span>
              </div>
            </div>
            <span className="text-xl font-bold text-indigo-700 ">Free</span>
          </label>

          <label onClick={() => setDeliveryMethod('priority')} className={`flex items-center justify-between p-4 rounded-xl bg-indigo-300/20 border-2 cursor-pointer transition-all ${deliveryMethod === 'priority' ? 'border-[#3525cd] ' : 'border-gray-200'}`}>
            <div className="flex items-center gap-3">
              <input type="radio" checked={deliveryMethod === 'priority'} onChange={() => {}} className="accent-[#3525cd] w-5 h-5" />
              <div>
                <span className="text-md tracking-tight font-semibold text-gray-900 block">AURUM Priority Courier <span className="bg-indigo-100 text-[#3525cd] text-[9px] px-1.5 py-0.5 rounded font-bold ml-1">Express</span></span>
                <span className="text-[14px] text-gray-500">Dispatched within 4 hours. 1–2 business days</span>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">$12.00</span>
          </label>
        </div>
      </div>

      {/* 4. Payment Selection */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8  space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-900 text-lg">4. Payment Selection</h3>
          <span className="text-[10px] text-gray-400 font-bold uppercase">VISA • MC • AMEX</span>
        </div>

        <div className="space-y-3">
          {/* Credit Card */}
          <div className="border border-[#3525cd] rounded-xl p-4 bg-indigo-50/20 space-y-3">
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-xs font-bold text-gray-900 cursor-pointer">
                <input type="radio" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="accent-[#3525cd]" />
                Credit / Debit Card
              </label>
              <span className="text-[10px] font-bold text-[#3525cd] bg-indigo-100 px-2 py-0.5 rounded">Recommended</span>
            </div>
            
            <div className="space-y-3 pt-2">
              <div>
                <label className="text-[10px] font-bold text-gray-600 block mb-1">Card number</label>
                <input 
                  type="text" 
                  defaultValue="4552 9012 4432 8921" 
                  className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-gray-600 block mb-1">Expiration date</label>
                  <input 
                    type="text" 
                    defaultValue="09/28" 
                    className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-600 block mb-1">Security Code (CVC)</label>
                  <input 
                    type="password" 
                    defaultValue="123" 
                    className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-600 block mb-1">Name on card</label>
                <input 
                  type="text" 
                  defaultValue="ALEXANDRA VANCE" 
                  className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all" 
                />
              </div>
            </div>
          </div>

          {/* COD */}
          <label onClick={() => setPaymentMethod('cod')} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 cursor-pointer">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
              <input type="radio" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="accent-[#3525cd]" />
              Cash on Delivery (COD)
            </div>
            <span className="text-[11px] text-gray-400">Pay upon doorstep receipt</span>
          </label>

          {/* PayPal */}
          <label onClick={() => setPaymentMethod('paypal')} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 cursor-pointer">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
              <input type="radio" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="accent-[#3525cd]" />
              PayPal Balance or Credit
            </div>
            <span className="text-[11px] text-gray-400">Instant redirect</span>
          </label>
        </div>
      </div>

    </div>
  );
}