// components/BestSellers.jsx
import React from 'react';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: 'Spicy Mango Pickle',
      price: '₹299',
      originalPrice: '₹399',
      image: 'https://www.doctorschoiceoil.com/wp-content/uploads/2023/09/Spicy-Mango-Pickle-1200x900.png',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Mixed Vegetable Achar',
      price: '₹349',
      originalPrice: '₹449',
      image: 'https://img-global.cpcdn.com/recipes/e94c1a97f25d23d5/1200x630cq80/photo.jpg',
      rating: 4.7,
      reviews: 98
    },
    {
      id: 3,
      name: 'Garlic Chili Pickle',
      price: '₹279',
      originalPrice: '₹379',
      image: 'https://vegbuffet.com/wp-content/uploads/2021/01/pickled-garlic-with-green-chili.jpg',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: 'Sweet Tamarind Chutney',
      price: '₹249',
      originalPrice: '₹349',
      image: 'https://www.seriouseats.com/thmb/XmE2cwnQZg5pgPVUljKdc4EGmro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sweet-tamarind-chutney-recipe-02-2-ff7e236a29604f5eb7c64b417076cf45.jpg',
      rating: 4.6,
      reviews: 87
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Sellers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Most loved pickles by our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    25% OFF
                  </span>
                </div>
                <button className="absolute bottom-4 right-4 bg-white text-gray-900 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;