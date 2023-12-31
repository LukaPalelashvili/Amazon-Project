import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DemandProducts = () => {
  const [demands, setDemands] = useState([]);
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
                      alt={demand.title}
                    />
                  </Link>
                  <figcaption className="mt-2">
                    <p className="mb-2 fw-bold price">
                      {demand.description.substring(0, 30)}
                    </p>
                    <div style={{ color: "green" }} className="row row-cols-2">
                      <p className="title">{demand.brand.substring(0, 9)}</p>
                      <p className="title">${demand.price} </p>
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
