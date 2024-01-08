import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import authContext from "../context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  agreeTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <section className="padding-y bg-light" style={{ minHeight: "85vh" }}>
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
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    className={`form-control ${
                      errors.password ? "is-invalid" : null
                    }`}
                    placeholder="Enter Password."
                    type="password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Login;
