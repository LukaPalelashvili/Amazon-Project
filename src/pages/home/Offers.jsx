import React from "react";
import "./home.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cart";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const { addToCart, notifyAddedToCart } = useContext(CartContext);

  const url =
    "https://ngglobalwebapi20231210182820.azurewebsites.net/api/offer/offers";
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
                      <figure
                        key={offer.id}
                        className="card-product product-sm p-2"
                      >
                        <a href="#" className="img-wrap p-2">
                          {" "}
                          <img className="offers-img" src={offer.images[0]} />
                        </a>
                        <div className="p-3 text-center">
                          <a href="#" className="title">
                            {offer.name.substring(1, 60)}
                          </a>
                          <span className="badge bg-danger rounded-pill">
                            ${offer.price}
                          </span>
                        </div>
                        <button
                          className="btn  btn-primary"
                          onClick={() => {
                            addToCart(offer);
                            notifyAddedToCart(offer);
                          }}
                        >
                          <i className="me-1 fa fa-shopping-basket" />
                          Add to cart
                        </button>
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
