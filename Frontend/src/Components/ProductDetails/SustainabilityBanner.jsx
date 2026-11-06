import React from 'react';
import { BiLeaf } from "react-icons/bi";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SustainabilityBanner() {
  return (
    <div className="bg-indigo-50/80 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-[#3525cd] text-white rounded-xl shrink-0">
          <BiLeaf size={22} />
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Consciously Tailored Materials</h4>
          <p className="text-xs text-gray-600 pt-0.5">Each shirt saves 420 liters of water through regenerative closed-loop finishing cycles.</p>
        </div>
      </div>
      <Link to="/sustainability" className="text-xs font-bold text-[#3525cd] hover:underline flex items-center gap-1 shrink-0">
        Discover Our Footprint <ArrowRight size={14} />
      </Link>
    </div>
  );
}