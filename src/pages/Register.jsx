import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  avatar: yup.string().url("Invalid URL").required("Avatar URL is required"),
});

const Register = () => {
  const [apiResponse, setApiResponse] = useState({ message: "", type: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = async (data) => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setApiResponse({ message: responseData.message, type: "error" });
        return;
      }

      setApiResponse({
        message: "Registration successful. You can now login.",
        type: "success",
      });
    } catch (error) {
      console.error("Network error:", error);
      setApiResponse({ message: "Network error", type: "error" });
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <h4 className="mb-4">Sign up</h4>
          {apiResponse.message && (
            <Alert variant={apiResponse.type}>{apiResponse.message}</Alert>
          )}
          <Form onSubmit={handleSubmit(handleRegister)}>
            <Form.Group controlId="name">
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
            <Form.Group controlId="email">
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
            <Form.Group controlId="password">
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
            <Form.Group controlId="avatar">
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
            <Form.Group controlId="terms">
              <Form.Check
                type="checkbox"
                label="I agree with Terms and Conditions"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
