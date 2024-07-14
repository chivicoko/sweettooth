import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "checkoutContainer", children: [_jsx("h1", { children: "CHECKOUT" }), _jsx("div", { className: "paymentContainer", children: _jsxs("div", { className: "paymentDetails", children: [_jsxs("div", { className: "billingInfo", children: [_jsx("p", { className: "heading", children: "BILLING INFORMATION" }), _jsxs("div", { className: "inputGroup", children: [_jsx("label", { htmlFor: "firstName", children: "FIRST NAME" }), _jsx("input", { type: "text", id: "firstName" })] }), _jsxs("div", { className: "inputGroup", children: [_jsx("label", { htmlFor: "secondName", children: "SECOND NAME" }), _jsx("input", { type: "text", id: "secondName" })] }), _jsxs("div", { className: "inputGroup", children: [_jsx("label", { htmlFor: "billingAddress", children: "BILLING ADDRESS" }), _jsx("input", { type: "text", id: "billingAddress" })] }), _jsxs("div", { className: "inputGroup", children: [_jsx("label", { htmlFor: "city", children: "CITY" }), _jsx("input", { type: "text", id: "city" })] }), _jsxs("div", { className: "inputGroup2", children: [_jsxs("div", { className: "inputGroup zipInputGroup", children: [_jsx("label", { htmlFor: "zip", children: "ZIP" }), _jsx("input", { type: "text", id: "zip" })] }), _jsxs("div", { className: "inputGroup countryInputGroup", children: [_jsx("label", { htmlFor: "country", children: "COUNTRY" }), _jsx("input", { type: "text", id: "country" })] })] })] }), _jsxs("div", { className: "cardInfo", children: [_jsx("p", { className: "heading", children: "CREDIT CARD INFORMATION" }), _jsxs("div", { className: "inputGroup", children: [_jsx("label", { htmlFor: "cardName", children: "NAME ON CARD" }), _jsx("input", { type: "text", id: "cardName" })] }), _jsxs("div", { className: "inputGroup", children: [_jsx("label", { htmlFor: "cardNumber", children: "CREDIT CARD NUMBER" }), _jsx("input", { type: "text", id: "cardNumber" })] }), _jsxs("div", { className: "inputGroup2", children: [_jsxs("div", { className: "security", children: [_jsx("label", { htmlFor: "securityCode", children: "SECURITY CODE" }), _jsx("input", { type: "text", id: "securityCode" })] }), _jsxs("div", { className: "expiryDate", children: [_jsx("label", { htmlFor: "expiry", children: "EXPIRY DATE" }), _jsxs("span", { children: [_jsx("input", { type: "text", id: "expiry", placeholder: "Month" }), _jsx("input", { type: "text", id: "expiryYear", placeholder: "Year" })] })] })] }), _jsxs("div", { className: "acceptedCards", children: [_jsx("h2", { children: "ACCEPTED CARDS" }), _jsxs("div", { className: "cards", children: [_jsx("img", { src: "./images/visa.png", alt: "visa", loading: "lazy" }), _jsx("img", { src: "./images/Payment Logo.png", alt: "mastercard", loading: "lazy" }), _jsx("img", { src: "./images/paypal.png", alt: "paypal", loading: "lazy" }), _jsx("img", { src: "./images/americanExpress.png", alt: "americanExpress", loading: "lazy" })] })] }), _jsx("button", { className: "submitBtn", onClick: notify, children: "SUBMIT PAYMENT" })] })] }) }), _jsx(PaymentSuccessModal, { showModal: showModal, onClose: closeModal })] }));
};
export default Checkout;