import React from 'react';

const PartnershipsPage: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Strategic Partnerships
          </h1>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🏛️ Government</h3>
            <p className="text-gray-600">Ministry of ICT, Health</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🏢 Private Sector</h3>
            <p className="text-gray-600">M-Pesa, Digital Hubs</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🤝 Civil Society</h3>
            <p className="text-gray-600">Youth Groups, Diaspora Orgs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;