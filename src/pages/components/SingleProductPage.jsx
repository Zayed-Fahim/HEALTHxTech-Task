import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "../css/singleProductPage.css";
import ProductsList from "../smallComponents/ProductsList";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const SingleProductPage = () => {
  const singleProduct = useLoaderData();
  const apiUrl = "https://dummyjson.com/products";
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  const discountedPrice =
    singleProduct.price -
    (singleProduct.price * singleProduct.discountPercentage) / 100;

  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(singleProduct.rating * 2) / 2;

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
  const otherProducts = products.filter(
    (product) => product.id !== singleProduct.id
  );
  return (
    <div className="main-container">
      <div className="product-container">
        <img
          className="product-thumbnail"
          src={singleProduct.thumbnail}
          alt={singleProduct.title}
        />
        <div className="product-details">
          <h2>{singleProduct.title}</h2>
          <p className="product-description">{singleProduct.description}</p>
          <p className="product-price">
            Discount Price: ${discountedPrice.toFixed(2)}
          </p>
          <p className="product-discount">Old Price: ${singleProduct.price}</p>
          <p className="product-rating">Rating: {renderStars()}</p>
          <p className="product-stock">Stock: {singleProduct.stock}</p>
          <p className="product-brand">Brand: {singleProduct.brand}</p>
          <p className="product-category">Category: {singleProduct.category}</p>
          <h3>Images:</h3>
          <div className="product-images">
            {singleProduct.images.map((image, index) => (
              <img
                key={index}
                className="product-image"
                src={image}
                alt={`Product ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      <ProductsList otherProducts={otherProducts} />
    </div>
  );
};

export default SingleProductPage;
