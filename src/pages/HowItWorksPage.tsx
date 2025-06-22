import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  AcademicCapIcon, 
  ChartBarIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Diaspora Discovers',
      description: 'Diaspora visits platform and browses verified businesses seeking support',
      icon: UserGroupIcon,
      color: 'bg-blue-600',
      details: [
        'Browse curated business profiles',
        'View business plans and impact potential',
        'Read entrepreneur stories and backgrounds',
        'Filter by location, sector, or funding needs'
      ]
    },
    {
      step: 2,
      title: 'Co-Investment Match',
      description: 'Diaspora donates 50%; Gates Foundation matches the other 50%',
      icon: CurrencyDollarIcon,
      color: 'bg-green-600',
      details: [
        'Diaspora commits their contribution',
        'Gates Foundation automatically matches',
        'Transparent fund allocation',
        'Real-time tracking of contributions'
      ]
    },
    {
      step: 3,
      title: 'Digital Onboarding',
      description: 'Entrepreneur receives comprehensive digital training and tools',
      icon: AcademicCapIcon,
      color: 'bg-purple-600',
      details: [
        'Digital literacy training modules',
        'Mobile money and payment systems',
        'Online marketing and social media',
        'Business management tools'
      ]
    },
    {
      step: 4,
      title: 'Funding & Mentorship',
      description: 'Business receives funding plus ongoing mentorship support',
      icon: ChartBarIcon,
      color: 'bg-orange-600',
      details: [
        'Funds disbursed in milestones',
        'Regular mentor check-ins',
        'Business development support',
        'Access to networks and markets'
      ]
    },
    {
      step: 5,
      title: 'Growth Tracking',
      description: 'Progress monitored through comprehensive M&E tools and reporting',
      icon: ChartBarIcon,
      color: 'bg-indigo-600',
      details: [
        'Monthly progress reports',
        'Impact measurement dashboard',
        'Financial performance tracking',
        'Success story documentation'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              How DigiLift Kenya Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              A simple, transparent process that connects diaspora support with local entrepreneurs through digital empowerment
            </p>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 h-16 w-0.5 bg-gray-200 lg:left-1/2 lg:top-8 lg:h-0.5 lg:w-16"></div>
                )}
                
                <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-16 w-16 flex items-center justify-center rounded-full ${step.color}`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500">Step {step.step}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRightIcon className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} flex items-center justify-center`}>
                    <div className={`h-64 w-64 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center`}>
                      <step.icon className={`h-24 w-24 ${step.color.replace('bg-', 'text-')}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Makes DigiLift Different
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our unique approach combines proven models with innovative technology
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Matched Funding',
                description: 'Every diaspora dollar is matched by the Gates Foundation, doubling the impact',
                icon: '🤝',
                color: 'bg-blue-50 border-blue-200'
              },
              {
                title: 'Digital First',
                description: 'Comprehensive digital training ensures sustainable growth and modern business practices',
                icon: '💻',
                color: 'bg-green-50 border-green-200'
              },
              {
                title: 'Mentorship Network',
                description: 'Connect with experienced diaspora professionals for ongoing guidance',
                icon: '👥',
                color: 'bg-purple-50 border-purple-200'
              },
              {
                title: 'Transparent Tracking',
                description: 'Real-time monitoring and evaluation tools show exactly how funds are used',
                icon: '📊',
                color: 'bg-orange-50 border-orange-200'
              },
              {
                title: 'Gender Focus',
                description: '60% of supported businesses are women-led, promoting gender equality',
                icon: '👩‍💼',
                color: 'bg-pink-50 border-pink-200'
              },
              {
                title: 'Scalable Model',
                description: 'Proven approach that can expand across Kenya and throughout Africa',
                icon: '🌍',
                color: 'bg-indigo-50 border-indigo-200'
              }
            ].map((feature) => (
              <div key={feature.title} className={`bg-white border rounded-lg p-6 ${feature.color}`}>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
              Join our community of diaspora supporters and local entrepreneurs creating positive change across Kenya.
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

export default HowItWorksPage;