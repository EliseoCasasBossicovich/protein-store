import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";

const products = [
  { id: 1, name: "Proteína Whey", image: "/images/protein1.jpg" },
  { id: 2, name: "Creatina", image: "/images/creatine.jpg" },
];

const Products = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
