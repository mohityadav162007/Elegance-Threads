import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, X } from 'lucide-react';

const INITIAL_WISHLIST = [
  { id: '3', name: 'Silk Wrap Evening Dress', price: 8999, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80' },
  { id: '4', name: 'Leather Crossbody Bag', price: 5499, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&q=80' }
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(INITIAL_WISHLIST);

  const removeIdea = (id) => {
    setWishlist(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="bg-[#f9f9f8] min-h-screen text-[#2d3433] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h1 className="text-4xl font-serif tracking-tight">Wishlist</h1>
          <span className="text-[#5f5e5e] text-sm tracking-widest uppercase">{wishlist.length} Items</span>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {wishlist.map(item => (
              <div key={item.id} className="bg-white group relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f9f9f8]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                  {/* Remove Overlay Action */}
                  <button
                    onClick={() => removeIdea(item.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white text-[#2d3433] transition-colors rounded-none opacity-0 group-hover:opacity-100"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <Link to={`/product/${item.id}`} className="text-base font-medium mb-1 hover:text-[#5f5e5e] transition-colors">{item.name}</Link>
                  <p className="text-lg font-serif mb-6 mt-1">₹{item.price.toLocaleString()}</p>

                  <button className="mt-auto w-full border border-[#adb3b2] text-[#2d3433] py-3 text-xs tracking-widest uppercase hover:bg-[#2d3433] hover:text-white transition-colors font-medium">
                    Add To Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white">
            <Heart size={48} strokeWidth={1} className="mx-auto text-[#adb3b2] mb-6" />
            <h2 className="text-2xl font-serif mb-4">Your wishlist is empty</h2>
            <p className="text-[#5f5e5e] mb-8 max-w-md mx-auto">Save items you love here to easily find them later or add them to your bag when you're ready.</p>
            <Link to="/shop" className="inline-block bg-[#2d3433] text-white px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#535252] transition-colors">
              Discover Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
