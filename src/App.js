import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const App = () => {
    return (_jsx("div", { className: "main", children: _jsxs(Router, { children: [_jsx(ScrollToTop, {}), _jsx(ToastContainer, { position: "top-center", autoClose: 3000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true }), _jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Products, {}) }), _jsx(Route, { path: "/products", element: _jsx(Products, {}) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, {}) }), _jsx(Route, { path: "/checkout", element: _jsx(Checkout, {}) })] }), _jsx(WishlistModal, {}), _jsx(ProductModal, {}), _jsx(Footer, {})] }) }));
};
export default App;
