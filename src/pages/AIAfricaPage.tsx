import React from 'react';

const AIAfricaPage: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI & Africa
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            "For AI to serve Africa, it must learn from Africa."
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-50 to-kenya-green/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Building Ethical, Localized Data for Inclusive Technology
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Projects like DigiLift, free public Wi-Fi initiatives, and digital hubs are creating 
              the foundation for AI that truly understands and serves African communities.
            </p>
            <p className="text-gray-600">
              By empowering local entrepreneurs and collecting ethical, community-driven data, 
              we're ensuring that the future of artificial intelligence includes African voices, 
              needs, and innovations at its core.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAfricaPage;