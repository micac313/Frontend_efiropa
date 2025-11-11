
import React from "react";
import { useParams } from "react-router-dom";

// Acá definimos todos los productos (Destacados + NewIn)
const productos = [
  // Destacados
  { id: 1, nombre: "Remera Oversize", descripcion: "Remera de algodón premium", precio: 12000, imagenes: ["/images/ropa/REMERAHOMBRE1.jpg","/images/ropa/REMERAHOMBRE2.jpg","/images/ropa/REMERAHOMBRE3.jpg"] },
  { id: 2, nombre: "Pantalón Jogger", descripcion: "Jogger de gabardina", precio: 18000, imagenes: ["/images/ropa/BABUCHAHOMBRE1.jpg","/images/ropa/BABUCHAHOMBRE2.jpg"] },
  { id: 3, nombre: "Chomba The Social Club", descripcion: "Chombas cómodas y modernas", precio: 25000, imagenes: ["/images/ropa/CHOMBA1.jpg", "/images/ropa/CHOMBA2.jpg"] },

  // NewIn
  { id: 4, nombre: "Palazzo Linen", descripcion: "Palazzo fresco de lino", precio: 15000, imagenes: ["/images/ropa/PALAZZO1.jpg", "/images/ropa/PALAZZO2.jpg","/images/ropa/PALAZZO3.jpg"] },
  { id: 5, nombre: "Vestido Dress Bordo", descripcion: "Composición lino- verano 2026", precio: 20000, imagenes: ["/images/ropa/VESTIDO1.jpg", "/images/ropa/VESTIDO2.jpg"] },
  { id: 6, nombre: "Short Summer", descripcion: "Short ligero para verano", precio: 13000, imagenes: ["/images/ropa/SHORT1.jpg", "/images/ropa/SHORT2.jpg", "/images/ropa/SHORT3.jpg"] },
];

export default function ProductDetail() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) return <p>Producto no encontrado</p>;

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
}
