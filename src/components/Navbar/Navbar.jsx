import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.scss";
import Title from "../../shared/Title/Title";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Title level={1} text="Protein Store Rosario" />
      <FaShoppingCart className="cart-icon" />
    </nav>
  );
};

export default Navbar;
