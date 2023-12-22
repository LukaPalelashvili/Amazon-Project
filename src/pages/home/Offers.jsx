import React from "react";
import "./home.css";
import { useState, useEffect } from "react";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  const url =
    "https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/offers";
  const fetchOffers = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((offers) => {
        console.log("of", offers);
        setOffers(offers);
      });
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <>
      <section className="pb-3">
        <div className="container">
          <div className="card overflow-hidden">
            <div className="row gx-0">
              <aside className="col-lg-3 p-4">
                <header>
                  <h3>Deals and offers</h3>
                  <p>Hygiene equipments</p>
                </header>
                {/* sect-heading */}
                <div className="timer">
                  <div>
                    {" "}
                    <span className="num">04</span> <small>Days</small>
                  </div>
                  <div>
                    {" "}
                    <span className="num">12</span> <small>Hours</small>
                  </div>
                  <div>
                    {" "}
                    <span className="num">58</span> <small>Min</small>
                  </div>
                  <div>
                    {" "}
                    <span className="num">02</span> <small>Sec</small>
                  </div>
                </div>
              </aside>{" "}
              <div className="col-lg-9 border-start">
                <div className="row gx-0 bordered-cols">
                  {offers.map((offer) => (
                    <div className="col-md col-sm-4 col-6">
                      <figure className="card-product product-sm p-2">
                        <a href="#" className="img-wrap p-2">
                          {" "}
                          <img className="offers-img" src={offer.image} />{" "}
                        </a>
                        <div className="p-3 text-center">
                          <a href="#" className="title">
                            {offer.name}
                          </a>
                          <span className="badge bg-danger rounded-pill">
                            ${offer.newPrice}
                          </span>
                        </div>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
