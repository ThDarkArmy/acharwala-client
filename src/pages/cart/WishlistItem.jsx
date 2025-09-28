import React from 'react';
import { ShoppingCart, Trash2, Share2 } from 'lucide-react';

const WishlistItem = ({ item, onMoveToCart, onRemove, onShare }) => {
  const { id, name, image, price, originalPrice, size } = item;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img 
            src={image} 
            alt={name}
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900">{name}</h3>
              <p className="text-gray-600 text-sm mt-1">Size: {size}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-bold text-gray-900">₹{price}</span>
                {originalPrice > price && (
                  <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button 
                onClick={() => onShare(item)}
                className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                title="Share Product"
              >
                <Share2 size={16} />
              </button>
              <button 
                onClick={() => onRemove(id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                title="Remove from Wishlist"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <button 
              onClick={() => onMoveToCart(item)}
              className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-semibold"
            >
              <ShoppingCart size={16} />
              Move to Cart
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;