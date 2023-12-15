import React, { useState, useEffect } from "react";

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
    <div className="category-chooser">
      <label>Select Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryList;
