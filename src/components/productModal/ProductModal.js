import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useProducts } from '../../contexts/ProductsContext';
import "./productModal.scss";
const ProductModal = () => {
    const { selectedProduct, showProductModal, toggleProductModal } = useProducts();
    if (!showProductModal || !selectedProduct)
        return null;
    return (_jsx("div", { className: "product-modal-overlay", onClick: toggleProductModal, children: _jsxs("div", { className: "product-modal-content", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { className: "product-modal-close", onClick: toggleProductModal, children: "X" }), _jsx("h2", { children: selectedProduct?.name }), _jsx("img", { src: `https://api.timbu.cloud/images/${selectedProduct?.photos[0]?.url}`, alt: selectedProduct?.name, loading: "lazy" }), _jsxs("p", { className: 'price', children: ["Amount: $", selectedProduct?.current_price[0]?.NGN[0]] })] }) }));
};
export default ProductModal;
