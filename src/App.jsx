import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from './Context/CartContext';

import Home from "./pages/Home";
import Login from "./pages/Login";

import ProductsDetails from "./pages/ProductsDetails";
import Navbar from "./components/Navbar";


function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route path=":id" element={<ProductsDetails />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </CartProvider>
  );
}

export default App;
