import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function Orders() {
    const [expandedId, setExpandedId] = useState(null);
    const orders = []; // No mock data, starts empty

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <nav className="flex text-[10px] tracking-[0.15em] uppercase text-[#666] mb-8 space-x-2 items-center">
                    <Link to="/" className="hover:text-[#c9a96e] transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-[#999]">My Orders</span>
                </nav>

                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-12">ORDERS</h1>

                {orders.length > 0 ? (
                    <div className="space-y-4">
                        {orders.map(order => (
                            <div key={order.id} className="bg-[#141414] border border-[#2a2a2a] p-6 hover:border-[#333] transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[10px] tracking-[0.15em] uppercase text-[#666] mb-1">Order {order.id}</p>
                                        <p className="text-sm font-medium">{order.items?.[0]?.name}</p>
                                    </div>
                                    <button
                                        onClick={() => setExpandedId(expandedId === order.id ? null : order.id)}
                                        className="text-[10px] tracking-[0.15em] uppercase text-[#c9a96e] border border-[#c9a96e] px-4 py-2 hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-colors"
                                    >
                                        {expandedId === order.id ? 'Hide' : 'Details'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-28 border border-[#2a2a2a] bg-[#141414]">
                        <Package size={48} strokeWidth={1} className="mx-auto text-[#333] mb-6" />
                        <h2 className="text-2xl font-serif text-white mb-4">No orders yet</h2>
                        <p className="text-[#666] mb-8 max-w-md mx-auto text-sm">Once you place an order, it will appear here.</p>
                        <Link to="/shop" className="inline-block border border-[#c9a96e] text-[#c9a96e] px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-colors">
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
