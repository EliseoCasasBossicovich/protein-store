import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Protein Store Rosario</h1>
      <FaShoppingCart className="cart-icon" />
    </nav>
  );
};

export default Navbar;
