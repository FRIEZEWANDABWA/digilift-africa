import React from 'react';
import { Link } from 'react-router-dom';

const KenyaPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-20 sm:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">🇰🇪</span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                DigiLift Kenya
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Empowering Kenyan entrepreneurs through diaspora connections and digital transformation
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Jifunze Zaidi (Learn More)</button>
              <button className="btn-secondary">Jiunge Sasa (Join Now)</button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Impact in Kenya</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'MSMEs Supported', value: '127', desc: 'Businesses funded' },
              { title: 'Jobs Created', value: '1,240', desc: 'Employment opportunities' },
              { title: 'Diaspora Contributors', value: '89', desc: 'Active supporters' },
              { title: 'Training Completed', value: '95%', desc: 'Success rate' }
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
            <h2 className="text-3xl font-bold text-gray-900">Success Stories from Kenya</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mary's Retail Startup</h3>
              <p className="text-gray-600 mb-4">
                "A youth-led retail startup in Kisumu now employs 5 people after receiving diaspora support and digital training through DigiLift Kenya."
              </p>
              <div className="text-sm text-primary-600 font-medium">Kisumu, Kenya</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Market Access</h3>
              <p className="text-gray-600 mb-4">
                "Local entrepreneurs in Kakamega adopted mobile payment systems and online marketing, increasing their customer base by 200%."
              </p>
              <div className="text-sm text-primary-600 font-medium">Kakamega, Kenya</div>
            </div>
          </div>
        </div>
      </div>

      {/* Language & Partners */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Language Support</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <div className="font-semibold">Kiswahili</div>
                    <div className="text-gray-600">Full platform available in Kiswahili</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <div className="font-semibold">English</div>
                    <div className="text-gray-600">Default language for all features</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Partners</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <div className="font-semibold">Ministry of ICT</div>
                    <div className="text-gray-600">Government digital initiatives</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="font-semibold">M-Pesa</div>
                    <div className="text-gray-600">Mobile money integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Jiunge na DigiLift Kenya
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
              Join the movement to empower Kenyan entrepreneurs through diaspora support and digital transformation.
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

export default KenyaPage;