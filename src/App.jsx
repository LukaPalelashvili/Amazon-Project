import Products from "./components/products/Products";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UsersList from "./pages/usersList/usersList";
import ProductsSwitch from "./components/products/ProductsSwitch";
import ProductsDetail from "./pages/productsDetail/ProductsDetail";
import UserProfile from "./pages/userProfile/UserProfile";
import Footer from "./components/footer/Footer";
import Navigation from "./pages/Navigation";
import Home from "./pages/home/Home";
import NewProducts from "./pages/home/NewProducts";
import Cart from "./components/cart/Cart";
import SavedItems from "./components/savedItems/SavedItems";
import Information from "./pages/information/Information";

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
        <Route path="/product-detail/:productId" element={<ProductsDetail />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/nav" element={<Navigation />} />
        <Route path="/new" element={<NewProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/saved" element={<SavedItems />} />
        <Route path="/info" element={<Information />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
