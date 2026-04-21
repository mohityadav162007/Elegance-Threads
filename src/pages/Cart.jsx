import { useState } from 'react';
import { Minus, Plus, X, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
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
      if (item._id === id) {
        const newQ = item.quantity + delta;
        return { ...item, quantity: newQ > 0 ? newQ : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item._id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = subtotal * discount;
  const shipping = (subtotal - discountAmount) > 2999 ? 0 : 500;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex justify-between items-end mb-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">YOUR CART</h1>
          <span className="text-xs tracking-[0.2em] uppercase text-[#666]">{cartItems.length} Items</span>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product List */}
            <div className="w-full lg:w-2/3 space-y-6">
              {cartItems.map(item => (
                <div key={item._id} className="flex gap-6 border-b border-[#2a2a2a] pb-6">
                  <div className="w-28 h-36 flex-shrink-0 bg-[#141414] border border-[#2a2a2a] overflow-hidden">
                    <img src={item.imageUrl || item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-sm font-semibold tracking-[0.05em] uppercase text-white">{item.name}</h3>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-[#666] mt-1">{item.category || 'General'}</p>
                      </div>
                      <button onClick={() => removeItem(item._id)} className="text-[#666] hover:text-white transition-colors">
                        <X size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="flex justify-between items-end mt-6">
                      <div className="flex items-center border border-[#2a2a2a]">
                        <button onClick={() => updateQuantity(item._id, -1)} className="px-3 py-2 text-[#666] hover:text-white transition-colors"><Minus size={14} /></button>
                        <span className="px-4 py-2 text-sm font-medium border-x border-[#2a2a2a]">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item._id, 1)} className="px-3 py-2 text-[#666] hover:text-white transition-colors"><Plus size={14} /></button>
                      </div>
                      <span className="text-lg font-serif text-[#c9a96e]">₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[#141414] border border-[#2a2a2a] p-8 sticky top-24">
                <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-white mb-8">Order Summary</h2>
                <div className="space-y-4 text-sm border-b border-[#2a2a2a] pb-6 mb-6">
                  <div className="flex justify-between"><span className="text-[#666] tracking-widest uppercase text-xs">Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-[#666] tracking-widest uppercase text-xs">Shipping</span><span>{shipping === 0 ? 'Complimentary' : `₹${shipping}`}</span></div>
                </div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs tracking-widest uppercase text-[#666]">Total</span>
                  <span className="text-2xl font-serif text-[#c9a96e]">₹{total.toLocaleString()}</span>
                </div>
                <Link to="/checkout" className="w-full bg-transparent border border-[#c9a96e] text-[#c9a96e] py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-colors flex justify-center items-center gap-2 mb-4">
                  Proceed to Checkout <ArrowRight size={14} />
                </Link>
                <div className="flex items-center justify-center gap-2 text-[10px] tracking-widest uppercase text-[#666]">
                  <Lock size={12} /> Secure Encrypted Checkout
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-28">
            <p className="text-2xl font-serif text-[#666] mb-8">Your cart is currently empty.</p>
            <Link to="/shop" className="inline-block border border-[#c9a96e] text-[#c9a96e] px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-colors">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
