import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Product } from '../types';
import { products as localProducts } from '../data'; // Import local data

interface CartItem extends Product {
  quantity: number;
}

interface ProductsContextProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
  showProductModal: boolean;
  toggleProductModal: () => void;
  showWishlistModal: boolean;
  toggleWishlistModal: () => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
  cartQuantity: number;
}

const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  loading: false,
  error: null,
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  subtotal: 0,
  deliveryFee: 1000,
  total: 0,
  showProductModal: false,
  toggleProductModal: () => {},
  showWishlistModal: false,
  toggleWishlistModal: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  cartQuantity: 0,
});

export const useProducts = () => useContext(ProductsContext);

const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(localProducts); // Initialize with local data
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showProductModal, setShowProductModal] = useState<boolean>(false);
  const [showWishlistModal, setShowWishlistModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  
  const observer = useRef<IntersectionObserver | null>(null);
  const deliveryFee = 1000;
  
  const lastProductElementRef = useRef<HTMLDivElement | null>(null);

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      const organizationId = import.meta.env.VITE_APP_ORGANIZATION_ID;
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const appid = import.meta.env.VITE_APP_APP_ID;

      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_BASE_URL}/api/products?organization_id=${organizationId}&reverse_sort=false&page=${page}&size=12&Appid=${appid}&Apikey=${apiKey}`
      );

      if (response && response.data && response.data.items) {
        const newProducts = response.data.items;
  
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setFilteredProducts((prevFiltered) => [...prevFiltered, ...newProducts]);
  
        if (newProducts.length === 0) {
          setHasMore(false); // No more products to fetch
        }
      } else {
        setError('Failed to fetch products from the API');
        setProducts(localProducts); // Fallback to local data
        setFilteredProducts(localProducts); // Fallback to local data
      }
    } catch (error) {
      setError('Failed to fetch products');
      setProducts(localProducts); // Fallback to local data
      setFilteredProducts(localProducts); // Fallback to local data
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchProducts(page);

    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }

    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [page]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If search term is empty, show all products
    }
  }, [searchTerm, products]);

  const addToWishlist = (productId: string) => {
    if (!wishlist.includes(productId)) {
      const newWishlist = [...wishlist, productId];
      setWishlist(newWishlist);
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    }
  };

  const removeFromWishlist = (productId: string) => {
    const newWishlist = wishlist.filter((id) => id !== productId);
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.current_price[0].NGN[0] * item.quantity,
    0
  );
  const total = subtotal + deliveryFee;

  const toggleProductModal = () => {
    setShowProductModal(!showProductModal);
  };

  const toggleWishlistModal = () => {
    setShowWishlistModal(!showWishlistModal);
  };

  useEffect(() => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (lastProductElementRef.current) {
      observer.current.observe(lastProductElementRef.current);
    }
  }, [loading, hasMore]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        deliveryFee,
        total,
        showProductModal,
        toggleProductModal,
        showWishlistModal,
        toggleWishlistModal,
        selectedProduct,
        setSelectedProduct,
        searchTerm,
        setSearchTerm,
        filteredProducts,
        setFilteredProducts,
        cartQuantity: cart.reduce((total, item) => total + item.quantity, 0),
      }}
    >
      {children}
      <div ref={lastProductElementRef} />
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
