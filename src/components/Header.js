import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { LiaBarsSolid } from "react-icons/lia";

const active = ({ isActive }) => {
  return {
    color: isActive ? "rgb(113, 113, 113)" : "black",
  };
};

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div className="header-main">
      <div className="header-outter">
        <div className="header-logo">
          <NavLink to="/">Mendy's Mart</NavLink>
        </div>
        <div className="mobile-navbar-btn">
          <RxCross1
            className={`nav-toggles ${isNavbarOpen ? "" : "hidden"}`}
            onClick={toggleNavbar}
          />
          <LiaBarsSolid
            className={`nav-toggles ${isNavbarOpen ? "hidden" : "clicked"}`}
            onClick={toggleNavbar}
          />
        </div>
      </div>
      <div className={`header-nav ${isNavbarOpen ? "show" : ""}`}>
        <li>
          <NavLink style={active} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={active} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={active} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink style={active} to="/contact">
            Contact
          </NavLink>
        </li>
        <li id="login-btn">
          <NavLink to="/login">Log in</NavLink>
        </li>
        <li>
          <NavLink to="cart">
            <div className="cart-btn">
              <div className="flex">
                <CiShoppingCart className="cart-icon" />
                <span className="cart-count">7</span>
              </div>
            </div>
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Header;
