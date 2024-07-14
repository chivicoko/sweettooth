import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './paymentSuccessModal.scss';
const PaymentSuccessModal = ({ showModal, onClose }) => {
    if (!showModal)
        return null;
    return (_jsx("div", { className: "payment-success-modal-overlay", onClick: onClose, children: _jsxs("div", { className: "payment-success-modal-content", onClick: (e) => e.stopPropagation(), children: [_jsx("h2", { children: "Payment Successful" }), _jsxs("svg", { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", fill: "#000000", children: [_jsx("g", { id: "SVGRepo_bgCarrier", "stroke-width": "0" }), _jsx("g", { id: "SVGRepo_tracerCarrier", "stroke-linecap": "round", "stroke-linejoin": "round" }), _jsx("g", { id: "SVGRepo_iconCarrier", children: _jsx("path", { fill: "#00ff00", d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z" }) })] }), _jsx("p", { children: "You'll receive an email of confirmation soon." })] }) }));
};
export default PaymentSuccessModal;
