import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
        className="navigation"
      >
        <Link to={"/users-list"}>users list</Link>
        <Link to={"/products2"}>products2</Link>
        <Link to={"/product-detail"}>product-detail</Link>
        <Link to={"/main-cart"}>main-cart</Link>
        <Link to={"/user-profile"}>user-profile</Link>
        <Link to={"/main-register"}>main-register</Link>
      </div>
    </>
  );
};

export default Navigation;
