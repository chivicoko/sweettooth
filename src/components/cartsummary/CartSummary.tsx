import { Link } from "react-router-dom";
import "./cartSummary.scss";
import { useProducts } from "../../contexts/ProductsContext";

const CartSummary = () => {
  const { subtotal, deliveryFee, total, cart } = useProducts();

  return (
    <div className="cartTotal">
      <h2>Summary</h2>
      <div className="calculation">
        <div className="subtotal">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="delivery">
          <span>Delivery</span>
          {cart.length === 0 ? (
            <>
            <span>$0.00</span>
            </>
          ) : (
            <span>${deliveryFee.toFixed(2)}</span>
          )}
        </div>
      </div>
      <div className="totalPrice">
        <span className="text">Total Price</span>
        {cart.length === 0 ? (
            <>
            <span>$0.00</span>
            </>
          ) : (
            <span className="price">${total.toFixed(2)}</span>
          )}
      </div>
      <div className="discount">
        <p className="question">Do you have a discount?</p>
        <div className="applyCode">
          <input className="code" type="text" placeholder="DISCOUNT CODE" />
          <button className="applyBtn">APPLY</button>
        </div>
      </div>
      <Link to={'/checkout'} className="checkoutBtn">CHECKOUT</Link>
      <Link to={'/'} className="continue">CONTINUE SHOPPING</Link>
    </div>
  );
};

export default CartSummary;
