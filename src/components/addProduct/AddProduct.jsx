// AddProduct.jsx

import React, { useState } from "react";

const AddProduct = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleAddProduct = () => {
    // Validate input fields before adding the product
    if (!productName || !productDescription || !productPrice || !productImage) {
      // Display an error message or handle validation as needed
      return;
    }

    // Create a new product object
    const newProduct = {
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      images: [productImage],
      // Add any other properties you need for a product
    };

    // Pass the new product to the parent component
    onAddProduct(newProduct);

    // Clear input fields after adding the product
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductImage("");
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
