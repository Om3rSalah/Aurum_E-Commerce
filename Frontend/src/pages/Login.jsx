import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Sparkles, Award, ShieldCheck, Zap } from 'lucide-react';
import { BiSolidCheckShield } from "react-icons/bi";
import { MdLock } from "react-icons/md";
import { FaShield } from "react-icons/fa6";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    keepMeSignedIn: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted:', formData);
  };

  return (
    <div className="bg-gray-50/80 min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        
      <div className="max-w-7xl w-full mx-auto">
        
        {/* الكارت الرئيسي مقسم لـ 12 عمود */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* الجزء الأيسر (Sidebar) - 5 أعمدة */}
          <div className="lg:col-span-5 relative bg-slate-900 text-white p-8 lg:p-10 flex flex-col justify-between overflow-hidden min-h-[550px] lg:min-h-[680px]">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop')` 
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full border border-white/10">
                  THE ATELIER EDITION
                </span>
                <Sparkles size={16} className="text-amber-200/80" />
              </div>

              <div className="pt-8 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
                  CURATED MEMBERSHIP
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-white tracking-tight">
                  “Sartorial craftsmanship meets timeless Scandinavian design.”
                </h2>
              </div>
            </div>

            <div className="relative z-10 space-y-3 my-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                <div className="p-2 bg-[#3525cd]/80 rounded-lg shrink-0 mt-0.5">
                  <Award size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Private Seasonal Previews</h4>
                  <p className="text-[11px] text-gray-300 leading-tight pt-0.5">
                    Exclusive 48-hour priority access for verified patrons.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                <div className="p-2 bg-[#3525cd]/80 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Concierge Styling Suite</h4>
                  <p className="text-[11px] text-gray-300 leading-tight pt-0.5">
                    Direct personal styling guidance from our Stockholm atelier.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                <div className="p-2 bg-[#3525cd]/80 rounded-lg shrink-0 mt-0.5">
                  <Zap size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Frictionless Priority Dispatch</h4>
                  <p className="text-[11px] text-gray-300 leading-tight pt-0.5">
                    Complimentary priority shipping & curated carbon-neutral returns.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[10px] text-gray-400 border-t border-white/10 pt-4">
              <span>Archive No. 2025/FW</span>
              <span>Copenhagen • Stockholm • Paris</span>
            </div>
          </div>

          {/* الجزء الأيمن (Login Form) - 7 أعمدة */}
          <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-white">
            
            {/* Header القسم */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-[#3525cd] px-2.5 py-0.5 rounded-full">
                  SECURE PORTAL
                </span>
                <span className="text-xs font-semibold text-gray-400">Step 1 of 1</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight pt-1">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-600">
                Sign in to access your saved wardrobe, order tracking, and concierge privileges.
              </p>
            </div>

            {/* Social Register Buttons (بتنسيق الـ SignUp تماماً) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 border border-gray-200 bg-indigo-50 hover:bg-gray-50 py-3 px-4 rounded-md text-xs font-bold text-gray-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.67-.82 1.13-1.96.99-3.1-.98.04-2.18.66-2.88 1.48-.62.72-1.16 1.88-.99 3 1.1.09 2.21-.56 2.88-1.38z"/></svg>
                <span className="text-sm">Sign in with Apple</span>
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 py-3 px-4 rounded-md bg-indigo-50 text-xs font-bold text-gray-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                <span className="text-sm">Sign in with Google</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-gray-100 w-full"></div>
              <span className="bg-white px-3 text-[10px] uppercase font-bold text-gray-400 absolute">
                OR SIGN IN WITH YOUR EMAIL
              </span>
            </div>

            {/* Form Controls */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email Address */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[11px]">
                  <label className="font-bold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                  <span className="text-gray-400 text-[10px]">We never share your data</span>
                </div>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 translate-y-[-50%] text-gray-400" />
                  <input
                    type="email"
                    placeholder="soren.lindqvist@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[11px]">
                  <label className="font-bold text-gray-700">Password <span className="text-red-500">*</span></label>
                  <Link to="/forgot-password" className="text-[#3525cd] font-semibold hover:underline text-[11px]">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock size={15} className="absolute left-3.5 top-1/2 translate-y-[-50%] text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-10 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 translate-y-[-50%] text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Checkbox */}
              <div className="space-y-2 pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.keepMeSignedIn}
                    onChange={(e) => setFormData({ ...formData, keepMeSignedIn: e.target.checked })}
                    className="mt-0.5 rounded h-4 w-4 border-gray-300 text-[#3525cd] accent-indigo-700 focus:ring-[#3525cd]"
                  />
                  <span className="text-[13px] text-gray-600 leading-tight">
                    Keep me signed in for 30 days
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-500 text-white text-sm font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-indigo-100 cursor-pointer mt-2"
              >
                <span>Sign In to AURUM</span>
              </button>

            </form>

            {/* Footer Links & Trust Badges */}
            <div className="space-y-4 pt-2 text-center">
              <p className="text-xs text-gray-500">
                Don't have an account yet?{' '}
                <Link to="/signup" className="text-[#3525cd] font-bold hover:underline">
                  Create an account
                </Link>
              </p>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-600 bg-indigo-50/70 py-3 px-4 rounded-md">
                <span className="flex items-center gap-1 font-medium">
                  <BiSolidCheckShield size={18} className="text-indigo-500" />
                  256-bit SSL Encrypted
                </span>
                <span>•</span>
                <MdLock size={18} className="text-indigo-500" />
                <span className="font-medium">PCI-DSS Compliant</span>
                <span>•</span>
                <FaShield size={18} className="text-indigo-500" />
                <span className="font-medium">Sartorial Privacy Assured</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}