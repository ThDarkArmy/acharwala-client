import React from 'react';
import { Truck, Shield, BadgeCheck } from 'lucide-react';

const PriceSummary = ({ cartItems, onCheckout }) => {
  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
    const discount = originalTotal - subtotal;
    const deliveryFee = subtotal > 499 ? 0 : 40;
    const total = subtotal + deliveryFee;

    return { subtotal, discount, deliveryFee, total, originalTotal };
  };

  const { subtotal, discount, deliveryFee, total, originalTotal } = calculateTotals();

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Price Details</h3>
      
      {/* Price Breakdown */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total MRP</span>
          <span className="text-gray-900">₹{originalTotal.toLocaleString()}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Discount on MRP</span>
            <span className="text-green-600">-₹{discount.toLocaleString()}</span>
          </div>
        )}
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Delivery Fee</span>
          <span className={deliveryFee === 0 ? "text-green-600" : "text-gray-900"}>
            {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
          </span>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex justify-between text-lg font-bold">
            <span>Total Amount</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          {deliveryFee === 0 && (
            <p className="text-green-600 text-sm mt-1">
              You saved ₹{discount} on this order!
            </p>
          )}
        </div>
      </div>

      {/* Checkout Button */}
      <button 
        onClick={onCheckout}
        className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors mt-6 shadow-lg hover:shadow-xl"
      >
        Proceed to Checkout
      </button>

      {/* Trust Badges */}
      <div className="mt-6 space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-green-600" />
          <span>Safe and Secure Payments</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck size={16} className="text-blue-600" />
          <span>Free delivery on orders above ₹499</span>
        </div>
        <div className="flex items-center gap-2">
          <BadgeCheck size={16} className="text-orange-600" />
          <span>100% Authentic Products</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;