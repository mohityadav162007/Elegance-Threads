import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import clsx from 'clsx';

export default function AutoScrollButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 300);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={clsx(
                "fixed bottom-8 right-8 p-3 bg-[#141414] border border-[#2a2a2a] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0a0a] hover:border-[#c9a96e] transition-all duration-300 z-50",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            )}
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} />
        </button>
    );
}
