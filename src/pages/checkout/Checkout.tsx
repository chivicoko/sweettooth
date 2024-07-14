import { useState } from 'react';
import './checkout.scss';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentSuccessModal from '../../components/paymentSuccessfulModal/PaymentSuccessModal';

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);

  const notify = () => {
    // toast.success("Payment Successful! Wait for confirmation...");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="checkoutContainer">
      <h1>CHECKOUT</h1>
      <div className="paymentContainer">
        <div className="paymentDetails">
          <div className="billingInfo">
            <p className="heading">BILLING INFORMATION</p>
            <div className="inputGroup">
              <label htmlFor="firstName">FIRST NAME</label>
              <input type="text" id="firstName" />
            </div>
            <div className="inputGroup">
              <label htmlFor="secondName">SECOND NAME</label>
              <input type="text" id="secondName" />
            </div>
            <div className="inputGroup">
              <label htmlFor="billingAddress">BILLING ADDRESS</label>
              <input type="text" id="billingAddress" />
            </div>
            <div className="inputGroup">
              <label htmlFor="city">CITY</label>
              <input type="text" id="city" />
            </div>
            <div className="inputGroup2">
              <div className="inputGroup zipInputGroup">
                <label htmlFor="zip">ZIP</label>
                <input type="text" id="zip" />
              </div>
              <div className="inputGroup countryInputGroup">
                <label htmlFor="country">COUNTRY</label>
                <input type="text" id="country" />
              </div>
            </div>
          </div>

          <div className="cardInfo">
            <p className="heading">CREDIT CARD INFORMATION</p>
            <div className="inputGroup">
              <label htmlFor="cardName">NAME ON CARD</label>
              <input type="text" id="cardName" />
            </div>
            <div className="inputGroup">
              <label htmlFor="cardNumber">CREDIT CARD NUMBER</label>
              <input type="text" id="cardNumber" />
            </div>
            <div className="inputGroup2">
              <div className="security">
                <label htmlFor="securityCode">SECURITY CODE</label>
                <input type="text" id="securityCode" />
              </div>
              <div className="expiryDate">
                <label htmlFor="expiry">EXPIRY DATE</label>
                <span>
                  <input type="text" id="expiry" placeholder="Month" />
                  <input type="text" id="expiryYear" placeholder="Year" />
                </span>
              </div>
            </div>

            <div className="acceptedCards">
              <h2>ACCEPTED CARDS</h2>
              <div className="cards">
                <img src="./images/visa.png" alt="visa" loading="lazy" />
                <img src="./images/Payment Logo.png" alt="mastercard" loading="lazy" />
                <img src="./images/paypal.png" alt="paypal" loading="lazy" />
                <img src="./images/americanExpress.png" alt="americanExpress" loading="lazy" />
              </div>
            </div>
          
            <button className="submitBtn" onClick={notify}>SUBMIT PAYMENT</button>
          </div>
        </div>
      </div>
      <PaymentSuccessModal showModal={showModal} onClose={closeModal} />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default Checkout;
