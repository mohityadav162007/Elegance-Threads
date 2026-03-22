import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    const [activeColorStyle, setActiveColorStyle] = useState(product.colors[0]);

    return (
        <div
            className="group relative flex flex-col cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4 rounded-sm">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={isHovered && product.hoverImage ? product.hoverImage : product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                </Link>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.badge && (
                        <span className={`text-[10px] tracking-widest uppercase px-2 py-1 font-medium ${product.badge === 'Sale' ? 'bg-rose-600 text-white' : 'bg-white text-stone-900 border border-stone-200'}`}>
                            {product.badge}
                        </span>
                    )}
                    {product.discount && (
                        <span className="text-[10px] tracking-widest uppercase px-2 py-1 font-medium bg-rose-600 text-white">
                            {product.discount}
                        </span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-sm transition-opacity duration-300 hover:text-rose-600">
                    <Heart size={16} strokeWidth={1.5} />
                </button>
            </div>

            {/* Product Info */}
            <div className="flex flex-col space-y-1">
                <div className="flex justify-between items-start">
                    <Link to={`/product/${product.id}`} className="text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors line-clamp-1">
                        {product.name}
                    </Link>
                    <span className="text-sm font-medium text-stone-900 ml-4 flex-shrink-0">
                        ₹{product.price.toLocaleString('en-IN')}
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center text-stone-400 space-x-1">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className={i < Math.floor(product.rating) ? 'text-stone-900' : ''} />
                        ))}
                    </div>
                    <span className="text-xs">({product.reviews})</span>
                </div>

                {/* Color Swatches */}
                {product.colors && product.colors.length > 0 && (
                    <div className="flex space-x-1 pt-2">
                        {product.colors.map((color, idx) => (
                            <button
                                key={idx}
                                onMouseEnter={() => setActiveColorStyle(color)}
                                className={`w-3.5 h-3.5 rounded-full border ${activeColorStyle === color ? 'border-stone-400 p-[1px]' : 'border-stone-200'} transition-all`}
                            >
                                <div className="w-full h-full rounded-full" style={{ backgroundColor: color }}></div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
