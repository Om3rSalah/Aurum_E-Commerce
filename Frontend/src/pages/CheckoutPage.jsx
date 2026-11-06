import React from 'react';
import CheckoutStepsBar from '../Components/Checkout/CheckoutStepsBar';
import CheckoutForm from '../Components/Checkout/CheckoutForm';
import CheckoutOrderSummary from '../Components/Checkout/CheckoutOrderSummary';
import CheckoutSupport from '../Components/Checkout/CheckoutSupport';

export default function CheckoutPage() {
  // بيانات المنتجات المصغرة في ملخص الدفع
  const checkoutItems = [
    {
      id: 1,
      title: 'Premium Casual Shirt',
      color: 'Navy Blue',
      size: 'M',
      price: 49.99,
      note: '29% OFF applied',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Heritage Denim Jacket',
      color: 'Vintage Blue',
      size: 'L',
      price: 79.99,
      note: 'Pre-washed cotton',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Slim Fit Luxe Jeans',
      color: 'Obsidian Black',
      size: '32W 32L',
      price: 59.99,
      note: 'Organic stretch twill',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=400&auto=format&fit=crop',
    }
  ];

  const subtotal = 189.97;
  const shipping = 0; // Free
  const tax = 15.20;
  const total = 205.17;

  return (
    <div className="bg-gray-50/80 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* شريط الخطوات العلوي */}
        <CheckoutStepsBar />

        {/* التخطيط الرئيسي لصفحة الدفع (شبكة من عمودين) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* قسم إدخال بيانات الشحن والدفع (يأخذ 7 أعمدة) */}
          <div className="lg:col-span-7">
            <CheckoutForm />
          </div>

          {/* قسم ملخص الطلب وأزرار الإتمام (يأخذ 5 أعمدة) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-20">
            <CheckoutOrderSummary 
              items={checkoutItems}
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />
            {/* <CheckoutSupport /> */}
          </div>

        </div>

      </div>
    </div>
  );
}