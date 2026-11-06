import React from 'react';
import { Trash2 } from 'lucide-react';

export default function CartItemList({ items, onUpdateQuantity, onRemoveItem }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100  overflow-hidden">
      
      {/* رأس الجدول */}
      <div className="grid grid-cols-12 bg-indigo-50/70 border-b border-gray-100 px-6 py-3 text-[12px] font-semibold text-gray-900 uppercase ">
        <div className="col-span-6">Product Details</div>
        <div className="col-span-2 text-center">Unit Price</div>
        <div className="col-span-2 text-center">Quantity</div>
        <div className="col-span-2 text-right">Subtotal</div>
      </div>

      {/* قائمة المنتجات */}
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.id} className="grid grid-cols-12 items-center px-6 py-4 gap-4">
            
            {/* تفاصيل المنتج والصورة */}
            <div className="col-span-6 flex items-center gap-4">
              <div className="w-20 h-24 bg-stone-100 rounded-xl overflow-hidden shrink-0 relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                {item.badge && (
                  <span className="absolute top-1.5 left-1.5 bg-[#3525cd] text-white text-[8px] font-bold uppercase px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase  text-gray-600">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-gray-900">{item.title}</h3>
                <div className="flex items-center gap-3 text-[11px] text-gray-500">
                  <span>Color: <strong className="text-gray-700">{item.color}</strong></span>
                  <span>•</span>
                  <span>Size: <strong className="text-gray-700">{item.size}</strong></span>
                </div>
              </div>
            </div>

            {/* سعر الوحدة */}
            <div className="col-span-2 text-center text-base font-semibold text-gray-900">
              ${item.price}
              {item.oldPrice && <span className="block text-[10px] text-gray-400 line-through">${item.oldPrice}</span>}
            </div>

            {/* عداد الكمية */}
            <div className="col-span-2 flex justify-center">
              <div className="flex items-center border-2 border-indigo-50 rounded-lg bg-indigo-50 overflow-hidden">
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="px-2.5 py-1 text-gray-600 hover:bg-white text-sm font-bold"
                >
                  -
                </button>
                <span className="px-3 text-sm font-bold text-gray-900">{item.quantity}</span>
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="px-2.5 py-1 text-gray-600 hover:bg-white text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* المجموع الفرعي وحذف المنتج */}
            <div className="col-span-2 flex items-center justify-end gap-4">
              <span className="text-sm font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
              <button 
                onClick={() => onRemoveItem(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}