import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function Checkout() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white">
            {/* Header */}
            <div className="border-b border-[#2a2a2a] py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="font-serif text-lg tracking-[0.15em] uppercase font-semibold text-white">
                    Fem Trends Studio
                </Link>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#666]">
                    <Lock size={14} /> Secure Checkout
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Forms */}
                    <div className="w-full lg:w-3/5 space-y-10">
                        {/* Contact */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">1. CONTACT</h2>
                            <div className="bg-[#141414] border border-[#2a2a2a] p-6 space-y-4">
                                <input type="email" placeholder="Email Address" className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                <label className="flex items-center gap-3 text-xs text-[#999] cursor-pointer">
                                    <input type="checkbox" className="accent-[#c9a96e]" />
                                    Subscribe to editorial updates and exclusive archive access.
                                </label>
                            </div>
                        </div>

                        {/* Shipping */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">2. SHIPPING</h2>
                            <div className="bg-[#141414] border border-[#2a2a2a] p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name" className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                    <input type="text" placeholder="Last Name" className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                    <input type="text" placeholder="Street Address" className="w-full md:col-span-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full md:col-span-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                    <input type="text" placeholder="City" className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                    <input type="text" placeholder="State/Province" className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                    <input type="text" placeholder="Postal Code" className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                </div>
                            </div>
                        </div>

                        {/* Payment */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">3. PAYMENT</h2>
                            <div className="bg-[#141414] border border-[#2a2a2a] p-6 space-y-4">
                                <div className="flex items-center justify-between bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3">
                                    <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white">
                                        <Lock size={14} /> Credit Card
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <input type="text" placeholder="Card Number" className="w-full md:col-span-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                    <input type="text" placeholder="Expiration (MM/YY)" className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                    <input type="text" placeholder="Security Code" className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                    <input type="text" placeholder="Name on Card" className="w-full md:col-span-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="w-full lg:w-2/5">
                        <div className="bg-[#141414] border border-[#2a2a2a] p-8 sticky top-24">
                            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-white mb-8">Order Summary</h2>
                            <div className="space-y-4 text-sm border-b border-[#2a2a2a] pb-6 mb-6">
                                <div className="flex justify-between"><span className="text-[#666] text-xs tracking-widest uppercase">Subtotal</span><span>₹0.00</span></div>
                                <div className="flex justify-between"><span className="text-[#666] text-xs tracking-widest uppercase">Shipping</span><span className="text-xs text-[#666]">Calculated at next step</span></div>
                                <div className="flex justify-between"><span className="text-[#666] text-xs tracking-widest uppercase">Taxes</span><span>₹0.00</span></div>
                            </div>
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xs tracking-widest uppercase text-[#666]">Total</span>
                                <span className="text-2xl font-serif text-[#c9a96e]">₹0.00</span>
                            </div>
                            <button
                                onClick={() => alert("Payment processing would happen here in production.")}
                                className="w-full bg-[#c9a96e] text-[#0a0a0a] py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#d4b87a] transition-colors flex items-center justify-center gap-2"
                            >
                                <Lock size={14} /> Place Order
                            </button>
                            <p className="text-center text-[9px] text-[#666] mt-4 tracking-wide uppercase leading-relaxed">
                                By placing your order, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
