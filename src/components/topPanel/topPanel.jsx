import React from "react";

const TopPanel = ({ onSelectedChange, sortBy }) => {
  function handleSortChange(e) {
    onSelectedChange(e.target.value);
  }

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value={""}>აირჩიეთ</option>
        <option value={"decr-by-price"}>ფასი კლებადობით</option>
        <option value={"incr-by-price"}>ფასი ზრდადობით</option>
        <option value={"incr-by-model"}>მოდელის მიხედვით (ზრდადობით)</option>
        <option value={"decr-by-model"}>მოდელის მიხედვით (კლებადობით)</option>
      </select>
    </div>
  );
};

export default TopPanel;
