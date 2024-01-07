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
                  {/* <img
                    src="images/logo-white.png"
                    height={44}
                    className="logo-footer"
                  /> */}
                  <p className="mt-3 text-white-50">
                    {" "}
                    You might remember the Lenovo computer commercials in which
                    a youth reports this exciting news to his friends.{" "}
                  </p>
                  <nav className="mb-3">
                    <a
                      className="btn btn-icon"
                      title="Facebook"
                      target="_blank"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={32}
                        width={32}
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#4267b2"
                          d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"
                        />
                      </svg>
                    </a>
                    <a
                      className="btn btn-icon "
                      title="Instagram"
                      target="_blank"
                      href="#"
                    >
                      <svg
                        className="instagram"
                        xmlns="http://www.w3.org/2000/svg"
                        height={32}
                        width={32}
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#ffffff"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    </a>
                    <a
                      className="btn btn-icon"
                      title="Youtube"
                      target="_blank"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={32}
                        width={32}
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#ff0000"
                          d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                        />
                      </svg>
                    </a>
                    <a
                      className="btn btn-icon"
                      title="Twitter"
                      target="_blank"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={32}
                        width={32}
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#1da1f2"
                          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8 .2 5.7 .2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3 .6 10.4 .8 15.8 .8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.4 65.4 0 0 1 -29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                        />
                      </svg>
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
                {/* <img
                  src="images/flags/flag-usa.png"
                  className="me-2"
                  height={20}
                /> */}
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
