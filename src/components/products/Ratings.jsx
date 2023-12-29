import React from "react";
import ActiveStars from "../../images/stars-active.svg";
import DisableStars from "../../images/stars-disable.svg";

const Ratings = () => {
  return (
    <>
      <article className="p-3 p-lg-4">
        <a
          href="#"
          className="d-flex text-decoration-none justify-content-between text-dark"
          data-bs-toggle="collapse"
          data-bs-target="#collapse_aside5"
        >
          <strong>Rating </strong>
          <i className="icon-control fa fa-chevron-down" />
        </a>
        <div className="collapse show" id="collapse_aside5">
          <div className="pt-3">
            <label className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
              />
              <span className="form-check-label">
                <ul className="rating-stars">
                  <li className="stars-active" style={{ width: "100%" }}>
                    <img src={ActiveStars} alt="" />
                  </li>
                  <li>
                    <img src={DisableStars} alt="" />
                  </li>
                </ul>
              </span>
            </label>

            <label className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
              />
              <span className="form-check-label">
                <ul className="rating-stars">
                  <li className="stars-active" style={{ width: "80%" }}>
                    <img src={ActiveStars} alt="" />
                  </li>
                  <li>
                    <img src={DisableStars} alt="" />
                  </li>
                </ul>
              </span>
            </label>

            <label className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
              />
              <span className="form-check-label">
                <ul className="rating-stars">
                  <li className="stars-active" style={{ width: "60%" }}>
                    <img src={ActiveStars} alt="" />
                  </li>
                  <li>
                    <img src={DisableStars} alt="" />
                  </li>
                </ul>
              </span>
            </label>

            <label className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
              />
              <span className="form-check-label">
                <ul className="rating-stars">
                  <li className="stars-active" style={{ width: "40%" }}>
                    <img src={ActiveStars} alt="" />
                  </li>
                  <li>
                    <img src={DisableStars} alt="" />
                  </li>
                </ul>
              </span>
            </label>
          </div>
        </div>
      </article>
    </>
  );
};

export default Ratings;
