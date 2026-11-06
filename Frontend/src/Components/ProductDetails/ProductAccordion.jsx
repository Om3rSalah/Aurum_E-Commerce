import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductAccordion({ description, fabric, shipping }) {
  const [openSection, setOpenSection] = useState('description');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm divide-y divide-gray-100">
      
      {/* Description */}
      <div>
        <button
          onClick={() => toggleSection('description')}
          className="w-full flex items-center justify-between p-4 text-xs font-bold uppercase tracking-wider text-gray-900 bg-gray-50/50 cursor-pointer"
        >
          <span>Product Description</span>
          {openSection === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openSection === 'description' && (
          <div className="p-4 text-xs text-gray-600 space-y-2 leading-relaxed">
            <p>{description.text}</p>
            <ul className="list-disc pl-4 space-y-1">
              {description.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Fabric & Care */}
      <div>
        <button
          onClick={() => toggleSection('fabric')}
          className="w-full flex items-center justify-between p-4 text-xs font-bold uppercase tracking-wider text-gray-900 bg-gray-50/50 cursor-pointer"
        >
          <span>Fabric & Care</span>
          {openSection === 'fabric' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openSection === 'fabric' && (
          <div className="p-4 text-xs text-gray-600 leading-relaxed">
            <p>{fabric}</p>
          </div>
        )}
      </div>

      {/* Shipping & Delivery */}
      <div>
        <button
          onClick={() => toggleSection('shipping')}
          className="w-full flex items-center justify-between p-4 text-xs font-bold uppercase tracking-wider text-gray-900 bg-gray-50/50 cursor-pointer"
        >
          <span>Shipping & Delivery</span>
          {openSection === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openSection === 'shipping' && (
          <div className="p-4 text-xs text-gray-600 leading-relaxed">
            <p>{shipping}</p>
          </div>
        )}
      </div>

    </div>
  );
}