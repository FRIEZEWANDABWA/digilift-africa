import React from 'react';
import { Link } from 'react-router-dom';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const navigation = {
    platform: [
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Impact Areas', href: '/impact' },
      { name: 'Success Stories', href: '/stories' },
      { name: 'Pilot Program', href: '/pilot' },
    ],
    community: [
      { name: 'Diaspora Portal', href: '/diaspora' },
      { name: 'Entrepreneur Hub', href: '/entrepreneurs' },
      { name: 'Partnerships', href: '/partnerships' },
      { name: 'Blog & Updates', href: '/blog' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'AI & Africa', href: '/ai-africa' },
      { name: 'Dashboard', href: '/dashboard' },
    ],
  };

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-kenya-green to-primary-600 rounded-lg">
                <GlobeAltIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">DigiLift</span>
                <span className="text-xl font-bold text-kenya-green ml-1">Africa</span>
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              DigiLift Africa is a community-powered platform transforming grassroots businesses across Africa by connecting diaspora support, digital skills, and funding. Proudly aligned with the Gates Foundation's mission of empowering every person to live a healthy and productive life.
            </p>
            <div className="flex space-x-6 mb-8">
              {[
                { name: 'Twitter', href: '#', icon: '🐦' },
                { name: 'LinkedIn', href: '#', icon: '💼' },
                { name: 'Facebook', href: '#', icon: '📘' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 text-xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            
            {/* QR Code */}
            <div className="bg-gray-800 rounded-lg p-4 inline-block">
              <p className="text-sm font-semibold text-white mb-3 text-center">
                Curious Enough? 🤔
              </p>
              <img 
                src="/qr-code.png" 
                alt="DigiLift Africa QR Code" 
                className="w-24 h-24 mx-auto rounded"
              />
              <p className="text-xs text-gray-400 mt-2 text-center">
                Scan to explore!
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Platform</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.platform.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Community</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.community.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 DigiLift Africa. All rights reserved. Powered by Gates Foundation.
            </p>
            <div className="mt-4 sm:mt-0">
              <p className="text-xs leading-5 text-gray-400">
                Built with ❤️ for African entrepreneurs
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;