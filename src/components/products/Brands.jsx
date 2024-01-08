import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Brands = ({ onBrandSelect }) => {
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const url = "https://dummyjson.com/products";

  const fetchBrands = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((products) => {
        const allBrands = products.products.map((product) => product.brand);
        const uniqueBrandSet = new Set(allBrands);
        const uniqueBrandArray = Array.from(uniqueBrandSet);
        setUniqueBrands(uniqueBrandArray);
      });
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleBrandSelect = (selectedBrand) => {
    onBrandSelect(selectedBrand);
  };

  return (
    <>
      <article className="p-3 p-lg-4 border-bottom">
        <div
          className="d-flex text-decoration-none justify-content-between text-dark"
          data-bs-toggle="collapse"
          data-bs-target="#collapse_aside2"
        >
          <strong>Brands </strong>
          <FontAwesomeIcon className="icon-control" icon={faChevronDown} />
        </div>
        <div className="collapse show" id="collapse_aside2">
          <div className="pt-3">
            {uniqueBrands.map((brand) => (
              <label className="form-check mb-2" key={brand}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={brand}
                  onChange={() => handleBrandSelect(brand)}
                />
                <span className="form-check-label"> {brand} </span>
              </label>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Brands;
