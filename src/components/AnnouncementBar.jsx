import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
    return (
        <div className="bg-stone-950 text-white text-xs text-center py-2 fixed w-full top-0 z-50 px-4">
            <p>Free shipping on orders over ₹2,999 | Use code WELCOME10 for 10% off</p>
        </div>
    );
}
