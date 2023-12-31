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
    <div class="input-group">
      <div class="form-outline" data-mdb-input-init>
        <input
          id="search-input"
          type="search"
          value={value}
          placeholder="Type to search"
          onChange={handleChange}
          class="form-control"
        />
      </div>
      <button id="search-button" type="button" class="btn btn-primary">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Input;
