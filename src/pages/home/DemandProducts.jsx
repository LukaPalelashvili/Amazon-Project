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
                    {/* price.// */}
                    <a href="#" className="title">
                      {demand.name}
                    </a>
                  </figcaption>
                </figure>{" "}
                {/* item // */}
              </div>
            ))}
            {/* col // */}
            <div className="col">
              <figure className="card-product-grid">
                <a href="#" className="img-wrap rounded bg-light">
                  <img
                    src="images/items/tech/2.jpg"
                    className="mix-blend-multiply"
                  />
                </a>
                <figcaption className="mt-2">
                  <p className="mb-2 fw-bold price"> $578.00 </p>{" "}
                  {/* price.// */}
                  <a href="#" className="title">
                    {" "}
                    Samsung Galaxy Tab S7 WiFi Tablet Snapdragon{" "}
                  </a>
                </figcaption>
              </figure>{" "}
              {/* item // */}
            </div>{" "}
            {/* col // */}
            <div className="col">
              <figure className="card-product-grid">
                <a href="#" className="img-wrap rounded bg-light">
                  <img
                    src="images/items/tech/3.jpg"
                    className="mix-blend-multiply"
                  />
                </a>
                <figcaption className="mt-2">
                  <p className="mb-2 fw-bold price"> $32.00 </p>{" "}
                  {/* price.// */}
                  <a href="#" className="title">
                    {" "}
                    Sample product name goes here as demo{" "}
                  </a>
                </figcaption>
              </figure>{" "}
              {/* item // */}
            </div>{" "}
            {/* col // */}
            <div className="col">
              <figure className="card-product-grid">
                <a href="#" className="img-wrap rounded bg-light">
                  <img
                    src="images/items/tech/4.jpg"
                    className="mix-blend-multiply"
                  />
                </a>
                <figcaption className="mt-2">
                  <p className="mb-2 fw-bold price"> $935.00 </p>{" "}
                  {/* price.// */}
                  <a href="#" className="title">
                    {" "}
                    Apple iPhone 8 64GB 128GB 256GB ATT T-Mobile{" "}
                  </a>
                </figcaption>
              </figure>{" "}
              {/* item // */}
            </div>{" "}
            {/* col // */}
            <div className="col">
              <figure className="card-product-grid">
                <a href="#" className="img-wrap rounded bg-light">
                  <img
                    src="images/items/tech/5.jpg"
                    className="mix-blend-multiply"
                  />
                </a>
                <figcaption className="mt-2">
                  <p className="mb-2 fw-bold price"> $67.50 </p>{" "}
                  {/* price.// */}
                  <a href="#" className="title">
                    {" "}
                    Wired Gaming Headset Headphone with Microphone{" "}
                  </a>
                </figcaption>
              </figure>{" "}
              {/* item // */}
            </div>{" "}
            {/* col // */}
            <div className="col mb-4">
              <article className="card p-3 p-lg-5 bg-primary h-100">
                <div>
                  <h4 className="text-white mb-3">Huge White Sale savings</h4>
                  <p className="text-white-50">
                    Get up to 70% off bedding and bath.
                  </p>
                </div>
              </article>
            </div>{" "}
            {/* col // */}
            <div className="col">
              <figure className="card-product-grid">
                <a href="#" className="img-wrap rounded bg-light">
                  <img
                    src="images/items/tech/6.jpg"
                    className="mix-blend-multiply"
                  />
                </a>
                <figcaption className="mt-2">
                  <p className="mb-2 fw-bold price"> $456.00 </p>{" "}
                  {/* price.// */}
                  <a href="#" className="title">
                    {" "}
                    Canon EOS Rebel with 100x zoom 18-55mm lense{" "}
                  </a>
                </figcaption>
              </figure>{" "}
              {/* item // */}
            </div>{" "}
            {/* col // */}
            <div className="col">
              <figure className="card-product-grid">
                <a href="#" className="img-wrap rounded bg-light">
                  <img
                    src="images/items/tech/7.jpg"
                    className="mix-blend-multiply"
                  />
                </a>
                <figcaption className="mt-2">
                  <p className="mb-2 fw-bold price"> $280.00 </p>{" "}
                  {/* price.// */}
                  <a href="#" className="title">
                    {" "}
                    HP Laptop Computer 15.6" 512GB SSD Win11 Intel{" "}
                  </a>
                </figcaption>
              </figure>{" "}
              {/* item // */}
            </div>{" "}
            {/* col // */}
            <div className="col">
              <figure className="card-product-grid">
                <a href="#" className="img-wrap rounded bg-light">
                  <img
                    src="images/items/tech/8.jpg"
                    className="mix-blend-multiply"
                  />
                </a>
                <figcaption className="mt-2">
                  <p className="mb-2 fw-bold price"> $32.00 </p>{" "}
                  {/* price.// */}
                  <a href="#" className="title">
                    {" "}
                    Sample product name goes here as demo{" "}
                  </a>
                </figcaption>
              </figure>{" "}
              {/* item // */}
            </div>{" "}
            {/* col // */}
            <div className="col">
              <figure className="card-product-grid">
                <a href="#" className="img-wrap rounded bg-light">
                  <img
                    src="images/items/tech/9.jpg"
                    className="mix-blend-multiply"
                  />
                </a>
                <figcaption className="mt-2">
                  <p className="mb-2 fw-bold price"> $8.95 </p> {/* price.// */}
                  <a href="#" className="title">
                    {" "}
                    Sample product name goes here as demo{" "}
                  </a>
                </figcaption>
              </figure>{" "}
              {/* item // */}
            </div>{" "}
            {/* col // */}
          </div>{" "}
          {/* row // */}
        </div>{" "}
        {/* container .//  */}
      </section>
    </>
  );
};

export default DemandProducts;
