// components/NewArrivals.jsx
import React from 'react';

const NewArrivals = () => {
  const newProducts = [
    {
      id: 1,
      name: 'Lemon Pickle',
      price: '₹229',
      image: 'https://images.unsplash.com/photo-1570194065655-4222e5bfd4ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isNew: true
    },
    {
      id: 2,
      name: 'Carrot Ginger Pickle',
      price: '₹269',
      image: 'https://images.unsplash.com/photo-1592415486680-7a736fca3b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isNew: true
    },
    {
      id: 3,
      name: 'Mint Coriander Chutney',
      price: '₹199',
      image: 'https://images.unsplash.com/photo-1596461404969-9b70b3e2a603?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            New Arrivals
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our latest additions to the pickle family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW
                    </span>
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-amber-400 text-lg font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;