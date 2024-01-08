import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import React, { useContext, useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../provider/api.js";
import { toast, ToastContainer } from "react-toastify";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().min(2).required(),
  avatar: yup.string().url().required(),
  role: yup.string().oneOf(["admin", "customer"]).required(),
  password: yup.string().min(6).required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export const UserProfile = () => {
  const { user, logout, isLoadingUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: isLoadingUser ? null : user,
  });

  useEffect(() => {
    if (!user && !isLoadingUser) {
      navigate("/login");
    }

    if (user) {
      Object.keys(user).forEach((key) => {
        setValue(key, user[key]);
      });
    }
  }, [user]);

  const onSubmit = async (data) => {
    try {
      const response = await api.put(
        `https://api.escuelajs.co/api/v1/users/${user.id}`,
        data,
      );

      if (response.status === 200) {
        toast.success("User updated successfully");
      }
    } catch (error) {
      const messages = error.response.data.message;

      toast.error("Error updating user");

      messages.forEach((message) => {
        const key = message.split(" ")[0].toLowerCase();
        setError(key, { type: "manual", message });
      });
    }
  };

  if (isLoadingUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="py-4">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link className="text-muted" to={"/"}>
                Home
              </Link>
            </li>
            <li className="breadcrumb-item text-muted" aria-current="page">
              Personal info
            </li>
          </ol>
        </div>
      </section>
      <section className="padding-bottom" style={{ minHeight: "90vh" }}>
        <div className="container">
          <div className="row">
            <aside className="col-lg-3 col-xl-3">
              <nav className="nav gap-1 flex-lg-column nav-pills mb-4">
                <Link className="nav-link active" to="/profile">
                  Personal info
                </Link>
                <Link className="nav-link" to="/saved">
                  My wishlist
                </Link>
                <span role="button" className="nav-link" onClick={logout}>
                  Log out
                </span>
              </nav>
            </aside>
            <main className="col-lg-9  col-xl-9">
              <article className="card">
                <div className="card-body">
                  <h5 className="card-title"> Personal info </h5>
                  <figure className="d-flex align-items-center">
                    <div className="me-3 flex-grow-0">
                      <span className="bg-gray icon-md rounded-circle">
                        <img
                          src={user?.avatar}
                          className="size-56x56 rounded-circle"
                          alt={user?.name}
                        />
                      </span>
                    </div>
                    <figcaption>
                      <h6 className="fw-normal">{user?.name}</h6>
                      <p className="mb-0">Email: {user?.email}</p>
                    </figcaption>
                  </figure>

                  <hr className="my-4" />

                  <h5 className="card-title"> Edit Personal Info </h5>

                  {isLoadingUser ? null : (
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          className={`form-control ${
                            errors.name ? "is-invalid" : null
                          }`}
                          placeholder="Type name"
                          type="text"
                          {...register("name")}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
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
                        <label className="form-label">Avatar</label>
                        <input
                          className={`form-control ${
                            errors.avatar ? "is-invalid" : null
                          }`}
                          placeholder="Type avatar"
                          type="text"
                          {...register("avatar")}
                        />
                        {errors.avatar && (
                          <div className="invalid-feedback">
                            {errors.avatar.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Role</label>
                        <input
                          className={`form-control ${
                            errors.role ? "is-invalid" : null
                          }`}
                          placeholder="Type role"
                          type="text"
                          {...register("role")}
                        />
                        {errors.role && (
                          <div className="invalid-feedback">
                            {errors.role.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          className={`form-control ${
                            errors.password ? "is-invalid" : null
                          }`}
                          placeholder="Type password"
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
                        <label className="form-label">Repeat Password</label>
                        <input
                          className={`form-control ${
                            errors.repeatPassword ? "is-invalid" : null
                          }`}
                          placeholder="Confirm password"
                          type="password"
                          {...register("repeatPassword")}
                        />
                        {errors.repeatPassword && (
                          <div className="invalid-feedback">
                            {errors.repeatPassword.message}
                          </div>
                        )}
                      </div>

                      <button
                        disabled={isSubmitting}
                        className="btn btn-primary"
                        type={"submit"}
                      >
                        Save
                      </button>
                    </form>
                  )}
                </div>
              </article>
            </main>
          </div>

          <br />
          <br />
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
