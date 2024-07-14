import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
const ProductsContext = createContext({
    products: [],
    loading: false,
    error: null,
    wishlist: [],
    addToWishlist: () => { },
    removeFromWishlist: () => { },
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    updateQuantity: () => { },
    clearCart: () => { }, // Initialize clearCart
    subtotal: 0,
    deliveryFee: 1000,
    total: 0,
    showProductModal: false,
    toggleProductModal: () => { },
    showWishlistModal: false,
    toggleWishlistModal: () => { },
    selectedProduct: null,
    setSelectedProduct: () => { },
    searchTerm: '',
    setSearchTerm: () => { },
    filteredProducts: [],
    setFilteredProducts: () => { },
    cartQuantity: 0,
});
export const useProducts = () => useContext(ProductsContext);
const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [showProductModal, setShowProductModal] = useState(false);
    const [showWishlistModal, setShowWishlistModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const deliveryFee = 1000;
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const organizationId = import.meta.env.VITE_APP_ORGANIZATION_ID;
                const apiKey = import.meta.env.VITE_APP_API_KEY;
                const appid = import.meta.env.VITE_APP_APP_ID;
                const response = await axios.get(`/api/products?organization_id=${organizationId}&reverse_sort=false&page=1&size=12&Appid=${appid}&Apikey=${apiKey}`);
                // const response = await axios.get(`/api/products?organization_id=${organizationId}&reverse_sort=false&page=1&size=12&Appid=${appid}&Apikey=${apiKey}`);
                setProducts(response.data.items);
                setFilteredProducts(response.data.items); // Initialize filtered products with all products
            }
            catch (error) {
                setError('Failed to fetch products');
            }
            finally {
                setLoading(false);
            }
            const savedWishlist = localStorage.getItem('wishlist');
            if (savedWishlist) {
                setWishlist(JSON.parse(savedWishlist));
            }
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        };
        fetchProducts();
    }, []);
    useEffect(() => {
        if (searchTerm.trim() !== '') {
            const filtered = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredProducts(filtered);
        }
        else {
            setFilteredProducts(products); // If search term is empty, show all products
        }
    }, [searchTerm, products]);
    const addToWishlist = (productId) => {
        if (!wishlist.includes(productId)) {
            const newWishlist = [...wishlist, productId];
            setWishlist(newWishlist);
            localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        }
    };
    const removeFromWishlist = (productId) => {
        const newWishlist = wishlist.filter(id => id !== productId);
        setWishlist(newWishlist);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    };
    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        }
        else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
    };
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    const updateQuantity = (productId, quantity) => {
        setCart(cart.map(item => item.id === productId ? { ...item, quantity } : item));
    };
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };
    const subtotal = cart.reduce((sum, item) => sum + item.current_price[0].NGN[0] * item.quantity, 0);
    const total = subtotal + deliveryFee;
    const toggleProductModal = () => {
        setShowProductModal(!showProductModal);
    };
    const toggleWishlistModal = () => {
        setShowWishlistModal(!showWishlistModal);
    };
    return (_jsx(ProductsContext.Provider, { value: {
            products, loading, error, wishlist, addToWishlist, removeFromWishlist,
            cart, addToCart, removeFromCart, updateQuantity, clearCart, subtotal, deliveryFee, total,
            showProductModal, toggleProductModal, showWishlistModal, toggleWishlistModal,
            selectedProduct, setSelectedProduct,
            searchTerm, setSearchTerm,
            filteredProducts,
            setFilteredProducts,
            cartQuantity: cart.reduce((total, item) => total + item.quantity, 0),
        }, children: children }));
};
export default ProductsProvider;
