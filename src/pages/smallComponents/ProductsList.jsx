import React from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ otherProducts }) => {
  const calculateDiscountedPrice = (product) => {
    const discountedPrice =
      product.price - (product.price * product.discountPercentage) / 100;
    return discountedPrice.toFixed(2);
  };
  return (
    <div className="products-list-container">
      <h3>Other Products</h3>
      <hr />
      <div className="scrollable-container">
        <ul className="products-list">
          {otherProducts.map((product) => (
            <li key={product.id} className="product-item">
              <Link to={`/products/${product.id}`} className="product-link">
                <p className="product-title">{product.title}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-discount-price">
                  Discounted Price: ${calculateDiscountedPrice(product)}
                </p>
                <p className="product-availability">
                  Availability:
                  {product.stock > 0 ? (
                    <span className="in-stock">In Stock</span>
                  ) : (
                    <span className="out-of-stock">Out of Stock</span>
                  )}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;
