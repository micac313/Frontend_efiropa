import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  // Ejemplo: obtendrías el producto por ID del backend o contexto
  const producto = {
    nombre: "Vestido Dress Bordo",
    descripcion: "Composición lino- verano 2026",
    precio: 45000,
    imagenes: [
      "/images/ropa/VESTIDO1.jpg",
      "/images/ropa/VESTIDO2.jpg",
    ],
  };

  return (
    <div className="container mt-4">
      <h2>{producto.nombre}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={producto.imagenes[0]}
            alt={producto.nombre}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <div className="d-flex mt-2 gap-2">
            {producto.imagenes.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Vista ${i + 1}`}
                style={{ width: "32%", borderRadius: "8px" }}
              />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <p>{producto.descripcion}</p>
          <p><strong>${producto.precio}</strong></p>
          <button className="btn btn-dark">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
