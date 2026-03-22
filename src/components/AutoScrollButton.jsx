import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import clsx from 'clsx';

export default function AutoScrollButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={clsx(
                "fixed bottom-8 right-8 p-3 bg-stone-900 text-white shadow-lg hover:bg-stone-800 transition-all duration-300 z-50 rounded-none",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            )}
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} />
        </button>
    );
}
