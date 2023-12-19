import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cart.jsx";
import Cart from "./Cart.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./products.css";
import TopPanel from "./topPanel/TopPanel.jsx";
import Input from "./searchInput/Input.jsx";
import CategoryList from "./categoriesList/CategoriesList.jsx";
import AddProduct from "./addProduct/AddProduct.jsx";
import EditProduct from "./editProduct/EditProduct.jsx";

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [sortBy, setSortBy] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editedProduct, setEditedProduct] = useState(null);

  const toggle = () => {
    setshowModal(!showModal);
  };

  const url =
    "https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/products";
  const fetchProducts = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((products) => {
        console.log("pr", products);
        setProducts(products);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (Object.keys(products).length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredProducts(products);
    } else {
      const filteredByCategory = products.filter(
        (product) => product.categoryId === selectedCategory
      );
      setFilteredProducts(filteredByCategory);
    }
  }, [selectedCategory, products]);

  // useEffect(() => {
  //   if (Object.keys(products).length > 0) {
  //     setFilteredProducts(products);
  //     filterAndSortProducts(products);
  //   }
  // }, [products, selectedCategory, sortBy]);

  const filterItems = (searchTerm) => {
    console.log(products);

    const filteredItems = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredItems);
  };

  const notifyAddedToCart = (item) =>
    toast.success(`${item.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.name} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };
  const handleSortByChange = (sortBy) => {
    let sortedProducts = products;
    switch (sortBy) {
      case "incr-by-price":
        sortedProducts = products.sort((a, b) => a.price - b.price);
        setProducts([...sortedProducts]);
        break;
      case "decr-by-price":
        sortedProducts = products.sort((a, b) => b.price - a.price);
        setProducts([...sortedProducts]);
        break;
      default:
      // setProducts(products);
    }
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Save products to local storage whenever the products state changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Other existing code...

  const handleAddProduct = (newProduct) => {
    // Update the products state by adding the new product
    setProducts([...products, newProduct]);
    // You may also want to send a request to your API to add the product
  };

  const openEditModal = (product) => {
    setEditedProduct(product);
    setshowModal(true);
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setEditedProduct(null);
    setshowModal(false);
  };

  // Function to save the edited product
  const saveEditedProduct = (editedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);

    // Close the edit modal
    closeEditModal();
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    closeEditModal();
  };

  return (
    <div className="main-products">
      <ToastContainer />
      <div className="filters">
        <TopPanel onSelectedChange={handleSortByChange} sortBy={sortBy} />
        <Input products={filteredProducts} onChangeCallback={filterItems} />
        <CategoryList onSelectCategory={handleCategorySelect} />
        <AddProduct onAddProduct={handleAddProduct} />
      </div>

      <div className="shop-header">
        <h1 className="shop-title">Shop</h1>
        {!showModal && (
          <button className="cart-button" onClick={toggle}>
            Cart ({cartItems.length})
          </button>
        )}
        {editedProduct && (
          <EditProduct
            product={editedProduct}
            onSave={updateProduct}
            onCancel={closeEditModal}
          />
        )}
      </div>
      <div className="products-box">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.name} className="" />
            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-desc">
                {product.description.slice(0, 40)}...
              </p>
              <p className="product-price">${product.price}</p>
            </div>

            {editedProduct && editedProduct.id === product.id ? (
              // Display the edit form for the selected product
              <div className="edit-form">
                <label htmlFor={`editName-${product.id}`}>Name:</label>
                <input
                  type="text"
                  id={`editName-${product.id}`}
                  value={editedProduct.name}
                  onChange={(e) =>
                    setEditedProduct({ ...editedProduct, name: e.target.value })
                  }
                />

                <label htmlFor={`editDescription-${product.id}`}>
                  Description:
                </label>
                <textarea
                  id={`editDescription-${product.id}`}
                  value={editedProduct.description}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      description: e.target.value,
                    })
                  }
                ></textarea>

                <label htmlFor={`editPrice-${product.id}`}>Price:</label>
                <input
                  type="number"
                  id={`editPrice-${product.id}`}
                  value={editedProduct.price}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      price: e.target.value,
                    })
                  }
                />

                <label htmlFor={`editImage-${product.id}`}>Image URL:</label>
                <input
                  type="text"
                  id={`editImage-${product.id}`}
                  value={editedProduct.image}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      image: e.target.value,
                    })
                  }
                />

                <div className="edit-buttons">
                  <button onClick={() => updateProduct(editedProduct)}>
                    Save
                  </button>
                  <button onClick={() => setEditedProduct(null)}>Cancel</button>
                </div>
              </div>
            ) : (
              // Display the edit button
              <div className="product-button">
                {!cartItems.find((item) => item.id === product.id) ? (
                  <>
                    <button
                      className="add-to-cart"
                      onClick={() => {
                        addToCart(product);
                        notifyAddedToCart(product);
                      }}
                    >
                      Add to cart
                    </button>
                    <button
                      className="edit-product"
                      onClick={() => setEditedProduct({ ...product })}
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <div className="cart-quantity">
                    {" "}
                    {/* Removed dot from className */}
                    <button
                      className="cart-button"
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      +
                    </button>
                    <p style={{ color: "#4B5563" }}>
                      {
                        cartItems.find((item) => item.id === product.id)
                          .quantity
                      }
                    </p>
                    <button
                      className="cart-button"
                      onClick={() => {
                        const cartItem = cartItems.find(
                          (item) => item.id === product.id
                        );
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(product);
                        } else {
                          removeFromCart(product);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <Cart showModal={showModal} toggle={toggle} />
    </div>
  );
}
