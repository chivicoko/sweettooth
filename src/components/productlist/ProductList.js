import { jsx as _jsx } from "react/jsx-runtime";
import "./productlist.scss";
import ProductCard from '../productcard/ProductCard';
const ProductList = ({ products }) => {
    return (_jsx("div", { className: "productsContainer", children: products.map((product) => (_jsx(ProductCard, { product: product }, product.id))) }));
};
export default ProductList;
