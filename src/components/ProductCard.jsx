import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="min-w-[80%] md:min-w-0 md:w-auto snap-center bg-white/70 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group"
    >
      {/* Product Image */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center h-56">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ₹{product.originalPrice}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center text-sm text-gray-600">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < Math.round(product.rating)
                  ? "text-amber-500 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 font-medium">{product.rating}</span>
          <span className="ml-1 text-gray-400">({product.reviews})</span>
        </div>

        {/* Button */}
        <button className="w-full mt-3 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition shadow-md hover:shadow-lg">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;