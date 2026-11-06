import React from 'react'
import { Link , NavLink } from 'react-router-dom';
import './Header.css';
import { Search,  ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <div className='sticky w-full top-0 z-50 backdrop-blur-xs bg-gray-50/95 ' >
      {/* sales Header */}
      <div className='bg-indigo-700 text-center'>
        <p className='text-white text-xs py-1 font-semibold '> Free shipping on orders over $75 | Easy 30-day returns </p>
      </div>
      {/* Header */}
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center gap-40">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="font-semibold text-2xl tracking-tight text-gray-900">AURUM.</span>
            </Link>

            {/* Links */}
            <nav className="hidden md:flex items-center gap-6 text-base font-semibold text-gray-700">
              <NavLink to="/" className=" hover:text-indigo-700  transition-colors">Home</NavLink>
              <NavLink to="/shop" className="hover:text-indigo-700 transition-colors">Shop</NavLink>
              <NavLink to="/collections" className="hover:text-indigo-700 transition-colors">Collections</NavLink>
              <NavLink to="/women" className="hover:text-indigo-700 transition-colors">Women</NavLink>
              <NavLink to="/men" className="hover:text-indigo-700 transition-colors">Men</NavLink>
              <NavLink to="/sale" className="hover:text-indigo-700 transition-colors">Sale</NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            
            <div className="relative hidden lg:block w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search clothing, essentials..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-indigo-50  focus:border-1 border-indigo-700 outline-0 rounded-full duration-300 focus:bg-white transition-all"
              />
            </div>

            {/* Cart */}
            <button className="text-gray-700 hover:text-indigo-700 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-2 bg-indigo-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </button>

            {/* Profile Pic */}
            <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-300">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" 
                alt="User Profile" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
