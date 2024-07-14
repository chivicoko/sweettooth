import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Cart/Cart.tsx
import CartProductList from "../../components/cartproductlist/CartProductList";
import CartSummary from "../../components/cartsummary/CartSummary";
import "./cart.scss";
const Cart = () => {
    return (_jsxs("div", { className: "cartContainer", children: [_jsx("h1", { className: "cartTitle", children: "CART" }), _jsxs("div", { className: "cartContent", children: [_jsx(CartProductList, {}), _jsx(CartSummary, {})] })] }));
};
export default Cart;
