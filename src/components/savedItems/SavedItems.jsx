import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./savedItems.css";
import EmptyCart from "../../images/empty-cart.png";
import { Link } from "react-router-dom";
import { SaveContext } from "../../context/saveContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SavedItems = ({}) => {
  const { saveItems, removeFromSave } = useContext(SaveContext);

  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <main className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body empty p-lg-4">
                <h4 className="card-title mb-4">Saved Items</h4>
                {saveItems.length > 0 ? (
                  saveItems.map((item) => (
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
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="emtpty-cart">
                    <img src={EmptyCart} alt="Empty Cart" />
                    <p> Your Have No Save Product </p>
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
    </section>
  );
};

export default SavedItems;
