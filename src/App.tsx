import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import WishlistModal from './components/wishList/WishlistModal';
import ProductModal from './components/productModal/ProductModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <div className="main">
      <Router>
        <ScrollToTop />
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />
        <Navbar />
        <Routes>
          {/* <Route path="/sweettooth/" element={<Products />} />
          <Route path="/sweettooth/cart" element={<Cart />} />
          <Route path="/sweettooth/checkout" element={<Checkout />} /> */}
          <Route path="" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <WishlistModal />
        <ProductModal />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
