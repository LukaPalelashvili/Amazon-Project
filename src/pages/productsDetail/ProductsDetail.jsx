import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cart";

const ProductsDetail = (products) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [productId]);

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
                <a
                  href="#"
                  className="img-main-wrap mb-3 img-thumbnail"
                  style={{ height: 520 }}
                >
                  <img className="h-100 img-cover" src={product.images[0]} />
                </a>
                <div className="thumbs-wrap text-center overflow-auto text-nowrap">
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src={product.images[0]}
                    />
                  </a>
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src={product.images[1]}
                    />
                  </a>
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src={product.images[2]}
                    />{" "}
                  </a>
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src={product.images[3]}
                    />
                  </a>
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src={product.images[4]}
                    />{" "}
                  </a>
                </div>{" "}
              </figure>{" "}
            </aside>
            <main className="col-lg-6">
              <article className="ps-lg-3">
                <h4 className="title text-dark">{product.title}</h4>
                <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                    <li style={{ width: "80%" }} className="stars-active">
                      {" "}
                      <img src="images/misc/stars-active.svg" alt="" />{" "}
                    </li>
                    <li>
                      {" "}
                      <img src="images/misc/starts-disable.svg" alt="" />{" "}
                    </li>
                  </ul>
                  <b className="label-rating text-warning"> {product.rating}</b>
                  <i className="dot" />
                  <span className="label-rating text-muted">
                    {" "}
                    <i className="fa fa-shopping-basket" /> 154 orders{" "}
                  </span>
                  <i className="dot" />
                  <span className="label-rating text-success">In stock</span>
                </div>{" "}
                <div className="mb-2">
                  <var className="price h5">{product.price}$</var>
                  <span className="text-muted"></span>
                </div>
                <p>{product.description.substring(0, 300)}</p>
                <dl className="row">
                  <dt className="col-3 fw-normal text-muted">Category:</dt>
                  <dd className="col-9">{product.category}</dd>
                  <dt className="col-3 fw-normal text-muted">Color</dt>
                  <dd className="col-9">Silver white</dd>
                  <dt className="col-3 fw-normal text-muted">Stock</dt>
                  <dd className="col-9">{product.stock} </dd>
                  <dt className="col-3 fw-normal text-muted">Brand</dt>
                  <dd className="col-9">{product.brand} </dd>
                </dl>
                <hr />
                <div className="row mb-3">
                  <div className="col-md-4 col-6 mb-2">
                    <label className="form-label">Size</label>
                    <select className="form-select">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>{" "}
                  <div className="col-md-4 col-6 mb-2">
                    <label className="form-label d-block">Quantity</label>
                    <div className="input-group input-spinner">
                      <button className="btn btn-icon btn-light" type="button">
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
                        defaultValue={14}
                      />
                      <button className="btn btn-icon btn-light" type="button">
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
                    </div>{" "}
                  </div>
                </div>
                <a href="#" className="btn  btn-warning">
                  {" "}
                  Buy now{" "}
                </a>
                <button
                  className="btn  btn-primary"
                  onClick={() => {
                    addToCart(product);
                    notifyAddedToCart(product);
                  }}
                >
                  <i className="me-1 fa fa-shopping-basket" />
                  Add to cart
                </button>
                <a href="#" className="btn  btn-light">
                  <i className="me-1 fa fa-heart" /> Save{" "}
                </a>
              </article>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsDetail;
