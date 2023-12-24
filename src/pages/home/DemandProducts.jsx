import React from "react";
import { useState, useEffect } from "react";

const DemandProducts = () => {
  const [demands, setDemands] = useState([]);
  const url =
    "https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/mostdemandproducts";
  const fetchDemands = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((demands) => {
        console.log("demands", demands);
        setDemands(demands);
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
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {demands.map((demand) => (
              <div className="col">
                <figure className="card-product-grid">
                  <a href="#" className="img-wrap rounded bg-light">
                    <img
                      src={demand.images[3]}
                      className="mix-blend-multiply"
                    />
                  </a>
                  <figcaption className="mt-2">
                    <p className="mb-2 fw-bold price"> ${demand.price} </p>{" "}
                    <a href="#" className="title">
                      {demand.name.substring(1, 60)}
                    </a>
                  </figcaption>
                </figure>
              </div>
            ))}

            <div className="col mb-4">
              <article className="card p-3 p-lg-5 bg-primary h-100">
                <div>
                  <h4 className="text-white mb-3">Huge White Sale savings</h4>
                  <p className="text-white-50">
                    Get up to 70% off bedding and bath.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemandProducts;
