import React, { useState } from "react";
import {
  FaCartPlus,
  FaRegShareSquare,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { GiInfo } from "react-icons/gi";
import ProductImageLoader from "./ProductImageLoader";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [showActions, setShowActions] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(product.rating * 2) / 2;

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} />);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaStar key={i} style={{ opacity: 0.5 }} />);
      }
    }

    return stars;
  };
  const handleHover = () => {
    setShowActions(true);
  };

  const handleLeave = () => {
    setShowActions(false);
  };
  return (
    <div
      className="product-card"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="product-image">
        {imageLoading && <ProductImageLoader />}
        <img
          loading="lazy"
          src={product.thumbnail}
          alt={product.title}
          onLoad={handleImageLoad}
        />

        <div className="discount">
          -{Math.round(product.discountPercentage)}%
        </div>
        {showActions && (
          <div className="action-buttons">
            <button type="button">
              <FaCartPlus />
            </button>
            <button type="button">
              <MdOutlineFavorite />
            </button>
            <button type="button">
              <GiInfo onClick={() => navigate(`/products/${product.id}`)} />
            </button>
            <button type="button">
              <FaRegShareSquare />
            </button>
          </div>
        )}
      </div>

      <div className="product-details">
        <div className="product-name">{product.title}</div>
        <div className="ratings-stock">
          <div className="product-rating">{renderStars()}</div>
          <div className="product-availability">
            {product.stock > 0 ? (
              <span className="stock-available">Stock Available</span>
            ) : (
              <span className="stock-out">Out of Stock</span>
            )}
          </div>
        </div>
        <div className="product-prices">
          <div className="offer-price">${discountedPrice.toFixed(2)}</div>
          <div className="old-price">${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
