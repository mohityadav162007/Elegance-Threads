import { useState } from 'react';
import { Minus, Plus, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const INITIAL_CART = [
  { id: '1', name: 'Cotton Oxford Shirt', price: 2999, image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=800&q=80', color: 'White', size: 'M', quantity: 1 },
  { id: '2', name: 'Linen Blend Trousers', price: 3499, image: 'https://images.unsplash.com/photo-1594612399992-1b1517cc63f2?w=800&q=80', color: 'Stone', size: 'L', quantity: 2 },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [promo, setPromo] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromo = () => {
    if (promo.toUpperCase() === 'WELCOME10') {
      setDiscount(0.1);
    } else {
      alert("Invalid promo code");
      setDiscount(0);
    }
  };

  const updateQuantity = (id, delta) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return { ...item, quantity: newQ > 0 ? newQ : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = subtotal * discount;
  const shipping = (subtotal - discountAmount) > 2999 ? 0 : 500;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="bg-[#f9f9f8] min-h-screen text-[#2d3433] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif tracking-tight mb-12">Your Basket</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Product List */}
            <div className="w-full lg:w-2/3 space-y-4 sm:space-y-8">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white p-4 sm:p-6 flex flex-row gap-4 sm:gap-6 items-center border-b border-[#f2f4f3] group transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                  <div className="w-20 sm:w-24 h-28 sm:h-32 flex-shrink-0 bg-[#f9f9f8] overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1 sm:mb-2">
                      <Link to={`/product/${item.id}`} className="text-sm sm:text-lg font-medium hover:text-[#5f5e5e] transition-colors">{item.name}</Link>
                      <button onClick={() => removeItem(item.id)} className="text-[#adb3b2] hover:text-[#2d3433] transition-colors -mt-1 -mr-1 p-1">
                        <X size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-sm font-sans tracking-widest uppercase text-[#5f5e5e] mb-4">
                      {item.color} | Size: {item.size}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-[#adb3b2] w-24 sm:w-32 justify-between">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 sm:p-2 hover:bg-[#f9f9f8] transition-colors"><Minus size={14} /></button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 sm:p-2 hover:bg-[#f9f9f8] transition-colors"><Plus size={14} /></button>
                      </div>
                      <span className="text-base sm:text-lg font-serif">₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white p-8 sticky top-32">
                <h2 className="text-lg font-medium uppercase tracking-widest mb-6 border-b border-[#adb3b2] pb-4">Order Summary</h2>

                <div className="space-y-4 mb-8 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5f5e5e]">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-green-700">
                      <span>Discount (10%)</span>
                      <span>-₹{discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-[#5f5e5e]">Estimated Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8 pt-4 border-t border-[#adb3b2]">
                  <span className="text-lg font-serif">Total</span>
                  <span className="text-2xl font-serif">₹{total.toLocaleString()}</span>
                </div>

                {/* Promo Code */}
                <div className="mb-8 relative group">
                  <input
                    type="text"
                    placeholder="PROMO CODE"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    className="w-full bg-transparent border-b border-[#adb3b2] py-3 text-sm tracking-widest uppercase focus:outline-none focus:border-[#2d3433] transition-colors"
                  />
                  <button
                    onClick={applyPromo}
                    className="absolute right-0 top-3 text-xs tracking-widest uppercase font-medium text-[#5f5e5e] hover:text-[#2d3433] transition-colors"
                  >
                    Apply
                  </button>
                  {discount > 0 && <p className="text-green-600 text-xs mt-2 uppercase tracking-widest">Promo Applied!</p>}
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-[#2d3433] text-white py-4 text-xs font-medium tracking-widest uppercase hover:bg-[#535252] transition-colors flex justify-center items-center group"
                >
                  Proceed to Checkout <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl font-serif text-[#5f5e5e] mb-8">Your basket is currently empty.</p>
            <Link to="/shop" className="inline-block bg-[#2d3433] text-white px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-[#535252] transition-colors">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
