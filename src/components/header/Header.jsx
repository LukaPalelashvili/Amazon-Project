import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import AuthContext from "../../context/AuthContext";
import logo from "../../images/logo.svg";
import { CartContext } from "../../context/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const Header = () => {
  const { isLoggedIn, auth, logout } = useContext(AuthContext);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

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
                <div className="dropdown float-end">
                  <button
                    data-bs-toggle="dropdown"
                    className="dropdown-toggle btn btn-primary text-nowrap"
                  >
                    Categories
                  </button>
                  <nav className="dropdown-menu dropdown-large">
                    <ul className="row row-cols-2 row-cols-lg-3 list-unstyled nav-pills g-0">
                      <li>
                        <a className="nav-link" href="#">
                          Laptops
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Cameras
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Gadgets
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Smartphones
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Smartwatches
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Headsets
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Gamings
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Apple
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Lacetti
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Toyota
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Hyundai
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Mercedes
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Chevrolet
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Lacetti
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Hyundai
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Office tech
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Home equipments
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg col-md order-lg-last">
                <div className="float-md-end">
                  <div className="btn btn-light shadow-sm">
                    <FontAwesomeIcon
                      style={{ color: "gray" }}
                      className="fa me-1"
                      icon={faUser}
                    ></FontAwesomeIcon>
                    <span className="ms-1 d-none d-sm-inline-block"> </span>
                    {isLoggedIn ? (
                      <>
                        <p className="px-4 py-2 bg-gray-800 text-white text-xs">
                          Welcome, {hello}!
                        </p>
                        <button onClick={logout}>Log out</button>
                      </>
                    ) : (
                      <Link className="btn-light " to={"/login"}>
                        Log in
                      </Link>
                    )}
                  </div>
                  <div className="btn btn-light shadow-sm">
                    <span className="ms-1 d-none d-sm-inline-block">
                      <FontAwesomeIcon
                        style={{ color: "gray" }}
                        className="fa me-1"
                        icon={faHeart}
                      ></FontAwesomeIcon>
                      Wishlist!
                    </span>
                  </div>

                  <Link
                    to={"/cart"}
                    data-bs-toggle="offcanvas"
                    className="cart-button btn btn-light"
                    // onClick={toggle}
                  >
                    <FontAwesomeIcon
                      style={{ color: "gray" }}
                      className="fa me-1"
                      icon={faHeart}
                    ></FontAwesomeIcon>{" "}
                    Cart ({cartItems.length})
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
                <form action="#">
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button className="input-group-btn btn-icon btn btn-light">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <nav className="navbar py-0 py-md-2 navbar-expand-md navbar-light border-bottom">
          <div className="container">
            <div className="" id="main_nav" style={{}}>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    All templates
                  </a>
                  <nav className="dropdown-menu p-4">
                    <div className="d-flex flex-wrap flex-sm-nowrap">
                      <div style={{ width: "12rem" }}>
                        <h6>Ads website</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/p-ads-index">
                              Ads home
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-ads-list">
                              Ads listing
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-ads-detail">
                              Ads detail
                            </a>
                          </li>
                        </ul>
                        <h6>Techstore</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/p-techstore-index">
                              Main page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-techstore-list">
                              Listing view
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-techstore-detail">
                              Item details
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div style={{ width: "12rem" }}>
                        <h6>Marketplace</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/p-market-index">
                              Main page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-market-list">
                              Listing view
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-market-list-grid">
                              Grid view
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-market-detail">
                              Item detail
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-market-cart">
                              Cart page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-market-order">
                              Order page
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div style={{ width: "12rem" }}>
                        <h6>Food order</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/p-food-index">
                              Main page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-food-detail">
                              Restaurant foods
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-food-order">
                              Food order
                            </a>
                          </li>
                        </ul>
                        <h6>Common pages</h6>
                        <ul className="list-menu mb-3">
                          <li>
                            <a className="text-body" href="/p-info-pricing">
                              Pricing page
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-user-profile">
                              User profile
                            </a>
                          </li>
                          <li>
                            <a className="text-body" href="/p-user-signup">
                              User register
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <figure className="p-5 text-center bg-warning-light rounded">
                      <a href="#" className="btn btn-warning">
                        Download all templates
                      </a>
                    </figure>
                  </nav>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/p-techstore-index">
                        Page home
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/p-techstore-list">
                        Page listing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/p-techstore-detail">
                        Page detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/products"}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/info"}>
                    Information
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
