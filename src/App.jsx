import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
