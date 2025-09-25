import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Phone,
  ChevronDown,
  Heart
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Categories for pickle store
  const categories = [
    {
      name: 'Pickles',
      icon: '🥒',
      subcategories: ['Mango Pickle', 'Lemon Pickle', 'Mixed Pickle', 'Spicy Pickle', 'Sweet Pickle']
    },
    {
      name: 'Papads',
      icon: '🍘',
      subcategories: ['Rice Papad', 'Masala Papad', 'Urad Dal Papad', 'Mixed Papad']
    },
    {
      name: 'Chutneys',
      icon: '🥫',
      subcategories: ['Coconut Chutney', 'Mint Chutney', 'Tamarind Chutney', 'Tomato Chutney']
    },
    {
      name: 'Custom',
      icon: '🎨',
      subcategories: ['Build Your Own', 'Gift Packs', 'Combo Offers']
    }
  ];

  const featuredProducts = [
    { name: 'Spicy Mango Pickle', price: '₹299', image: '/api/placeholder/80/80' },
    { name: 'Masala Papad', price: '₹149', image: '/api/placeholder/80/80' },
    { name: 'Special Combo', price: '₹499', image: '/api/placeholder/80/80' }
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center flex-wrap gap-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>Free shipping on orders above ₹499</span>
            </div>
            <span className="hidden md:block">•</span>
            <div className="flex items-center">
              <span>Need help? Call: +91 98765 43210</span>
            </div>
            <span className="hidden md:block">•</span>
            <div className="flex items-center">
              <span>🎉 Festival Sale: Up to 40% OFF!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`flex sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-gradient-to-b from-amber-50 to-white'
      }`}>
        <div className="container mx-auto px-4">
          {/* Top Section - Logo, Search, Actions */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-3xl font-bold text-amber-700 flex items-center">
                <span className="text-4xl">🥒</span>
                <span className="ml-2 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                  AcharWala
                </span>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for pickles, papads, chutneys..."
                  className="w-full pl-6 pr-12 py-3 rounded-full border-2 border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors duration-200">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <button className="hidden md:flex items-center text-gray-700 hover:text-amber-600 transition-colors p-2 rounded-lg hover:bg-amber-50">
                <Heart className="h-5 w-5" />
                <span className="ml-1 text-sm hidden lg:block">Wishlist</span>
              </button>

              {/* Account */}
              <button className="flex items-center text-gray-700 hover:text-amber-600 transition-colors p-2 rounded-lg hover:bg-amber-50">
                <User className="h-5 w-5" />
                <span className="ml-1 text-sm hidden lg:block">Account</span>
              </button>

              {/* Cart */}
              <button className="flex items-center text-gray-700 hover:text-amber-600 transition-colors p-2 rounded-lg hover:bg-amber-50 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-1 text-sm hidden lg:block">Cart</span>
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  3
                </span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-amber-600 rounded-lg hover:bg-amber-50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:block border-t border-gray-200 pt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    className="relative group"
                    onMouseEnter={() => setActiveCategory(index)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <button className="flex items-center text-gray-800 hover:text-amber-600 font-medium py-2 transition-colors">
                      <span className="text-lg mr-2">{category.icon}</span>
                      {category.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Mega Dropdown */}
                    {activeCategory === index && (
                      <div className="absolute left-0 top-full w-96 bg-white shadow-2xl rounded-lg border border-gray-200 z-50 animate-fade-in">
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                <span className="text-lg mr-2">{category.icon}</span>
                                {category.name}
                              </h4>
                              <ul className="space-y-2">
                                {category.subcategories.map((subcategory) => (
                                  <li key={subcategory}>
                                    <a
                                      href="#"
                                      className="text-gray-600 hover:text-amber-600 transition-colors block py-2 px-3 rounded-lg hover:bg-amber-50"
                                    >
                                      {subcategory}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-amber-50 rounded-lg p-4">
                              <h5 className="font-semibold text-amber-800 mb-3">
                                Featured {category.name}
                              </h5>
                              <div className="space-y-3">
                                {featuredProducts.slice(0, 2).map((product) => (
                                  <div key={product.name} className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                      <span className="text-2xl">🥒</span>
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-amber-900">{product.name}</p>
                                      <p className="text-sm text-amber-600">{product.price}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                                View All
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Special Links */}
              <div className="flex items-center space-x-6">
                <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  🎁 Special Offers
                </a>
                <a href="#" className="text-gray-800 hover:text-amber-600 font-medium flex items-center">
                  ⭐ Best Sellers
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden border-t border-gray-200 px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-3 rounded-full border-2 border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Categories */}
              <div className="space-y-4">
                {categories.map((category) => (
                  <details key={category.name} className="group">
                    <summary className="flex items-center justify-between py-3 text-gray-800 font-medium cursor-pointer list-none">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{category.icon}</span>
                        {category.name}
                      </div>
                      <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                    </summary>
                    <ul className="pl-10 mt-2 space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory}>
                          <a
                            href="#"
                            className="block py-2 text-gray-600 hover:text-amber-600 transition-colors"
                          >
                            {subcategory}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>

              {/* Mobile Action Links */}
              <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
                <a href="#" className="block py-2 text-red-600 font-medium">
                  🎁 Special Offers
                </a>
                <a href="#" className="block py-2 text-gray-800 font-medium">
                  ⭐ Best Sellers
                </a>
              </div>

              {/* Mobile User Actions */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center py-2 px-4 text-gray-700 border border-gray-300 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-colors">
                    <User className="h-5 w-5 mr-2" />
                    Account
                  </button>
                  <button className="flex items-center justify-center py-2 px-4 text-gray-700 border border-gray-300 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-colors">
                    <Heart className="h-5 w-5 mr-2" />
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;