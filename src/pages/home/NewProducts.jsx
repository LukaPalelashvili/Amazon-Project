import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./home.css";
// import Products from "../../components/Products";

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  const url =
    "https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/latestproducts";
  const fetchProductss = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((products) => {
        console.log("pr", products);
        setProducts(products);
      });
  };

  // const fetchProducts = () => {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("user", res);
  //       setProducts(res.products);
  //     });
  // };

  useEffect(() => {
    fetchProductss();
  }, []);

  return (
    <>
      <section className="pb-3">
        <div className="container">
          <header className="section-heading">
            <h3>New products</h3>
          </header>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            {/* col end.// */}
            {products.map((product) => (
              <div className="col">
                <figure className="card card-product-grid">
                  <a href="#" className="img-wrap">
                    <img className="new-product-img" src={product.images[0]} />
                  </a>
                  <figcaption className="p-3">
                    <div className="price-wrap">
                      <span className="price">${product.price}</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                    <a href="#" className="title">
                      {product.name}
                    </a>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>{" "}
          {/* row end.// */}
        </div>{" "}
        {/* container end.// */}
      </section>
    </>
  );
};

export default NewProducts;
