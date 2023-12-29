import React from "react";
import { useState, useEffect } from "react";

const Brands = () => {
  const [brand, setBrands] = useState([]);
  const url = "https://dummyjson.com/products";

  const fetchBrands = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((products) => {
        console.log("brands:", products.products);
        setBrands(products.products);
      });
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <>
      <article className="p-3 p-lg-4 border-bottom">
        <a
          href="#"
          className="d-flex text-decoration-none justify-content-between text-dark"
          data-bs-toggle="collapse"
          data-bs-target="#collapse_aside2"
        >
          <strong>Brands </strong>
          <i className="icon-control fa fa-chevron-down" />
        </a>
        <div className="collapse show" id="collapse_aside2">
          <div className="pt-3">
            {brand.map((product) => (
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  defaultChecked=""
                />
                <span className="form-check-label"> {product.brand} </span>
              </label>
            ))}
            <label className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                defaultChecked=""
              />
              <span className="form-check-label"> Asus </span>
            </label>
          </div>
        </div>
      </article>
    </>
  );
};

export default Brands;
