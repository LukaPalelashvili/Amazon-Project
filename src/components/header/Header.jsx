import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import AuthContext from "../../context/AuthContext";
import logo from "../../images/logo-2.svg";
import { CartContext } from "../../context/CartContext.jsx";
import { SaveContext } from "../../context/saveContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faUser,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const { user, auth, logout } = useContext(AuthContext);
  const { cartItems, addToCart, removeFromCart, totalItems } =
    useContext(CartContext);
  const { savedItems, addToSave, removeFromSave } = useContext(SaveContext);
  const [searchProduct, setSearchProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(searchProduct);
  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const url = "https://dummyjson.com/products?limit=6";
  const fetchSearchProduct = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((searchProduct) => {
        setSearchProduct(searchProduct.products);
      });
  };

  useEffect(() => {
    fetchSearchProduct();
  }, []);

  const handleChange1 = (inputValue) => {
    setValue(inputValue);
  };

  const filterItems = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
    } else {
      setFilteredProducts((prevProducts) =>
        searchProduct.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  };

  const handleInputClick = () => {
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const handleItemClick = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <header className="section-header">
        <section className="header-main border-bottom py-3">
          <div className="container">
            <div className="row gx-2 gy-3">
              <div className="col-lg col-md col-6 flex-grow-0">
                <Link
                  className="brand-wrap me-4"
                  style={{ cursor: "pointer" }}
                  to={"/"}
                >
                  <img className="logo" src={logo} />
                </Link>
              </div>
              <div className="col-lg col-md col-6 flex-grow-0">
                <div className="float-end">
                  <Link
                    to={"/products"}
                    className="btn btn-primary text-nowrap"
                  >
                    Discover
                  </Link>
                </div>
              </div>
              <div className="col-lg col-md order-lg-last">
                <div className="float-md-end">
                  <Link
                    to={"/profile"}
                    data-bs-toggle="offcanvas"
                    className="btn btn-light"
                  >
                    {/*<FontAwesomeIcon*/}
                    {/*  style={{ color: "gray" }}*/}
                    {/*  className="fa me-1"*/}
                    {/*  icon={faUser}*/}
                    {/*/>{" "}*/}
                    <img
                      src={user?.avatar}
                      className="rounded-circle me-1"
                      style={{ width: "20px", height: "20px" }}
                      alt={user?.name}
                    />
                    {user?.name || "Profile"}
                  </Link>
                  <Link to={"/saved"} className="btn btn-light shadow-sm">
                    <span className="ms-1 d-none d-sm-inline-block">
                      <FontAwesomeIcon
                        style={{ color: "gray" }}
                        className="fa me-1"
                        icon={faBookmark}
                      />
                      Saved ({savedItems.length})
                    </span>
                  </Link>

                  <Link
                    to={"/cart"}
                    data-bs-toggle="offcanvas"
                    className="btn btn-light"
                  >
                    <FontAwesomeIcon
                      style={{ color: "gray" }}
                      className="fa me-1"
                      icon={faCartShopping}
                    />
                    Cart ({totalItems})
                  </Link>

                  <button
                    className="btn btn-light d-md-none ms-2 float-end"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_nav"
                    aria-controls="main_nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Menu
                  </button>
                </div>
              </div>

              <div className="col-lg-3 col-xl-4 col-xxl-5 col-md-12 order-lg-3">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group">
                    <HeaderSearch
                      value={value}
                      onChangeInput={handleChange1}
                      onChangeCallback={filterItems}
                      onFocus={handleInputClick}
                      onBlur={handleInputBlur}
                      onItemClick={handleItemClick}
                    />
                  </div>
                </form>
                <div
                  className={`dropdown-menu1${showDropdown ? " show" : ""}`}
                  style={{ display: showDropdown ? "block" : "none" }}
                >
                  {filteredProducts?.map((search) => (
                    <div className="search-container" key={search.id}>
                      <img
                        className="search-img"
                        src={search.images[0]}
                        alt=""
                      />
                      <div className="search-info">
                        <p>{search.title}</p>
                        <p>{search.description.substring(0, 30)}...</p>
                      </div>
                      <p className="search-price">${search.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <nav className="navbar py-0 py-md-2 navbar-expand-md navbar-light border-bottom">
          <div className="container">
            <div className="" id="main_nav" style={{}}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/products"} className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-item"></li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/info"}>
                    Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
