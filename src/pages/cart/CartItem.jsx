import React from 'react';
import { Plus, Minus, Trash2, Heart } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove, onMoveToWishlist }) => {
  const { id, name, image, price, originalPrice, quantity, size } = item;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img 
            src={image} 
            alt={name}
            className="w-24 h-24 object-cover rounded-lg border border-gray-200"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
              <p className="text-gray-600 text-sm mt-1">Size: {size}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xl font-bold text-gray-900">₹{price}</span>
                {originalPrice > price && (
                  <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button 
                onClick={() => onMoveToWishlist(item)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                title="Move to Wishlist"
              >
                <Heart size={18} />
              </button>
              <button 
                onClick={() => onRemove(id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                title="Remove Item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1">
                <button 
                  onClick={() => onUpdateQuantity(id, quantity - 1)}
                  disabled={quantity <= 1}
                  className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button 
                  onClick={() => onUpdateQuantity(id, quantity + 1)}
                  className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">
                ₹{(price * quantity).toLocaleString()}
              </div>
              {originalPrice > price && (
                <div className="text-sm text-green-600">
                  You save ₹{((originalPrice - price) * quantity).toLocaleString()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;