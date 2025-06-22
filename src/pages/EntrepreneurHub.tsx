import React from 'react';

const EntrepreneurHub: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Entrepreneur Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your gateway to digital empowerment and business growth
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📝 Digital Onboarding</h3>
            <p className="text-gray-600 mb-6">Complete your business profile and get verified</p>
            <button className="btn-primary">Start Application</button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🎓 Training Modules</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Digital literacy</li>
              <li>• Business management</li>
              <li>• Mobile money & payments</li>
            </ul>
            <button className="btn-secondary">View Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurHub;