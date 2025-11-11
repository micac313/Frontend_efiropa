import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const product = {
    id,
    nombre: "Remera Oversize",
    descripcion: "Remera de algodón 100% orgánico, muy cómoda.",
    precio: 12000,
    imagenes: [
      "/images/REMERAHOMBRE1.jpg",
      "/images/REMERAHOMBRE2.jpg",
      "/images/REMERAHOMBRE3.jpg",
    ],
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{product.nombre}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imagenes[0]}
            alt={product.nombre}
            className="img-fluid rounded shadow-sm mb-3"
          />
          <div className="d-flex gap-2">
            {product.imagenes.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`extra ${i}`}
                style={{ width: "100px", borderRadius: "10px" }}
              />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <p>{product.descripcion}</p>
          <h4 className="mt-3">${product.precio}</h4>
          <button className="btn btn-dark mt-3">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

