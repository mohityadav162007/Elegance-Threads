import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex justify-between items-end mb-12">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">WISHLIST</h1>
          <span className="text-xs tracking-[0.2em] uppercase text-[#666]">{wishlist.length} Items</span>
        </div>

        <div className="text-center py-28 border border-[#2a2a2a] bg-[#141414]">
          <Heart size={48} strokeWidth={1} className="mx-auto text-[#333] mb-6" />
          <h2 className="text-2xl font-serif text-white mb-4">Your wishlist is empty</h2>
          <p className="text-[#666] mb-8 max-w-md mx-auto text-sm">Save items you love here to easily find them later.</p>
          <Link to="/shop" className="inline-block border border-[#c9a96e] text-[#c9a96e] px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-colors">
            Discover Products
          </Link>
        </div>
      </div>
    </div>
  );
}
