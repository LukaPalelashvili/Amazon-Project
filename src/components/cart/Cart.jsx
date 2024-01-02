import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";
import EmptyCart from "../../images/empty-cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Cart = ({}) => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <main className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body empty p-lg-4">
                <h4 className="card-title mb-4">Shopping cart</h4>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <article className="row mb-4" key={item.id}>
                      <div className="col-lg-9">
                        <figure className="d-flex align-items-start">
                          <div className="me-3 flex-shrink-0">
                            <img
                              src={item.images[0]}
                              alt={item.title}
                              className="cart-img"
                            />
                          </div>
                          <figcaption className="info">
                            <a className="title" href="/p-market-detail">
                              {item.title}
                            </a>
                            <p className="text-muted">
                              {/* {item.title} */}
                              <br />
                              {item.description}
                            </p>
                            <button
                              className="btn btn-light text-danger btn-sm"
                              onClick={() => {
                                removeFromCart(item);
                              }}
                            >
                              Remove
                            </button>
                            <Link
                              to={`/product-detail/${item.id}`}
                              className="btn btn-light btn-sm"
                            >
                              Watch Product
                            </Link>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-lg-3">
                        <div className="text-end mb-2">
                          <var className="h6">${item.price}</var>
                        </div>
                        <div className="cart-quantity">
                          <button
                            className="quantity-button"
                            onClick={() => {
                              addToCart(item);
                            }}
                          >
                            +
                          </button>
                          <p>${item.price}</p>
                          <button
                            className="quantity-button"
                            onClick={() => {
                              const cartItem = cartItems.find(
                                (product) => product.id === item.id
                              );
                              if (cartItem.quantity === 1) {
                                handleRemoveFromCart(item);
                              } else {
                                removeFromCart(item);
                              }
                            }}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="emtpty-cart">
                    <img src={EmptyCart} alt="Empty Cart" />
                    <p> Your cart is empty </p>
                  </div>
                )}

                <hr />

                <Link to={"/products"} className="btn btn-light">
                  <FontAwesomeIcon className="fa me-2" icon={faArrowLeft} />
                  Back to shop
                </Link>
              </div>
            </div>{" "}
          </main>{" "}
          <aside className="col-lg-3">
            <div className="card p-3 mb-3">
              <form>
                <div>
                  <label className="form-label">Have coupon?</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      placeholder="Add coupon"
                    />
                    <button className="btn btn-light">Apply</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="card shadow-lg">
              <div className="card-body">
                <dl className="row">
                  <dt className="col-7 fw-normal text-muted">Subtotal: </dt>
                  <dd className="col-5 text-end">$143.90</dd>
                  <dt className="col-7 fw-normal text-muted">Discount:</dt>
                  <dd className="col-5 text-end">- $60.00</dd>
                  <dt className="col-7 fw-normal text-muted">Tax:</dt>
                  <dd className="col-5 text-end">+ $14.00 </dd>
                  <dt className="col-7 fw-normal text-muted">Shipping:</dt>
                  <dd className="col-5 text-end">+ $9.50 </dd>
                </dl>
                <hr />
                <dl className="row">
                  <dt className="col-7 h5 text-muted">Total:</dt>
                  <dd className="col-5 h5 text-end"> ${getCartTotal()} </dd>
                </dl>

                <div className="my-3">
                  <a
                    className="btn btn-lg p-3 btn-success w-100"
                    href="/p-market-order"
                  >
                    Make Purchase
                  </a>
                </div>
                <p className="text-center mt-3">
                  {/* <img src="images/misc/payments.png" height={24} /> */}
                </p>
              </div>
              <button
                className="total-button"
                onClick={() => {
                  clearCart();
                  notifyCartCleared();
                }}
              >
                Clear cart
              </button>
            </div>
          </aside>
        </div>
        <article className="rounded p-5 bg-gray-light"></article>
      </div>
    </section>
  );
};

export default Cart;
