import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ARTICLES = [
    {
        id: 1,
        title: 'The Art of Layering Linens',
        category: 'Styling',
        date: 'March 10, 2026',
        image: 'https://images.unsplash.com/photo-1434389678232-0697a80b8851?w=800&q=80',
        excerpt: 'Master the subtle art of transitioning your linen pieces across seasons with our signature layering techniques.'
    },
    {
        id: 2,
        title: 'Behind the Seams: Our Silk Mill',
        category: 'Craftsmanship',
        date: 'February 24, 2026',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
        excerpt: 'Take a journey to Northern Italy where our signature heavy-weight silk is ethically produced.'
    },
    {
        id: 3,
        title: 'Defining the Minimalist Wardrobe',
        category: 'Editorial',
        date: 'January 15, 2026',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
        excerpt: 'How to curate a selection of less than 30 items that will dress you flawlessly for any occasion.'
    }
];

export default function Journal() {
    return (
        <div className="bg-white min-h-screen text-[#2d3433]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

                <header className="mb-16 md:mb-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">The Journal</h1>
                    <p className="text-[#5f5e5e] text-sm md:text-base max-w-xl mx-auto">Editorials, styling guides, and dispatches from the Elegance Threads studio.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {ARTICLES.map((article) => (
                        <article key={article.id} className="group cursor-pointer flex flex-col">
                            <div className="w-full aspect-[4/3] bg-[#f9f9f8] mb-6 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex items-center space-x-3 text-[10px] tracking-widest uppercase text-[#5f5e5e] mb-3">
                                <span className="font-medium text-[#2d3433]">{article.category}</span>
                                <span>•</span>
                                <span>{article.date}</span>
                            </div>
                            <h2 className="text-2xl font-serif mb-3 group-hover:text-[#5f5e5e] transition-colors">{article.title}</h2>
                            <p className="text-[#5f5e5e] text-sm leading-relaxed mb-6 flex-grow">{article.excerpt}</p>
                            <Link to="#" className="inline-flex items-center text-xs tracking-widest uppercase font-medium border-b border-[#2d3433] pb-1 self-start group-hover:text-[#5f5e5e] group-hover:border-[#5f5e5e] transition-colors">
                                Read Article <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
}
