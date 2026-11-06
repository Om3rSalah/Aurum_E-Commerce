import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-indigo-50 border-t border-gray-200 text-gray-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 ">
          
          {/* Column 1: Brand Info, Description & Newsletter Subscription */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">AURUM.</h2>
            <p className="text-sm text-gray-500 max-w-sm">
              High-end, contemporary sartorial design crafted with Scandinavian minimalism and soft tactile precision.
            </p>
            
            <div className="space-y-2 pt-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                Subscribe to editorial updates
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#3525cd] transition-all"
                />
                <button
                  type="submit"
                  className="bg-indigo-700 hover:bg-[#2b1da7] text-white text-sm font-medium px-5 py-2 rounded-md transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Shop Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Shop</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/women" className="hover:text-indigo-700 transition-colors">Women's Apparel</Link></li>
              <li><Link to="/men" className="hover:text-indigo-700 transition-colors">Men's Essentials</Link></li>
              <li><Link to="/new" className="hover:text-indigo-700 transition-colors">New Arrivals</Link></li>
              <li><Link to="/lookbook" className="hover:text-indigo-700 transition-colors">Lookbook</Link></li>
              <li><Link to="/sale" className="hover:text-indigo-700 transition-colors">Seasonal Sale</Link></li>
            </ul>
          </div>

          {/* Column 3: Client Care Support Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Client Care</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shipping" className="hover:text-indigo-700 transition-colors">Shipping & Deliveries</Link></li>
              <li><Link to="/returns" className="hover:text-indigo-700 transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/care-guide" className="hover:text-indigo-700 transition-colors">Garment Care Guide</Link></li>
              <li><Link to="/tracking" className="hover:text-indigo-700 transition-colors">Order Tracking</Link></li>
              <li><Link to="/concierge" className="hover:text-indigo-700 transition-colors">Contact Concierge</Link></li>
            </ul>
          </div>

          {/* Column 4: Heritage, Trust & Payment Methods */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Heritage & Trust</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              All transactions are SSL encrypted with authentic payment gateway verification.
            </p>
            {/* Payment Method Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-700">VISA</span>
              <span className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-700">MC</span>
              <span className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-700">AMEX</span>
              <span className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-700">APPLE PAY</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Policy Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 pt-8 gap-4">
          <p>© 2025 AURUM Commerce Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gray-700 transition-colors">Privacy Notice</Link>
            <Link to="/terms" className="hover:text-gray-700 transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-gray-700 transition-colors">Accessibility</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}