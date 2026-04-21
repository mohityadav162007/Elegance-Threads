import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Minus, Plus, ChevronDown, ShoppingBag, Lock } from 'lucide-react';
import { API_URL, fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1550614000-4b95eb1580bc?q=80&w=600&auto=format&fit=crop';

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [openAccordion, setOpenAccordion] = useState(null);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch(`${API_URL}/products/${id}`);
                if (!res.ok) throw new Error('Not found');
                const data = await res.json();
                setProduct(data);
                const all = await fetchProducts();
                setRelatedProducts(all.filter(p => p._id !== id).slice(0, 3));
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [id]);

    if (loading) return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-[#666] text-sm tracking-widest uppercase">Loading...</div>;
    if (!product) return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center">
            <h2 className="text-3xl font-serif text-white mb-4">Product not found</h2>
            <Link to="/shop" className="text-xs tracking-[0.2em] uppercase text-[#c9a96e] border border-[#c9a96e] px-6 py-2 hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-colors">Back to Archive</Link>
        </div>
    );

    const images = product.imageUrl ? [product.imageUrl] : [FALLBACK_IMAGE];
    const sizes = ['S', 'M', 'L', 'XL'];

    return (
        <div className="bg-[#0a0a0a] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {/* Breadcrumbs */}
                <nav className="flex text-[10px] tracking-[0.15em] uppercase text-[#666] mb-8 space-x-2 items-center">
                    <Link to="/" className="hover:text-[#c9a96e] transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <Link to="/shop" className="hover:text-[#c9a96e] transition-colors">Archive</Link>
                    <ChevronRight size={12} />
                    <span className="text-[#999]">{product.name}</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Image Gallery */}
                    <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4">
                        <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto md:overflow-visible">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`flex-shrink-0 w-20 h-24 md:w-24 md:h-32 bg-[#141414] border ${activeImage === idx ? 'border-[#c9a96e]' : 'border-[#2a2a2a]'} transition-colors`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.src = FALLBACK_IMAGE; }} />
                                </button>
                            ))}
                        </div>
                        <div className="flex-grow order-1 md:order-2 bg-[#141414] aspect-[3/4] relative border border-[#2a2a2a]">
                            <img src={images[activeImage]} alt={product.name} className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.src = FALLBACK_IMAGE; }} />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-2/5 flex flex-col pt-2">
                        {product.category && (
                            <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-2">{product.category}</span>
                        )}
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight uppercase">{product.name}</h1>
                        <span className="text-lg text-[#c9a96e] mb-6">₹{product.price?.toLocaleString()} </span>

                        {product.description && (
                            <p className="text-[#999] text-sm leading-relaxed mb-8">{product.description}</p>
                        )}

                        {/* Size Selector */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs tracking-[0.2em] uppercase text-white font-semibold">Size</span>
                                <button className="text-[10px] tracking-[0.15em] uppercase text-[#666] underline underline-offset-4 hover:text-[#c9a96e] transition-colors">Size Guide</button>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-3 text-sm flex items-center justify-center border transition-all ${selectedSize === size ? 'border-[#c9a96e] text-[#c9a96e]' : 'border-[#2a2a2a] text-[#999] hover:border-[#666]'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <button className="w-full bg-white text-[#0a0a0a] py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#c9a96e] transition-colors flex items-center justify-center gap-2 mb-3">
                            <ShoppingBag size={16} /> Add To Cart
                        </button>
                        <button className="w-full border border-[#2a2a2a] text-white py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors mb-8">
                            Buy Now
                        </button>

                        {/* Accordions */}
                        {['Details & Care', 'Shipping & Returns'].map(title => (
                            <button key={title} onClick={() => setOpenAccordion(openAccordion === title ? null : title)} className="w-full flex justify-between items-center border-t border-[#2a2a2a] py-4 text-xs tracking-[0.15em] uppercase text-[#999] hover:text-white transition-colors">
                                {title}
                                <ChevronDown size={16} className={`transition-transform ${openAccordion === title ? 'rotate-180' : ''}`} />
                            </button>
                        ))}
                        {openAccordion && (
                            <div className="text-sm text-[#666] leading-relaxed py-2 border-t border-[#2a2a2a]">
                                {openAccordion === 'Details & Care'
                                    ? <p>{product.description || 'No details available.'}</p>
                                    : <p>Free shipping on orders over ₹2,999. Easy 30-day returns. Standard delivery in 3-5 business days.</p>}
                            </div>
                        )}
                    </div>
                </div>

                {/* Complete The Look */}
                {relatedProducts.length > 0 && (
                    <section className="mt-20 md:mt-32">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 uppercase">Complete The Look</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {relatedProducts.map(p => (
                                <ProductCard key={p._id} product={p} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
