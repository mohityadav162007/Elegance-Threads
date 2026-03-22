import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-300 pt-16 pb-8">
            {/* Newsletter Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center border-b border-stone-800 pb-16">
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Join Our World</h3>
                <p className="text-stone-400 mb-8 max-w-md mx-auto">Subscribe to receive updates, access to exclusive deals, and more.</p>
                <form className="flex max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-grow bg-transparent border-b border-stone-600 text-white px-0 py-2 focus:outline-none focus:border-white transition-colors"
                        required
                    />
                    <button type="submit" className="ml-4 text-white hover:text-stone-300 transition-colors uppercase tracking-widest text-sm flex items-center font-medium">
                        Subscribe <ArrowRight size={16} className="ml-2" />
                    </button>
                </form>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Col */}
                <div>
                    <h4 className="text-white text-xl font-semibold tracking-wider mb-6">EleganceThreads</h4>
                    <p className="text-sm text-stone-400 leading-relaxed mb-6">
                        A premium fashion destination designed to bring you the finest in modern style. Discover collections that redefine elegance and comfort.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-stone-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-stone-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-stone-400 hover:text-white transition-colors"><Youtube size={20} /></a>
                    </div>
                </div>

                {/* Shop Col */}
                <div>
                    <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-6">Shop</h4>
                    <ul className="space-y-4">
                        <li><Link to="/#new-arrivals" className="text-sm text-stone-400 hover:text-white transition-colors">New Arrivals</Link></li>
                        <li><Link to="/#bestsellers" className="text-sm text-stone-400 hover:text-white transition-colors">Bestsellers</Link></li>
                        <li><Link to="/shop" className="text-sm text-stone-400 hover:text-white transition-colors">All Collections</Link></li>
                        <li><Link to="/shop?sale=true" className="text-sm text-rose-500 hover:text-rose-400 transition-colors">Sale</Link></li>
                    </ul>
                </div>

                {/* Help Col */}
                <div>
                    <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-6">Help</h4>
                    <ul className="space-y-4">
                        <li><Link to="/shipping" className="text-sm text-stone-400 hover:text-white transition-colors">Shipping & Delivery</Link></li>
                        <li><Link to="/returns" className="text-sm text-stone-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
                        <li><Link to="/size-guide" className="text-sm text-stone-400 hover:text-white transition-colors">Size Guide</Link></li>
                        <li><Link to="/faq" className="text-sm text-stone-400 hover:text-white transition-colors">FAQs</Link></li>
                        <li><Link to="/contact" className="text-sm text-stone-400 hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Col */}
                <div>
                    <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-6">Contact</h4>
                    <ul className="space-y-4 text-sm text-stone-400">
                        <li>123 Fashion Avenue</li>
                        <li>Mumbai, Maharashtra 400001</li>
                        <li>India</li>
                        <li className="pt-2">+91 98765 43210</li>
                        <li>support@elegancethreads.com</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
                <p>&copy; 2024 EleganceThreads. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
