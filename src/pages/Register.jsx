import React, { useState } from "react";
import api from "../provider/api";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    // avatar: "https://picsum.photos/800",
  });

  const handleChange = (fieldName) => {
    return (e) => {
      setFormData({
        ...formData,
        [fieldName]: e.target.value,
      });
    };
  };

  const handleRegister = () => {
    api({
      method: "post",
      url: "https://ngglobalwebapi20231210182820.azurewebsites.net/api/user/registerUser",
      data: formData,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: "",
        email: "",
        password: "",
        /* other user data */
      }),
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {/* <div>
        <input
          type="text"
          placeholder="text"
          value={formData.userName}
          onChange={handleChange("userName")}
        />
        <input
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
        <input
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange("password")}
        />
        <button onClick={handleRegister}>register</button>
      </div> */}
      <section className="padding-y bg-light" style={{ minHeight: "90vh" }}>
        <div className="container">
          <div className="card shadow mx-auto" style={{ maxWidth: 400 }}>
            <div className="card-body">
              <h4 className="card-title mb-4">Sign in</h4>
              <div className="row gx-2">
                <div className="col-6 mb-3">
                  <label className="form-label">First name </label>
                  <input
                    type="text"
                    placeholder="text"
                    value={formData.userName}
                    onChange={handleChange("userName")}
                    className="form-control"
                  />
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Last name</label>
                  <input type="text" className="form-control" name="lorem" />
                </div>
              </div>{" "}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  placeholder="Type email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange("email")}
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
              </div>
              <div className="mb-3">
                <label className="form-label">Create password</label>
                <input
                  className="form-control"
                  placeholder="At least 6 characters."
                  type="password"
                  value={formData.password}
                  onChange={handleChange("password")}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Repeat password</label>
                <input
                  className="form-control"
                  placeholder=""
                  // type="password"
                />
              </div>
              <div className="mb-4">
                <button
                  onClick={handleRegister}
                  className="btn btn-primary w-100"
                >
                  Sign up
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
                    I agree with Terms and Conditions{" "}
                  </span>
                </label>
              </div>
              <hr />
              <p className="text-center mb-2">
                Already have account? <Link to="/login">Sign In</Link>
              </p>
            </div>{" "}
          </div>{" "}
          <br />
          <br />
        </div>
      </section>
    </>
  );
};

export default Register;
