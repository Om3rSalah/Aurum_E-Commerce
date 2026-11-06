import React from 'react';
import { Truck, RotateCcw, ShieldCheck , Lock } from 'lucide-react';

export default function ValuePropsBanner() {
  // Store benefits and guarantees features array
  const features = [
    {
      id: 1,
      icon: Truck,
      title: 'Complimentary Worldwide Shipping',
      description: 'On all domestic orders over $75 with carbon-neutral transit.',
    },
    {
      id: 2,
      icon: RotateCcw,
      title: 'Effortless 30-Day Returns',
      description: 'Prepaid return labels included with immediate exchange processing.',
    },
    {
      id: 3,
      icon: Lock,
      title: 'Bank-Grade 256-Bit Checkout',
      description: 'PCI-DSS certified encryption for all major digital wallets and cards.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-12">
      <div className="bg-white rounded-3xl border border-gray-100 p-6 lg:p-6 ">
        
        {/* Features Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3  divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`flex items-start gap-4 ${
                  idx !== 0 ? 'pt-6 md:pt-0 md:pl-4 pr-4' : 'pr-4'
                }`}
              >
                {/* Feature Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/70 text-[#3525cd] flex items-center justify-center flex-shrink-0">
                  <IconComponent size={22} />
                </div>

                {/* Feature Text Content */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-gray-600  leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}