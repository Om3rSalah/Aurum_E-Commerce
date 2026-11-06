import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Breadcrumb Navigation & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-xs text-gray-500 gap-2">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gray-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Ready-To-Wear Collection</span>
        </div>

        {/* Status Tags and Item Count */}
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3525cd]"></span>
            Spring/Summer '25 Active
          </span>
          <span className="text-gray-400">Showing 24 of 128 items</span>
        </div>
      </div>

      {/* Main Hero Banner Card */}
      <div className="relative bg-gradient-to-r from-violet-100 via-indigo-50/30 to-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Content Area (Text & CTA) */}
          <div className="lg:col-span-7 p-8  space-y-6 z-10">
            
            {/* Limited Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-[#3525cd] text-white text-xs font-semibold px-3 py-0.5 rounded-full shadow-sm">
              <Tag size={14} />
              <span>LIMITED MID-SEASON OFFER</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                <span className='block'> Summer Collection </span>
                <span className="text-indigo-700">Up to 40% Off</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed pt-2">
                Airy poplin, washed indigos, and breathable slub linens engineered for balmy metropolitan days and breezy shorelines.
              </p>
            </div>

            {/* CTA Button and Voucher Code */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
              <Link
                to="/shop/summer-collection"
                className="inline-flex items-center justify-center gap-2 bg-[#3525cd] hover:bg-[#2b1da7] text-white text-sm font-medium px-6 py-3 rounded-xl transition-all shadow-md shadow-indigo-100 group"
              >
                <span>Shop Collection</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="text-xs text-gray-500 font-medium">
                Use voucher code: <span className="font-bold text-gray-900 bg-white px-2 py-1 rounded border border-gray-200 ml-1">AURUM40</span>
              </div>
            </div>

          </div>

          {/* Right Image Area */}
          <div className="lg:col-span-5 h-72 sm:h-96 lg:h-[420px] relative overflow-hidden">
            <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG65VS2Rg8coC5LUjX72EHvc1iG_wtnm4kIgAtjmuSvj2bXo1UzUpRB5HpXux-GEpcO2qcioFf2JX8iClXK7X8T3NCRFE_sDZbjjmJoq_-ySe0-IRMlwr2R0MupQ4Wes7VhBUu3YTDW1KS63-H5vIIYUg0s1-Fs9KaIREusJ3Ze6Mm4R97PT_9MT5dr2Kyj3vIUlNq-N1flQ4ZDQalsv1M3wwXViO31Y-1Atbog9IqLAmELOOSqskU" 
              alt="Summer Collection Model"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle gradient overlay for smooth blend on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:hidden"></div>
          </div>

        </div>
      </div>

    </section>
  );
}