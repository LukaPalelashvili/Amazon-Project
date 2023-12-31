import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./bootstrap.css";
import { CartProvider } from "./context/cart.jsx";
import { SaveProvider } from "./context/saveContext.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./provider/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SaveProvider>
      <CartProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </CartProvider>
    </SaveProvider>
  </React.StrictMode>
);
