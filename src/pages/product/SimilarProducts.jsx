import React from "react";
import ProductCard from "../../components/ProductCard";

const SimilarProducts = () => {
    const products = [
        {
          id: 1,
          name: "Spicy Mango Pickle",
          price: 249,
          originalPrice: 299,
          rating: 4.7,
          reviews: 986,
          image:
            "https://availeverything.com/public/uploads/all/2uJfGJj1KFOPCcKUtmhB3zTVdHs52y3uu6jCezBQ.jpg",
        },
        {
          id: 2,
          name: "Classic Lemon Pickle",
          price: 199,
          originalPrice: 249,
          rating: 4.6,
          reviews: 754,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZA7KJ1mu4XvDtVLbheAEC_QFv5WgLOGmsmbSer4DgRIOhdkxf0zzH0z3PaSIXwE15-E8&usqp=CAU",
        },
        {
          id: 3,
          name: "Garlic Red Chili Pickle",
          price: 279,
          originalPrice: 349,
          rating: 4.8,
          reviews: 1102,
          image:
            "https://silkroadrecipes.com/wp-content/uploads/2023/01/Sweet-and-Spicy-Tomato-Chutney-square.jpg",
        },
        {
          id: 4,
          name: "Mixed Veg Pickle",
          price: 229,
          originalPrice: 289,
          rating: 4.5,
          reviews: 643,
          image:
            "https://curlytales.com/wp-content/uploads/2021/01/ALOO_20PAPAD_20BIG_1024x1024.jpg",
        },
      ];

  return (
    <section className="max-w-6xl mx-auto mt-16 px-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Similar Products
      </h2>

      {/* Scrollable container for mobile */}
      <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 scrollbar-hide snap-x snap-mandatory">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
