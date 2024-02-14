import React from "react";
import { GoPerson } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { LiaHeart } from "react-icons/lia";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import RefreshIcon from "../../assets/icon/refresh.png";
import "../css/navbar.css";
import NavbarDropdown from "../smallComponents/NavbarDropdown";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-section-1">
        <div className="website-name">
          <p onClick={() => navigate("/")}>Minago</p>
        </div>
        <div className="navbar-1-subsection">
          <div className="search-container">
            <input type="text" placeholder="Search products..." />
            <select>
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
            <button>
              <IoMdSearch />
            </button>
          </div>
          <div className="nav-icon-container">
            <img src={RefreshIcon} alt="refresh-icon" />
            <LiaHeart className="icon-heart" />
            <div className="cart-container">
              <MdAddShoppingCart className="icon-cart" />
              <span className="total-cart-items">0</span>
            </div>
          </div>
          <div className="user-container">
            <p className="account-text">Account</p>
            <GoPerson className="user-icon" />
            <p className="user-amount">$20.00</p>
          </div>
        </div>
      </div>
      <div className="navbar-section-2">
        <NavbarDropdown />
      </div>
    </div>
  );
};

export default Navbar;
