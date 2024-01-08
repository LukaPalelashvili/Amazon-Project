import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3784391/pexels-photo-3784391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const heroTexts = [
    {
      h1: "Welcome to MarketHub",
      p: "Your Gateway to Amazing Deals",
    },
    {
      h1: "Shop the Latest Trends",
      p: "Stay Fashion-Forward with MarketHub",
    },
    {
      h1: "Discover Top Deals",
      p: "Unbeatable Discounts Await You",
    },
  ];

  return (
    <section className="section-intro mb-3 mt-3">
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {images.map((_, index) => (
              <li
                key={index}
                data-target="#carouselExampleIndicators"
                data-slide-to={index}
                className={index === activeIndex ? "active" : ""}
              />
            ))}
          </ol>
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <img
                  src={image}
                  className="d-block w-100 h-23 obj-cover"
                  style={{ height: "350px" }}
                  alt="..."
                />
                <div className="carousel-caption d-flex flex-column justify-content-end align-items-center mb-3">
                  {
                    <>
                      <h1>{heroTexts[index].h1}</h1>
                      <p>{heroTexts[index].p}</p>
                      <Link to={"/products"}>
                        <button className={`btn btn-primary`}>Shop Now</button>
                      </Link>
                    </>
                  }
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={() => {
              setActiveIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1,
              );
            }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={nextSlide}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
