import React from "react";

const UserProfile = () => {
  return (
    <>
      <section className="padding-bottom">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3 col-xl-3">
              {/*  COMPONENT MENU LIST  */}
              <nav className="nav gap-1 flex-lg-column nav-pills mb-4">
                <a className="nav-link active" href="#">
                  Personal info
                </a>
                <a className="nav-link" href="#">
                  New orders
                </a>
                <a className="nav-link" href="#">
                  Orders history
                </a>
                <a className="nav-link" href="#">
                  My wishlist
                </a>
                <a className="nav-link" href="#">
                  Transactions
                </a>
                <a className="nav-link" href="#">
                  Profile setting
                </a>
                <a className="nav-link" href="#">
                  Log out
                </a>
              </nav>
              {/*   COMPONENT MENU LIST END .//   */}
            </aside>
            <main className="col-lg-9  col-xl-9">
              <article className="card">
                <div className="card-body">
                  <h5 className="card-title"> Personal info </h5>
                  <figure className="d-flex align-items-center">
                    <div className="me-3 flex-grow-0">
                      <span className="bg-gray icon-md rounded-circle">
                        {/* <img
                    src="images/avatars/avatar.jpg"
                    className="size-56x56 rounded-circle"
                  /> */}
                      </span>
                    </div>
                    <figcaption>
                      <h6 className="fw-normal">Mr. Jackson Mike</h6>
                      <p className="mb-0">
                        Email: myusername@gmail.com, Phone: +1234567890988
                        <a href="#" className="px-2">
                          <i className="fa fa-pen" />
                        </a>
                      </p>
                    </figcaption>
                  </figure>
                  <hr />
                  <div className="row g-2 mb-3">
                    <div className="col-md-6">
                      <article className="card shadow-sm">
                        <div className="p-3">
                          <p className="mb-1">
                            <b className="text-muted me-1">
                              <i className="fa fa-map-marker-alt" />
                            </b>
                            United States, 490 Old Capitol Trail
                          </p>
                          <a href="#">Edit</a> <b className="dot" />
                          <a href="#">Delete</a>
                        </div>
                      </article>
                    </div>{" "}
                    {/* col.// */}
                    <div className="col-md-6">
                      <article className="card shadow-sm">
                        <div className="p-3">
                          <p className="mb-1">
                            <b className="text-muted me-1">
                              {" "}
                              <i className="fa fa-map-marker-alt" />{" "}
                            </b>
                            Moscow city, Street name, House 77
                          </p>
                          <a href="#">Edit</a> <b className="dot" />
                          <a href="#">Delete</a>
                        </div>
                      </article>
                    </div>{" "}
                    {/* col.// */}
                  </div>{" "}
                  {/* row.// */}
                  <a href="#" className="btn btn-outline-primary">
                    <i className="me-2 fa fa-plus" /> Add new address
                  </a>
                  <hr className="my-4" />
                  <h5 className="card-title"> My recent orders </h5>
                  {/*  ======== item order ======== */}
                  <article className="card border-primary mb-4">
                    <div className="card-body">
                      <header className="d-lg-flex">
                        <div className="flex-grow-1">
                          <h6 className="mb-0">
                            Order ID: 8924 <i className="dot" />
                            <span className="text-warning"> Pending </span>
                          </h6>
                          <span className="text-muted">
                            Date: 16 December 2018
                          </span>
                        </div>
                        <div>
                          <a href="#" className="btn btn-outline-danger">
                            Cancel order
                          </a>
                          <a href="#" className="btn btn-primary">
                            Track order
                          </a>
                        </div>
                      </header>
                      <hr />
                      <div className="row">
                        <div className="col-lg-4">
                          <p className="mb-0 text-muted">Contact</p>
                          <p className="m-0">
                            Mike Johnatan <br /> Phone: 371-295-9131 <br />{" "}
                            Email: info@mywebsite.com{" "}
                          </p>
                        </div>{" "}
                        {/* col.// */}
                        <div className="col-lg-4 border-start">
                          <p className="mb-0 text-muted">Shipping address</p>
                          <p className="m-0">
                            {" "}
                            United States <br />
                            3601 Old Capitol Trail, Unit A-7, Suite 170777,
                            Wilmington, DE 19808{" "}
                          </p>
                        </div>{" "}
                        {/* col.// */}
                        <div className="col-lg-4 border-start">
                          <p className="mb-0 text-muted">Payment</p>
                          <p className="m-0">
                            <span className="text-success">
                              {" "}
                              Visa **** 4216{" "}
                            </span>{" "}
                            <br />
                            Shipping fee: $56 <br />
                            Total paid: $456
                          </p>
                        </div>{" "}
                        {/* col.// */}
                      </div>{" "}
                      {/* row.// */}
                      <hr />
                      <ul className="row">
                        <li className="col-xl-4  col-lg-6">
                          <figure className="d-flex mb-3">
                            <div className="flex-shrink-0 me-2">
                              {/* <img
                          width={72}
                          height={72}
                          src="images/items/cloth/1.jpg"
                          className="size-72x72 img-thumbnail"
                        /> */}
                            </div>
                            <figcaption>
                              <p className="mb-1">
                                T-shirts with multiple colors <br /> Size: XXL{" "}
                              </p>
                              <b> 2x = $339.90 </b>
                            </figcaption>
                          </figure>
                        </li>
                        <li className="col-xl-4  col-lg-6">
                          <figure className="d-flex mb-3">
                            <div className="me-2 flex-shrink-0">
                              {/* <img
                          width={72}
                          height={72}
                          src="images/items/tech/9.jpg"
                          className="size-72x72 img-thumbnail"
                        /> */}
                            </div>
                            <figcaption>
                              <p className="mb-1">
                                Gaming Headset 32db, Color: White{" "}
                              </p>
                              <b> 1x = $76.00 </b>
                            </figcaption>
                          </figure>
                        </li>
                        <li className="col-xl-4  col-lg-6">
                          <figure className="d-flex mb-3">
                            <div className="me-2 flex-shrink-0">
                              {/* <img
                          width={72}
                          height={72}
                          src="images/items/tech/1.jpg"
                          className="size-72x72 img-thumbnail"
                        /> */}
                            </div>
                            <figcaption>
                              <p className="mb-1">
                                Apple iPhone 12 <br /> Color: red{" "}
                              </p>
                              <b> 1x = $990.00 </b>
                            </figcaption>
                          </figure>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* card-body .// */}
                  </article>{" "}
                  {/* card .// */}
                  {/*  ======== item order .// ======== */}
                  {/*  ======== item order ======== */}
                  <article className="card border-primary mb-4">
                    <div className="card-body">
                      <header className="d-lg-flex">
                        <div className="flex-grow-1">
                          <h6 className="mb-0">
                            Order ID: 1009 <i className="dot" />
                            <span className="text-success"> Shipped</span>
                          </h6>
                          <span className="text-muted">
                            Date: 16 December 2018
                          </span>
                        </div>
                        <div>
                          <a href="#" className="btn btn-outline-danger">
                            Cancel order
                          </a>
                          <a href="#" className="btn btn-primary">
                            Track order
                          </a>
                        </div>
                      </header>
                      <hr />
                      <div className="row">
                        <div className="col-lg-4">
                          <p className="mb-0 text-muted">Contact</p>
                          <p className="m-0">
                            Mike Johnatan <br /> Phone: 371-295-9131 <br />{" "}
                            Email: info@mywebsite.com{" "}
                          </p>
                        </div>{" "}
                        {/* col.// */}
                        <div className="col-lg-4 border-start">
                          <p className="mb-0 text-muted">Shipping address</p>
                          <p className="m-0">
                            {" "}
                            United States <br />
                            3601 Old Capitol Trail, Unit A-7, Suite 170777,
                            Wilmington, DE 19808{" "}
                          </p>
                        </div>{" "}
                        {/* col.// */}
                        <div className="col-lg-4 border-start">
                          <p className="mb-0 text-muted">Payment</p>
                          <p className="m-0">
                            <span className="text-success">
                              {" "}
                              Visa **** 4216{" "}
                            </span>{" "}
                            <br />
                            Shipping fee: $56 <br />
                            Total paid: $456
                          </p>
                        </div>{" "}
                        {/* col.// */}
                      </div>{" "}
                      {/* row.// */}
                      <hr />
                      <ul className="row">
                        <li className="col-xl-4  col-lg-6">
                          <figure className="d-flex mb-3">
                            <div className="flex-shrink-0 me-2">
                              {/* <img
                          width={72}
                          height={72}
                          src="images/items/interior/1.jpg"
                          className="size-72x72 img-thumbnail"
                        /> */}
                            </div>
                            <figcaption>
                              <p className="mb-1">
                                Sofe for living room, New model A123{" "}
                              </p>
                              <b> 1x = $1,200.90 </b>
                            </figcaption>
                          </figure>
                        </li>
                        <li className="col-xl-4  col-lg-6">
                          <figure className="d-flex mb-3">
                            <div className="me-2 flex-shrink-0">
                              {/* <img
                          width={72}
                          height={72}
                          src="images/items/interior/2.jpg"
                          className="size-72x72 img-thumbnail"
                        /> */}
                            </div>
                            <figcaption>
                              <p className="mb-1">
                                Orange Armchair for Office{" "}
                              </p>
                              <b> 1x = $190.00 </b>
                            </figcaption>
                          </figure>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* card-body .// */}
                  </article>{" "}
                  {/* card .// */}
                  {/*  ======== item order ======== .// */}
                </div>{" "}
                {/* card-body .// */}
              </article>{" "}
              {/* card .// */}
            </main>
          </div>{" "}
          {/* row.// */}
          <br />
          <br />
        </div>{" "}
        {/* container .//  */}
      </section>
    </>
  );
};

export default UserProfile;
