import React, { useState, useEffect } from "react";
import "./category.css";

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const url =
      "https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/categories";

    fetch(url)
      .then((res) => res.json())
      .then((categories) => setCategories(categories))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <article className="p-3 p-lg-4 border-bottom">
      <a
        href="#"
        className="d-flex text-decoration-none justify-content-between text-dark"
        data-bs-toggle="collapse"
        data-bs-target="#collapse_aside1"
      >
        <strong>Other category </strong>
        <i className="icon-control fa fa-chevron-down" />
      </a>
      <div className="collapse show" id="collapse_aside1">
        <div className="pt-3">
          <ul value={selectedCategory} className="list-menu mb-0">
            {categories.map((category) => (
              <li className="category-list">
                <button
                  className="category-button"
                  onClick={(e) => handleCategoryChange(e.target.value)}
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
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
