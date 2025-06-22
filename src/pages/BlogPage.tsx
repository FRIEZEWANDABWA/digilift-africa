import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Blog & Updates
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Latest insights, progress reports, and Gates Foundation news
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;