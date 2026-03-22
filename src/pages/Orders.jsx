import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const ORDERS = [
    {
        id: 'ORD-9824',
        date: 'March 15, 2026',
        status: 'Delivered',
        total: 8999,
        items: [
            { id: '3', name: 'Silk Wrap Evening Dress', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=80', price: 8999, qty: 1 }
        ],
        address: '123 Fashion Avenue, Mumbai, 400001',
        payment: 'Visa ending in 4242'
    },
    {
        id: 'ORD-8711',
        date: 'February 28, 2026',
        status: 'Processing',
        total: 6498,
        items: [
            { id: '1', name: 'Cotton Oxford Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=400&q=80', price: 2999, qty: 1 },
            { id: '2', name: 'Linen Blend Trousers', image: 'https://images.unsplash.com/photo-1594612399992-1b1517cc63f2?w=400&q=80', price: 3499, qty: 1 }
        ],
        address: '123 Fashion Avenue, Mumbai, 400001',
        payment: 'PayPal (mohityadav16.2026@gmail.com)'
    }
];

export default function Orders() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleOrder = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="bg-[#f9f9f8] min-h-screen text-[#2d3433] py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <nav className="flex text-xs tracking-widest uppercase text-[#5f5e5e] mb-8 space-x-2">
                    <Link to="/" className="hover:text-[#2d3433] transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#2d3433]">My Orders</span>
                </nav>

                <h1 className="text-4xl font-serif tracking-tight mb-12">Order History</h1>

                <div className="space-y-6">
                    {ORDERS.map(order => (
                        <div key={order.id} className="bg-white border border-[#ebeeed] p-6 lg:p-8 flex flex-col hover:shadow-md transition-shadow duration-300">
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between group">
                                <div className="flex gap-6 items-center">
                                    <div className="w-20 h-24 bg-[#f9f9f8] flex-shrink-0 relative overflow-hidden">
                                        <img src={order.items[0].image} alt={order.items[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        {order.items.length > 1 && (
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                <span className="text-white text-xs font-medium tracking-widest uppercase">+{order.items.length - 1}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <p className="text-xs tracking-widest uppercase text-[#5f5e5e] mb-2">Order {order.id}</p>
                                        <h3 className="text-lg font-medium mb-1">{order.items[0].name} {order.items.length > 1 && '& More'}</h3>
                                        <div className="flex items-center space-x-4 text-sm text-[#5f5e5e]">
                                            <span>{order.date}</span>
                                            <span className="w-1 h-1 bg-[#adb3b2] rounded-full"></span>
                                            <span className="font-serif text-[#2d3433]">₹{order.total.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end w-full md:w-auto gap-4">
                                    <div className="flex items-center space-x-2">
                                        <div className={`w - 2 h - 2 rounded - full ${order.status === 'Delivered' ? 'bg-green-600' : 'bg-amber-500'} `}></div>
                                        <span className="text-sm font-medium tracking-wide">{order.status}</span>
                                    </div>
                                    <button
                                        onClick={() => toggleOrder(order.id)}
                                        className="flex items-center border border-[#adb3b2] text-[#2d3433] px-6 py-2 text-xs tracking-widest uppercase font-medium hover:bg-[#f9f9f8] hover:border-[#2d3433] transition-colors break-keep whitespace-nowrap"
                                    >
                                        {expandedId === order.id ? 'Hide Details' : 'View Details'}
                                        {expandedId === order.id ? <ChevronUp size={14} className="ml-2" /> : <ChevronDown size={14} className="ml-2" />}
                                    </button>
                                </div>
                            </div>

                            {/* Expanded details */}
                            {expandedId === order.id && (
                                <div className="mt-8 pt-8 border-t border-[#f2f4f3] grid grid-cols-1 md:grid-cols-2 gap-8 animation-fade-in">
                                    <div>
                                        <h4 className="text-xs tracking-widest uppercase font-medium mb-4">Items Included</h4>
                                        <div className="space-y-4">
                                            {order.items.map(item => (
                                                <div key={item.id} className="flex gap-4">
                                                    <img src={item.image} alt={item.name} className="w-16 h-20 object-cover" />
                                                    <div>
                                                        <p className="text-sm font-medium">{item.name}</p>
                                                        <p className="text-xs text-[#5f5e5e]">Qty: {item.qty}</p>
                                                        <p className="text-sm font-serif mt-1">₹{item.price.toLocaleString()}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-xs tracking-widest uppercase font-medium mb-2">Shipping Address</h4>
                                            <p className="text-sm text-[#5f5e5e]">{order.address}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs tracking-widest uppercase font-medium mb-2">Payment Method</h4>
                                            <p className="text-sm text-[#5f5e5e]">{order.payment}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
