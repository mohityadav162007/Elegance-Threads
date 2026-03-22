export default function About() {
    return (
        <div className="bg-white min-h-screen text-[#2d3433]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#5f5e5e] mb-6 block">Our Story</span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight">Quiet Luxury, Sustainable Roots.</h1>
                </div>

                <div className="aspect-[16/9] w-full mb-16 md:mb-24 bg-[#f9f9f8] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
                        alt="Inside the Elegance Studio"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16 md:mb-24 font-serif text-lg md:text-xl leading-relaxed">
                    <div>
                        <p className="mb-6">
                            Founded in 2024, Elegance Threads was born from a desire to strip away the excess of the modern fashion industry. We believe in garments that endure—both in their timeless design and their physical construction.
                        </p>
                        <p>
                            Our aesthetic is rooted in minimalism, characterized by sharp tailoring, thoughtful silhouettes, and a neutral palette that allows the wearer to command the focus.
                        </p>
                    </div>
                    <div>
                        <p className="mb-6">
                            Sustainability is not an afterthought; it is woven into the very fabric of our operation. From sourcing organic linens and ethical silks to ensuring fair wages across our entire supply chain.
                        </p>
                        <p>
                            We bypass seasonal trends in favor of creating permanent wardrobe foundations. Less, but definitively better.
                        </p>
                    </div>
                </div>

                <div className="border-t border-[#ebeeed] pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-3xl font-serif mb-2">100%</h3>
                        <span className="text-xs tracking-widest uppercase text-[#5f5e5e]">Natural Fibers</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif mb-2">0</h3>
                        <span className="text-xs tracking-widest uppercase text-[#5f5e5e]">Plastic Packaging</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif mb-2">Lifetime</h3>
                        <span className="text-xs tracking-widest uppercase text-[#5f5e5e]">Repair Guarantee</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
