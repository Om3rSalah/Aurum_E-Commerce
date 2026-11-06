import React, { useState } from 'react';
import CartEmptyState from '../Components/Cart/CartEmptyState';
import CartFreeShippingBar from '../Components/Cart/CartFreeShippingBar';
import CartItemList from '../Components/Cart/CartItemList';
import OrderSummary from '../Components/Cart/OrderSummary';
import RelatedProducts from '../Components/ProductDetails/RelatedProducts';
import { ArrowLeft, ShieldCheck, RotateCcw, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  // حالة وهمية لتجربة السلة فارغة أو مليئة
  const [isEmpty, setIsEmpty] = useState(false);

  // داتا المنتجات في السلة
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Premium Casual Shirt',
      category: 'TOPS & ESSENTIALS',
      price: 49.99,
      oldPrice: 69.99,
      badge: 'NEW',
      color: 'Navy Blue',
      size: 'M',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Denim Jacket',
      category: 'OUTERWEAR',
      price: 79.99,
      oldPrice: null,
      badge: null,
      color: 'Vintage Indigo',
      size: 'L',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Slim Fit Stretch Jeans',
      category: 'PANTS & DENIM',
      price: 59.99,
      oldPrice: null,
      badge: null,
      color: 'Washed Black',
      size: '32',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop',
    }
  ]);

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    if (cartItems.length <= 1) setIsEmpty(true);
  };

  // حساب المجاميع
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal >= 205 ? 0 : 15.01;
  const tax = 15.20;
  const total = subtotal + (shipping === 0 ? 0 : shipping) + tax;

  return (
    <div className="bg-gray-50/80 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        
        
        {/* زر معاينة الحالة الفراغية الموجود في الصورة */}
        <div className="flex justify-between items-center">
            {/* Breadcrumb Navigation & Filter Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 mt-1 text-xs text-gray-500 gap-2">
                    {/* Breadcrumb Path */}
                    <div className="flex items-center gap-1.5 font-medium">
                      <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
                      <span>/</span>
                      <Link to="/shop" className="hover:text-gray-900 transition-colors">Shop</Link>
                      <span>/</span>
                      <span className="text-gray-900 font-semibold">Search-For-Item</span>
                    </div>
            
                  </div>
          <button
            onClick={() => setIsEmpty(!isEmpty)}
            className="text-xs font-semibold bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-xs text-gray-600 hover:text-[#3525cd] transition-colors cursor-pointer"
          >
            👁️ Preview {isEmpty ? 'Filled Cart State' : 'Empty State'}
          </button>
        </div>

        {/* عرض السلة الفارغة أو المليئة بناءً على الحالة */}
        {isEmpty || cartItems.length === 0 ? (
          <CartEmptyState onToggleState={() => setIsEmpty(false)} />
        ) : (
          <div className="space-y-8">
            
            {/* شريط الشحن التقدمي */}
            <CartFreeShippingBar />

            {/* تخطيط الصفحة الرئيسي (الجدول وملخص الطلب) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* جدول المنتجات (يأخذ 8 أعمدة) */}
              <div className="lg:col-span-8 space-y-6">
                <CartItemList 
                  items={cartItems} 
                  onUpdateQuantity={handleUpdateQuantity} 
                  onRemoveItem={handleRemoveItem} 
                />

                {/* أسفل الجدول (Continue Shopping + كود الخصم + الشارات) */}
                <div className="flex flex-col bg-white  py-4 px-6 rounded-xl sm:flex-row items-center justify-between gap-4 ">
                  <Link to="/shop" className="text-xs font-bold text-[#3525cd] flex items-center gap-1.5 hover:underline">
                    <ArrowLeft size={14} /> Continue Shopping
                  </Link>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <input 
                      type="text" 
                      placeholder="Enter discount code" 
                      className="bg-indigo-50  rounded-md px-4 py-2.5 text-sm w-70 outline-none focus:border-[#3525cd]"
                    />
                    <button className="bg-slate-300/70   duration-300 hover:bg-indigo-600 hover:text-white text-gray-900 text-xs font-semibold px-4 py-2.5 rounded-md transition-all cursor-pointer">
                      Apply Code
                    </button>
                  </div>
                </div>

                {/* شارات الثقة الثلاثية */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <Truck size={20} className="text-[#3525cd] shrink-0" />
                    <span className="text-xs text-gray-600 font-medium leading-tight">Complimentary Shipping On orders over $75 with tracking</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <RotateCcw size={20} className="text-[#3525cd] shrink-0" />
                    <span className="text-xs text-gray-600 font-medium leading-tight">30-Day Hassle-Free Prepaid return shipping label</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <ShieldCheck size={20} className="text-[#3525cd] shrink-0" />
                    <span className="text-xs text-gray-600 font-medium leading-tight">Secure Checkout 256-bit SSL encrypted vault</span>
                  </div>
                </div>

              </div>

              {/* ملخص الطلب Order Summary (يأخذ 4 أعمدة) */}
              <div className="lg:col-span-4 lg:sticky lg:top-6">
                <OrderSummary 
                  subtotal={subtotal} 
                  shipping={shipping} 
                  tax={tax} 
                  total={total} 
                />
              </div>

            </div>

          </div>
        )}

        {/* قسم المنتجات المقترحة في الأسفل (Complete Your Ensemble) */}
        <div className="pt-8">
          <RelatedProducts />
        </div>

      </div>
    </div>
  );
}