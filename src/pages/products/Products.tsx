// src/pages/products/Products.tsx

import React from 'react';
import Header from '../../components/header/Header';
import "./products.scss";
import ProductList from '../../components/productlist/ProductList';
import { useProducts } from '../../contexts/ProductsContext';

const Products: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
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
