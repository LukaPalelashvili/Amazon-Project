import React from "react";

const Price = () => {
  return (
    <>
      <article className="border-bottom">
        <a
          href="#"
          className="d-flex text-decoration-none justify-content-between text-dark"
          data-bs-toggle="collapse"
          data-bs-target="#collapse_aside3"
        >
          <strong>Prices </strong>
          <i className="icon-control fa fa-chevron-down" />
        </a>
        <div className="collapse show" id="collapse_aside3">
          <div className="pt-3">
            <input type="range" className="form-range" min={0} max={100} />
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="min" className="form-label">
                  Min
                </label>
                <input
                  className="form-control"
                  id="min"
                  placeholder="$0"
                  type="number"
                />
              </div>
              <div className="col-6">
                <label htmlFor="max" className="form-label">
                  Max
                </label>
                <input
                  className="form-control"
                  id="max"
                  placeholder="$1,0000"
                  type="number"
                />
              </div>
            </div>
            <button className="btn btn-light w-100" type="button">
              Apply
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Price;
