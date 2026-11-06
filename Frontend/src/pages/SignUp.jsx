import React from 'react';
import { Link } from 'react-router-dom';
import SignUpSidebar from '../Components/SignUp/SignUpSidebar';
import SignUpForm from '../Components/SignUp/SignUpForm';
import SignUpFeatures from '../Components/SignUp/SignUpFeatures';

export default function SignUp() {
  return (
    <div className="bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start mb-4">
          <div className="lg:col-span-5">
            <SignUpSidebar />
            
          </div>
          <div className="lg:col-span-7">
            <SignUpForm />
          </div>
        </div>
        <SignUpFeatures />
      </div>
    </div>
  );
}