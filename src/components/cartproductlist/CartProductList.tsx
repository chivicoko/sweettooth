import { useProducts } from "../../contexts/ProductsContext";
import CartProduct from "../cartproduct/CartProduct";
import "./cartProductList.scss";

const CartProductList = () => {
  const { cart, clearCart } = useProducts();

  return (
    <div className="cartProducts">
      <div className="head">
        <span>PRODUCT</span>
        <ul>
          <li>QUANTITY</li>
          <li>PRICE</li>
          <li>DELETE</li>
        </ul>
      </div>
      <div className="cartProductList">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          cart.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))
        )}
      </div>  
      {cart.length === 0 ? (
          <></>
        ) : (
          <div className="clearCart">
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        )}
    </div>
  );
};

export default CartProductList;
