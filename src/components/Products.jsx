import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cart.jsx";
import Cart from "./Cart.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./products.css";

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

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

  //   fetch('https://dummyjson.com/carts')
  // .then(res => res.json())
  // .then(console.log);

  useEffect(() => {
    fetchProducts();
  }, []);

  // async function getProducts() {
  //   const response = await fetch(
  //     "https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/products"
  //   );
  //   const data = await response.json();
  //   setProducts(data.products);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

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

  return (
    <div className="main-products">
      <ToastContainer />
      <div className="shop-header">
        <h1 className="shop-title">Shop</h1>
        {!showModal && (
          <button className="cart-button" onClick={toggle}>
            Cart ({cartItems.length})
          </button>
        )}
      </div>
      <div className="products-box">
        {products.map((product) => (
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
                    {cartItems.find((item) => item.id === product.id).quantity}
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
  );
}
