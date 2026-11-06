import React from 'react';
import { Link } from 'react-router-dom';
import ProductGallery from '../Components/ProductDetails/ProductGallery';
import ProductInfo from '../Components/ProductDetails/ProductInfo';
import ProductAccordion from '../Components/ProductDetails/ProductAccordion';
import SustainabilityBanner from '../Components/ProductDetails/SustainabilityBanner';
import RelatedProducts from '../Components/ProductDetails/RelatedProducts';

export default function ProductDetails() {
  
  const productData = {
    category: 'AURUM SARTORIAL ESSENTIALS',
    title: 'Premium Casual Shirt',
    stockStatus: 'In Stock',
    rating: 4.8,
    reviewsCount: 128,
    price: 49.99,
    originalPrice: 69.99,
    discount: '29%',
    colors: [
      { name: 'Forest Olive', bg: 'bg-emerald-900' },
      { name: 'Midnight Navy', bg: 'bg-blue-950' },
      { name: 'Charcoal Black', bg: 'bg-gray-900' },
      { name: 'Burgundy Wine', bg: 'bg-rose-900' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    ],
    description: {
      text: 'Designed for effortless versatility, this shirt transitions seamlessly from tailored business-casual settings to weekend outings. Features a structured point collar, curved hem, and clean Scandinavian drape.',
      points: [
        'Semi-relaxed silhouette for dynamic comfort',
        'Breathable micro-weave textured cotton',
        'Single chest patch pocket with reinforced stitching',
      ]
    },
    fabric: '100% Organic Belgian Flax Linen. Machine wash cold with like colors. Line dry in shade to preserve natural fibers and color depth.',
    shipping: 'Complimentary standard shipping on all orders over $75. Express delivery options available at checkout. 30-day hassle-free returns.'
  };

  return (
    <div className="bg-gray-50/80 min-h-screen  pt-6 pb-20 ">
      <div className="max-w-7xl mx-auto space-y-12  px-4 sm:px-6 lg:px-8 ">

        {/* Breadcrumb Navigation & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 mt-1 text-xs text-gray-500 gap-2">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gray-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{productData.title}</span>
        </div>

      </div>
        
        {/* قسم تفاصيل المنتج العلوي (الصور + معلومات الشراء) */}
        <div className=" rounded-3xl  grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* معرض الصور (يأخذ 7 أعمدة) */}
          <div className="lg:col-span-7 h-full ">
            <ProductGallery images={productData.images} />
          </div>

          {/* تفاصيل الشراء والخيارات (يأخذ 5 أعمدة) */}
          <div className="lg:col-span-5 space-y-6">
            <ProductInfo product={productData} />
            <ProductAccordion 
              description={productData.description} 
              fabric={productData.fabric} 
              shipping={productData.shipping} 
            />
          </div>

        </div>

        {/* بانر الاستدامة */}
        <SustainabilityBanner />

        {/* قسم المنتجات المقترحة (You May Also Like) */}
        <div className="space-y-6 pt-4">
          <RelatedProducts />
        </div>

      </div>
    </div>
  );
}