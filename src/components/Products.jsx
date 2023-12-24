import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cart.jsx";
import "./products.css";
import TopPanel from "./topPanel/TopPanel.jsx";
import Input from "./searchInput/Input.jsx";
import CategoryList from "./categoriesList/CategoriesList.jsx";
import AddProduct from "./addProduct/AddProduct.jsx";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [sortBy, setSortBy] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
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
              <div
                id="aside_filter"
                className="collapse card bg-light d-lg-block mb-5"
              >
                <CategoryList onSelectCategory={handleCategorySelect} />
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
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          defaultChecked=""
                        />
                        <span className="form-check-label"> Apple </span>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          defaultChecked=""
                        />
                        <span className="form-check-label"> Asus </span>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          defaultChecked=""
                        />
                        <span className="form-check-label"> DELL </span>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          defaultChecked=""
                        />
                        <span className="form-check-label"> Lenovo </span>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                        <span className="form-check-label"> Xiaomi </span>
                      </label>
                      <label className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                        />
                        <span className="form-check-label"> Samsung </span>
                      </label>
                    </div>
                  </div>
                </article>
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
                        </div>
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
                        </div>
                      </div>
                      <button className="btn btn-light w-100" type="button">
                        Apply
                      </button>
                    </div>
                  </div>
                </article>

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
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />
                        <span className="btn btn-light"> Red </span>
                      </label>
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />
                        <span className="btn btn-light"> Black </span>
                      </label>
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />
                        <span className="btn btn-light"> Blue </span>
                      </label>
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />
                        <span className="btn btn-light"> Brown </span>
                      </label>
                      <label className="checkbox-btn mb-2">
                        <input type="checkbox" />
                        <span className="btn btn-light"> Silver </span>
                      </label>
                    </div>
                  </div>
                </article>

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
                              <img
                                src="images/misc/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </span>
                      </label>

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
                              <img
                                src="images/misc/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </span>
                      </label>

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
                              <img
                                src="images/misc/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </span>
                      </label>

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
                              <img
                                src="images/misc/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </span>
                      </label>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
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
                  </div>
                </div>
              </header>
              {filteredProducts.map((product) => (
                <Link
                  className="product-link"
                  key={product.id}
                  to={`/product-detail/${product.id}`}
                >
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
                          <button
                            className="add-to-cart"
                            onClick={() => {
                              addToCart(product);
                              notifyAddedToCart(product);
                            }}
                          >
                            Add to cart
                          </button>
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
                          {product.name.substring(1, 100)}
                        </a>
                        <div className="rating-wrap mb-2">
                          <ul className="rating-stars">
                            <li
                              className="stars-active"
                              style={{ width: "90%" }}
                            >
                              <img src="images/misc/stars-active.svg" alt="" />
                            </li>
                            <li>
                              <img
                                src="images/misc/starts-disable.svg"
                                alt=""
                              />
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
                        </div>
                        <div className="mb-3 h5">
                          <span className="price text-danger">
                            {product.price}
                          </span>
                        </div>
                        <p className="text-muted">
                          {product.description.slice(0, 40)}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}

              <footer className="d-flex mt-4">
                <div>
                  <a
                    href="javascript: history.back()"
                    className="btn btn-light"
                  >
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
            </main>
          </div>
        </div>
      </section>
      <div className="main-products">
        <div className="filters">
          <TopPanel onSelectedChange={handleSortByChange} sortBy={sortBy} />
          <Input products={filteredProducts} onChangeCallback={filterItems} />
          <AddProduct onAddProduct={handleAddProduct} />
        </div>

        <div className="shop-header">
          <h1 className="shop-title">Shop</h1>
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
                  <button
                    className="add-to-cart"
                    onClick={() => {
                      addToCart(product);
                      notifyAddedToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
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
      </div>
    </>
  );
}
