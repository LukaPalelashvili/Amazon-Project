import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import authContext from "../context/AuthContext";

const Login = () => {
  const { auth } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.access_token) {
      navigate("/");
    }
  }, [auth]);

  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <section className="padding-y bg-light" style={{ minHeight: "90vh" }}>
        <div className="container">
          <div className="card shadow mx-auto" style={{ maxWidth: 400 }}>
            <div className="card-body">
              <h4 className="card-title mb-4">Sign in</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">email</label>
                  <input
                    className={`form-control ${
                      errors.email ? "is-invalid" : null
                    }`}
                    placeholder="Type email"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    className={`form-control ${
                      errors.password ? "is-invalid" : null
                    }`}
                    placeholder="Enter Password."
                    type="password"
                    {...register("password", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-check">
                    <input
                      className={`form-check-input ${
                        errors.agreeTerms ? "is-invalid" : null
                      }`}
                      type="checkbox"
                      {...register("agreeTerms", { required: true })}
                    />
                    <span className="form-check-label">
                      I agree with Terms and Conditions{" "}
                    </span>
                  </label>
                </div>
                <div className="mb-3">
                  <button
                    disabled={isSubmitting}
                    className="btn btn-primary w-100"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <hr />
              <p className="text-center mb-2">
                Create New Account <Link to="/register">Sign Up</Link>
              </p>
            </div>{" "}
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Login;
