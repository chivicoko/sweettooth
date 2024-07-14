import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useProducts } from "../../contexts/ProductsContext";
import CartProduct from "../cartproduct/CartProduct";
import "./cartProductList.scss";
const CartProductList = () => {
    const { cart, clearCart } = useProducts();
    return (_jsxs("div", { className: "cartProducts", children: [_jsxs("div", { className: "head", children: [_jsx("span", { children: "PRODUCT" }), _jsxs("ul", { children: [_jsx("li", { children: "QUANTITY" }), _jsx("li", { children: "PRICE" }), _jsx("li", { children: "DELETE" })] })] }), _jsx("div", { className: "cartProductList", children: cart.length === 0 ? (_jsx("div", { className: "empty-cart", children: _jsx("p", { children: "Your cart is empty" }) })) : (cart.map((product) => (_jsx(CartProduct, { product: product }, product.id)))) }), cart.length === 0 ? (_jsx(_Fragment, {})) : (_jsx("div", { className: "clearCart", children: _jsx("button", { onClick: clearCart, children: "Clear Cart" }) }))] }));
};
export default CartProductList;
