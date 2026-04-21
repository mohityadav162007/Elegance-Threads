import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/manage-style-lit-portal-xyz89');
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}
      <main className={`flex-grow ${!isAdminRoute ? 'pt-[72px]' : ''}`}>
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
          <Route path="/manage-style-lit-portal-xyz89" element={<AdminLogin />} />
          <Route path="/manage-style-lit-portal-xyz89/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <AutoScrollButton />}
    </div>
  );
}

export default App;
