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
        title: 'Minimal Core collection',
        description: 'Foundation pieces defined by sharp tailoring and neutral palettes.',
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=80',
    }
];

export default function Collections() {
    return (
        <div className="bg-[#f9f9f8] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-[#2d3433] mb-4 text-center">Collections</h1>
                <p className="text-[#5f5e5e] text-center max-w-2xl mx-auto mb-16 md:mb-24 text-sm md:text-base">
                    Curated capsules thoughtfully designed around specific seasons, materials, and occasions. Discover the stories behind our garments.
                </p>

                <div className="space-y-16 md:space-y-32">
                    {COLLECTIONS.map((collection, index) => (
                        <div key={collection.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 group`}>
                            <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] md:aspect-square bg-[#EBEBEB]">
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#5f5e5e] mb-4">Collection 0{index + 1}</span>
                                <h2 className="text-3xl md:text-4xl font-serif text-[#2d3433] mb-6">{collection.title}</h2>
                                <p className="text-[#5f5e5e] leading-relaxed mb-8 max-w-md">{collection.description}</p>
                                <Link to="/shop" className="inline-block border border-[#2d3433] text-[#2d3433] px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#2d3433] hover:text-white transition-colors">
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
