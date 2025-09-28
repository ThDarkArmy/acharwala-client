import React, { useState } from "react";
import { Star, SlidersHorizontal, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
  const navigate = useNavigate();

  const [products] = useState([
    {
      id: 1,
      name: "Punjabi Mango Pickle",
      category: "Pickles",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      image:
        "https://availeverything.com/public/uploads/all/2uJfGJj1KFOPCcKUtmhB3zTVdHs52y3uu6jCezBQ.jpg",
    },
    {
      id: 2,
      name: "Masala Papad",
      category: "Papads",
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      image:
        "https://curlytales.com/wp-content/uploads/2021/01/ALOO_20PAPAD_20BIG_1024x1024.jpg",
    },
    {
      id: 3,
      name: "Sweet Tomato Chutney",
      category: "Chutneys",
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      image:
        "https://silkroadrecipes.com/wp-content/uploads/2023/01/Sweet-and-Spicy-Tomato-Chutney-square.jpg",
    },
    {
      id: 4,
      name: "Sesame Oil",
      category: "Oils & Masalas",
      price: 399,
      originalPrice: 499,
      rating: 4.6,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/290774335/DY/YK/BG/53261606/sesame-oil.jpg",
    },
    {
      id: 1,
      name: "Punjabi Mango Pickle",
      category: "Pickles",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      image:
        "https://availeverything.com/public/uploads/all/2uJfGJj1KFOPCcKUtmhB3zTVdHs52y3uu6jCezBQ.jpg",
    },
    {
      id: 2,
      name: "Masala Papad",
      category: "Papads",
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      image:
        "https://curlytales.com/wp-content/uploads/2021/01/ALOO_20PAPAD_20BIG_1024x1024.jpg",
    },
    {
      id: 3,
      name: "Sweet Tomato Chutney",
      category: "Chutneys",
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      image:
        "https://silkroadrecipes.com/wp-content/uploads/2023/01/Sweet-and-Spicy-Tomato-Chutney-square.jpg",
    },
    {
      id: 4,
      name: "Sesame Oil",
      category: "Oils & Masalas",
      price: 399,
      originalPrice: 499,
      rating: 4.6,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/290774335/DY/YK/BG/53261606/sesame-oil.jpg",
    },
    {
      id: 1,
      name: "Punjabi Mango Pickle",
      category: "Pickles",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      image:
        "https://availeverything.com/public/uploads/all/2uJfGJj1KFOPCcKUtmhB3zTVdHs52y3uu6jCezBQ.jpg",
    },
    {
      id: 2,
      name: "Masala Papad",
      category: "Papads",
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      image:
        "https://curlytales.com/wp-content/uploads/2021/01/ALOO_20PAPAD_20BIG_1024x1024.jpg",
    },
    {
      id: 3,
      name: "Sweet Tomato Chutney",
      category: "Chutneys",
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      image:
        "https://silkroadrecipes.com/wp-content/uploads/2023/01/Sweet-and-Spicy-Tomato-Chutney-square.jpg",
    },
    {
      id: 4,
      name: "Sesame Oil",
      category: "Oils & Masalas",
      price: 399,
      originalPrice: 499,
      rating: 4.6,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/290774335/DY/YK/BG/53261606/sesame-oil.jpg",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const categories = ["All", "Pickles", "Papads", "Chutneys", "Oils & Masalas"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    if (sortBy === "Rating") return b.rating - a.rating;
    return 0; // Featured (default)
  });

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar Filters */}
      <aside className="hidden md:block bg-white p-6 rounded-2xl shadow-md h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Filters</h2>

        {/* Category */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === cat
                      ? "bg-orange-500 text-white font-semibold"
                      : "text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sort */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Sort By</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:col-span-3">
        {/* Mobile Filters */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <button className="flex items-center space-x-2 border px-4 py-2 rounded-lg">
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4 flex flex-col cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Image */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover rounded-lg"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between mt-4">
                <div>
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex items-center mt-2 space-x-2">
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
                    <span className="text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Price + Button */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    <span className="ml-2 text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <button className="bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 transition-colors shadow-md">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListPage;
