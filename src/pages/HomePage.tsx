import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  ChartBarIcon,
  HeartIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const stats = [
    { name: 'MSMEs in Kenya', value: '7.4M+', icon: UserGroupIcon },
    { name: 'Youth Unemployment', value: '39%', icon: ChartBarIcon },
    { name: 'Annual Diaspora Remittances', value: '$4.2B', icon: CurrencyDollarIcon },
    { name: 'Women-led Businesses Target', value: '60%', icon: HeartIcon },
  ];

  const features = [
    {
      title: 'Diaspora Co-funding',
      description: 'Connect with Kenyan diaspora who contribute 50% while Gates Foundation matches the other 50%',
      icon: CurrencyDollarIcon,
      link: '/diaspora'
    },
    {
      title: 'Digital Empowerment',
      description: 'Comprehensive training in digital literacy, mobile money, and online business tools',
      icon: AcademicCapIcon,
      link: '/entrepreneurs'
    },
    {
      title: 'Mentorship Network',
      description: 'Connect with experienced diaspora mentors for ongoing business guidance and support',
      icon: UserGroupIcon,
      link: '/diaspora'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-kenya-green to-primary-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-20 sm:py-32 lg:py-40">
          <div className="text-center">
            <div className="mb-8">
              <div className="bg-gradient-to-r from-kenya-green to-primary-600 bg-clip-text text-transparent inline-block">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                  DigiLift Africa
                </h1>
              </div>
              <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                Diaspora-Driven Growth for Microenterprises
              </p>
            </div>
            
            <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              A transformative initiative to empower <span className="font-semibold text-kenya-green">Africa's next generation of entrepreneurs</span> by connecting diaspora remittances, co-funding, and digital empowerment — in alignment with the <span className="font-semibold text-primary-600">Gates Foundation's mission</span>.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                How It Works
              </Link>
              <Link to="/diaspora" className="btn-primary bg-kenya-green hover:bg-green-700">
                Support a Business
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Opportunity Across Africa
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Leveraging diaspora connections to transform microenterprises across 5 African countries
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600 flex items-center justify-center gap-2">
                    <stat.icon className="h-5 w-5 text-primary-600" />
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">How We Work</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Connecting Diaspora with Local Entrepreneurs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our innovative model combines diaspora support with Gates Foundation matching funds to create sustainable growth for African microenterprises across Kenya, Senegal, Nigeria, Rwanda, Ethiopia, and South Africa.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.title} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                  <Link
                    to={feature.link}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    Learn more
                    <span aria-hidden="true"> →</span>
                  </Link>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Target Areas */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pilot Program Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Focusing on high-potential regions across our 5 target countries
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { country: 'Kenya', cities: ['Kisumu', 'Kakamega', 'Bungoma'], flag: '🇰🇪', link: '/kenya' },
              { country: 'Senegal', cities: ['Dakar', 'Thiès', 'Kaolack'], flag: '🇸🇳', link: '/senegal' },
              { country: 'Nigeria', cities: ['Lagos', 'Kano', 'Ibadan'], flag: '🇳🇬', link: '/nigeria' },
              { country: 'Rwanda', cities: ['Kigali', 'Butare', 'Gisenyi'], flag: '🇷🇼', link: '/rwanda' },
              { country: 'Ethiopia', cities: ['Addis Ababa', 'Dire Dawa', 'Hawassa'], flag: '🇪🇹', link: '/ethiopia' },
              { country: 'South Africa', cities: ['Cape Town', 'Durban', 'Johannesburg'], flag: '🇿🇦', link: '/south-africa' },
            ].map((area) => (
              <Link key={area.country} to={area.link} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow block">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{area.flag}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{area.country}</h3>
                </div>
                <ul className="space-y-2">
                  {area.cities.map((city) => (
                    <li key={city} className="text-gray-600 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      {city}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-sm text-primary-600 font-medium">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to make an impact?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
              Join the diaspora community in empowering the next generation of African entrepreneurs through digital transformation and co-investment.
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

export default HomePage;