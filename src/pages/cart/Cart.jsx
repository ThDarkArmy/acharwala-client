import React, { useState } from 'react';
import { ShoppingCart, Heart, ArrowRight, Truck } from 'lucide-react';
import CartItem from './CartItem';
import WishlistItem from './WishlistItem';
import PriceSummary from './PriceSummary';
import SimilarProducts from '../product/SimilarProducts';
import ProductCard from "../../components/ProductCard";

const Cart = () => {
  const [activeTab, setActiveTab] = useState('cart');

  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Traditional Punjabi Mango Pickle",
      image: "https://availeverything.com/public/uploads/all/2uJfGJj1KFOPCcKUtmhB3zTVdHs52y3uu6jCezBQ.jpg",
      price: 299,
      originalPrice: 399,
      quantity: 2,
      size: "500g"
    },
    {
      id: 2,
      name: "Spicy Lemon Pickle",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZA7KJ1mu4XvDtVLbheAEC_QFv5WgLOGmsmbSer4DgRIOhdkxf0zzH0z3PaSIXwE15-E8&usqp=CAU",
      price: 279,
      originalPrice: 349,
      quantity: 1,
      size: "500g"
    },
    {
      id: 3,
      name: "Mixed Vegetable Pickle",
      image: "https://silkroadrecipes.com/wp-content/uploads/2023/01/Sweet-and-Spicy-Tomato-Chutney-square.jpg",
      price: 349,
      originalPrice: 449,
      quantity: 1,
      size: "500g"
    }
  ]);

  // Sample wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 4,
      name: "Garlic Pickle",
      image: "https://curlytales.com/wp-content/uploads/2021/01/ALOO_20PAPAD_20BIG_1024x1024.jpg",
      price: 319,
      originalPrice: 399,
      size: "500g"
    },
    {
      id: 5,
      name: "Chili Pickle",
      image: "https://availeverything.com/public/uploads/all/2uJfGJj1KFOPCcKUtmhB3zTVdHs52y3uu6jCezBQ.jpg",
      price: 259,
      originalPrice: 329,
      size: "500g"
    }
  ]);

  const recommendedProducts = [
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

  // Cart Actions
  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const moveToWishlist = (item) => {
    setWishlistItems(prev => [...prev, { ...item, quantity: undefined }]);
    removeFromCart(item.id);
  };

  // Wishlist Actions
  const removeFromWishlist = (itemId) => {
    setWishlistItems(items => items.filter(item => item.id !== itemId));
  };

  const moveToCart = (item) => {
    setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
    removeFromWishlist(item.id);
  };

  const shareProduct = (item) => {
    // In a real app, this would trigger native sharing or copy link
    alert(`Sharing: ${item.name}`);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
    // In a real app, this would navigate to checkout page
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Shopping Bag</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <ShoppingCart size={20} />
            <span>Home</span>
            <ArrowRight size={16} />
            <span className="text-orange-500 font-semibold">Shopping Cart</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('cart')}
            className={`flex items-center gap-2 px-6 py-4 font-semibold border-b-2 transition-colors ${
              activeTab === 'cart'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <ShoppingCart size={20} />
            Shopping Cart ({cartItems.length})
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex items-center gap-2 px-6 py-4 font-semibold border-b-2 transition-colors ${
              activeTab === 'wishlist'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Heart size={20} />
            Wishlist ({wishlistItems.length})
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'cart' ? (
              <div className="space-y-4">
                {cartItems.length === 0 ? (
                  <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
                    <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-600 mb-6">Add some delicious pickles to get started!</p>
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Delivery Banner */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Truck size={24} />
                        <div>
                          <p className="font-semibold">Free Delivery on orders above ₹499!</p>
                          <p className="text-sm opacity-90">
                            Add ₹{(499 - getCartTotal()).toLocaleString()} more to get free delivery
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Cart Items */}
                    {cartItems.map(item => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateCartQuantity}
                        onRemove={removeFromCart}
                        onMoveToWishlist={moveToWishlist}
                      />
                    ))}
                  </>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistItems.length === 0 ? (
                  <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
                    <Heart size={64} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-600 mb-6">Save your favorite pickles for later!</p>
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                      Explore Products
                    </button>
                  </div>
                ) : (
                  wishlistItems.map(item => (
                    <WishlistItem
                      key={item.id}
                      item={item}
                      onMoveToCart={moveToCart}
                      onRemove={removeFromWishlist}
                      onShare={shareProduct}
                    />
                  ))
                )}
              </div>
            )}
          </div>

          {/* Sidebar - Only show price summary for cart */}
          {activeTab === 'cart' && cartItems.length > 0 && (
            <PriceSummary 
              cartItems={cartItems} 
              onCheckout={handleCheckout}
            />
          )}
        </div>
        {/* Recommended Products Section */}
        <section className="w-full mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You Might Also Like
          </h2>

          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 scrollbar-hide snap-x snap-mandatory">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;