import React from 'react';
import { Package, Headphones } from 'lucide-react';
import { RiLoopLeftFill } from "react-icons/ri";

export default function SignUpFeatures() {
  const features = [
    {
      id: 1,
      icon: Package,
      title: 'Complimentary Packaging',
      description: 'Recycled cotton garment bags and luxury archival boxes.',
    },
    {
      id: 2,
      icon: RiLoopLeftFill,
      title: 'Effortless 30-Day Returns',
      description: 'Prepaid courier labels with doorstep collection available.',
    },
    {
      id: 3,
      icon: Headphones,
      title: 'Dedicated Concierge',
      description: 'Personalized sartorial stylists available on demand.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
      {features.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-4 ">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#3525cd] flex items-center justify-center flex-shrink-0">
              <Icon size={24} />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
              <p className="text-[13px] text-gray-500 leading-tight">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}