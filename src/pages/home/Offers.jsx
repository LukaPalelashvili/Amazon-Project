import React from "react";
import "./home.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const { addToCart, notifyAddedToCart } = useContext(CartContext);

  const url = "https://dummyjson.com/products?limit=5";
  const fetchOffers = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((offers) => {
        setOffers(offers.products);
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
                <article className="card p-3  bg-primary h-100">
                  <div>
                    <h4 className="text-white mb-3">Today's Best Offers</h4>
                    <p className="text-white-50">
                      Get up to 70% off bedding and bath.
                    </p>
                  </div>
                </article>
              </aside>
              <div className="col-lg-9 border-start">
                <div className="row gx-0 bordered-cols">
                  {offers.map((offer) => (
                    <div className="col-md col-sm-4 col-6">
                      <figure
                        key={offer.id}
                        className="card-product product-sm p-2"
                      >
                        <Link
                          to={`/product-detail/${offer.id}`}
                          className="img-wrap p-2"
                        >
                          <img className="offers-img" src={offer.images[0]} />
                        </Link>
                        <div className="p-3 text-center">
                          <a href="#" className="title">
                            {offer.title.substring(0, 10)}
                          </a>
                        </div>
                        <div className="justify-content-center">
                          <div className=" text-center">
                            <span className="badge bg-danger rounded-pill">
                              Old Price: ${offer.price}
                            </span>
                            <span className="badge bg-success rounded-pill">
                              New Price: ${Math.round(offer.price * 0.9)}
                            </span>
                          </div>
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
