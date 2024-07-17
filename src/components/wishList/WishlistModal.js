import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './wishlistModal.scss';
import { useProducts } from '../../contexts/ProductsContext';
const WishlistModal = () => {
    const { wishlist, products, showWishlistModal, toggleWishlistModal, removeFromWishlist, setSelectedProduct, toggleProductModal } = useProducts();
    const handleProductClick = (product) => {
        setSelectedProduct(product);
        toggleProductModal();
    };
    if (!showWishlistModal)
        return null;
    const wishlistProducts = products.filter(product => wishlist.includes(product.id));
    const baseURL = "https://api.timbu.cloud";
    return (_jsx("div", { className: "modal-overlay", onClick: toggleWishlistModal, children: _jsxs("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { className: "modal-close", onClick: toggleWishlistModal, children: "X" }), _jsx("h2", { children: "Wishlist" }), _jsx("ul", { children: wishlistProducts.length === 0 ? (_jsx("div", { className: "empty-cart", children: _jsx("p", { children: "Your wishlist is empty" }) })) : (wishlistProducts.map(product => (_jsxs("li", { children: [_jsx("img", { style: { cursor: 'pointer' }, 
                                // src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                                src: product.photos[0]?.url && !product.photos[0].url.startsWith('./images/')
                                    ? `${baseURL}/images/${product.photos[0].url}`
                                    : product.image || './images/placeholderImage.png', onClick: () => handleProductClick(product), alt: product.name }), _jsx("p", { onClick: () => handleProductClick(product), children: product.name }), _jsx("button", { onClick: () => removeFromWishlist(product.id), children: "Remove" })] }, product.id)))) })] }) }));
};
export default WishlistModal;
