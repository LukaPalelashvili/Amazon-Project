import React from "react";

const TopPanel = ({ onSelectedChange, sortBy }) => {
  function handleSortChange(e) {
    onSelectedChange(e.target.value);
  }

  return (
    <div>
      <select
        className="form-select d-inline-block w-auto"
        onChange={handleSortChange}
      >
        <option value={""}>Choose by price</option>
        <option value={"decr-by-price"}>by decrease</option>
        <option value={"incr-by-price"}>By Increase</option>
      </select>
    </div>
  );
};

export default TopPanel;
