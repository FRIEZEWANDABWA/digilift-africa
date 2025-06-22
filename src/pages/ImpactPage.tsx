import React from 'react';

const ImpactPage: React.FC = () => {
  const impactAreas = [
    {
      title: 'Financial Inclusion',
      description: 'Digital payments, mobile money, business banking',
      icon: '💳',
      stats: '85% of businesses now use digital payments'
    },
    {
      title: 'Gender Equality',
      description: '60% target for women-led MSMEs',
      icon: '👩‍💼',
      stats: '67% of supported businesses are women-led'
    },
    {
      title: 'Digital Empowerment',
      description: 'E-learning, mobile tools, digital identity',
      icon: '💻',
      stats: '92% completion rate for digital training'
    },
    {
      title: 'Health & Development',
      description: 'Support for health-adjacent micro-businesses',
      icon: '🏥',
      stats: '150+ health-related businesses supported'
    }
  ];

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Areas of Impact
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Creating meaningful change across multiple sectors
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map((area) => (
              <div key={area.title} className="bg-white border rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="text-sm font-medium text-primary-600">{area.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;