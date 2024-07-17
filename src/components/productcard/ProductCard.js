import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './productcard.scss';
// import { toast } from 'react-toastify';
import { useProducts } from '../../contexts/ProductsContext';
const ProductCard = ({ product }) => {
    // const [toastId, setToastId] = useState<string | number | null>(null);
    // const showToast = (message: string) => {
    //   if (toastId) {
    //     toast.dismiss(toastId); // Dismiss existing toast
    //   }
    //   const newToastId = toast(message);
    //   setToastId(newToastId);
    // };
    // const notify = () => toast.success(`Successfully added ${product.name} to cart!`);
    const { setSelectedProduct, toggleProductModal, addToCart, addToWishlist, removeFromWishlist, wishlist } = useProducts();
    const handleProductClick = () => {
        setSelectedProduct(product);
        toggleProductModal();
    };
    const handleWishlistClick = () => {
        if (wishlist.includes(product.id)) {
            removeFromWishlist(product.id);
        }
        else {
            addToWishlist(product.id);
        }
    };
    const baseURL = "https://api.timbu.cloud";
    const photoUrl = product.photos[0]?.url;
    const imageUrl = photoUrl && !photoUrl.startsWith('./images/')
        ? `${baseURL}/images/${photoUrl}`
        : product.image
            ? product.image
            : './images/placeholderImage.png';
    return (_jsxs("div", { className: "product", children: [_jsx("div", { className: "favorite", children: _jsx("button", { onClick: handleWishlistClick, children: _jsx("img", { className: 'favoriteBtn', src: wishlist.includes(product.id) ? "./images/mdi_heart.png" : "./images/favorite.png", alt: "favorite", loading: "lazy" }) }) }), _jsx("div", { className: "productImageContainer", onClick: handleProductClick, children: _jsx("img", { className: "productImage", src: imageUrl, alt: product.name, loading: "lazy" }) }), _jsx("p", { className: "productName", onClick: handleProductClick, children: product.name }), _jsxs("div", { className: "productFooter", children: [_jsxs("div", { className: "text", children: [_jsx("span", { className: "weight", children: product.weight }), _jsxs("span", { className: "amount", children: ["$", product.current_price[0].NGN[0]] })] }), _jsx("div", { className: "cart", onClick: () => { addToCart(product); }, children: _jsx(Link, { to: "#", children: _jsx("img", { src: "./images/mdi_cart-outline.png", alt: "Cart", loading: "lazy" }) }) })] })] }, product.id));
};
export default ProductCard;
