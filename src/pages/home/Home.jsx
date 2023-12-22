import React from "react";
import Offers from "./Offers";
import NewProducts from "./NewProducts";
import DemandProducts from "./DemandProducts";
import MainPhone from "../../images/main-phone.png";
import Maintech from "../../images/main-tech.png";
import Avatar from "../../images/avatar.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="section-intro mb-3 mt-3">
        <div className="container">
          <main className="card p-3">
            <div className="row">
              <aside className="col-lg-3">
                <nav className="nav flex-column nav-pills mb-3 mb-lg-0">
                  <a className="nav-link" aria-current="page" href="#">
                    Electronics
                  </a>
                  <a className="nav-link" href="#">
                    Clothes and wear
                  </a>
                  <a className="nav-link" href="#">
                    Home interiors
                  </a>
                  <a className="nav-link" href="#">
                    Computer and tech
                  </a>
                  <a className="nav-link" href="#">
                    Tools, equipments
                  </a>
                  <a className="nav-link" href="#">
                    Sports and outdoor
                  </a>
                  <a className="nav-link" href="#">
                    Animal and pets
                  </a>
                  <a className="nav-link" href="#">
                    Machinery tools
                  </a>
                  <a className="nav-link" href="#">
                    Other products
                  </a>
                </nav>
              </aside>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-xxl-9 col-lg-8">
                    {/* carousel */}
                    <div
                      id="carouselMain"
                      className="carousel-main carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <article className="carousel-item">
                          <div className="carousel-caption">
                            <h2 className="mb-3">
                              <span className="fw-normal">Latest trending</span>{" "}
                              <br /> <strong>Electronic items</strong>
                            </h2>
                            <a href="#" className="btn btn-warning">
                              {" "}
                              View more{" "}
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
                              <span className="fw-normal">Latest delas</span>{" "}
                              <br /> <strong>Best Smartphones</strong>
                            </h2>
                            <a href="#" className="btn btn-warning">
                              {" "}
                              View more{" "}
                            </a>
                          </div>
                          <img
                            style={{ height: 352 }}
                            src={MainPhone}
                            className="d-block w-100 img-cover"
                            alt="Banner"
                          />
                        </article>
                      </div>{" "}
                      {/* carousel-inner .// */}
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
                    {/* carousel .//end */}
                  </div>
                  <div className="col-xxl-3 col-lg-4 d-none d-lg-block">
                    {/* main-right */}
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
                      <br />{" "}
                      <a
                        href="#"
                        className="text-white mt-1 fw-bold d-inline-block"
                      >
                        Get now
                      </a>
                    </div>
                    <div className="bg-info text-white p-3 rounded mb-2">
                      Send quotes with supplier preferences
                      <br />{" "}
                      <a
                        href="#"
                        className="text-white mt-1 fw-bold d-inline-block"
                      >
                        Try now
                      </a>
                    </div>
                    {/* main-right */}
                  </div>
                </div>{" "}
                {/* row.// */}
              </div>
              {/* col.// */}
            </div>
          </main>
        </div>{" "}
        {/* container end.// */}
      </section>
      <DemandProducts />
      <Offers />
      <NewProducts />
    </>
  );
};

export default Home;
