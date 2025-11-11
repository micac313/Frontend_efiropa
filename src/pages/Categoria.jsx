import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../contexts/CarritoContext"; // usamos el hook directamente

export default function Categoria({ productos, nombreCategoria }) {
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito(); // obtenemos la función del contexto

  return (
    <div>
      <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
        {nombreCategoria}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {productos.map((p) => (
          <Grid item key={p.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ borderRadius: 3, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
            >
              <CardMedia component="img" height="350" image={p.imagen} alt={p.nombre} />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">{p.nombre}</Typography>
                <Typography variant="body2" color="text.secondary">{p.descripcion}</Typography>
                <Typography variant="subtitle1" fontWeight="bold" mt={1}>${p.precio}</Typography>
                
                    <Button
                    variant="outlined"
                    sx={{ mt: 1, borderRadius: 2, mr: 1 }}
                    onClick={() => navigate(`/producto/${p.id}`)}
                    >
                    Ver más
                    </Button>

                    <Button
                    variant="contained"
                    sx={{ mt: 1, borderRadius: 2 }}
                    onClick={() => agregarAlCarrito(p)}
                    >
                    Agregar al carrito
                    </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
