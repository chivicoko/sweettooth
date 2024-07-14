import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./cartSummary.scss";
import { useProducts } from "../../contexts/ProductsContext";
const CartSummary = () => {
    const { subtotal, deliveryFee, total, cart } = useProducts();
    return (_jsxs("div", { className: "cartTotal", children: [_jsx("h2", { children: "Summary" }), _jsxs("div", { className: "calculation", children: [_jsxs("div", { className: "subtotal", children: [_jsx("span", { children: "Subtotal" }), _jsxs("span", { children: ["$", subtotal.toFixed(2)] })] }), _jsxs("div", { className: "delivery", children: [_jsx("span", { children: "Delivery" }), cart.length === 0 ? (_jsx(_Fragment, { children: _jsx("span", { children: "$0.00" }) })) : (_jsxs("span", { children: ["$", deliveryFee.toFixed(2)] }))] })] }), _jsxs("div", { className: "totalPrice", children: [_jsx("span", { className: "text", children: "Total Price" }), cart.length === 0 ? (_jsx(_Fragment, { children: _jsx("span", { children: "$0.00" }) })) : (_jsxs("span", { className: "price", children: ["$", total.toFixed(2)] }))] }), _jsxs("div", { className: "discount", children: [_jsx("p", { className: "question", children: "Do you have a discount?" }), _jsxs("div", { className: "applyCode", children: [_jsx("input", { className: "code", type: "text", placeholder: "DISCOUNT CODE" }), _jsx("button", { className: "applyBtn", children: "APPLY" })] })] }), _jsx(Link, { to: '/checkout', className: "checkoutBtn", children: "CHECKOUT" }), _jsx(Link, { to: '/products', className: "continue", children: "CONTINUE SHOPPING" })] }));
};
export default CartSummary;
