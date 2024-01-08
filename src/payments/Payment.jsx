import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../context/CartContext.jsx";

const SuccessMessage = () => {
  const successStyle = {
    color: "#4CAF50",
    backgroundColor: "#E8F5E9",
    padding: "1rem",
    borderRadius: "0.375rem",
    margin: "1rem 0",
    border: "1px solid #C8E6C9",
    textAlign: "center",
    fontSize: "1rem",
  };

  return (
    <div style={successStyle}>
      Payment Successful! Thank you for your purchase.
    </div>
  );
};

const Payment = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart } = useContext(CartContext);

  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
        boxShadow: "0 1px 3px 0 #e6ebf1",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      setPaymentError(result.error.message);
      setPaymentSuccess(false);
    } else {
      clearCart();
      setPaymentSuccess(true);
      setPaymentError(null);
    }
  };

  return (
    <div
      style={{
        margin: "2rem",
        padding: "1rem",
        border: "1px solid #eaeaea",
        borderRadius: "0.5rem",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "1rem" }}>
        Make a Payment
      </h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            padding: "0.75rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "0.375rem",
            marginBottom: "1rem",
            backgroundColor: "#f7f7f7",
          }}
        >
          <CardElement options={cardElementOptions} />
        </div>
        {paymentError && (
          <div
            style={{
              marginTop: "0.5rem",
              color: "#d32f2f",
              fontSize: "0.875rem",
            }}
          >
            {paymentError}
          </div>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: "#4caf50",
            borderColor: "#4caf50",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            color: "white",
          }}
        >
          Pay
        </button>
      </form>
      {paymentSuccess && <SuccessMessage />}
    </div>
  );
};

export default Payment;
