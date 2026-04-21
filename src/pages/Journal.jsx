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
        <div className="bg-[#0a0a0a] min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <header className="mb-16 md:mb-20">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">EDITORIAL</h1>
                    <p className="text-[#666] text-sm max-w-xl">Editorials, styling guides, and dispatches from the Style-lit studio.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {ARTICLES.map((article) => (
                        <article key={article.id} className="group cursor-pointer flex flex-col">
                            <div className="w-full aspect-[4/3] bg-[#141414] mb-4 overflow-hidden border border-[#2a2a2a]">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                                />
                            </div>
                            <div className="flex items-center space-x-3 text-[10px] tracking-[0.15em] uppercase text-[#666] mb-3">
                                <span className="text-[#c9a96e]">{article.category}</span>
                                <span>•</span>
                                <span>{article.date}</span>
                            </div>
                            <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-[#c9a96e] transition-colors">{article.title}</h2>
                            <p className="text-[#999] text-sm leading-relaxed mb-6 flex-grow">{article.excerpt}</p>
                            <Link to="#" className="inline-flex items-center text-[10px] tracking-[0.15em] uppercase font-semibold text-[#c9a96e] self-start group-hover:gap-2 transition-all">
                                Read Article <ArrowRight size={14} className="ml-1" />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
