import { Link } from 'react-router-dom';

const COLLECTIONS = [
    {
        id: 'summer-26',
        title: 'Summer Essentials 2026',
        description: 'Breezy linens and light cottons designed for the warmest days.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
    },
    {
        id: 'silk-evening',
        title: 'The Silk Evening Edit',
        description: 'Elevated evening wear featuring luxurious 100% mulberry silk.',
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1200&q=80',
    },
    {
        id: 'minimal-core',
        title: 'Minimal Core Collection',
        description: 'Foundation pieces defined by sharp tailoring and neutral palettes.',
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=80',
    }
];

export default function Collections() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">COLLECTIONS</h1>
                <p className="text-[#666] text-sm max-w-2xl mb-16 md:mb-24">
                    Curated capsules thoughtfully designed around specific seasons, materials, and occasions. Discover the stories behind our garments.
                </p>

                <div className="space-y-16 md:space-y-24">
                    {COLLECTIONS.map((collection, index) => (
                        <div key={collection.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 group`}>
                            <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] md:aspect-square bg-[#141414] border border-[#2a2a2a]">
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                                <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-4">Collection 0{index + 1}</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">{collection.title}</h2>
                                <p className="text-[#999] leading-relaxed mb-8 max-w-md text-sm">{collection.description}</p>
                                <Link to="/shop" className="inline-block border border-[#c9a96e] text-[#c9a96e] px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-colors">
                                    Explore Collection
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
