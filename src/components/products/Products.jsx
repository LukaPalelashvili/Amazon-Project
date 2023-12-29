import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cart.jsx";
import "./products.css";
import TopPanel from "../topPanel/TopPanel.jsx";
import Input from "./Input.jsx";
import CategoryList from "./CategoriesList.jsx";
import AddProduct from "./AddProduct.jsx";
import { Link } from "react-router-dom";
import Brands from "./Brands.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGrip } from "@fortawesome/free-solid-svg-icons";
import { useForceUpdate } from "../../hooks/useForceUpdate.jsx";
import Ratings from "./Ratings.jsx";
import Price from "./Price.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [sortBy, setSortBy] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [isGrid, setIsGrid] = useState(true);

  const forceUpdate = useForceUpdate();

  const toggleLayout = () => {
    setIsGrid(!isGrid);
    forceUpdate(); //
  };

  const url = "https://dummyjson.com/products";
  const fetchProducts = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((products) => {
        console.log("pr", products.products);
        setProducts(products.products);
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
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filteredByCategory);
    }
  }, [selectedCategory, products]);

  const filterItems = (searchTerm) => {
    const filteredItems = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
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

  // const handleAddProduct = (newProduct) => {
  //   setProducts([...products, newProduct]);
  // };

  return (
    <>
      <section className="padding-y">
        <div className="container">
          <header className="">
            <div className="btn-group">
              <a
                href="#"
                className={`btn btn-light ${isGrid ? "active" : ""}`}
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Grid view"
                onClick={toggleLayout}
              >
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </a>
              <a
                href="#"
                className={`btn btn-light ${isGrid ? "active" : ""}`}
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Grid view"
                onClick={toggleLayout}
              >
                <FontAwesomeIcon icon={faGrip}></FontAwesomeIcon>
              </a>
            </div>
            <div className="btn-group mb-3 mb-md-0">
              <Input
                products={filteredProducts}
                onChangeCallback={filterItems}
              />
            </div>
            <Price />
          </header>
          <div className="row">
            <aside className="col-lg-3">
              <div
                id="aside_filter"
                className="collapse card bg-light d-lg-block mb-5"
              >
                <CategoryList onSelectCategory={handleCategorySelect} />
                <Brands />
                <Ratings />
              </div>
            </aside>
            <main className={`${isGrid ? "row col-lg-9" : "col-lg-9"}`}>
              <>
                {filteredProducts.length > 0 ? (
                  filteredProducts?.map((product) => (
                    <article
                      className={` ${
                        isGrid
                          ? "col-xxl-3 col-xl-4 col-sm-6 col-12"
                          : "card-product-list border-bottom pb-3 mb-3"
                      }`}
                      key={product.id}
                    >
                      <div
                        className={`${
                          isGrid ? "card card-product-grid" : "row "
                        }`}
                      >
                        <aside
                          className={` ${
                            isGrid ? "img-wrap" : "col-xl-3 col-md-4"
                          }`}
                        >
                          <div
                            className={`img-wrap bg-light rounded" ${
                              isGrid ? "img-wrap" : ""
                            }`}
                          >
                            <Link to={`/product-detail/${product.id}`}>
                              <img
                                className="product-img mix-blend-multiply"
                                src={product.images[1]}
                              />
                            </Link>
                          </div>
                        </aside>
                        <div
                          className={`${
                            isGrid ? "p-3 border-top" : "col-xl-9 col-md-8"
                          }`}
                        >
                          <div>
                            {!cartItems.find(
                              (item) => item.id === product.id
                            ) ? (
                              <button
                                className={`add-to-cart ${
                                  isGrid ? "grid-button" : ""
                                }`}
                                onClick={() => {
                                  addToCart(product);
                                }}
                              >
                                Add to cart
                              </button>
                            ) : (
                              <div
                                className={`cart-quantity ${
                                  isGrid ? "grid-quantity" : ""
                                }`}
                              >
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
                                    cartItems.find(
                                      (item) => item.id === product.id
                                    ).quantity
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
                          <p href="#" className="text-dark">
                            {product.title.substring(0, 100)}
                          </p>
                          <div className="rating-wrap mb-2">
                            <span className="label-rating text-warning">
                              {product.rating}
                            </span>
                          </div>
                          <div className="mb-3 h5">
                            <span className="price text-danger">
                              ${product.price}
                            </span>
                          </div>
                          <Link
                            className="title mb-1"
                            key={product.id}
                            to={`/product-detail/${product.id}`}
                          >
                            <p className="text-muted">
                              {product.description.slice(0, 100)}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div
                    className="position-absolute"
                    style={{
                      fontSize: "48px",
                      left: "40%",
                      marginTop: "100px",
                    }}
                  >
                    Product Not Found
                  </div>
                )}
              </>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
