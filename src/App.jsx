import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UsersList from "./pages/usersList/usersList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users-list" element={<UsersList />} />
      </Routes>
    </>
  );
}

export default App;
