import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, Check } from 'lucide-react';

const ALL_PRODUCTS = [
    { id: '1', name: 'Cotton Oxford Shirt', price: 2999, rating: 4.8, reviews: 124, image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=800&q=80', badge: 'New', colors: ['#fecdd3', '#ffffff', '#bfdbfe'], category: 'Men' },
    { id: '2', name: 'Linen Blend Trousers', price: 3499, rating: 4.5, reviews: 89, image: 'https://images.unsplash.com/photo-1594612399992-1b1517cc63f2?w=800&q=80', badge: 'Bestseller', colors: ['#e7e5e4', '#292524'], category: 'Men' },
    { id: '3', name: 'Silk Wrap Evening Dress', price: 8999, rating: 4.9, reviews: 210, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80', discount: '-30%', badge: 'Sale', colors: ['#000000', '#991b1b'], category: 'Dresses' },
    { id: '4', name: 'Leather Crossbody Bag', price: 5499, rating: 4.7, reviews: 56, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&q=80', colors: ['#78350f', '#000000'], category: 'Accessories' },
    { id: '5', name: 'Pleated Midi Skirt', price: 2499, rating: 4.6, reviews: 78, image: 'https://images.unsplash.com/photo-1574845585501-831d6d4596b6?w=800&q=80', colors: ['#f87171', '#000000'], category: 'Women' },
    { id: '6', name: 'Cashmere Knit Sweater', price: 6999, rating: 4.9, reviews: 142, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80', badge: 'New', colors: ['#e7e5e4', '#a8a29e'], category: 'Women' },
];

export default function Shop() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(10000);

    const categories = ['All', 'Women', 'Men', 'Accessories', 'Dresses'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const colors = ['#000000', '#ffffff', '#e7e5e4', '#fecdd3', '#bfdbfe', '#991b1b', '#78350f'];

    const filteredProducts = ALL_PRODUCTS.filter(p =>
        (activeCategory === 'All' || p.category === activeCategory) &&
        p.price <= priceRange
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-stone-200 pb-6">
                <h1 className="text-3xl font-light tracking-wide text-stone-900 mb-4 md:mb-0">
                    Shop {activeCategory !== 'All' ? activeCategory : 'All Collections'}
                </h1>
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-stone-500">{filteredProducts.length} Products</span>
                    <div className="relative">
                        <button className="flex items-center text-sm font-medium tracking-widest uppercase border border-stone-200 px-4 py-2 hover:border-stone-900 transition-colors">
                            Sort By <ChevronDown size={16} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className="w-full md:w-64 flex-shrink-0 space-y-8 pr-4">
                    {/* Category Filter */}
                    <div>
                        <h3 className="text-sm font-medium tracking-widest uppercase mb-4 flex items-center">
                            <Filter size={16} className="mr-2" /> Categories
                        </h3>
                        <ul className="space-y-2">
                            {categories.map(cat => (
                                <li key={cat}>
                                    <button
                                        onClick={() => setActiveCategory(cat)}
                                        className={`text-sm ${activeCategory === cat ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-900'} transition-colors`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Filter */}
                    <div>
                        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Price Range</h3>
                        <input
                            type="range"
                            min="0"
                            max="15000"
                            step="500"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="w-full accent-stone-900 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-stone-500 mt-2">
                            <span>₹0</span>
                            <span>₹{priceRange.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Size Filter */}
                    <div>
                        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map(size => (
                                <button key={size} className="w-10 h-10 border border-stone-200 flex items-center justify-center text-sm hover:border-stone-900 transition-colors">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Filter */}
                    <div>
                        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Color</h3>
                        <div className="flex flex-wrap gap-2">
                            {colors.map((color, idx) => (
                                <button
                                    key={idx}
                                    className={`w-6 h-6 rounded-full border border-stone-200 hover:scale-110 transition-transform`}
                                    style={{ backgroundColor: color }}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="flex-grow">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 border border-dashed border-stone-300">
                            <p className="text-stone-500 mb-4">No products found matching your filters.</p>
                            <button
                                onClick={() => { setActiveCategory('All'); setPriceRange(15000); }}
                                className="text-sm tracking-widest uppercase bg-stone-900 text-white px-6 py-2"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
