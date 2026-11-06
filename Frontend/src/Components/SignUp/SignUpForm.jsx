import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Phone, Calendar } from 'lucide-react';
import { BiSolidCheckShield } from "react-icons/bi";
import { MdLockOutline, MdLock } from "react-icons/md";
import { FaShield } from "react-icons/fa6";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    birthday: '',
    subscribe: true,
    agreeTerms: false,
  });

  // دالة حساب قوة كلمة السر
  const getPasswordStrength = (pass) => {
    let score = 0;
    if (!pass) return { score: 0, label: '', color: 'bg-gray-200' };

    if (pass.length >= 8) score += 1;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score += 1;
    if (/\d/.test(pass)) score += 1;
    if (/[^a-zA-Z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 1:
        return { score: 1, label: 'Weak', color: 'bg-red-500', textColor: 'text-red-500' };
      case 2:
        return { score: 2, label: 'Fair', color: 'bg-amber-500', textColor: 'text-amber-500' };
      case 3:
        return { score: 3, label: 'Good', color: 'bg-emerald-500', textColor: 'text-emerald-500' };
      case 4:
        return { score: 4, label: 'Strong', color: 'bg-[#3525cd]', textColor: 'text-[#3525cd]' };
      default:
        return { score: 0, label: '', color: 'bg-gray-200', textColor: 'text-gray-400' };
    }
  };

  const strength = getPasswordStrength(formData.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="bg-white flex-1 rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm space-y-6">
      
      {/* Step Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-[#3525cd] px-2.5 py-0.5 rounded-full">
            NEW PATRON
          </span>
          <span className="text-xs font-semibold text-gray-400">Step 1 of 1</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight pt-1">
          Create Your Account
        </h1>
        <p className="text-sm text-gray-600">
          Join AURUM for curated sartorial essentials, personal styling, and bespoke tracking.
        </p>
      </div>

      {/* Social Register Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 border border-gray-200 bg-indigo-50 hover:bg-gray-50 py-3 px-4 rounded-md text-xs font-bold text-gray-700 transition-colors cursor-pointer">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.67-.82 1.13-1.96.99-3.1-.98.04-2.18.66-2.88 1.48-.62.72-1.16 1.88-.99 3 1.1.09 2.21-.56 2.88-1.38z"/></svg>
          <span className="text-sm">Sign up with Apple</span>
        </button>
        <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 py-3 px-4 rounded-md bg-indigo-50 text-xs font-bold text-gray-700 transition-colors cursor-pointer">
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
          <span className="text-sm">Sign up with Google</span>
        </button>
      </div>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-4">
        <div className="border-t border-gray-100 w-full"></div>
        <span className="bg-white px-3 text-[10px] uppercase font-bold text-gray-400 absolute">
          OR REGISTER WITH YOUR EMAIL
        </span>
      </div>

      {/* Form Controls */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-700">First Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Soren"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-700">Last Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Lindqvist"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all"
              required
            />
          </div>
        </div>

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

        {/* Create Password */}
        <div className="space-y-1">
          <div className="flex justify-between items-center text-[11px]">
            <label className="font-bold text-gray-700">Create Password <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-1.5">
              {strength.label && (
                <span className={`text-[10px] font-bold ${strength.textColor}`}>
                  {strength.label}
                </span>
              )}
              <span className="text-gray-400 text-[10px]">Min. 8 characters</span>
            </div>
          </div>
          <div className="relative">
            <MdLockOutline size={15} className="absolute left-3.5 top-1/2 translate-y-[-50%] text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="At least 8 characters"
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

          {/* Dynamic Password Strength Indicator */}
          <div className="grid grid-cols-4 gap-1.5 pt-1">
            {[1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`h-1 rounded-full transition-all duration-300 ${
                  level <= strength.score ? strength.color : 'bg-gray-200'
                }`}
              ></div>
            ))}
          </div>

          <p className="text-[10px] text-gray-400 pt-0.5">
            Must include lowercase, uppercase, number & symbol
          </p>
        </div>

        {/* Mobile Phone & Birthday */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <label className="font-bold text-gray-700">Mobile Phone</label>
              <span className="text-gray-400 text-[10px]">Optional</span>
            </div>
            <div className="relative">
              <Phone size={15} className="absolute left-3.5 top-1/2 translate-y-[-50%] text-gray-400" />
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full pl-10 pr-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <label className="font-bold text-gray-700">Birthday</label>
              <span className="text-[#3525cd] text-[10px] font-semibold">Anniversary Gift</span>
            </div>
            <div className="relative">
              <Calendar size={15} className="absolute left-3.5 top-1/2 translate-y-[-50%] text-gray-400" />
              <input
                type="date"
                placeholder="mm/dd/yyyy"
                value={formData.birthday}
                onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                className="w-full pl-10 pr-3.5 py-3 text-sm bg-indigo-50 border border-transparent rounded-md focus:bg-white focus:border-[#3525cd] outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-2 pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.subscribe}
              onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
              className="mt-0.5 rounded h-4 w-4 border-gray-300 text-[#3525cd] accent-indigo-700 focus:ring-[#3525cd]"
            />
            <span className="text-[13px] text-gray-600 leading-tight">
              Subscribe to editorial updates, seasonal lookbooks, and private sartorial trunk show invitations.
            </span>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-indigo-700 text-indigo-700 focus:ring-[#3525cd]"
              required
            />
            <span className="text-sm text-gray-600 flex items-center leading-tight">
              I agree to the AURUM <Link to="/terms" className="text-[#3525cd] font-normal underline"> Terms of Service</Link> and <Link to="/privacy" className="text-[#3525cd] font-normal underline">Privacy Policy</Link>.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-700 hover:bg-indigo-500 text-white text-sm font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-indigo-100 cursor-pointer mt-2"
        >
          <span>Create Account</span>
        </button>

      </form>

      {/* Footer Links & Trust Badges */}
      <div className="space-y-4 pt-2 text-center">
        <p className="text-xs text-gray-500">
          Already an esteemed member?{' '}
          <Link to="/login" className="text-[#3525cd] font-bold hover:underline">
            Sign in to your account
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
  );
}