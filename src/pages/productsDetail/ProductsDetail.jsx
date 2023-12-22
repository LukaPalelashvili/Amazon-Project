import React from "react";

const ProductsDetail = () => {
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
                  <img
                    src="images/items/detail-tech/big1.jpg"
                    className="h-100 img-cover"
                  />
                </a>
                <div className="thumbs-wrap text-center overflow-auto text-nowrap">
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src="images/items/detail-tech/big1.jpg"
                    />{" "}
                  </a>
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src="images/items/detail-tech/big2.jpg"
                    />{" "}
                  </a>
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src="images/items/detail-tech/big3.jpg"
                    />{" "}
                  </a>
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src="images/items/detail-tech/big1.jpg"
                    />{" "}
                  </a>
                  <a href="#" className="item-thumb">
                    <img
                      className="img-thumbnail size-60x60"
                      height={60}
                      src="images/items/detail-tech/big2.jpg"
                    />{" "}
                  </a>
                </div>{" "}
                {/* thumbs-wrap.// */}
              </figure>{" "}
              {/* gallery-wrap .end// */}
            </aside>
            <main className="col-lg-6">
              <article className="ps-lg-3">
                <h4 className="title text-dark">
                  Smart Watch for Men Women, 2022 Fitness Tracker 1.69" Touch
                  Screen and Waterproof, Android OS{" "}
                </h4>
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
                  <b className="label-rating text-warning"> 4.5</b>
                  <i className="dot" />
                  <span className="label-rating text-muted">
                    {" "}
                    <i className="fa fa-shopping-basket" /> 154 orders{" "}
                  </span>
                  <i className="dot" />
                  <span className="label-rating text-success">In stock</span>
                </div>{" "}
                {/* rating-wrap.// */}
                <div className="mb-2">
                  <var className="price h5">$75.00</var>
                  <span className="text-muted">/per box</span>
                </div>
                <p>
                  Modern look and quality demo item Smartwatch Fitness Watch 25
                  Sports IP68 is a streetwear-inspired collection that continues
                  to break away from the conventions of mainstream fashion. Made
                  in Italy, these black and brown for men.
                </p>
                <dl className="row">
                  <dt className="col-3 fw-normal text-muted">Type:</dt>
                  <dd className="col-9">Regular</dd>
                  <dt className="col-3 fw-normal text-muted">Color</dt>
                  <dd className="col-9">Silver white</dd>
                  <dt className="col-3 fw-normal text-muted">Material</dt>
                  <dd className="col-9">Metallic, waterproof </dd>
                  <dt className="col-3 fw-normal text-muted">Brand</dt>
                  <dd className="col-9">Samsung </dd>
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
                  {/* col.// */}
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
                    {/* input-group.// */}
                  </div>{" "}
                  {/* col.// */}
                </div>{" "}
                {/* row.// */}
                <a href="#" className="btn  btn-warning">
                  {" "}
                  Buy now{" "}
                </a>
                <a href="#" className="btn  btn-primary">
                  {" "}
                  <i className="me-1 fa fa-shopping-basket" /> Add to cart{" "}
                </a>
                <a href="#" className="btn  btn-light">
                  {" "}
                  <i className="me-1 fa fa-heart" /> Save{" "}
                </a>
              </article>{" "}
              {/* product-info-aside .// */}
            </main>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
        </div>{" "}
        {/* container .//  */}
      </section>
    </>
  );
};

export default ProductsDetail;
