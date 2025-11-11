import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";
import Carrito from "./pages/Carrito"; 
import Destacados from "./pages/Destacados";
import NewIn from "./pages/NewIn";

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destacados" element={<Destacados />} />
          <Route path="/new-in" element={<NewIn />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
