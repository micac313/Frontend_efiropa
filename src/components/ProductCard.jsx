// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="card shadow-sm"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/producto/${product.id}`)}
    >
      <img
        src={product.imagen}
        className="card-img-top"
        alt={product.nombre}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5>{product.nombre}</h5>
        <p>{product.descripcion}</p>
        <h6>${product.precio}</h6>
      </div>
    </div>
  );
}
