import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = ({ onChangeCallback }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChangeCallback && onChangeCallback(inputValue);
  };

  return (
    <div className="input-group">
      <div className="form-outline">
        <input
          id="search-input"
          type="search"
          value={value}
          placeholder="Type to search"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button id="search-button" type="button" className="btn btn-primary">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Input;
