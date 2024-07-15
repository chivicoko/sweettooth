import React from 'react';
import { useProducts } from '../../contexts/ProductsContext';
import "./productModal.scss";

const ProductModal: React.FC = () => {
  const { selectedProduct, showProductModal, toggleProductModal } = useProducts();
  

  if (!showProductModal || !selectedProduct) return null;

  return (
    <div className="product-modal-overlay" onClick={toggleProductModal}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal-close" onClick={toggleProductModal}>X</button>
        <h2>{selectedProduct?.name}</h2>
        <img src={`https://api.timbu.cloud/images/${selectedProduct?.photos[0]?.url}`} alt={selectedProduct?.name} loading="lazy" />
        <p className='description' style={{padding: '15px'}}>{selectedProduct?.description}</p>
        <p className='price'>Amount: ${selectedProduct?.current_price[0]?.NGN[0]}</p>
      </div>
    </div>
  );
};

export default ProductModal;
