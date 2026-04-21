import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

export default function Home() {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchProducts();
                setFeaturedProducts(data.slice(0, 4));
            } catch (e) {
                console.error('Failed to load featured products:', e);
            }
        };
        load();
    }, []);

    return (
        <div className="w-full bg-[#0a0a0a]">
            {/* Hero Section */}
            <section className="relative h-[95vh] w-full overflow-hidden flex items-end pb-20">
                <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
                    alt="Collection"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-[#c9a96e] mb-4 block font-sans">Autumn / Winter</span>
                    <h1 className="text-6xl md:text-[120px] font-serif font-bold leading-[0.9] tracking-tight text-white mb-6">
                        COLLECTION<br/><span className="text-[#c9a96e]">01</span>
                    </h1>
                    <p className="text-[#999] text-sm max-w-md mb-8 leading-relaxed border-l-2 border-[#2a2a2a] pl-4">
                        A study in structural darkness and negative space.<br/>Engineered for the cinematic void.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/shop" className="inline-block bg-white text-[#0a0a0a] px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a96e] transition-colors">
                            Explore Now
                        </Link>
                        <Link to="/collections" className="inline-block border border-[#2a2a2a] text-white px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                            View Lookbook
                        </Link>
                    </div>
                </div>
            </section>

            {/* Curated Archives */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-4">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-[1.1]">
                        CURATED<br/>ARCHIVES
                    </h2>
                    <Link to="/shop" className="text-[11px] tracking-[0.2em] uppercase text-[#999] hover:text-[#c9a96e] transition-colors flex items-center gap-2">
                        View All Archives →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Menswear Card */}
                    <Link to="/shop" className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#141414] rounded-sm">
                        <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80" alt="Menswear" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] block mb-1">Category</span>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">MENSWEAR</h3>
                        </div>
                    </Link>

                    {/* New Drops Card */}
                    <Link to="/shop" className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#141414] rounded-sm">
                        <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800&q=80" alt="New Drops" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] block mb-1">Latest Release</span>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">NEW DROPS</h3>
                            <p className="text-[#666] text-xs leading-relaxed">The latest iterations in shadow and form. Limited quantities available.</p>
                        </div>
                    </Link>
                </div>

                {/* Full Width Womenswear */}
                <Link to="/shop" className="group relative block w-full aspect-[16/7] md:aspect-[16/6] overflow-hidden bg-[#141414] mt-4 rounded-sm">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=80" alt="Womenswear" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] block mb-2">Category</span>
                        <h3 className="text-4xl md:text-7xl font-serif font-bold text-white mb-4">WOMENSWEAR</h3>
                        <span className="inline-block border border-[#c9a96e] text-[#c9a96e] px-6 py-2 text-[10px] tracking-[0.2em] uppercase group-hover:bg-[#c9a96e] group-hover:text-[#0a0a0a] transition-colors">
                            View Collection
                        </span>
                    </div>
                </Link>
            </section>

            {/* New Arrivals */}
            {featuredProducts.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="flex justify-between items-end mb-10 md:mb-14">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">NEW ARRIVALS</h2>
                        <Link to="/shop" className="text-[11px] tracking-[0.2em] uppercase text-[#999] hover:text-[#c9a96e] transition-colors">
                            View All →
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {featuredProducts.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
