import React from 'react';
import { UserGroupIcon, CurrencyDollarIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About DigiLift Africa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Transforming microenterprises through diaspora connections and digital empowerment
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Introduction and Background
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Micro, Small, and Medium Enterprises (MSMEs) form the backbone of African economies, contributing significantly to GDP and employing millions across our target countries. However, these businesses face significant challenges that limit their growth potential.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CurrencyDollarIcon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Funding Gaps</h3>
                      <p className="text-gray-600">Limited access to affordable credit and investment capital</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AcademicCapIcon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Digital Literacy</h3>
                      <p className="text-gray-600">Lack of digital skills and online business knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserGroupIcon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Mentorship</h3>
                      <p className="text-gray-600">Limited access to experienced business guidance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  The Diaspora Opportunity
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  African diaspora communities send billions annually in remittances, representing a powerful force for economic transformation. DigiLift Africa harnesses these connections by adapting the proven WIDU Africa model to align with Gates Foundation priorities across 5 key countries.
                </p>
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Key Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">15M+</div>
                      <div className="text-sm text-gray-600">MSMEs Across Africa</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-kenya-green">$12B+</div>
                      <div className="text-sm text-gray-600">Combined Remittances</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">39%</div>
                      <div className="text-sm text-gray-600">Youth Unemployment</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-kenya-green">60%</div>
                      <div className="text-sm text-gray-600">Women-led Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Vision & Mission
            </h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary-600">
                  <HeartIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-7">
                To create a thriving ecosystem where African microenterprises are digitally empowered, 
                globally connected, and locally impactful, driving inclusive economic growth across the continent.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-kenya-green">
                  <UserGroupIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-7">
                To stimulate inclusive economic growth, youth employment, and the digital transformation 
                of microenterprises across Africa by leveraging diaspora support, co-investment, and 
                comprehensive digital empowerment programs in Kenya, Senegal, Nigeria, Rwanda, Ethiopia, and South Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gates Foundation Alignment */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Aligned with Gates Foundation Priorities
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              DigiLift Kenya directly supports the Gates Foundation's mission to reduce inequality and improve lives
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Gender Equality',
                description: '60% focus on women-led businesses',
                icon: '👩‍💼',
                color: 'bg-pink-100 text-pink-800'
              },
              {
                title: 'Youth Employment',
                description: 'Creating opportunities for young entrepreneurs',
                icon: '🎓',
                color: 'bg-blue-100 text-blue-800'
              },
              {
                title: 'Digital Inclusion',
                description: 'Bridging the digital divide through training',
                icon: '💻',
                color: 'bg-green-100 text-green-800'
              },
              {
                title: 'Economic Growth',
                description: 'Sustainable development through MSMEs',
                icon: '📈',
                color: 'bg-purple-100 text-purple-800'
              }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className={`mx-auto h-16 w-16 flex items-center justify-center rounded-full ${item.color} text-2xl mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;