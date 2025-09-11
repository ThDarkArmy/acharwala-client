// components/Features.jsx
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🌿',
      title: '100% Natural',
      description: 'Made with organic ingredients and no preservatives'
    },
    {
      icon: '👵',
      title: 'Traditional Recipes',
      description: 'Authentic recipes passed down through generations'
    },
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free delivery on orders above ₹499'
    },
    {
      icon: '💝',
      title: 'Handcrafted',
      description: 'Each jar is carefully prepared with love'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;