import React, { useState, useEffect } from "react";
import "./products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const url = "https://dummyjson.com/products/categories";

    fetch(url)
      .then((res) => res.json())
      .then((categories) => setCategories(categories))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const showAllCategories = () => {
    setSelectedCategory("");
    onSelectCategory("");
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };
  return (
    <article className="p-3 p-lg-4 border-bottom">
      <a>
        <strong>categories </strong>
      </a>
      <FontAwesomeIcon className="icon-control" icon={faChevronDown} />

      <div className="collapse show" id="collapse_aside1">
        <div className="pt-3">
          <button className="category-button" onClick={showAllCategories}>
            Show All Categories
          </button>
          <ul value={selectedCategory} className="list-menu mb-0">
            {categories.map((category) => (
              <li key={category} value={category} className="category-list">
                <button
                  className="category-button"
                  onClick={(e) => handleCategoryChange(e.target.value)}
                  value={category}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CategoryList;
