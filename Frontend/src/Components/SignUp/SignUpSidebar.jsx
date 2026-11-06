import React from 'react';
import { Star, Truck, Eye, Tag } from 'lucide-react';
import { FaTruck } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

export default function SignUpSidebar() {
  const privileges = [
    {
      id: 1,
      icon: MdStars,
      title: '10% Welcome Privilege',
      badge: 'CIRCLE10',
      description: 'Redeem automatically on your premier sartorial wardrobe order.',
    },
    {
      id: 2,
      icon: FaTruck,
      title: 'Express Priority Dispatch',
      description: 'Complimentary global express packaging & delivery on all orders over $75.',
    },
    {
      id: 3,
      icon: IoEyeSharp,
      title: 'Private Trunk Shows & Lookbooks',
      description: 'Early 48-hour access to high-demand seasonal capsules before public release.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Upper Membership Hero Card */}
      <div className="relative h-80 rounded-3xl overflow-hidden bg-gray-900 text-white p-6 flex flex-col justify-between shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
          alt="Sartorial Membership"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent"></div>

        <div className="relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            ● SARTORIAL MEMBERSHIP
          </span>
        </div>

        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
            CURATED COMMUNITY
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight leading-snug">
            Join the AURUM Sartorial Circle
          </h2>
          <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
            Step into an elevated shopping atelier of quiet luxury, bespoke sizing guidance, and reserved private trunk releases.
          </p>
        </div>
      </div>

      {/* Middle Exclusive Privileges Card */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 space-y-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
            Exclusive Member Privileges
          </h3>
          <span className="text-[10px] font-bold text-[#3525cd] bg-indigo-50 px-2.5 py-0.5 rounded-full">
            Complimentary
          </span>
        </div>

        <div className="space-y-4">
          {privileges.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-md bg-indigo-50 text-[#3525cd] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={20} />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                    {item.badge && (
                      <span className="text-[9px] font-extrabold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded uppercase">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Testimonial Card */}
      <div className="bg-indigo-50/50 rounded-3xl p-6 border border-indigo-100/60 space-y-4">
        <div className="flex items-center gap-1 text-[#3525cd]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#3525cd]" />
          ))}
          <span className="text-xs font-bold text-gray-900 ml-1">5.0</span>
          <span className="text-[10px] text-gray-400 font-medium">/ Verified Patron</span>
        </div>

        <p className="text-xs italic text-gray-600 leading-relaxed">
          "The tailoring and tactile fabric choices rival boutique Scandinavian ateliers. Having priority access through the Circle has redefined how I build my seasonal capsule."
        </p>

        <div className="flex items-center gap-3 pt-1">
          <div className="w-8 h-8 rounded-full bg-indigo-200 text-[#3525cd] font-bold text-xs flex items-center justify-center">
            EK
          </div>
          <div>
            <h5 className="text-xs font-bold text-gray-900">Elinor Källström</h5>
            <p className="text-[10px] text-gray-400">Stockholm Architectural Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}