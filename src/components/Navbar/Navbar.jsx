import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.scss";
import Title from "../../shared/Title/Title";

const Navbar = () => {
  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  return (
    <nav className="navbar">
      <a href="/" onClick={handleTitleClick} className="navbar-title">
        <Title level={2} text="Protein Store Rosario" className={"inverse"} />
      </a>
      <FaShoppingCart className="cart-icon" />
    </nav>
  );
};

export default Navbar;
