import React, { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";
import EmptyCart from "../../images/empty-cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import PaymentsImg from "../../images/payments.png";
import Payment from "../../payments/Payment.jsx";
import stripePromise from "../../payments/stripe.js";
import { Elements } from "@stripe/react-stripe-js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { successAlert } from "../../helpers/index.js";
import { SaveContext } from "../../context/SaveContext.jsx";
import { ToastContainer } from "react-toastify";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({}) => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    shipping,
    discount,
    tax,
    getCartTotal,
    subTotal,
    addToCart,
  } = useContext(CartContext);
  const { addToSave, savedItems, removeFromSave } = useContext(SaveContext);

  const handleQtyUpdate = (item, e) => {
    const qty = e.target.value;
    updateQuantity(item, +qty);
  };

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const openPaymentModal = () => {
    setShowPaymentModal(true);
  };
  const closePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    closePaymentModal();
  };

  const handleMoveToSave = (item) => {
    removeFromCart(item);
    addToSave(item);
    successAlert("Item moved to saved items");
  };

  const handleMoveToCart = (item) => {
    removeFromSave(item);
    addToCart(item);
    successAlert("Item moved to car");
  };

  const handleRemove = (item) => {
    removeFromCart(item);
    successAlert("Item removed from cart");
  };

  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <main className="col-lg-9">
              <div className="card mb-4">
                <div className="card-body p-lg-4">
                  <h4 className="card-title mb-4">Shopping cart</h4>

                  <hr />
                  {cartItems.length === 0 ? (
                    <div className="text-center">
                      <img
                        src={EmptyCart}
                        alt="Empty Cart"
                        className="img-fluid mb-3 w-25"
                      />
                      <p className="h5 text-muted">Your cart is empty.</p>
                    </div>
                  ) : (
                    cartItems.map((item) => {
                      return (
                        <>
                          <article className="row mb-4">
                            <div className="col-lg-9">
                              <figure className="d-flex align-items-start">
                                <div className="me-3 flex-shrink-0">
                                  <img
                                    src={item.thumbnail}
                                    className="size-100x100 img-thumbnail"
                                    alt={item.title}
                                  />
                                </div>
                                <figcaption className="info">
                                  <Link
                                    className="title"
                                    to={`/product-detail/${item.id}`}
                                  >
                                    {item.title}
                                  </Link>
                                  <p className="text-muted">
                                    {item.description.substring(0, 300)}
                                  </p>
                                  <button
                                    className="btn btn-light text-danger btn-sm"
                                    onClick={() => handleRemove(item)}
                                  >
                                    Remove
                                  </button>
                                  <button
                                    onClick={() => handleMoveToSave(item)}
                                    className="btn btn-light btn-sm"
                                  >
                                    Save for later
                                  </button>
                                </figcaption>
                              </figure>
                            </div>
                            <div className="col-lg-3">
                              <div className="text-end mb-2">
                                <var className="h6">
                                  ${item.price * item.quantity}
                                </var>
                              </div>
                              <select
                                style={{ width: "100px" }}
                                className="float-end form-select"
                                value={item.quantity}
                                onChange={(e) => handleQtyUpdate(item, e)}
                              >
                                {Array.from(Array(10).keys()).map((qty) => (
                                  <option key={qty} value={qty + 1}>
                                    Qty: {qty + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </article>
                          <hr />
                        </>
                      );
                    })
                  )}

                  <Link className="btn btn-light" to="/products">
                    <i className="fa fa-arrow-left me-2"></i> Back to shop
                  </Link>
                </div>
              </div>
            </main>
            {cartItems.length ? (
              <aside className="col-lg-3">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-7 fw-normal text-muted">Subtotal:</dt>
                      <dd className="col-5 text-end">${getCartTotal()}</dd>

                      <dt className="col-7 fw-normal text-muted">Discount:</dt>
                      <dd className="col-5 text-end">- ${discount} (15%)</dd>

                      <dt className="col-7 fw-normal text-muted">Tax:</dt>
                      <dd className="col-5 text-end">+ ${tax}</dd>

                      <dt className="col-7 fw-normal text-muted">Shipping:</dt>
                      <dd className="col-5 text-end">+ ${shipping}</dd>
                    </dl>
                    <hr />
                    <dl className="row">
                      <dt className="col-7 h5 text-muted">Total:</dt>
                      <dd className="col-5 h5 text-end"> ${subTotal}</dd>
                    </dl>

                    <div className="my-3">
                      <button
                        className="btn p-3 btn-success w-100"
                        onClick={openPaymentModal}
                      >
                        Make Purchase
                      </button>
                    </div>
                    <p className="text-center mt-3">
                      <img src={PaymentsImg} alt="payments" height="24" />
                    </p>
                  </div>
                </div>
              </aside>
            ) : null}
          </div>
        </div>

        <Modal show={showPaymentModal} onHide={closePaymentModal}>
          <Modal.Header closeButton>
            <Modal.Title>Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!paymentSuccess ? (
              <Elements stripe={stripePromise}>
                <Payment
                  totalAmount={subTotal}
                  closeModal={handlePaymentSuccess}
                />
              </Elements>
            ) : (
              <div className="alert alert-success">
                Payment Successful! Thank you for your purchase.
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closePaymentModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
      {savedItems.length > 0 && (
        <section className="padding-bottom">
          <div className="container">
            <article className="card p-lg-4 mb-4">
              <h4 className="card-title mb-4">
                <FontAwesomeIcon className="text-muted me-2" icon={faHeart} />{" "}
                Your saved items
              </h4>

              <div className="row">
                {savedItems.map((item) => {
                  return (
                    <div className="col-xxl-2 col-xl-3 col-sm-4 col-6">
                      <figure className="card-product-grid product-sm">
                        <Link
                          to={`/product-detail/${item.id}`}
                          className="img-wrap border rounded"
                        >
                          {" "}
                          <img src={item.thumbnail} alt={item.title} />{" "}
                        </Link>
                        <figcaption className="mt-2">
                          <Link
                            to={`/product-detail/${item.id}`}
                            className="title"
                          >
                            {item.title}
                          </Link>
                          <p className="mt-1 mb-2 text-muted"> ${item.price}</p>

                          <button
                            onClick={() => handleMoveToCart(item)}
                            className="btn btn-light text-primary"
                          >
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faCartShopping}
                            />{" "}
                            Move to cart
                          </button>
                        </figcaption>
                      </figure>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
