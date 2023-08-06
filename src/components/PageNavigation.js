import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/singlePageNav.css";

const PageNavigation = ({ title }) => {
  return (
    <div className="single-page-nav">
      <NavLink to="/">Home</NavLink> / <span>{title}</span>
    </div>
  );
};

export default PageNavigation;
