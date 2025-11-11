
import React from "react";
import Categoria from "./Categoria";

const productosRemeras = [
  { id: 1, nombre: "Remera Oversize", precio: 12000, descripcion: "Remera de algodón premium", imagen: "/images/ropa/REMERAHOMBRE1.jpg" },
  { id: 2, nombre: "Remera Slim Fit", precio: 11000, descripcion: "Remera ajustada de algodón", imagen: "/images/ropa/REMERAHOMBRE2.jpg" },
];

export default function Remeras() {
  return <Categoria productos={productosRemeras} nombreCategoria="Remeras" />;
}
