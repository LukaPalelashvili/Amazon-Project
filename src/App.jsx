import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UsersList from "./pages/usersList/usersList";
import ProductsSwitch from "./pages/productsSwitch/ProductsSwitch";
import ProductsDetail from "./pages/productsDetail/ProductsDetail";
import UserProfile from "./pages/userProfile/UserProfile";
import Footer from "./components/footer/Footer";
import Navigation from "./pages/Navigation";
import Home from "./pages/home/Home";
import NewProducts from "./pages/home/NewProducts";
import Cart from "./components/cart/Cart";
import SavedItems from "./components/savedItems/SavedItems";
import Contact from "./pages/contact/Contact";
import Information from "./pages/information/Information";
import Dashboard from "./pages/admin/dashboard.jsx";
import Customers from "./pages/admin/customers.jsx";
import AdminProducts from "./pages/admin/products";
import Products from "./components/Products.jsx";
import AuthContext from "./context/AuthContext.js";
import Account from "./pages/admin/account.jsx";
import ProductPage from "./pages/admin/products-page.jsx"; // Assuming this is the correct import

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
  { path: "/", component: Home },
  { path: "/admin/customers", component: Customers, isAdmin: true },
  { path: "/admin/products", component: AdminProducts, isAdmin: true },
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
  { path: "/products", component: Products },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/users-list", component: UsersList },
  { path: "/products2", component: ProductsSwitch },
  { path: "/product-detail/:productId", component: ProductsDetail },
  { path: "/user-profile", component: UserProfile },
  { path: "/nav", component: Navigation },
  { path: "/new", component: NewProducts },
  { path: "/cart", component: Cart },
  { path: "/saved", component: SavedItems },
  { path: "/contact", component: Contact },
  { path: "/info", component: Information },
  { path: "/admin", component: Dashboard, isAdmin: true },
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
