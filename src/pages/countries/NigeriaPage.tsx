import React from 'react';
import { Link } from 'react-router-dom';

const NigeriaPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-20 sm:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">🇳🇬</span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                DigiLift Nigeria
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Empowering Nigerian entrepreneurs through diaspora connections and digital transformation
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Impact in Nigeria</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'SMEs Supported', value: '156', desc: 'Businesses funded' },
              { title: 'Jobs Created', value: '1,890', desc: 'Employment opportunities' },
              { title: 'Diaspora Contributors', value: '134', desc: 'Active supporters' },
              { title: 'Training Completed', value: '88%', desc: 'Success rate' }
            ].map((stat) => (
              <div key={stat.title} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900">{stat.title}</div>
                <div className="text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories from Nigeria</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lagos Tech Hub</h3>
              <p className="text-gray-600 mb-4">
                "A tech startup in Lagos expanded to serve 10,000+ customers after receiving diaspora funding and digital marketing training."
              </p>
              <div className="text-sm text-primary-600 font-medium">Lagos, Nigeria</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">👩‍🌾</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agri-Tech Innovation</h3>
              <p className="text-gray-600 mb-4">
                "Farmers in Kano adopted digital tools for crop monitoring and market access, increasing yields by 40%."
              </p>
              <div className="text-sm text-primary-600 font-medium">Kano, Nigeria</div>
            </div>
          </div>
        </div>
      </div>

      {/* Local Partners */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Local Partners</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <span className="text-4xl mb-4 block">🏛️</span>
              <h3 className="text-lg font-semibold text-gray-900">Federal Ministry of Industry</h3>
              <p className="text-gray-600">Trade and Investment support</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">📱</span>
              <h3 className="text-lg font-semibold text-gray-900">Flutterwave</h3>
              <p className="text-gray-600">Payment processing integration</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">🏢</span>
              <h3 className="text-lg font-semibold text-gray-900">Lagos Business School</h3>
              <p className="text-gray-600">Entrepreneurship training</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join DigiLift Nigeria
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
              Be part of the movement to empower Nigerian entrepreneurs through diaspora support and digital innovation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/diaspora" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50">
                Support a Business
              </Link>
              <Link to="/entrepreneurs" className="text-sm font-semibold leading-6 text-white">
                Apply as Entrepreneur <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NigeriaPage;