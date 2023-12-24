import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, notifyAddedToCart } = useContext(CartContext);

  const url =
    "https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/latestproducts";

  const fetchProducts = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((products) => {
        console.log("pr", products);
        setProducts(products);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <section className="pb-3">
        <div className="container">
          <header className="section-heading">
            <h3>New products</h3>
          </header>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            {products.map((product) => (
              <div className="col" key={product.id}>
                <figure className="card card-product-grid">
                  <Link
                    to={`/product-detail/${product.id}`}
                    className="img-wrap"
                  >
                    <img
                      className="new-product-img"
                      src={product.images[0]}
                      alt={product.name}
                    />
                  </Link>
                  <figcaption className="p-3">
                    <div className="price-wrap">
                      <span className="price">${product.price}</span>
                    </div>
                    <a className="title">{product.name.substring(1, 60)}</a>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        addToCart(product);
                        notifyAddedToCart(product);
                      }}
                    >
                      <i className="me-1 fa fa-shopping-basket" />
                      Add to cart
                    </button>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProducts;
