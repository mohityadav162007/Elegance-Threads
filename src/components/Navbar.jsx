import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X, Globe, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Shop', path: '/shop', hasDropdown: true },
        { name: 'Collections', path: '/collections' },
        { name: 'About', path: '/about' },
        { name: 'Journal', path: '/journal' }
    ];

    return (
        <>
            <nav className={clsx(
                "fixed w-full z-40 transition-all duration-300 border-b border-transparent top-10",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-stone-200 py-4" : "bg-white py-6"
            )}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-full">

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMobileMenuOpen(true)} className="text-stone-900 hover:text-stone-500 transition-colors p-2 -ml-2">
                                <Menu size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
                            <Link to="/" className="font-serif text-2xl tracking-tighter uppercase font-medium text-stone-900">
                                Elegance Threads
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-10">
                            {navLinks.map((link) => (link.hasDropdown ? (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => setIsShopDropdownOpen(true)}
                                    onMouseLeave={() => setIsShopDropdownOpen(false)}
                                >
                                    <Link to={link.path} className="text-xs font-sans tracking-widest uppercase text-stone-900 hover:text-stone-500 transition-colors flex items-center">
                                        {link.name} <ChevronDown size={14} className="ml-1" />
                                    </Link>
                                    {/* Dropdown Menu */}
                                    <div className={clsx("absolute top-full left-0 pt-6 transition-all duration-300 w-48", isShopDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible")}>
                                        <div className="bg-white border border-stone-200 shadow-xl py-4 flex flex-col space-y-3">
                                            <Link to="/shop" className="px-6 text-xs tracking-widest uppercase hover:text-stone-500 transition-colors">All Clothing</Link>
                                            <Link to="/shop" className="px-6 text-xs tracking-widest uppercase hover:text-stone-500 transition-colors">Dresses</Link>
                                            <Link to="/shop" className="px-6 text-xs tracking-widest uppercase hover:text-stone-500 transition-colors">Tops & Shirts</Link>
                                            <Link to="/shop" className="px-6 text-xs tracking-widest uppercase hover:text-stone-500 transition-colors">Trousers</Link>
                                            <Link to="/shop" className="px-6 text-xs tracking-widest uppercase hover:text-stone-500 transition-colors">Outerwear</Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link key={link.name} to={link.path} className="text-xs font-sans tracking-widest uppercase text-stone-900 hover:text-stone-500 transition-colors">
                                    {link.name}
                                </Link>
                            )))}
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-5 flex-1 md:flex-none justify-end">
                            <div className="relative group hidden sm:block">
                                <button
                                    onClick={() => setIsLangOpen(!isLangOpen)}
                                    className="text-stone-900 hover:text-stone-500 transition-colors"
                                >
                                    <Globe size={20} strokeWidth={1.5} />
                                </button>
                                {/* Language Modal */}
                                {isLangOpen && (
                                    <div className="absolute top-full right-0 mt-4 w-40 bg-white border border-stone-200 shadow-xl py-4 flex flex-col space-y-3 z-50">
                                        <button onClick={() => setIsLangOpen(false)} className="px-6 text-left text-xs tracking-widest uppercase hover:text-stone-500 transition-colors font-medium">English (USD)</button>
                                        <button onClick={() => setIsLangOpen(false)} className="px-6 text-left text-xs tracking-widest uppercase hover:text-stone-500 transition-colors">French (EUR)</button>
                                        <button onClick={() => setIsLangOpen(false)} className="px-6 text-left text-xs tracking-widest uppercase hover:text-stone-500 transition-colors">German (EUR)</button>
                                    </div>
                                )}
                            </div>
                            <button onClick={() => setIsSearchOpen(true)} className="text-stone-900 hover:text-stone-500 transition-colors">
                                <Search size={20} strokeWidth={1.5} />
                            </button>
                            <Link to="/orders" className="text-stone-900 hover:text-stone-500 transition-colors">
                                <User size={20} strokeWidth={1.5} />
                            </Link>
                            <Link to="/wishlist" className="text-stone-900 hover:text-stone-500 transition-colors relative">
                                <Heart size={20} strokeWidth={1.5} />
                                <span className="absolute -top-1.5 -right-2 bg-rose-600 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">2</span>
                            </Link>
                            <Link to="/cart" className="text-stone-900 hover:text-stone-500 transition-colors relative">
                                <ShoppingBag size={20} strokeWidth={1.5} />
                                <span className="absolute -top-1.5 -right-2 bg-stone-900 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">3</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Search Overlay */}
            <div className={clsx("fixed inset-0 bg-white/95 backdrop-blur-md z-50 transition-all duration-500 flex flex-col justify-center items-center px-4", isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none")}>
                <button onClick={() => setIsSearchOpen(false)} className="absolute top-8 right-8 text-stone-900 hover:text-stone-500 transition-colors p-4">
                    <X size={32} strokeWidth={1} />
                </button>
                <div className="w-full max-w-3xl relative">
                    <Search size={24} className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                        type="text"
                        placeholder="Type to search..."
                        autoFocus={isSearchOpen}
                        className="w-full bg-transparent border-b-2 border-stone-200 focus:border-stone-900 py-6 pl-12 pr-4 text-3xl font-serif text-stone-900 placeholder:text-stone-300 focus:outline-none transition-colors"
                    />
                </div>
                <div className="mt-12 text-center">
                    <p className="text-xs uppercase tracking-widest text-stone-500 mb-6">Popular Searches</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-6 py-2 border border-stone-200 text-xs tracking-widest uppercase hover:bg-stone-50 transition-colors">Silk Dresses</button>
                        <button className="px-6 py-2 border border-stone-200 text-xs tracking-widest uppercase hover:bg-stone-50 transition-colors">Linen Trousers</button>
                        <button className="px-6 py-2 border border-stone-200 text-xs tracking-widest uppercase hover:bg-stone-50 transition-colors">Summer Collection</button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={clsx(
                "fixed inset-0 bg-white z-50 transition-transform duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] md:hidden pointer-events-none",
                isMobileMenuOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full"
            )}>
                <div className="flex flex-col h-full bg-[#f9f9f8]">
                    <div className="flex justify-between items-center p-6 border-b border-[#ebeeed] bg-white">
                        <span className="font-serif text-xl tracking-tighter uppercase font-medium text-[#2d3433]">Menu</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#2d3433] hover:text-[#5f5e5e] transition-colors p-2 -mr-2">
                            <X size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto w-full max-w-sm mx-auto p-8 flex flex-col justify-center space-y-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-serif text-[#2d3433] hover:text-[#5f5e5e] transition-colors text-center"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-8 flex justify-center space-x-6">
                            <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)} className="text-[#2d3433] text-sm uppercase tracking-widest border border-[#adb3b2] px-6 py-3">Orders</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
