import React from 'react';
import { Link } from 'react-router-dom';

const SouthAfricaPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-20 sm:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">🇿🇦</span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                DigiLift South Africa
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Empowering South African entrepreneurs through diaspora support and digital innovation
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories from South Africa</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Health Pharmacies</h3>
              <p className="text-gray-600 mb-4">
                "Entrepreneurs in Cape Town townships accessed health-focused business grants and created community pharmacies serving 5,000+ residents."
              </p>
              <div className="text-sm text-primary-600 font-medium">Cape Town, South Africa</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Marketplace</h3>
              <p className="text-gray-600 mb-4">
                "Local artisans in Durban launched online stores with diaspora mentorship, reaching customers across 3 continents."
              </p>
              <div className="text-sm text-primary-600 font-medium">Durban, South Africa</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join DigiLift South Africa
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/diaspora" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50">
                Support a Business
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouthAfricaPage;