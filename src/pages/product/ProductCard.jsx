import React, { useState } from "react";
import { Star, Truck, Shield, Heart, Share2, Plus, Minus } from "lucide-react";

const ProductCard = () => {
  const images = [
    "https://availeverything.com/public/uploads/all/2uJfGJj1KFOPCcKUtmhB3zTVdHs52y3uu6jCezBQ.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZA7KJ1mu4XvDtVLbheAEC_QFv5WgLOGmsmbSer4DgRIOhdkxf0zzH0z3PaSIXwE15-E8&usqp=CAU",
    "https://silkroadrecipes.com/wp-content/uploads/2023/01/Sweet-and-Spicy-Tomato-Chutney-square.jpg",
    "https://curlytales.com/wp-content/uploads/2021/01/ALOO_20PAPAD_20BIG_1024x1024.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("500g");

  const productSizes = [
    { id: "250g", price: 199, originalPrice: 249 },
    { id: "500g", price: 299, originalPrice: 399 },
    { id: "1kg", price: 549, originalPrice: 699 }
  ];

  const selectedProduct = productSizes.find(size => size.id === selectedSize);

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 gap-12">
      {/* Left: Product Gallery */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-2xl w-full flex items-center justify-center h-[400px]">
          <img
            src={mainImage}
            alt="Traditional Punjabi Mango Pickle"
            className="h-full object-contain rounded-xl drop-shadow-lg"
          />
        </div>
        <div className="flex gap-4 mt-6">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setMainImage(img)}
              className={`p-1 rounded-lg border-2 transition-all ${
                mainImage === img
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 hover:border-orange-300"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col justify-center space-y-6">
        {/* Category Badge */}
        <span className="self-start bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium">
          Traditional Pickles
        </span>

        {/* Title & Description */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 font-serif">Traditional Punjabi Mango Pickle</h1>
          <p className="text-gray-600 mt-3 leading-relaxed text-lg">
            Authentic homemade pickle made with fresh raw mangoes, aromatic spices, 
            and cold-pressed mustard oil. Aged to perfection for that rich, tangy flavor.
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={`${
                  i < 4 ? "text-amber-500 fill-current" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-lg font-semibold text-gray-900 ml-2">4.8</span>
          </div>
          <span className="text-gray-500">•</span>
          <span className="text-gray-600">1,247 verified reviews</span>
        </div>

        {/* Price Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl shadow-inner">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">₹{selectedProduct.price}</span>
            <span className="text-xl text-gray-500 line-through">₹{selectedProduct.originalPrice}</span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
              {Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}% OFF
            </span>
          </div>
          <p className="text-green-600 font-semibold mt-3 flex items-center">
            <Truck size={18} className="mr-2" />
            Get at <span className="font-bold mx-1">₹{selectedProduct.price - 50}</span> 
            with code <span className="bg-green-100 text-green-800 px-2 py-1 rounded ml-2 font-mono">ACHAR50</span>
          </p>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">Select Size:</h3>
          <div className="grid grid-cols-3 gap-4">
            {productSizes.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedSize === size.id
                    ? "border-orange-500 bg-orange-50 shadow-sm"
                    : "border-gray-200 hover:border-orange-300"
                }`}
              >
                <div className="font-semibold text-gray-900">{size.id}</div>
                <div className="flex flex-col mt-1">
                  <span className="text-sm font-bold text-gray-900">₹{size.price}</span>
                  <span className="text-xs text-gray-500 line-through">₹{size.originalPrice}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-6 p-4 bg-gray-50 rounded-xl border">
          <span className="font-semibold text-gray-900">Quantity:</span>
          <div className="flex items-center space-x-3 border rounded-lg px-3 py-2 bg-white shadow-sm">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center font-semibold text-lg">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>
          </div>
          <div className="text-sm text-gray-600">
            Total: <span className="font-semibold text-gray-900">₹{selectedProduct.price * quantity}</span>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="p-5 border border-green-200 rounded-xl bg-green-50 shadow-sm">
          <div className="flex items-center space-x-3">
            <Truck size={22} className="text-green-600" />
            <div>
              <p className="font-semibold text-green-800">Free Delivery Available</p>
              <p className="text-sm text-green-700">
                Order now and get it by <span className="font-semibold">Tomorrow, 5 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Shield size={18} className="text-green-600" />
            <span>100% Natural Ingredients</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart size={18} className="text-red-500" />
            <span>Family Recipe</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-5">
          <button className="flex-1 bg-orange-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-orange-600 transition shadow-md hover:shadow-lg">
            Add to Cart
          </button>
          <button className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-800 transition shadow-md hover:shadow-lg">
            Buy Now
          </button>
        </div>

        {/* Additional Actions */}
        <div className="flex justify-center space-x-8 pt-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition">
            <Heart size={20} />
            <span>Add to Wishlist</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition">
            <Share2 size={20} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
