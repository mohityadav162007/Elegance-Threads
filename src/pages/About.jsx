export default function About() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="mb-16 md:mb-24">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] mb-6 block">Our Story</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Quiet Luxury,<br/>Sustainable Roots.</h1>
                </div>

                <div className="aspect-[16/9] w-full mb-16 md:mb-24 bg-[#141414] overflow-hidden border border-[#2a2a2a]">
                    <img
                        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
                        alt="Inside the Studio"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-70 hover:opacity-100"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16 md:mb-24 text-lg md:text-xl leading-relaxed">
                    <div className="font-serif">
                        <p className="mb-6 text-[#ccc]">
                            Founded in 2024, Fem Trends Studio was born from a desire to strip away the excess of the modern fashion industry. We believe in garments that endure—both in their timeless design and their physical construction.
                        </p>
                        <p className="text-[#ccc]">
                            Our aesthetic is rooted in minimalism, characterized by sharp tailoring, thoughtful silhouettes, and a neutral palette that allows the wearer to command the focus.
                        </p>
                    </div>
                    <div className="font-serif">
                        <p className="mb-6 text-[#ccc]">
                            Sustainability is not an afterthought; it is woven into the very fabric of our operation. From sourcing organic linens and ethical silks to ensuring fair wages across our entire supply chain.
                        </p>
                        <p className="text-[#ccc]">
                            We bypass seasonal trends in favor of creating permanent wardrobe foundations. Less, but definitively better.
                        </p>
                    </div>
                </div>

                <div className="border-t border-[#2a2a2a] pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-serif text-[#c9a96e] mb-2">100%</h3>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#666]">Natural Fibers</span>
                    </div>
                    <div>
                        <h3 className="text-4xl font-serif text-[#c9a96e] mb-2">0</h3>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#666]">Plastic Packaging</span>
                    </div>
                    <div>
                        <h3 className="text-4xl font-serif text-[#c9a96e] mb-2">Lifetime</h3>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#666]">Repair Guarantee</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
