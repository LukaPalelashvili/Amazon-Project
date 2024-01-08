import React from "react";
import ActiveStars from "../../images/stars-active.svg";
import DisableStars from "../../images/stars-disable.svg";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Ratings = ({ onRatingSelect }) => {
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleRatingChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      const updatedRatings = selectedRatings.filter(
        (selectedRating) => selectedRating !== rating,
      );
      setSelectedRatings(updatedRatings);
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  useEffect(() => {
    onRatingSelect(selectedRatings);
  }, [selectedRatings, onRatingSelect]);

  const renderStarRating = (rating) => {
    const starPercentage = (rating / 5) * 100;
    return (
      <ul className="rating-stars">
        <li className="stars-active" style={{ width: `${starPercentage}%` }}>
          <img src={ActiveStars} alt="" />
        </li>
        <li>
          <img src={DisableStars} alt="" />
        </li>
      </ul>
    );
  };

  return (
    <>
      <article className="p-3 p-lg-4">
        <div className="d-flex text-decoration-none justify-content-between text-dark">
          <strong>Rating </strong>
          <FontAwesomeIcon icon={faChevronDown} className="icon-control" />
        </div>
        <div className="collapse show" id="collapse_aside5">
          <div className="pt-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label className="form-check mb-2" key={rating}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={rating}
                  onChange={() => handleRatingChange(rating)}
                />
                <span className="form-check-label">
                  {renderStarRating(rating)}
                </span>
              </label>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Ratings;
