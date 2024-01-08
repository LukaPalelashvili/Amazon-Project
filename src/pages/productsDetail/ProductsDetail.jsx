import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBookmark,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-regular-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SaveContext } from "../../context/SaveContext.jsx";

const ProductsDetail = (products) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { addToSave, isItemInSave, removeFromSave } = useContext(SaveContext);

  const [quantity, setQuantity] = useState(1);

  console.log("cartItems", cartItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`,
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (isItemInCart) {
      setQuantity(isItemInCart.quantity);
    }

    fetchData();
  }, [productId]);

  const isItemInCart = useMemo(
    () => cartItems.find((cartItem) => cartItem?.id === product?.id),
    [cartItems, product],
  );

  const handleAddToCart = (product) => {
    addToCart(product, quantity);
    toast.success("Item added to cart");
  };

  const handleSaveClick = () => {
    if (isItemInSave(product)) {
      removeFromSave(product);
      toast.success("Item removed from saved items");
    } else {
      addToSave(product);
      toast.success("Item added to saved items");
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <section className="padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-lg-6">
              <figure className="gallery-wrap">
                <div
                  className="img-main-wrap mb-3 img-thumbnail"
                  style={{ height: 520 }}
                >
                  <img
                    className="h-100 img-cover"
                    src={activeImage || product.images[0]}
                    alt={product.title}
                  />
                </div>
                <div className="thumbs-wrap text-center overflow-auto text-nowrap">
                  {product.images.map((image, index) => (
                    <div key={product.images[index]} className="item-thumb">
                      <img
                        className="img-thumbnail size-60x60"
                        height={60}
                        onMouseOver={() => setActiveImage(image)}
                        onClick={() => setActiveImage(image)}
                        alt={product.title}
                        src={product.images[index]}
                      />
                    </div>
                  ))}
                </div>
              </figure>
            </aside>
            <main className="col-lg-6">
              <article className="ps-lg-3">
                <h4 className="title text-dark">{product.title}</h4>
                <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                    <li style={{ width: "80%" }} className="stars-active">
                      {" "}
                      {/* <img src="images/misc/stars-active.svg" alt="" />{" "} */}
                    </li>
                    <li>
                      {" "}
                      {/* <img src="images/misc/starts-disable.svg" alt="" />{" "} */}
                    </li>
                  </ul>
                  <b className="label-rating text-warning"> {product.rating}</b>
                </div>
                <div className="mb-2">
                  <var className="price h5">${product.price}</var>
                  <span className="text-muted"></span>
                </div>
                <p>{product.description}</p>
                <dl className="row">
                  <dt className="col-3 fw-normal text-muted">Category:</dt>
                  <dd className="col-9">{product.category}</dd>
                  <dt className="col-3 fw-normal text-muted">Stock</dt>
                  <dd className="col-9">{product.stock} </dd>
                  <dt className="col-3 fw-normal text-muted">Brand</dt>
                  <dd className="col-9">{product.brand} </dd>
                </dl>
                <hr />
                <div className="row mb-3">
                  <div className="col-md-4 col-6 mb-2">
                    <label className="form-label d-block">Quantity</label>
                    <div className="input-group input-spinner">
                      <button
                        className="btn btn-icon btn-light"
                        onClick={() =>
                          setQuantity((qty) => {
                            if (qty > 1) {
                              return qty - 1;
                            }
                            return qty;
                          })
                        }
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          fill="#999"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13H5v-2h14v2z" />
                        </svg>
                      </button>
                      <input
                        className="form-control text-center"
                        placeholder=""
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        value={quantity}
                      />
                      <button
                        onClick={() => setQuantity((qty) => qty + 1)}
                        className="btn btn-icon btn-light"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          fill="#999"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="me-1" />
                    Add to cart
                  </button>
                  <button className="btn btn-light" onClick={handleSaveClick}>
                    <FontAwesomeIcon
                      icon={
                        isItemInSave(product) ? faBookmark : faSolidBookmark
                      }
                      className="me-1"
                    />
                  </button>
                </div>
              </article>
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
};

export default ProductsDetail;
