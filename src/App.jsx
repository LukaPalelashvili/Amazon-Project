import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductsDetail from "./pages/productsDetail/ProductsDetail";
import { UserProfile } from "./pages/user/profile";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Cart from "./components/cart/Cart";
import SavedItems from "./components/savedItems/SavedItems";
import Contact from "./pages/contact/Contact";
import Information from "./pages/information/Information";
import Dashboard from "./pages/admin/dashboard.jsx";
import Customers from "./pages/admin/customers.jsx";
import AuthContext from "./context/AuthContext.js";
import Account from "./pages/admin/account.jsx";
import ProductPage from "./pages/admin/products-page.jsx";
import Products from "./components/products/Products.jsx";
import AdminProducts from "./pages/admin/products.jsx";

function getLayout(isAdmin, Component) {
  const { user, isLoadingUser } = useContext(AuthContext);

  if (isAdmin) {
    if (isLoadingUser) {
      return <div>Loading...</div>;
    } else if (
      !user ||
      (user.role !== "admin" && user.role !== "product-owner")
    ) {
      return <Navigate to={"/login"} />;
    }
  }

  return isAdmin ? (
    <>{Component}</>
  ) : (
    <>
      <Header />
      {Component}
      <Footer />
    </>
  );
}

const routes = [
  { path: "/admin/customers", component: Customers, isAdmin: true },
  {
    path: "/admin/products",
    exact: true,
    component: AdminProducts,
    isAdmin: true,
  },
  { path: "/admin/account", component: Account, isAdmin: true },
  {
    path: "/admin/customers/add",
    component: () => <Account mode="create" />,
    isAdmin: true,
  },
  {
    path: "/admin/customers/edit/:id",
    component: () => <Account mode="update" />,
    isAdmin: true,
  },
  {
    path: "/admin/user/profile",
    component: () => <Account mode="update" isAdmin />,
    isAdmin: true,
  },
  {
    path: "/admin/products/edit/:id",
    component: () => <ProductPage mode="update" />,
    isAdmin: true,
  },
  {
    path: "/admin/products/add",
    component: () => <ProductPage mode="create" />,
    isAdmin: true,
  },
  { path: "/admin", component: Dashboard, isAdmin: true },
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/product-detail/:productId", component: ProductsDetail },
  { path: "/cart", component: Cart },
  { path: "/saved", component: SavedItems },
  { path: "/contact", component: Contact },
  { path: "/info", component: Information },
  { path: "/profile", component: UserProfile },
];

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={getLayout(route.isAdmin, <route.component />)}
        />
      ))}
    </Routes>
  );
}

export default App;
