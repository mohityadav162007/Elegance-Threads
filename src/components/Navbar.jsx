import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Collections', path: '/collections' },
        { name: 'Archive', path: '/shop' },
        { name: 'Editorial', path: '/journal' },
        { name: 'About', path: '/about' }
    ];

    return (
        <>
            <nav className={clsx(
                "fixed w-full z-40 transition-all duration-500 border-b",
                isScrolled
                    ? "bg-[#0a0a0a]/95 backdrop-blur-md border-[#2a2a2a] py-4"
                    : "bg-transparent border-transparent py-5"
            )}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* Left Nav Links (Desktop) */}
                        <div className="hidden md:flex items-center space-x-8 flex-1">
                            {navLinks.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#999] hover:text-[#c9a96e] transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex-1">
                            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white hover:text-[#c9a96e] transition-colors p-1">
                                <Menu size={22} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Center Logo */}
                        <div className="flex-shrink-0 flex items-center justify-center">
                            <Link to="/" className="font-serif text-lg md:text-xl tracking-[0.15em] uppercase font-semibold text-white">
                                Style-lit
                            </Link>
                        </div>

                        {/* Right Icons */}
                        <div className="flex items-center space-x-5 flex-1 justify-end">
                            <Link to="/cart" className="text-white hover:text-[#c9a96e] transition-colors relative">
                                <ShoppingBag size={20} strokeWidth={1.5} />
                            </Link>
                            <Link to="/orders" className="text-white hover:text-[#c9a96e] transition-colors">
                                <User size={20} strokeWidth={1.5} />
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={clsx(
                "fixed inset-0 bg-[#0a0a0a] z-50 transition-transform duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] md:hidden flex flex-col",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex justify-between items-center p-6 border-b border-[#2a2a2a]">
                    <span className="font-serif text-lg tracking-[0.15em] uppercase text-white">Menu</span>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#c9a96e] transition-colors">
                        <X size={24} strokeWidth={1.5} />
                    </button>
                </div>
                <div className="flex-1 px-8 py-10 flex flex-col space-y-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-serif text-white hover:text-[#c9a96e] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-8 border-t border-[#2a2a2a] flex flex-col space-y-6">
                        <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-lg text-[#999] hover:text-white transition-colors">
                            <ShoppingBag size={20} className="mr-4" strokeWidth={1.5} /> Cart
                        </Link>
                        <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-lg text-[#999] hover:text-white transition-colors">
                            <User size={20} className="mr-4" strokeWidth={1.5} /> Account
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
