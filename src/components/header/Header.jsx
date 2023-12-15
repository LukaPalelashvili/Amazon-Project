// Header.jsx

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import AuthContext from "../../context/AuthContext";

const Header = () => {
  const { isLoggedIn, auth, logout } = useContext(AuthContext);

  return (
    <div className="header">
      <div className="px-4 py-2 bg-gray-800 text-white text-xs">
        {isLoggedIn ? (
          <>
            <p className="px-4 py-2 bg-gray-800 text-white text-xs">
              Welcome, {auth.name}!
            </p>
            <button onClick={logout}>Log out</button>
          </>
        ) : (
          <Link to={"/login"}>Log in</Link>
        )}
      </div>
      <div>
        <Link to={"./"}>Home</Link>{" "}
      </div>
      <div>
        <Link to={"/products"}>Products</Link>
      </div>
      <div>
        <Link to={"/about-us"}>About Us</Link>
      </div>
    </div>
  );
};

export default Header;
