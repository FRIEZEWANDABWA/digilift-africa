import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
          M&E Dashboard
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Businesses Funded', value: '127', color: 'bg-blue-600' },
            { title: 'Jobs Created', value: '1,240', color: 'bg-green-600' },
            { title: 'Training Sessions', value: '89', color: 'bg-purple-600' },
            { title: 'Diaspora Users', value: '456', color: 'bg-orange-600' }
          ].map((metric) => (
            <div key={metric.title} className="bg-white p-6 rounded-lg shadow border">
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
              <p className="text-gray-600">{metric.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;