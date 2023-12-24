import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const { login } = useContext(AuthContext);

  return (
    <>
      <section className="padding-y bg-light" style={{ minHeight: "90vh" }}>
        <div className="container">
          <div className="card shadow mx-auto" style={{ maxWidth: 400 }}>
            <div className="card-body">
              <h4 className="card-title mb-4">Sign in</h4>

              <div className="mb-3">
                <label className="form-label">email</label>
                <input
                  className="form-control"
                  placeholder="Type email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  placeholder="Enter Password."
                  type="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <button
                  onClick={() => {
                    login(data);
                    console.log("You are in", data);
                  }}
                  className="btn btn-primary w-100"
                >
                  Sign In
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
                Create New Account <Link to="/register">Sign Up</Link>
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

export default Login;
