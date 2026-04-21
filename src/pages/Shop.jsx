import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';
import { fetchProducts } from '../services/api';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(50000);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (e) {
                console.error('Failed to load products:', e);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    const categories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const filteredProducts = products.filter(p =>
        (activeCategory === 'All' || p.category === activeCategory) &&
        p.price <= priceRange
    );

    return (
        <div className="bg-[#0a0a0a] min-h-screen">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-8">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-3">ARCHIVE</h1>
                <p className="text-[#666] text-sm">A curated selection of past seasons. Limited availability.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="w-full md:w-56 flex-shrink-0 space-y-8 md:sticky md:top-24 md:h-fit">
                        {/* Category */}
                        <div>
                            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Category</h3>
                            <ul className="space-y-3">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setActiveCategory(cat)}
                                            className={`flex items-center text-sm transition-colors ${activeCategory === cat ? 'text-[#c9a96e]' : 'text-[#666] hover:text-white'}`}
                                        >
                                            <span className={`w-4 h-4 border mr-3 flex items-center justify-center ${activeCategory === cat ? 'border-[#c9a96e] bg-[#c9a96e]' : 'border-[#333]'}`}>
                                                {activeCategory === cat && <span className="text-[#0a0a0a] text-[10px]">✓</span>}
                                            </span>
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Size */}
                        <div>
                            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Size</h3>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map(size => (
                                    <button key={size} className="w-11 h-11 border border-[#2a2a2a] flex items-center justify-center text-xs text-[#999] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow">
                        {/* Results Bar */}
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#2a2a2a]">
                            <span className="text-xs text-[#666] tracking-widest uppercase">Showing {filteredProducts.length} results</span>
                            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#999]">
                                <span className="text-[#666]">Sort by</span>
                                <button className="flex items-center text-white hover:text-[#c9a96e] transition-colors font-semibold">
                                    Newest <ChevronDown size={14} className="ml-1" />
                                </button>
                            </div>
                        </div>

                        {/* Product Grid */}
                        {loading ? (
                            <div className="flex items-center justify-center h-64">
                                <div className="text-[#666] text-sm tracking-widest uppercase">Loading...</div>
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-64 border border-dashed border-[#2a2a2a]">
                                <p className="text-[#666] mb-4 text-sm">No products found.</p>
                                <button
                                    onClick={() => { setActiveCategory('All'); setPriceRange(50000); }}
                                    className="text-[10px] tracking-[0.2em] uppercase border border-[#c9a96e] text-[#c9a96e] px-6 py-2 hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
