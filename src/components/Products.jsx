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
    <>
      <section className="padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3">
              <button
                className="btn btn-outline-primary mb-3 w-100  d-lg-none"
                data-bs-toggle="collapse"
                data-bs-target="#aside_filter"
              >
                Show filter
              </button>
              {/* ===== Card for sidebar filter ===== */}
              <div
                id="aside_filter"
                className="collapse card bg-light d-lg-block mb-5"
              >
                <CategoryList onSelectCategory={handleCategorySelect} />
                {/* filter-group // */}
                <article className="p-3 p-lg-4 border-bottom">
                  <a
                    href="#"
                    className="d-flex text-decoration-none justify-content-between text-dark"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_aside2"
                  >
                    <strong>Brands </strong>
                    <i className="icon-control fa fa-chevron-down" />
                  </a>
                  <div className="collapse show" id="collapse_aside2">
                    <div className="pt-3">
                      {/* content */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          defaultChecked=""
                        />
                        <span className="form-check-label"> Apple </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          defaultChecked=""
                        />
                        <span className="form-check-label"> Asus </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          defaultChecked=""
                        />
                        <span className="form-check-label"> DELL </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          defaultChecked=""
                        />
                        <span className="form-check-label"> Lenovo </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                        <span className="form-check-label"> Xiaomi </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                        <span className="form-check-label"> Samsung </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      {/* content .// */}
                    </div>
                  </div>{" "}
                  {/* collapse .// */}
                </article>{" "}
                {/* filter-group // */}
                <article className="p-3 p-lg-4 border-bottom">
                  <a
                    href="#"
                    className="d-flex text-decoration-none justify-content-between text-dark"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_aside3"
                  >
                    <strong>Prices </strong>
                    <i className="icon-control fa fa-chevron-down" />
                  </a>
                  <div className="collapse show" id="collapse_aside3">
                    <div className="pt-3">
                      {/* content */}
                      <input
                        type="range"
                        className="form-range"
                        min={0}
                        max={100}
                      />
                      <div className="row mb-3">
                        <div className="col-6">
                          <label htmlFor="min" className="form-label">
                            Min
                          </label>
                          <input
                            className="form-control"
                            id="min"
                            placeholder="$0"
                            type="number"
                          />
                        </div>{" "}
                        {/* col end.// */}
                        <div className="col-6">
                          <label htmlFor="max" className="form-label">
                            Max
                          </label>
                          <input
                            className="form-control"
                            id="max"
                            placeholder="$1,0000"
                            type="number"
                          />
                        </div>{" "}
                        {/* col end.// */}
                      </div>{" "}
                      {/* row end.// */}
                      <button className="btn btn-light w-100" type="button">
                        Apply
                      </button>
                      {/* content .// */}
                    </div>
                  </div>{" "}
                  {/* collapse .// */}
                </article>{" "}
                {/* filter-group // */}
                <article className="p-3 p-lg-4 border-bottom">
                  <a
                    href="#"
                    className="d-flex text-decoration-none justify-content-between text-dark"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_aside4"
                  >
                    <strong>Colors </strong>
                    <i className="icon-control fa fa-chevron-down" />
                  </a>
                  <div className="collapse show" id="collapse_aside4">
                    <div className="pt-3">
                      {/* content */}
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />{" "}
                        <span className="btn btn-light"> Red </span>
                      </label>
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />{" "}
                        <span className="btn btn-light"> Black </span>
                      </label>
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />{" "}
                        <span className="btn btn-light"> Blue </span>
                      </label>
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />{" "}
                        <span className="btn btn-light"> Brown </span>
                      </label>
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />{" "}
                        <span className="btn btn-light"> Silver </span>
                      </label>
                      {/* content .// */}
                    </div>
                  </div>{" "}
                  {/* collapse .// */}
                </article>{" "}
                {/* filter-group // */}
                <article className="p-3 p-lg-4">
                  <a
                    href="#"
                    className="d-flex text-decoration-none justify-content-between text-dark"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_aside5"
                  >
                    <strong>Rating </strong>
                    <i className="icon-control fa fa-chevron-down" />
                  </a>
                  <div className="collapse show" id="collapse_aside5">
                    <div className="pt-3">
                      {/* content */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                        <span className="form-check-label">
                          <ul className="rating-stars">
                            <li
                              className="stars-active"
                              style={{ width: "100%" }}
                            >
                              <img src="images/misc/stars-active.svg" alt="" />
                            </li>
                            <li>
                              {" "}
                              <img
                                src="images/misc/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                        <span className="form-check-label">
                          <ul className="rating-stars">
                            <li
                              className="stars-active"
                              style={{ width: "80%" }}
                            >
                              <img src="images/misc/stars-active.svg" alt="" />
                            </li>
                            <li>
                              {" "}
                              <img
                                src="images/misc/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                        <span className="form-check-label">
                          <ul className="rating-stars">
                            <li
                              className="stars-active"
                              style={{ width: "60%" }}
                            >
                              <img src="images/misc/stars-active.svg" alt="" />
                            </li>
                            <li>
                              {" "}
                              <img
                                src="images/misc/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                        <span className="form-check-label">
                          <ul className="rating-stars">
                            <li
                              className="stars-active"
                              style={{ width: "40%" }}
                            >
                              <img src="images/misc/stars-active.svg" alt="" />
                            </li>
                            <li>
                              {" "}
                              <img
                                src="images/misc/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </span>
                      </label>{" "}
                      {/* form-check end.// */}
                      {/* content .// */}
                    </div>
                  </div>{" "}
                  {/* collapse .// */}
                </article>{" "}
                {/* filter-group // */}
              </div>{" "}
              {/* card.// */}
              {/* ===== Card for sidebar filter .// ===== */}
            </aside>{" "}
            {/* col .// */}
            <main className="col-lg-9">
              <header className="d-md-flex align-items-center border-bottom mb-3 pb-3">
                <div className="btn-group mb-3 mb-md-0">
                  <a href="#" className="btn btn-light active">
                    Recommended
                  </a>
                  <a href="#" className="btn btn-light">
                    Best rated
                  </a>
                  <a href="#" className="btn btn-light">
                    Latest
                  </a>
                </div>
                <div className="ms-auto">
                  <select className="form-select d-inline-block w-auto">
                    <option value={0}>Best match</option>
                    <option value={1}>Recommended</option>
                    <option value={2}>High rated</option>
                    <option value={3}>Randomly</option>
                  </select>
                  <div className="btn-group">
                    <a
                      href="#"
                      className="btn btn-light"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="List view"
                    >
                      <i className="fa fa-bars" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-light active"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="Grid view"
                    >
                      <i className="fa fa-th" />
                    </a>
                  </div>{" "}
                  {/* btn-group end.// */}
                </div>
              </header>
              {/* ========= content items ========= */}
              {filteredProducts.map((product) => (
                <article className="card-product-list border-bottom pb-3 mb-3">
                  <div className="row">
                    <aside className="col-xl-3 col-md-4">
                      <a href="#" className="img-wrap bg-light rounded">
                        <img
                          className="product-img mix-blend-multiply"
                          src={product.images[0]}
                        />
                      </a>
                    </aside>
                    <div className="col-xl-9 col-md-8">
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
                            onClick={() => openEditModal(product)}
                          >
                            Edit
                          </button>
                        </>
                      ) : (
                        <div className=".cart-quantity ">
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
                      <a href="#" className="text-dark">
                        {product.name}
                      </a>
                      <div className="rating-wrap mb-2">
                        <ul className="rating-stars">
                          <li className="stars-active" style={{ width: "90%" }}>
                            <img src="images/misc/stars-active.svg" alt="" />
                          </li>
                          <li>
                            <img src="images/misc/starts-disable.svg" alt="" />
                          </li>
                        </ul>
                        <span className="label-rating text-warning">4.5</span>
                        <i className="dot" />
                        <span className="label-rating text-muted">
                          61 orders
                        </span>
                        <i className="dot" />
                        <span className="label-rating text-success">
                          Free shipping
                        </span>
                      </div>{" "}
                      <div className="mb-3 h5">
                        <span className="price text-danger">
                          {" "}
                          {product.price}{" "}
                        </span>
                      </div>
                      <p className="text-muted">
                        {product.description.slice(0, 40)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}

              <footer className="d-flex mt-4">
                <div>
                  <a
                    href="javascript: history.back()"
                    className="btn btn-light"
                  >
                    {" "}
                    « Go back
                  </a>
                </div>
                <nav className="ms-3">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">2</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </footer>
              {/* ========= content items .// ========= */}
            </main>{" "}
            {/* col .// */}
          </div>{" "}
          {/* row .// */}
        </div>{" "}
        {/* container .//  */}
      </section>
      <div className="main-products">
        <ToastContainer />
        <div className="filters">
          <TopPanel onSelectedChange={handleSortByChange} sortBy={sortBy} />
          <Input products={filteredProducts} onChangeCallback={filterItems} />
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
                      onClick={() => openEditModal(product)}
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <div className=".cart-quantity ">
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
            </div>
          ))}
        </div>

        <Cart showModal={showModal} toggle={toggle} />
      </div>
    </>
  );
}
