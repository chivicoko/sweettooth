import React from 'react';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import './productcard.scss';
// import { toast } from 'react-toastify';
import { useProducts } from '../../contexts/ProductsContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
    } else {
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

  console.log('Photo URL:', photoUrl);
  console.log('Final Image URL:', imageUrl);



  return (
    <div className="product" key={product.id}>
      <div className="favorite">
        <button onClick={handleWishlistClick}>
          <img className='favoriteBtn' src={wishlist.includes(product.id) ? "./images/mdi_heart.png" : "./images/favorite.png"} alt="favorite" loading="lazy" />
        </button>
      </div>
      <div className="productImageContainer" onClick={handleProductClick}>
        <img className="productImage" src={imageUrl} alt={product.name} loading="lazy" />
        {/* <img className="productImage" src={product.image || "./images/placeholderImage.png"} alt={product.name} loading="lazy" /> */}
        {/* <img className="productImage" src="./images/placeholderImage.png" alt={product.name} loading="lazy" /> */}
      </div>
      <p className="productName" onClick={handleProductClick}>
        {product.name}
      </p>
      <div className="productFooter">
        <div className="text">
          <span className="weight">{product.weight}</span>
          <span className="amount">${product.current_price[0].NGN[0]}</span>
        </div>
        <div className="cart" onClick={() => { addToCart(product); }}>
          <Link to="#">
            <img src="./images/mdi_cart-outline.png" alt="Cart" loading="lazy" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
