import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { SaveContext } from "../../context/saveContext.jsx";
import "./products.css";
import TopPanel from "../topPanel/TopPanel.jsx";
import Input from "./Input.jsx";
import CategoryList from "./CategoriesList.jsx";
import AddProduct from "./AddProduct.jsx";
import { Link } from "react-router-dom";
import Brands from "./Brands.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGrip,
  faCartShopping,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { useForceUpdate } from "../../hooks/useForceUpdate.jsx";
import Ratings from "./Ratings.jsx";
import Price from "./Price.jsx";
import ActiveStars from "../../images/stars-active.svg";
import DisableStars from "../../images/stars-disable.svg";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { savedItems, addToSave, removeFromSave } = useContext(SaveContext);
  const [sortBy, setSortBy] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const [isGrid, setIsGrid] = useState(true);

  const forceUpdate = useForceUpdate();

  const toggleLayout = () => {
    setIsGrid(!isGrid);
    forceUpdate();
  };

  const url = "https://dummyjson.com/products";
  const fetchProducts = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((products) => {
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
        (product) => product.category === selectedCategory,
      );
      setFilteredProducts(filteredByCategory);
    }
  }, [selectedCategory, products]);

  const filterItems = (searchTerm) => {
    const filteredItems = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
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
    }
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleBrandSelect = (selectedBrand) => {
    if (selectedBrands.includes(selectedBrand)) {
      const updatedBrands = selectedBrands.filter(
        (brand) => brand !== selectedBrand,
      );
      setSelectedBrands(updatedBrands);
    } else {
      setSelectedBrands([...selectedBrands, selectedBrand]);
    }
  };

  useEffect(() => {
    if (selectedBrands.length === 0) {
      setFilteredProducts(products);
    } else {
      const filteredBySelectedBrands = products.filter((product) =>
        selectedBrands.includes(product.brand),
      );
      setFilteredProducts(filteredBySelectedBrands);
    }
  }, [selectedBrands, products]);

  const renderStarRating = (rating) => {
    const starPercentage = (rating / 5) * 100;
    return (
      <ul className="rating-stars">
        <li className="stars-active" style={{ width: `${starPercentage}%` }}>
          <img src={ActiveStars} alt="" />
        </li>
        <li>
          <img src={DisableStars} alt="" />
        </li>
      </ul>
    );
  };

  const handleRatingSelect = (ratings) => {
    setSelectedRatings(ratings);
  };

  useEffect(() => {
    if (selectedRatings.length === 0) {
      setFilteredProducts(products);
    } else {
      const filteredBySelectedRatings = products.filter((product) =>
        selectedRatings.includes(Math.round(product.rating)),
      );
      setFilteredProducts(filteredBySelectedRatings);
    }
  }, [selectedRatings, products]);

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
                <FontAwesomeIcon icon={faBars} />
              </a>
              <a
                href="#"
                className={`btn btn-light ${isGrid ? "active" : ""}`}
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Grid view"
                onClick={toggleLayout}
              >
                <FontAwesomeIcon icon={faGrip} />
              </a>
            </div>
            <div className="btn-group mb-3 mb-md-0">
              <Input
                // products={filteredProducts}
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
                <Brands onBrandSelect={handleBrandSelect} />
                <Ratings onRatingSelect={handleRatingSelect} />
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
                                src={product.images[0]}
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
                              (item) => item.id === product.id,
                            ) ? (
                              <button
                                className={`btn btn-light btn-icon float-end ${
                                  isGrid
                                    ? "btn btn-light btn-icon float-end"
                                    : ""
                                }`}
                                onClick={() => {
                                  addToCart(product);
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faCartShopping}
                                ></FontAwesomeIcon>
                              </button>
                            ) : (
                              <button
                                className={`btn btn-light btn-icon float-end ${
                                  isGrid
                                    ? "btn btn-light btn-icon float-end"
                                    : ""
                                }`}
                                onClick={() => {
                                  addToCart(product);
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faCartShopping}
                                ></FontAwesomeIcon>
                              </button>
                            )}
                          </div>
                          <div>
                            {!savedItems.find(
                              (item) => item.id === product.id,
                            ) ? (
                              <button
                                className={`btn btn-light btn-icon float-end ${
                                  isGrid
                                    ? "btn btn-light btn-icon float-end"
                                    : ""
                                }`}
                                onClick={() => {
                                  addToSave(product);
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faBookmark}
                                ></FontAwesomeIcon>
                              </button>
                            ) : (
                              <button
                                className={`btn btn-light btn-icon float-end ${
                                  isGrid
                                    ? "btn btn-light btn-icon float-end"
                                    : ""
                                }`}
                                onClick={() => {
                                  addToSave(product);
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faBookmark}
                                ></FontAwesomeIcon>
                              </button>
                            )}
                          </div>
                          <p href="#" className="text-dark">
                            {product.title.substring(0, 100)}
                          </p>
                          <div className="rating-wrap mb-2">
                            <span className="label-rating text-warning">
                              {renderStarRating(Math.round(product.rating))}
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
