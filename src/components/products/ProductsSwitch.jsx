import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductsSwitch = () => {
  const [products, setProducts] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
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

  return (
    <>
      <>
        <div className="row ">
          {products.map((product) => (
            <div
              key={product.id}
              className={"col-xxl-3 col-xl-4 col-sm-6 col-12"}
            >
              <figure className={"card card-product-grid"}>
                <div className="img-wrap">
                  <img src={product.images[0]} />
                </div>
                <figcaption className="p-3 border-top">
                  <div className="float-end btn btn-light btn-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div className="float-end btn btn-light btn-icon buy-prodact">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </div>
                  <div className="title mb-1">
                    {product.description.slice(0, 40)}
                  </div>
                  <div className="price text-lg mb-2 fw-bold">
                    ${product.price}
                  </div>
                  <span className="text-muted">{product.brand}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default ProductsSwitch;
