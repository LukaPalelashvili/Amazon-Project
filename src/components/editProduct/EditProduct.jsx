// EditProduct.jsx

import React, { useState } from "react";

const EditProduct = ({ product, onSave, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedProduct);
  };

  return (
    <div className="edit-product-modal">
      <h2>Edit Product</h2>
      <label htmlFor="editName">Name:</label>
      <input
        type="text"
        id="editName"
        name="name"
        value={editedProduct.name}
        onChange={handleInputChange}
      />

      <label htmlFor="editDescription">Description:</label>
      <textarea
        id="editDescription"
        name="description"
        value={editedProduct.description}
        onChange={handleInputChange}
      ></textarea>

      <label htmlFor="editPrice">Price:</label>
      <input
        type="number"
        id="editPrice"
        name="price"
        value={editedProduct.price}
        onChange={handleInputChange}
      />

      <label htmlFor="editImage">Image URL:</label>
      <input
        type="text"
        id="editImage"
        name="image"
        value={editedProduct.image}
        onChange={handleInputChange}
      />

      <div className="edit-product-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditProduct;
