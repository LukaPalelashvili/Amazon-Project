import React from "react";
import MainPhone from "../../images/main-phone.png";
import Maintech from "../../images/main-tech.png";
import Avatar from "../../images/avatar.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [categories, setCategories] = useState([]);

  const url = "https://dummyjson.com/products/categories";
  const fetchCategory = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <section className="section-intro mb-3 mt-3">
        <div className="container">
          <main className="card p-3">
            <div className="row">
              <aside className="col-lg-3">
                <nav className="nav flex-column nav-pills mb-3 mb-lg-0">
                  {categories.slice(0, 8).map((category) => (
                    <>
                      <a className="nav-link" href="#">
                        {category}
                      </a>
                    </>
                  ))}
                  <a className="nav-link" href="#">
                    Other products
                  </a>
                </nav>
              </aside>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-xxl-9 col-lg-8">
                    <div
                      id="carouselMain"
                      className="carousel-main carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <article className="carousel-item">
                          <div className="carousel-caption">
                            <h2 className="mb-3">
                              <span className="fw-normal">Latest trending</span>
                              <br /> <strong>Electronic items</strong>
                            </h2>
                            <a href="#" className="btn btn-warning">
                              View more
                            </a>
                          </div>
                          <img
                            style={{ height: 352 }}
                            src={Maintech}
                            className="d-block w-100 img-cover"
                            alt="Banner"
                          />
                        </article>
                        <article className="carousel-item active">
                          <div className="carousel-caption">
                            <h2 className="mb-3">
                              <span className="fw-normal">Latest delas</span>
                              <br /> <strong>Best Smartphones</strong>
                            </h2>
                            <a href="#" className="btn btn-warning">
                              View more
                            </a>
                          </div>
                          <img
                            style={{ height: 352 }}
                            src={MainPhone}
                            className="d-block w-100 img-cover"
                            alt="Banner"
                          />
                        </article>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 d-none d-lg-block">
                    <div className="bg-primary-light p-3 rounded mb-3">
                      <p className="d-flex mb-3 text-base">
                        <img
                          src={Avatar}
                          className="img-avatar me-2"
                          width={44}
                          height={44}
                          alt=""
                        />
                        <span>
                          Hi, user <br /> let's get stated
                        </span>
                      </p>

                      <Link
                        to="/register"
                        className="btn btn-sm btn-primary w-100"
                      >
                        Join now
                      </Link>
                    </div>
                    <div className="bg-warning text-white p-3 rounded mb-2">
                      Get US $10 off with a new supplier account
                      <br />
                      <a
                        href="#"
                        className="text-white mt-1 fw-bold d-inline-block"
                      >
                        Get now
                      </a>
                    </div>
                    <div className="bg-info text-white p-3 rounded mb-2">
                      Send quotes with supplier preferences
                      <br />
                      <a
                        href="#"
                        className="text-white mt-1 fw-bold d-inline-block"
                      >
                        Try now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Hero;
