import React from 'react';
import { Link } from 'react-router-dom';

const DiasporaPortal: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Diaspora Portal
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with and support Kenyan entrepreneurs from anywhere in the world
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🔐 Secure Login</h3>
            <p className="text-gray-600 mb-4">Access your personalized dashboard</p>
            <button className="btn-primary w-full">Login / Sign Up</button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🏢 Business Directory</h3>
            <p className="text-gray-600 mb-4">Browse verified MSMEs seeking support</p>
            <Link to="/stories" className="btn-secondary w-full">View Businesses</Link>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">👥 Mentorship</h3>
            <p className="text-gray-600 mb-4">Opt-in to mentor local entrepreneurs</p>
            <button className="btn-secondary w-full">Become a Mentor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiasporaPortal;