import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="section-footer footer-dark bg-dark">
        <div className="container">
          <section className="footer-main padding-y-lg">
            <div className="row">
              <aside className="col-12 col-sm-12 col-lg-4">
                <article className="me-lg-4">
                  <img
                    src="images/logo-white.png"
                    height={44}
                    className="logo-footer"
                  />
                  <p className="mt-3 text-white-50">
                    {" "}
                    You might remember the Lenovo computer commercials in which
                    a youth reports this exciting news to his friends.{" "}
                  </p>
                  <nav className="mb-3">
                    <a
                      className="btn btn-icon btn-primary"
                      title="Facebook"
                      target="_blank"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-icon btn-primary"
                      title="Instagram"
                      target="_blank"
                      href="#"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-icon btn-primary"
                      title="Youtube"
                      target="_blank"
                      href="#"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                    <a
                      className="btn btn-icon btn-primary"
                      title="Twitter"
                      target="_blank"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </nav>
                </article>
              </aside>
              <aside className="col-6 col-sm-4 col-lg-2">
                <h6 className="title">Store</h6>
                <ul className="list-menu mb-4">
                  <li>
                    {" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Find store</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Categories</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Blogs</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-6 col-sm-4 col-lg-2">
                <h6 className="title">Information</h6>
                <ul className="list-menu mb-4">
                  <li>
                    {" "}
                    <a href="#">Help center</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Money refund</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Shipping info</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Refunds</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-6 col-sm-4  col-lg-2">
                <h6 className="title">Support</h6>
                <ul className="list-menu mb-4">
                  <li>
                    {" "}
                    <a href="#"> Help center </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Documents </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Account restore </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> My Orders </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-6 col-sm-4 col-lg-2">
                <h6 className="title">Useful links</h6>
                <ul className="list-menu mb-4">
                  <li>
                    {" "}
                    <a href="#"> Careers </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Mission Vision </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Management </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Sitemap </a>
                  </li>
                </ul>
              </aside>
            </div>{" "}
            {/* row.// */}
          </section>{" "}
          {/* footer-top.// */}
          <hr className="my-0" />
          <section className="footer-bottom d-flex justify-content-between">
            <div className="text-white-50">© 2020- 2023 Templatemount.</div>
            <nav className="dropup">
              <button
                className="dropdown-toggle btn text-white align-items-center"
                type="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="images/flags/flag-usa.png"
                  className="me-2"
                  height={20}
                />
                <span>English</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Russian
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Arabic
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Spanish
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>{" "}
        {/* container end.// */}
      </footer>
    </>
  );
};

export default Footer;
