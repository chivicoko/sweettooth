import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./header.scss";
const Header = () => {
    const handleScroll = (e) => {
        e.preventDefault();
        const element = document.getElementById('productsContent');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsxs("div", { className: "header", children: [_jsxs(_Fragment, { children: [_jsxs("div", { className: "text", children: [_jsx("h1", { children: "Treat Yourself To Something Special" }), _jsx("p", { children: "Handcrafted with love, Devoured with joy" }), _jsx("button", { className: "headerBtn", onClick: handleScroll, children: "Shop Now" })] }), _jsx("div", { className: "image", children: _jsx("img", { src: "./images/headerImage.png", alt: "Kit Chocolate", loading: "lazy" }) })] }), _jsx("div", { className: "horizontalBar" })] }));
};
export default Header;
