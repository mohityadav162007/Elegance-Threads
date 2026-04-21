import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h4 className="font-serif text-lg tracking-[0.15em] uppercase font-semibold text-white mb-6">
                            Style-lit
                        </h4>
                        <p className="text-sm text-[#666] leading-relaxed">
                            &copy; {new Date().getFullYear()} Style-lit. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <ul className="space-y-4">
                            <li><Link to="/privacy" className="text-xs tracking-[0.15em] uppercase text-[#666] hover:text-[#c9a96e] transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-xs tracking-[0.15em] uppercase text-[#666] hover:text-[#c9a96e] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-4">
                            <li><Link to="/shipping" className="text-xs tracking-[0.15em] uppercase text-[#666] hover:text-[#c9a96e] transition-colors">Shipping & Returns</Link></li>
                            <li><Link to="/contact" className="text-xs tracking-[0.15em] uppercase text-[#666] hover:text-[#c9a96e] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h5 className="text-xs tracking-[0.15em] uppercase text-[#666] mb-4">Newsletter</h5>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="ENTER EMAIL"
                                className="w-full bg-[#141414] border border-[#2a2a2a] text-white px-4 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-[#c9a96e] transition-colors placeholder:text-[#666]"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
