import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import EmptyCart from "../../images/empty-cart.png";
import { Link } from "react-router-dom";
import { SaveContext } from "../../context/SaveContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext.jsx";
import { successAlert } from "../../helpers/index.js";
import { ToastContainer } from "react-toastify";

const SavedItems = ({}) => {
  const { savedItems, removeFromSave } = useContext(SaveContext);
  const { addToCart } = useContext(CartContext);

  const handleMoveToCart = (item) => {
    addToCart(item);
    removeFromSave(item);
    successAlert("Item moved to cart");
  };

  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <main className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body empty p-lg-4">
                <h4 className="card-title mb-4">Saved Items</h4>
                {savedItems.length > 0 ? (
                  savedItems.map((item) => (
                    <article className="row mb-4" key={item.id}>
                      <div className="col-lg-9">
                        <figure className="d-flex align-items-start">
                          <div className="me-3 flex-shrink-0">
                            <Link to={`/product-detail/${item.id}`}>
                              <img
                                src={item.images[0]}
                                alt={item.title}
                                className="cart-img"
                              />
                            </Link>
                          </div>
                          <figcaption className="info">
                            <Link
                              className="title"
                              to={`/product-detail/${item.id}`}
                            >
                              {item.title}
                            </Link>

                            <p className="text-muted">
                              <br />
                              {item.description}
                            </p>

                            <button
                              className="btn btn-light text-danger btn-sm"
                              onClick={() => {
                                removeFromSave(item);
                              }}
                            >
                              Remove
                            </button>
                            <button
                              onClick={() => handleMoveToCart(item)}
                              className="btn btn-light btn-sm"
                            >
                              Move to Cart
                            </button>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-lg-3">
                        <div className="text-end mb-2">
                          <var className="h6">${item.price}</var>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center">
                    <img
                      src={EmptyCart}
                      alt="Empty Cart"
                      className="img-fluid mb-3 w-25"
                    />
                    <p className="h5 text-muted">Your saved items is empty.</p>
                  </div>
                )}

                <hr />

                <Link to={"/products"} className="btn btn-light">
                  <FontAwesomeIcon className="fa me-2" icon={faArrowLeft} />
                  Back Back to shop
                </Link>
              </div>
            </div>{" "}
          </main>{" "}
        </div>
        <article className="rounded p-5 bg-gray-light"></article>
      </div>
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
    </section>
  );
};

export default SavedItems;
