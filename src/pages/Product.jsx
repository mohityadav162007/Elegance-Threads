import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Heart, Minus, Plus, Share2, Star } from 'lucide-react';

const PRODUCT_DB = {
    '1': {
        id: '1',
        name: 'Cotton Oxford Shirt',
        price: 2999,
        description: 'A timeless wardrobe essential. Crafted from premium 100% breathable oxford cotton, this shirt offers a relaxed yet tailored fit. Features a classic button-down collar and a curved hem, perfect for both casual weekends and smart-casual office days.',
        details: ['100% Cotton', 'Regular fit', 'Machine wash cold', 'Made in India'],
        rating: 4.8,
        reviews: 124,
        images: [
            'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=800&q=80',
            'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80',
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
        ],
        colors: [
            { name: 'Pink', hex: '#fecdd3' },
            { name: 'White', hex: '#ffffff' },
            { name: 'Light Blue', hex: '#bfdbfe' }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
};

export default function Product() {
    const { id } = useParams();
    const product = PRODUCT_DB[id] || PRODUCT_DB['1']; // fallback to ID 1 for demo

    const [activeImage, setActiveImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const updateQuantity = (change) => {
        if (quantity + change >= 1 && quantity + change <= 10) {
            setQuantity(quantity + change);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Breadcrumbs */}
            <nav className="flex text-xs tracking-widest uppercase text-stone-500 mb-8 space-x-2">
                <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
                <ChevronRight size={14} />
                <Link to="/shop" className="hover:text-stone-900 transition-colors">Shop</Link>
                <ChevronRight size={14} />
                <span className="text-stone-900">{product.name}</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                {/* Image Gallery */}
                <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4">
                    <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`flex-shrink-0 w-20 h-24 md:w-24 md:h-32 bg-stone-100 border ${activeImage === idx ? 'border-stone-900' : 'border-transparent'} transition-colors`}
                            >
                                <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                    <div className="flex-grow order-1 md:order-2 bg-stone-100 aspect-[3/4] relative">
                        <img src={product.images[activeImage]} alt={product.name} className="absolute inset-0 w-full h-full object-cover object-center" />
                    </div>
                </div>

                {/* Product Info */}
                <div className="w-full lg:w-2/5 flex flex-col pt-2 md:pt-8">
                    <h1 className="text-3xl md:text-4xl font-light tracking-wide text-stone-900 mb-2">{product.name}</h1>
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-2xl font-light text-stone-900">₹{product.price.toLocaleString()}</span>
                        <div className="flex items-center text-stone-900 space-x-1 border-l border-stone-200 pl-4">
                            <Star size={14} fill="currentColor" />
                            <span className="text-sm">{product.rating} ({product.reviews} Reviews)</span>
                        </div>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed mb-8">
                        {product.description}
                    </p>

                    {/* Color Selector */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-medium tracking-widest uppercase">Color:</span>
                            <span className="text-sm text-stone-500">{selectedColor}</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {product.colors.map((color, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.name ? 'border-stone-900 p-[2px]' : 'border-transparent p-[2px]'} transition-all`}
                                >
                                    <div className="w-full h-full rounded-full border border-stone-200" style={{ backgroundColor: color.hex }}></div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Size Selector */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-medium tracking-widest uppercase">Size:</span>
                            <button className="text-xs text-stone-500 uppercase tracking-widest underline underline-offset-4 hover:text-stone-900 transition-colors">Size Guide</button>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-3 text-sm flex items-center justify-center border ${selectedSize === size ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 text-stone-900 hover:border-stone-400'} transition-all`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-4 mb-8">
                        <div className="flex items-center border border-stone-200 w-32 justify-between">
                            <button onClick={() => updateQuantity(-1)} className="p-3 text-stone-500 hover:text-stone-900 transition-colors"><Minus size={16} /></button>
                            <span className="text-sm font-medium">{quantity}</span>
                            <button onClick={() => updateQuantity(1)} className="p-3 text-stone-500 hover:text-stone-900 transition-colors"><Plus size={16} /></button>
                        </div>
                        <button className="flex-grow bg-stone-900 text-white text-sm font-medium tracking-widest uppercase hover:bg-stone-800 transition-colors">
                            Add To Bag
                        </button>
                        <button className="p-4 border border-stone-200 text-stone-900 hover:border-stone-900 transition-colors">
                            <Heart size={20} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Accordion/Tabs */}
                    <div className="border-t border-stone-200 mt-4 pt-6">
                        <div className="flex space-x-8 mb-4 border-b border-stone-200">
                            <button
                                onClick={() => setActiveTab('details')}
                                className={`text-sm tracking-widest uppercase pb-3 border-b-2 ${activeTab === 'details' ? 'border-stone-900 font-medium' : 'border-transparent text-stone-500'}`}
                            >
                                Details
                            </button>
                            <button
                                onClick={() => setActiveTab('shipping')}
                                className={`text-sm tracking-widest uppercase pb-3 border-b-2 ${activeTab === 'shipping' ? 'border-stone-900 font-medium' : 'border-transparent text-stone-500'}`}
                            >
                                Shipping
                            </button>
                        </div>
                        <div className="text-sm text-stone-600 leading-relaxed py-2">
                            {activeTab === 'details' ? (
                                <ul className="list-disc pl-5 space-y-2">
                                    {product.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Free standard shipping on all orders over ₹2,999. Usually arrives within 3-5 business days. Express shipping available at checkout. Easy 30-day returns.</p>
                            )}
                        </div>
                    </div>

                    {/* Share */}
                    <div className="mt-8 flex items-center space-x-2 text-stone-500 hover:text-stone-900 cursor-pointer transition-colors w-fit">
                        <Share2 size={16} />
                        <span className="text-xs tracking-widest uppercase font-medium">Share</span>
                    </div>

                </div>
            </div>
        </div>
    );
}
