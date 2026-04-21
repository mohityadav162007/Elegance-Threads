import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1550614000-4b95eb1580bc?q=80&w=600&auto=format&fit=crop';

export default function ProductCard({ product }) {
    const productId = product._id || product.id;
    const productImage = product.imageUrl || product.image || FALLBACK_IMAGE;

    return (
        <div className="group relative flex flex-col cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#141414] mb-4 border border-[#2a2a2a] group-hover:border-[#333] transition-colors">
                <Link to={`/product/${productId}`}>
                    <img
                        src={productImage}
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                    />
                </Link>

                {/* Badges */}
                {product.category && (
                    <div className="absolute top-3 left-3">
                        <span className="text-[9px] tracking-[0.15em] uppercase px-2 py-1 font-medium bg-[#0a0a0a]/80 text-[#c9a96e] border border-[#2a2a2a]">
                            {product.category}
                        </span>
                    </div>
                )}

                {/* Wishlist */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-[#0a0a0a]/60 border border-[#2a2a2a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-[#c9a96e] hover:text-[#c9a96e] text-white">
                    <Heart size={14} strokeWidth={1.5} />
                </button>
            </div>

            {/* Product Info */}
            <div className="flex flex-col space-y-1">
                <Link to={`/product/${productId}`} className="text-xs md:text-sm font-semibold tracking-[0.05em] uppercase text-white hover:text-[#c9a96e] transition-colors line-clamp-1">
                    {product.name}
                </Link>
                {product.category && (
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#666]">
                        {product.category}
                    </span>
                )}
                <span className="text-sm font-medium text-[#c9a96e] mt-1">
                    ₹{product.price?.toLocaleString('en-IN')}
                </span>
            </div>
        </div>
    );
}
