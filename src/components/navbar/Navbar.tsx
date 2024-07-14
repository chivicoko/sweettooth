import { useState, useEffect, useRef, MouseEvent, ChangeEvent, KeyboardEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navbar.scss";
import { useProducts } from '../../contexts/ProductsContext';
// import { Product } from '../../types'; // Adjust import as per your types

function Navbar() {
  const {
    toggleWishlistModal, wishlist, cart, cartQuantity,
    searchTerm, setSearchTerm, filteredProducts, setFilteredProducts, products
  } = useProducts();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
    if (!isSearchBarVisible) {
      setSearchTerm(''); // Clear search term when closing search bar
    }
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleEnterKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      filterProducts();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      logoRef.current &&
      !logoRef.current.contains(event.target as Node) &&
      searchRef.current &&
      !searchRef.current.contains(event.target as Node) &&
      mobileSearchRef.current &&
      !mobileSearchRef.current.contains(event.target as Node)
    ) {
      setIsMenuVisible(false);
      setIsSearchBarVisible(false);
      setSearchTerm('');
    }
  };

  const filterProducts = () => {
    if (searchTerm.trim() !== '') {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If search term is empty, show all products
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
    };
  }, []);

  const displayCartQuantity = cartQuantity > 99 ? '99+' : cartQuantity.toString();

  return (
    <div className="navbar">
      <div className="logo">
        <span onClick={toggleMenu} ref={logoRef}>
          <button>
            <img src="./images/breadcrumb.png" alt="breadcrumb" loading="lazy" />
          </button>
        </span>
        <span><Link to={'/'}>Sweet Tooth</Link></span>
      </div>

      <div className={`menu ${isMenuVisible ? 'visible' : '/'}`} ref={menuRef}>
        <Link className={activeLink === '/products' ? 'active-link' : '/products'} to={'/products'}>Product</Link>
        <Link className={activeLink === '/cart' ? 'active-link' : '/cart'} to={'/cart'}>Cart</Link>
        <Link to={'#'} className="">Contact</Link>
      </div>

      <div className="icons">
        <div ref={searchRef}>
          {isSearchBarVisible && (
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                value={searchTerm}
                onChange={handleSearchInputChange}
                onKeyPress={handleEnterKeyPress}
              />
              {filteredProducts.length > 0 && (
                <ul className="search-results" style={{paddingInline: '10px'}}>
                  {filteredProducts.map(product => (
                    <li key={product.id}>
                      <Link to={`products/${product.id}`}>
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <button onClick={toggleSearchBar} className="search-icon">
            <img src="./images/search-nav.png" alt="search svg" loading="lazy" />
          </button>
        </div>
        <button className='wishlistIcon' onClick={() => toggleWishlistModal()}>
          <img src="./images/heart-nav.png" alt="app svg" loading="lazy" />
          {wishlist.length > 0 && (
            <span>{wishlist.length}</span>
          )}
        </button>
        <Link className='cartIcon' to={'/cart'}>
          <img src="./images/mdi_cart-outline-nav.png" alt="expand svg" loading="lazy" />
          {cart.length > 0 && (
            <span>{displayCartQuantity}</span>
          )}
        </Link>
      </div>

      <div className="iconsMobile">
        <div ref={mobileSearchRef}>
          {isSearchBarVisible && (
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                value={searchTerm}
                onChange={handleSearchInputChange}
                onKeyPress={handleEnterKeyPress}
              />
              {filteredProducts.length > 0 && (
                <ul className="search-results">
                  {filteredProducts.map(product => (
                    <li key={product.id}>
                      <Link to={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <button onClick={toggleSearchBar} className="search-icon">
            <img src="./images/searchMobile.png" alt="search svg" loading="lazy" />
          </button>
        </div>
        <button className='wishlistIcon' onClick={() => toggleWishlistModal()}>
          <img src="./images/heartMobile.png" alt="app svg" loading="lazy" />
          {wishlist.length > 0 && (
            <span>{wishlist.length}</span>
          )}
        </button>
        <Link className='cartIcon' to={'/cart'}>
          <img src="./images/mdi_cart-outlineMobile.png" alt="expand svg" loading="lazy" />
          {cart.length > 0 && (
            <span>{displayCartQuantity}</span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
