import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../components/header/Header';
import "./products.scss";
import ProductList from '../../components/productlist/ProductList';
import { useProducts } from '../../contexts/ProductsContext';
const Products = () => {
    const { products, loading, error } = useProducts();
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (error) {
        return _jsx("div", { children: error });
    }
    return (_jsxs("div", { className: "products", children: [_jsx(Header, {}), _jsx("div", { className: "productsContent", id: 'productsContent', children: _jsxs("fieldset", { className: "fieldset", children: [_jsxs("legend", { className: "legend", children: [_jsx("span", { className: "hotDeals", children: "hot deals for this week" }), _jsx("span", { className: "saveUp", children: "save up to 50% off" })] }), _jsx(ProductList, { products: products })] }) })] }));
};
export default Products;
