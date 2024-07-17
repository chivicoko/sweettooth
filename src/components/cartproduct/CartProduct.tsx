import React, { useState, useEffect } from 'react';
import { Product } from '../../types';
import "./cartProduct.scss";
import { useProducts } from '../../contexts/ProductsContext';

interface CartProductProps {
  product: Product & { quantity: number };
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
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

  return (
    <div className='listItemWrap'>
      <div className="listItem" key={product.id}>
        <div className="product">
          <div className="imageContainer" onClick={handleProductClick}>
            {/* <img src={`${baseURL}/images/${product.photos[0]?.url}`} alt={product.name} loading="lazy" /> */}
            <img src={product.photos[0]?.url && !product.photos[0].url.startsWith('./images/')
                    ? `${baseURL}/images/${product.photos[0].url}`
                    : product.image || './images/placeholderImage.png'} alt={product.name} loading="lazy" />
          </div>
          <div className="productName" onClick={handleProductClick}>
            <span className="name">{product.name}</span>
            <span className="weight">{product.weight}</span>
          </div>
        </div>
        <div className="details">
          <div className="quantity">
            <span className="minus" onClick={handleDecrement}>−</span>
            <span className="count">{quantity}</span>
            <span className="plus" onClick={handleIncrement}>+</span>
          </div>
          <div className="price">${(product.current_price[0].NGN[0] * quantity).toFixed(2)}</div>
          <div className="delete" onClick={() => removeFromCart(product.id)}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polyline fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" points="25,8 25,1 39,1 39,8 "></polyline> <polyline fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" points="14,10 14,63 50,63 50,10 "></polyline> <line fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="26" y1="20" x2="26" y2="54"></line> <line fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="38" y1="20" x2="38" y2="54"></line> <line fill="none" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="10" y1="9" x2="54" y2="9"></line> </g> </g></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
