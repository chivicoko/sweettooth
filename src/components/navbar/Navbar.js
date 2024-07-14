import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navbar.scss";
import { useProducts } from '../../contexts/ProductsContext';
// import { Product } from '../../types'; // Adjust import as per your types
function Navbar() {
    const { toggleWishlistModal, wishlist, cart, cartQuantity, searchTerm, setSearchTerm, filteredProducts, setFilteredProducts, products } = useProducts();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const menuRef = useRef(null);
    const logoRef = useRef(null);
    const searchRef = useRef(null);
    const mobileSearchRef = useRef(null);
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
        if (!isSearchBarVisible) {
            setSearchTerm(''); // Clear search term when closing search bar
        }
    };
    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
    };
    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            filterProducts();
        }
    };
    const handleClickOutside = (event) => {
        if (menuRef.current &&
            !menuRef.current.contains(event.target) &&
            logoRef.current &&
            !logoRef.current.contains(event.target) &&
            searchRef.current &&
            !searchRef.current.contains(event.target) &&
            mobileSearchRef.current &&
            !mobileSearchRef.current.contains(event.target)) {
            setIsMenuVisible(false);
            setIsSearchBarVisible(false);
            setSearchTerm('');
        }
    };
    const filterProducts = () => {
        if (searchTerm.trim() !== '') {
            const filtered = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredProducts(filtered);
        }
        else {
            setFilteredProducts(products); // If search term is empty, show all products
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const displayCartQuantity = cartQuantity > 99 ? '99+' : cartQuantity.toString();
    return (_jsxs("div", { className: "navbar", children: [_jsxs("div", { className: "logo", children: [_jsx("span", { onClick: toggleMenu, ref: logoRef, children: _jsx("button", { children: _jsx("img", { src: "./images/breadcrumb.png", alt: "breadcrumb", loading: "lazy" }) }) }), _jsx("span", { children: _jsx(Link, { to: '/', children: "Sweet Tooth" }) })] }), _jsxs("div", { className: `menu ${isMenuVisible ? 'visible' : '/'}`, ref: menuRef, children: [_jsx(Link, { className: activeLink === '/products' ? 'active-link' : '/products', to: '/products', children: "Product" }), _jsx(Link, { className: activeLink === '/cart' ? 'active-link' : '/cart', to: '/cart', children: "Cart" }), _jsx(Link, { to: '#', className: "", children: "Contact" })] }), _jsxs("div", { className: "icons", children: [_jsxs("div", { ref: searchRef, children: [isSearchBarVisible && (_jsxs("div", { className: "search-bar", children: [_jsx("input", { type: "text", placeholder: "Search...", autoFocus: true, value: searchTerm, onChange: handleSearchInputChange, onKeyPress: handleEnterKeyPress }), filteredProducts.length > 0 && (_jsx("ul", { className: "search-results", style: { paddingInline: '10px' }, children: filteredProducts.map(product => (_jsx("li", { children: _jsx(Link, { to: `products/${product.id}`, children: product.name }) }, product.id))) }))] })), _jsx("button", { onClick: toggleSearchBar, className: "search-icon", children: _jsx("img", { src: "./images/search-nav.png", alt: "search svg", loading: "lazy" }) })] }), _jsxs("button", { className: 'wishlistIcon', onClick: () => toggleWishlistModal(), children: [_jsx("img", { src: "./images/heart-nav.png", alt: "app svg", loading: "lazy" }), wishlist.length > 0 && (_jsx("span", { children: wishlist.length }))] }), _jsxs(Link, { className: 'cartIcon', to: '/cart', children: [_jsx("img", { src: "./images/mdi_cart-outline-nav.png", alt: "expand svg", loading: "lazy" }), cart.length > 0 && (_jsx("span", { children: displayCartQuantity }))] })] }), _jsxs("div", { className: "iconsMobile", children: [_jsxs("div", { ref: mobileSearchRef, children: [isSearchBarVisible && (_jsxs("div", { className: "search-bar", children: [_jsx("input", { type: "text", placeholder: "Search...", autoFocus: true, value: searchTerm, onChange: handleSearchInputChange, onKeyPress: handleEnterKeyPress }), filteredProducts.length > 0 && (_jsx("ul", { className: "search-results", children: filteredProducts.map(product => (_jsx("li", { children: _jsx(Link, { to: `/products/${product.id}`, children: product.name }) }, product.id))) }))] })), _jsx("button", { onClick: toggleSearchBar, className: "search-icon", children: _jsx("img", { src: "./images/searchMobile.png", alt: "search svg", loading: "lazy" }) })] }), _jsxs("button", { className: 'wishlistIcon', onClick: () => toggleWishlistModal(), children: [_jsx("img", { src: "./images/heartMobile.png", alt: "app svg", loading: "lazy" }), wishlist.length > 0 && (_jsx("span", { children: wishlist.length }))] }), _jsxs(Link, { className: 'cartIcon', to: '/cart', children: [_jsx("img", { src: "./images/mdi_cart-outlineMobile.png", alt: "expand svg", loading: "lazy" }), cart.length > 0 && (_jsx("span", { children: displayCartQuantity }))] })] })] }));
}
export default Navbar;
