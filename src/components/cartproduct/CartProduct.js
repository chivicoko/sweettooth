import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import "./cartProduct.scss";
import { useProducts } from '../../contexts/ProductsContext';
const CartProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const { updateQuantity, removeFromCart, setSelectedProduct, toggleProductModal } = useProducts();
    const baseURL = "https://api.timbu.cloud";
    useEffect(() => {
        updateQuantity(product.id, quantity);
    }, [quantity, product.id, updateQuantity]);
    const handleProductClick = () => {
        setSelectedProduct(product);
        toggleProductModal();
    };
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    return (_jsx("div", { className: 'listItemWrap', children: _jsxs("div", { className: "listItem", children: [_jsxs("div", { className: "product", children: [_jsx("div", { className: "imageContainer", onClick: handleProductClick, children: _jsx("img", { src: product.photos[0]?.url && !product.photos[0].url.startsWith('./images/')
                                    ? `${baseURL}/images/${product.photos[0].url}`
                                    : product.image || './images/placeholderImage.png', alt: product.name, loading: "lazy" }) }), _jsxs("div", { className: "productName", onClick: handleProductClick, children: [_jsx("span", { className: "name", children: product.name }), _jsx("span", { className: "weight", children: product.weight })] })] }), _jsxs("div", { className: "details", children: [_jsxs("div", { className: "quantity", children: [_jsx("span", { className: "minus", onClick: handleDecrement, children: "\u2212" }), _jsx("span", { className: "count", children: quantity }), _jsx("span", { className: "plus", onClick: handleIncrement, children: "+" })] }), _jsxs("div", { className: "price", children: ["$", (product.current_price[0].NGN[0] * quantity).toFixed(2)] }), _jsx("div", { className: "delete", onClick: () => removeFromCart(product.id), children: _jsxs("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", "enable-background": "new 0 0 64 64", fill: "#000000", children: [_jsx("g", { id: "SVGRepo_bgCarrier", "stroke-width": "0" }), _jsx("g", { id: "SVGRepo_tracerCarrier", "stroke-linecap": "round", "stroke-linejoin": "round" }), _jsxs("g", { id: "SVGRepo_iconCarrier", children: [" ", _jsxs("g", { children: [" ", _jsx("polyline", { fill: "none", stroke: "#000000", "stroke-width": "6", "stroke-miterlimit": "10", points: "25,8 25,1 39,1 39,8 " }), " ", _jsx("polyline", { fill: "none", stroke: "#000000", "stroke-width": "4", "stroke-miterlimit": "10", points: "14,10 14,63 50,63 50,10 " }), " ", _jsx("line", { fill: "none", stroke: "#000000", "stroke-width": "4", "stroke-miterlimit": "10", x1: "26", y1: "20", x2: "26", y2: "54" }), " ", _jsx("line", { fill: "none", stroke: "#000000", "stroke-width": "4", "stroke-miterlimit": "10", x1: "38", y1: "20", x2: "38", y2: "54" }), " ", _jsx("line", { fill: "none", stroke: "#000000", "stroke-width": "4", "stroke-miterlimit": "10", x1: "10", y1: "9", x2: "54", y2: "9" }), " "] }), " "] })] }) })] })] }, product.id) }));
};
export default CartProduct;
