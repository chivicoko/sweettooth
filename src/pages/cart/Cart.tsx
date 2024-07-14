// src/pages/Cart/Cart.tsx

import CartProductList from "../../components/cartproductlist/CartProductList";
import CartSummary from "../../components/cartsummary/CartSummary";
import "./cart.scss";

const Cart = () => {
  return (
    <div className="cartContainer">
      <h1 className="cartTitle">CART</h1>
      <div className="cartContent">
        <CartProductList />
        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;
