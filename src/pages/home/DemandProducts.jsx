import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { SaveContext } from "../../context/saveContext";

const DemandProducts = () => {
  const [demands, setDemands] = useState([]);
  const { cartItems, addToCart, notifyAddedToCart } = useContext(CartContext);
  const { savedItems, addToSave, notifyAddedToSave } = useContext(SaveContext);
  const url = "https://dummyjson.com/products?limit=10";
  const fetchDemands = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((demands) => {
        setDemands(demands.products);
      });
  };

  useEffect(() => {
    fetchDemands();
  }, []);

  return (
    <>
      <section className="padding-y">
        <div className="container">
          <header className="section-heading">
            <h3>Recommended items </h3>
          </header>
          <div className="col-12 mb-4">
            <article className="card p-3 p-lg-5 bg-primary h-100">
              <div>
                <h4 className="text-white mb-3">Huge White Sale savings</h4>
                <p className="text-white-50">
                  Get up to 70% off bedding and bath.
                </p>
              </div>
            </article>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {demands.map((demand) => (
              <div key={demand.id} className="col">
                <figure className="card-product-grid card padding-card">
                  <Link
                    to={`/product-detail/${demand.id}`}
                    className="img-wrap"
                  >
                    <img
                      src={demand.images[0]}
                      className="mix-blend-multiply"
                    />
                  </Link>
                  <figcaption className="mt-2">
                    <p className="mb-2 fw-bold price">
                      {demand.description.substring(0, 30)}
                    </p>
                    <div style={{ color: "green" }} className="row row-cols-2">
                      <a href="" className="title">
                        {demand.brand.substring(0, 9)}
                      </a>
                      <p className="title">${demand.price} </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      {!cartItems.find((item) => item.id === demand.id) ? (
                        <button
                          className={"btn btn-light btn-icon float-end"}
                          onClick={() => {
                            addToCart(demand);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faCartShopping}
                          ></FontAwesomeIcon>
                        </button>
                      ) : (
                        <button
                          disabled
                          className={"btn btn-light btn-icon float-end "}
                          onClick={() => {
                            addToCart(demand);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faCartShopping}
                          ></FontAwesomeIcon>
                        </button>
                      )}

                      {!savedItems.find((item) => item.id === demand.id) ? (
                        <button
                          className={"btn btn-light btn-icon float-end"}
                          onClick={() => {
                            addToSave(demand);
                          }}
                        >
                          <FontAwesomeIcon icon={faBookmark} />
                        </button>
                      ) : (
                        <button
                          disabled
                          className={"btn btn-light btn-icon float-end"}
                          onClick={() => {
                            addToSave(demand);
                          }}
                        >
                          <FontAwesomeIcon icon={faBookmark} />
                        </button>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DemandProducts;
