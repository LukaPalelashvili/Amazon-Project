import React, { useState, useEffect, useContext } from "react";
import { SaveContext } from "../../context/SaveContext.jsx";
import "./products.css";
import Input from "./Input.jsx";
import CategoryList from "./CategoriesList.jsx";
import { Link } from "react-router-dom";
import Brands from "./Brands.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGrip, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useForceUpdate } from "../../hooks/useForceUpdate.jsx";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-regular-svg-icons";
import Ratings from "./Ratings.jsx";
import Price from "./Price.jsx";
import { toast, ToastContainer } from "react-toastify";
import { StarRating } from "../stars/StarRating.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { savedItems, addToSave, removeFromSave } = useContext(SaveContext);
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

  const handleRatingSelect = (ratings) => {
    setSelectedRatings(ratings);
  };

  const handlePriceChange = (price) => {
    setFilteredProducts(
      products.filter(
        (product) => product.price <= price[1] && product.price >= price[0],
      ),
    );
  };

  const handleSortByChange = (sortBy) => {
    let sortedProducts = products;
    switch (sortBy) {
      case "incr-by-price":
        sortedProducts = products.sort((a, b) => a.price - b.price);
        setFilteredProducts([...sortedProducts]);
        break;
      case "decr-by-price":
        sortedProducts = products.sort((a, b) => b.price - a.price);
        setFilteredProducts([...sortedProducts]);
        break;
      default:
        setFilteredProducts(products);
    }
  };

  const handleProductSave = (product) => {
    if (savedItems.some((item) => item.id === product.id)) {
      removeFromSave(product);
      toast.success("Removed from saved items");
    } else {
      addToSave(product);
      toast.success("Added to saved items");
    }
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
          <header className="card mb-3">
            <div className="p-3 d-md-flex align-items-center">
              <span className="d-block py-2">
                {filteredProducts.length} items in{" "}
                <b>{selectedCategory || "all categories"}</b>{" "}
              </span>
              <div className="ms-auto d-md-flex align-items-center gap-3">
                <Input onChangeCallback={filterItems} />
                <select
                  onChange={(e) => {
                    handleSortByChange(e.target.value);
                  }}
                  className="form-select d-inline-block w-auto"
                >
                  <option value={"incr-by-price"}>Price: low to high</option>
                  <option value={"decr-by-price"}>Price: high to low</option>
                </select>
                <div className="btn-group">
                  <button
                    className={`btn btn-light ${!isGrid ? "active" : ""}`}
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="List view"
                    onClick={toggleLayout}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                  <button
                    className={`btn btn-light ${isGrid ? "active" : ""}`}
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Grid view"
                    onClick={toggleLayout}
                  >
                    <FontAwesomeIcon icon={faGrip} />
                  </button>
                </div>{" "}
              </div>
            </div>
          </header>
          <div className="row">
            <aside className="col-lg-3">
              <div
                id="aside_filter"
                className="collapse card bg-light d-lg-block mb-5"
              >
                <CategoryList onSelectCategory={handleCategorySelect} />
                <Price onPriceChange={handlePriceChange} />
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
                                alt={product.title}
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
                            <button
                              className={`btn btn-light btn-icon float-end ${
                                isGrid ? "btn btn-light btn-icon float-end" : ""
                              }`}
                              onClick={() => handleProductSave(product)}
                            >
                              <FontAwesomeIcon
                                icon={
                                  savedItems.some(
                                    (item) => item.id === product.id,
                                  )
                                    ? faBookmark
                                    : faSolidBookmark
                                }
                              />
                            </button>
                          </div>
                          <p className="text-dark">
                            {product.title.substring(0, 10)}
                          </p>
                          <div className="rating-wrap mb-2">
                            <span className="text-warning">
                              <StarRating rating={product.rating} />
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
                              {product.description.substring(0, 30)}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
