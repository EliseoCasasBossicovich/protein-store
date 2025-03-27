import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <button>Consultar</button>
    </div>
  );
};

export default ProductCard;
