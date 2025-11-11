import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Inventory({ category }) {
  const navigate = useNavigate();

  // Productos de ejemplo
  const allProducts = {
    destacados: [
      {
        id: 1,
        nombre: "Remera Oversize",
        precio: 12000,
        descripcion: "Remera de algodón premium",
        imagen: "/images/ropa/REMERAHOMBRE1.jpg",
      },
      {
        id: 2,
        nombre: "Pantalón Jogger",
        precio: 18000,
        descripcion: "Jogger de gabardina",
        imagen: "/images/ropa/BABUCHAHOMBRE1.jpg",
      },
      {
        id: 3,
        nombre: "Chomba The Social Club",
        precio: 25000,
        descripcion: "Chombas cómodas y modernas",
        imagen: "/images/ropa/CHOMBA1.jpg",
      },
    ],
    "new-in": [
      {
        id: 4,
        nombre: "Palazzo Linen",
        precio: 15000,
        descripcion: "Palazzo fresco de lino",
        imagen: "/images/ropa/PALAZZO1.jpg",
      },
      {
        id: 5,
        nombre: "Vestido Dress Bordo",
        precio: 22000,
        descripcion: "Composición lino- verano 2026",
        imagen: "/images/ropa/VESTIDO1.jpg",
      },
      {
        id: 6,
        nombre: "Short Summer",
        precio: 9000,
        descripcion: "Short ligero para verano",
        imagen: "/images/ropa/SHORT1.jpg",
      },
    ],
  };

  const products = allProducts[category] || [];

  return (
    <Grid container spacing={4} justifyContent="center">
      {products.map((p) => (
        <Grid item key={p.id} xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/producto/${p.id}`)}
          >
            <CardMedia component="img" height="350" image={p.imagen} alt={p.nombre} />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6">{p.nombre}</Typography>
              <Typography variant="body2" color="text.secondary">
                {p.descripcion}
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" mt={1}>
                ${p.precio}
              </Typography>
              <Button
                variant="outlined"
                sx={{ mt: 1, borderRadius: 2 }}
                onClick={() => navigate(`/producto/${p.id}`)}
              >
                Ver más
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
