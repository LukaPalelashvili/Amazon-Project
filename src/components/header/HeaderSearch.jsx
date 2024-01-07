import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const HeaderSearch = ({
  value,
  onChangeInput,
  onChangeCallback,
  onFocus,
  onBlur,
  onItemClick,
}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChangeInput && onChangeInput(inputValue);
    onChangeCallback && onChangeCallback(inputValue);
  };
  return (
    <>
      <input
        id="search-input"
        type="search"
        className="form-control"
        placeholder="Search"
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <button
        className="input-group-btn btn-icon btn btn-light"
        id="search-button"
        type="submit"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </>
  );
};

export default HeaderSearch;
