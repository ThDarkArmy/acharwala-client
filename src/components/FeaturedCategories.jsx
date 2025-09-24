// components/FeaturedCategories.jsx
import React from 'react';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Traditional Achar',
      image: 'https://availeverything.com/public/uploads/all/2uJfGJj1KFOPCcKUtmhB3zTVdHs52y3uu6jCezBQ.jpg',
      count: '24 Products'
    },
    {
      id: 2,
      name: 'Spicy Pickles',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZA7KJ1mu4XvDtVLbheAEC_QFv5WgLOGmsmbSer4DgRIOhdkxf0zzH0z3PaSIXwE15-E8&usqp=CAU',
      count: '18 Products'
    },
    {
      id: 3,
      name: 'Sweet Chutneys',
      image: 'https://silkroadrecipes.com/wp-content/uploads/2023/01/Sweet-and-Spicy-Tomato-Chutney-square.jpg',
      count: '15 Products'
    },
    {
      id: 4,
      name: 'Speciality Papads',
      image: 'https://curlytales.com/wp-content/uploads/2021/01/ALOO_20PAPAD_20BIG_1024x1024.jpg',
      count: '12 Products'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of handcrafted pickles and traditional delicacies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div> */}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;