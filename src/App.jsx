import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AutoScrollButton from './components/AutoScrollButton';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import Collections from './pages/Collections';
import About from './pages/About';
import Journal from './pages/Journal';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 selection:bg-stone-200">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow pt-[104px] pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
      <Footer />
      <AutoScrollButton />
    </div>
  );
}

export default App;
