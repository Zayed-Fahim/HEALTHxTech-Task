import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../smallComponents/ProductCard";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "../css/products.css";
import ProductLoader from "../smallComponents/ProductLoader";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePagination = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const isLeftButtonActive = currentPage > 1;
  const isRightButtonActive = currentPage < totalPages;

  return (
    <div className="products-container">
      <div className="featured-text">
        <p>Featured Item</p>
        <div className="pagination-icon">
          <span
            className={`icon-left ${isLeftButtonActive ? "active" : ""}`}
            onClick={() => handlePagination("prev")}
          >
            <FaArrowLeftLong />
          </span>
          <span
            className={`icon-right ${isRightButtonActive ? "active" : ""}`}
            onClick={() => handlePagination("next")}
          >
            <FaArrowRightLong />
          </span>
        </div>
      </div>
      {isLoading ? (
        <ProductLoader />
      ) : (
        <div className="products">
          {products
            .slice(
              (currentPage - 1) * productsPerPage,
              currentPage * productsPerPage
            )
            .map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                isLoading={isLoading}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
