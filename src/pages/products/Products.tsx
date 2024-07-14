// src/pages/products/Products.tsx

import React from 'react';
import Header from '../../components/header/Header';
import "./products.scss";
import ProductList from '../../components/productlist/ProductList';
import { useProducts } from '../../contexts/ProductsContext';

const Products: React.FC = () => {
  const { products, loading, error } = useProducts();
  const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

  console.log('Products:', products);
  console.log('Loading:', loading);
  console.log('Error:', error);
  console.log('API URL:', `${baseURL}/products?organization_id=51bb0b6a6f0a4aff961fe010f1aea763&reverse_sort=false&page=1&size=12&Appid=L64ZD2LGS9NTOIE&Apikey=a959f36f9a3847f0be6b8d382a152fb920240712161811439641`);


  if (loading) {
    return <div style={{textAlign: 'center', color: '#333', marginBlock: '200px'}}><h2>Loading...</h2></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="products">
      <Header />
      <div className="productsContent" id='productsContent'>
        <fieldset className="fieldset">
          <legend className="legend">
            <span className="hotDeals">hot deals for this week</span>
            <span className="saveUp">save up to 50% off</span>
          </legend>
          <ProductList products={products} />
        </fieldset>
      </div>
    </div>
  );
};

export default Products;
