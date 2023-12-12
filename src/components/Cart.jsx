import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

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

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
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

  return (
    showModal && (
      <div className="cart">
        <ToastContainer />
        <h1 className="cart-header">Cart</h1>
        <div className="close">
          <button className="close-button" onClick={toggle}>
            Close
          </button>
        </div>
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-info">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="cart-img"
                />
                <div className="cart-text">
                  <h1 className="cart-item-name">{item.name}</h1>
                  <p className="cart-item-price">${item.price}</p>
                </div>
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
                <p>{item.quantity}</p>
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
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div className="cart-total">
            <h1 className="total-header">Total: ${getCartTotal()}</h1>
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
        ) : (
          <h1 className="total-header">Your cart is empty</h1>
        )}
      </div>
    )
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
