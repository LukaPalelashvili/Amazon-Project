import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../provider/api.js";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../context/AuthContext.js";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().min(2).required(),
  avatar: yup.string().url().required(),
  role: yup.string().oneOf(["admin", "customer"]).required(),
  agreeTerms: yup
    .bool()
    .required()
    .oneOf([true], "You must agree before submitting"),
  password: yup.string().min(6).required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { login } = useContext(AuthContext);

  const handleRegister = async (data) => {
    try {
      const response = await api.post(
        "https://api.escuelajs.co/api/v1/users/",
        data,
      );

      if (response.status === 201) {
        toast.success("User created successfully");

        login({
          email: data.email,
          password: data.password,
        });
      }
    } catch (error) {
      const messages = error.response.data.message;
      toast.error("Error creating user");

      messages.forEach((message) => {
        const key = message.split(" ")[0].toLowerCase();
        setError(key, { type: "manual", message });
      });
    }
  };

  return (
    <Container className="py-5" style={{ minHeight: "85vh" }}>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <h4 className="mb-4">Sign up</h4>
          <Form onSubmit={handleSubmit(handleRegister)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name")}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email")}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="avatar">
              <Form.Label>Avatar URL</Form.Label>
              <Form.Control
                type="text"
                {...register("avatar")}
                isInvalid={!!errors.avatar}
              />
              <Form.Control.Feedback type="invalid">
                {errors.avatar?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                {...register("role")}
                isInvalid={!!errors.role}
              >
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.role?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password")}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="repeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type="password"
                {...register("repeatPassword")}
                isInvalid={!!errors.repeatPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.repeatPassword?.message}
              </Form.Control.Feedback>
            </Form.Group>

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

            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </Col>
      </Row>
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
    </Container>
  );
};

export default Register;
