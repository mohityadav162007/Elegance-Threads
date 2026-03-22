import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const FEATURED_PRODUCTS = [
    {
        id: '1',
        name: 'Cotton Oxford Shirt',
        price: 2999,
        rating: 4.8,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=800&q=80',
        hoverImage: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80',
        badge: 'New',
        colors: ['#fecdd3', '#ffffff', '#bfdbfe'] // pink, white, blue
    },
    {
        id: '2',
        name: 'Linen Blend Trousers',
        price: 3499,
        rating: 4.5,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1594612399992-1b1517cc63f2?w=800&q=80',
        hoverImage: 'https://images.unsplash.com/photo-1624623278313-a930126a11c3?w=800&q=80',
        badge: 'Bestseller',
        colors: ['#e7e5e4', '#292524']
    },
    {
        id: '3',
        name: 'Silk Wrap Evening Dress',
        price: 8999,
        rating: 4.9,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80',
        hoverImage: 'https://images.unsplash.com/photo-1515347619362-e6741b0b5e28?w=800&q=80',
        discount: '-30%',
        badge: 'Sale',
        colors: ['#000000', '#991b1b']
    },
    {
        id: '4',
        name: 'Leather Crossbody Bag',
        price: 5499,
        rating: 4.7,
        reviews: 56,
        image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&q=80',
        badge: '',
        colors: ['#78350f', '#000000']
    }
];

export default function Home() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[85vh] w-full overflow-hidden bg-stone-100 flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
                    alt="Summer Collection"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <span className="text-sm font-medium tracking-[0.2em] mb-4 block uppercase">New Arrivals</span>
                    <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-8 leading-tight">Summer Collection 2024</h1>
                    <Link to="/shop" className="inline-block bg-white text-stone-900 px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-stone-100 hover:scale-[1.02] transition-all">
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { name: 'Women', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80' },
                        { name: 'Men', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80' },
                        { name: 'Accessories', img: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&q=80' },
                        { name: 'Dresses', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' }
                    ].map((cat, idx) => (
                        <Link key={idx} to="/shop" className="group relative aspect-[3/4] overflow-hidden bg-stone-100">
                            <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white">
                                <span className="text-lg font-medium tracking-wide">{cat.name}</span>
                                <span className="text-sm tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Shop</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* New Arrivals Grid */}
            <section id="new-arrivals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-light tracking-wide text-stone-900">New Arrivals</h2>
                    <Link to="/shop" className="text-sm font-medium tracking-widest uppercase text-stone-900 hover:text-stone-500 transition-colors border-b border-stone-900 pb-1">
                        View All &rarr;
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURED_PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Promotional Banner */}
            <section className="relative h-[60vh] w-full overflow-hidden bg-stone-900 my-16">
                <img
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80"
                    alt="Summer Essentials"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm p-12 md:p-16 text-center max-w-lg mx-4">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500 mb-4 block">Summer Essentials</span>
                        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-stone-900">Embrace the Season</h2>
                        <p className="text-stone-600 mb-8 leading-relaxed text-sm">Discover our curated selection of breathable fabrics and effortless silhouettes designed for the warmer days ahead.</p>
                        <Link to="/shop" className="inline-block bg-stone-900 text-white px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-stone-800 transition-colors border border-stone-900">
                            Explore Collection
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
