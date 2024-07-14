import React from "react";
import "./header.scss";

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('productsContent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <>
        <div className="text">
          <h1>Treat Yourself To Something Special</h1>
          <p>Handcrafted with love, Devoured with joy</p>
          <button className="headerBtn" onClick={handleScroll}>
            Shop Now
          </button>
        </div>

        <div className="image">
          <img src="./images/headerImage.png" alt="Kit Chocolate" loading="lazy" />
        </div>
      </>
      <div className="horizontalBar"></div>
    </div>
  );
};

export default Header;
