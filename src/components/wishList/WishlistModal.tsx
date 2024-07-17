import React from 'react';
import './wishlistModal.scss';
import { Product } from '../../types';
import { useProducts } from '../../contexts/ProductsContext';

const WishlistModal: React.FC = () => {
  const { wishlist, products, showWishlistModal, toggleWishlistModal, removeFromWishlist, setSelectedProduct, toggleProductModal } = useProducts();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    toggleProductModal();
  };

  if (!showWishlistModal) return null;

  const wishlistProducts = products.filter(product => wishlist.includes(product.id));
  
  const baseURL = "https://api.timbu.cloud";

  return (
    <div className="modal-overlay" onClick={toggleWishlistModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={toggleWishlistModal}>X</button>
        <h2>Wishlist</h2>
        <ul>
          {wishlistProducts.length === 0 ? (
            <div className="empty-cart">
              <p>Your wishlist is empty</p>
            </div>
          ) : (
            wishlistProducts.map(product => (
              <li key={product.id}>
                <img
                  style={{cursor: 'pointer'}}
                  // src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                  src={product.photos[0]?.url && !product.photos[0].url.startsWith('./images/')
                    ? `${baseURL}/images/${product.photos[0].url}`
                    : product.image || './images/placeholderImage.png'}
                  onClick={() => handleProductClick(product)}
                  alt={product.name}
                />
                <p onClick={() => handleProductClick(product)}>{product.name}</p>
                <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default WishlistModal;
