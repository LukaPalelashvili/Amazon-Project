import React from "react";

const MainRegister = () => {
  return (
    <>
      <section className="padding-y bg-light" style={{ minHeight: "90vh" }}>
        <div className="container">
          {/* ====== COMPONENT LOGIN  ====== */}
          <div className="card shadow mx-auto" style={{ maxWidth: 400 }}>
            <div className="card-body">
              <h4 className="card-title mb-4">Sign in</h4>
              <form>
                <div className="row gx-2">
                  <div className="col-6 mb-3">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control" name="lorem" />
                  </div>
                  <div className="col-6 mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" name="lorem" />
                  </div>
                </div>{" "}
                {/* row // */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    placeholder="Type email"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <div className="row gx-2">
                    <div className="col-4">
                      {" "}
                      <input
                        className="form-control"
                        defaultValue={+998}
                        type="text"
                      />{" "}
                    </div>
                    <div className="col-8">
                      {" "}
                      <input
                        className="form-control"
                        placeholder="Phone"
                        type="text"
                      />{" "}
                    </div>
                  </div>{" "}
                  {/* row // */}
                </div>
                <div className="mb-3">
                  <label className="form-label">Create password</label>
                  <input
                    className="form-control"
                    placeholder="At least 6 characters."
                    type="password"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Repeat password</label>
                  <input
                    className="form-control"
                    placeholder=""
                    type="password"
                  />
                </div>
                <div className="mb-4">
                  <button type="submit" className="btn btn-primary w-100">
                    {" "}
                    Login
                  </button>
                </div>
                <div className="mb-4">
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked=""
                      defaultValue=""
                    />
                    <span className="form-check-label">
                      {" "}
                      I agree with Terms and Conditions{" "}
                    </span>
                  </label>
                </div>
              </form>
              <hr />
              <p className="text-center mb-2">
                Already have account? <a href="#">Sign in</a>
              </p>
            </div>{" "}
            {/* card-body.// */}
          </div>{" "}
          {/* card .// */}
          {/* ====== COMPONENT LOGIN  END.// ====== */}
          <br />
          <br />
        </div>{" "}
        {/* container .//  */}
      </section>
    </>
  );
};

export default MainRegister;
