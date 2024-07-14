import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../components/header/Header';
import "./products.scss";
import ProductList from '../../components/productlist/ProductList';
import { useProducts } from '../../contexts/ProductsContext';
const Products = () => {
    const { products, loading, error } = useProducts();
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    console.log('Products:', products);
    console.log('Loading:', loading);
    console.log('Error:', error);
    console.log('API URL:', `${baseURL}/products?organization_id=51bb0b6a6f0a4aff961fe010f1aea763&reverse_sort=false&page=1&size=12&Appid=L64ZD2LGS9NTOIE&Apikey=a959f36f9a3847f0be6b8d382a152fb920240712161811439641`);
    if (loading) {
        return _jsx("div", { style: { textAlign: 'center', color: '#333', marginBlock: '200px' }, children: _jsx("h2", { children: "Loading..." }) });
    }
    if (error) {
        return _jsx("div", { children: error });
    }
    return (_jsxs("div", { className: "products", children: [_jsx(Header, {}), _jsx("div", { className: "productsContent", id: 'productsContent', children: _jsxs("fieldset", { className: "fieldset", children: [_jsxs("legend", { className: "legend", children: [_jsx("span", { className: "hotDeals", children: "hot deals for this week" }), _jsx("span", { className: "saveUp", children: "save up to 50% off" })] }), _jsx(ProductList, { products: products })] }) })] }));
};
export default Products;
