import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UsersList from "./pages/usersList/usersList";
import ProductsSwitch from "./pages/productsSwitch/ProductsSwitch";
import ProductsDetail from "./pages/productsDetail/ProductsDetail";
import MainCart from "./pages/mainCart/MainCart";
import UserProfile from "./pages/userProfile/UserProfile";
import MainRegister from "./pages/mainRegister/MainRegister";
import Footer from "./components/footer/Footer";
import Navigation from "./pages/Navigation";
import Home from "./pages/home/Home";
import NewProducts from "./pages/home/NewProducts";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users-list" element={<UsersList />} />
        <Route path="/products2" element={<ProductsSwitch />} />
        <Route path="/product-detail" element={<ProductsDetail />} />
        <Route path="/main-cart" element={<MainCart />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/main-register" element={<MainRegister />} />
        <Route path="/nav" element={<Navigation />} />
        <Route path="/new" element={<NewProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
