import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Checkout() {
    return (
        <div className="bg-[#f9f9f8] min-h-screen text-[#2d3433] py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/cart" className="flex items-center text-xs tracking-widest uppercase text-[#5f5e5e] hover:text-[#2d3433] transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" /> Back to bag
                </Link>

                <h1 className="text-4xl font-serif tracking-tight mb-8">Checkout</h1>

                <div className="bg-white p-8 mb-8 border border-[#f2f4f3]">
                    <h2 className="text-sm font-medium tracking-widest uppercase mb-6 border-b border-[#f2f4f3] pb-4">Contact Information</h2>
                    <div className="space-y-4">
                        <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-[#adb3b2] py-3 text-sm focus:outline-none focus:border-[#2d3433] transition-colors" />
                    </div>
                </div>

                <div className="bg-white p-8 mb-8 border border-[#f2f4f3]">
                    <h2 className="text-sm font-medium tracking-widest uppercase mb-6 border-b border-[#f2f4f3] pb-4">Shipping Address</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-[#adb3b2] py-3 text-sm focus:outline-none focus:border-[#2d3433] transition-colors" />
                        <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-[#adb3b2] py-3 text-sm focus:outline-none focus:border-[#2d3433] transition-colors" />
                        <input type="text" placeholder="Address" className="w-full col-span-2 bg-transparent border-b border-[#adb3b2] py-3 text-sm focus:outline-none focus:border-[#2d3433] transition-colors" />
                        <input type="text" placeholder="City" className="w-full bg-transparent border-b border-[#adb3b2] py-3 text-sm focus:outline-none focus:border-[#2d3433] transition-colors" />
                        <input type="text" placeholder="Postal Code" className="w-full bg-transparent border-b border-[#adb3b2] py-3 text-sm focus:outline-none focus:border-[#2d3433] transition-colors" />
                    </div>
                </div>

                <div className="bg-white p-8 mb-8 border border-[#f2f4f3]">
                    <h2 className="text-sm font-medium tracking-widest uppercase mb-6 border-b border-[#f2f4f3] pb-4">Payment Setup</h2>
                    <div className="flex space-x-4 mb-4">
                        <label className="flex items-center space-x-2 text-sm cursor-pointer">
                            <input type="radio" name="payment" className="accent-[#2d3433]" defaultChecked />
                            <span>Credit Card</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm cursor-pointer border-[#adb3b2]">
                            <input type="radio" name="payment" className="accent-[#2d3433]" />
                            <span>PayPal</span>
                        </label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Card Number" className="w-full col-span-2 bg-transparent border-b border-[#adb3b2] py-3 text-sm focus:outline-none focus:border-[#2d3433] transition-colors" />
                        <input type="text" placeholder="Expiration Date (MM/YY)" className="w-full bg-transparent border-b border-[#adb3b2] py-3 text-sm focus:outline-none focus:border-[#2d3433] transition-colors" />
                        <input type="text" placeholder="Security Code" className="w-full bg-transparent border-b border-[#adb3b2] py-3 text-sm focus:outline-none focus:border-[#2d3433] transition-colors" />
                    </div>
                </div>

                <button
                    onClick={() => alert("Payment logic would process here in production.")}
                    className="w-full bg-[#2d3433] text-white py-4 text-xs font-medium tracking-widest uppercase hover:bg-[#535252] transition-colors mb-20"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
}
