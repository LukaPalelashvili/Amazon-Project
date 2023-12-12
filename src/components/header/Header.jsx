import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="px-4 py-2 bg-gray-800 text-white text-xs">
        {" "}
        <p className="px-4 py-2 bg-gray-800 text-white text-xs"></p>
        <Link to={"./"}>Home</Link>{" "}
      </div>
      <div>
        <Link to={"/products"}>Products</Link>
      </div>
      <div>
        <Link to={"/about-us"}>About Us</Link>
      </div>
      <div>
        <Link to={"/login"}>Log in</Link>
      </div>
    </div>
  );
};

export default Header;
