import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./bootstrap.css";
import { CartProvider } from "./context/cart.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./provider/AuthContextProvider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./theme/index.js";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
);
