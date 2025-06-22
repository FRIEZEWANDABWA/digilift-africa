import React from 'react';

const StoriesPage: React.FC = () => {


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Impact Across Africa
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Success stories from entrepreneurs across our 5 target countries
          </p>
        </div>
        
        <div className="mt-16 space-y-12">
          {[
            {
              country: 'Kenya',
              flag: '🇰🇪',
              stories: [
                {
                  name: "Youth-led Retail Startup",
                  location: "Kisumu",
                  story: "Now employs 5 people after diaspora support",
                  image: "👩‍💼"
                }
              ]
            },
            {
              country: 'Senegal',
              flag: '🇸🇳',
              stories: [
                {
                  name: "Women's Cooperative",
                  location: "Saint-Louis",
                  story: "Boosted sales by 80% after e-commerce training",
                  image: "👩‍🤝‍👩"
                }
              ]
            },
            {
              country: 'Rwanda',
              flag: '🇷🇼',
              stories: [
                {
                  name: "Young Farmers",
                  location: "Kigali",
                  story: "Doubled crop yields with digital tools",
                  image: "👨‍🌾"
                }
              ]
            },
            {
              country: 'Ethiopia',
              flag: '🇪🇹',
              stories: [
                {
                  name: "Local Businesses",
                  location: "Addis Ababa",
                  story: "200+ businesses adopted mobile payments",
                  image: "📱"
                }
              ]
            },
            {
              country: 'South Africa',
              flag: '🇿🇦',
              stories: [
                {
                  name: "Township Entrepreneurs",
                  location: "Cape Town",
                  story: "Created community pharmacies with health grants",
                  image: "🏥"
                }
              ]
            }
          ].map((countryData) => (
            <div key={countryData.country} className="">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{countryData.flag}</span>
                <h2 className="text-2xl font-bold text-gray-900">{countryData.country}</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {countryData.stories.map((story) => (
                  <div key={story.name} className="bg-gray-50 rounded-lg p-6">
                    <div className="text-3xl mb-3">{story.image}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{story.location}</p>
                    <p className="text-gray-600">{story.story}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;