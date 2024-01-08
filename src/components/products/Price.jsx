import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Price = ({ onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([0, 9999]);

  const handlePriceFilter = () => {
    onPriceChange(priceRange);
  };

  return (
    <>
      <article className="p-3 p-lg-4 border-bottom">
        <span className="fw-bold text-dark py-3 d-block">
          Price range{" "}
          <FontAwesomeIcon className="icon-control" icon={faChevronDown} />
        </span>
        <div className="collapse show" id="collapse_aside2">
          <div className="pb-3">
            <div className="row mb-2 g-2">
              <div className="col-6">
                <label htmlFor="min" className="form-label">
                  Min
                </label>
                <input
                  className="form-control"
                  id="min"
                  placeholder="$0"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                />
              </div>
              <div className="col-6">
                <label htmlFor="max" className="form-label">
                  Max
                </label>
                <input
                  className="form-control"
                  id="max"
                  placeholder="$9999"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                />
              </div>
            </div>
            <button
              className="btn btn-dark w-100"
              type="button"
              onClick={handlePriceFilter}
            >
              Apply
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Price;
