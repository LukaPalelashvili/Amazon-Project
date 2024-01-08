import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="section-footer bg-white border-top padding-y-sm">
        <div className="container">
          <section className="footer-bottom d-flex justify-content-lg-between">
            <p className="mb-0"> © {year} MarketHub. All rights reserved. </p>
            <nav>
              <Link className="px-2" to="/">
                Main Page
              </Link>
              <Link to="/products" className="px-2">
                Shop
              </Link>
              <Link to="/info" className="px-2">
                Information
              </Link>
              <Link to="/contact" className="px-2">
                Contact Us
              </Link>
            </nav>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
