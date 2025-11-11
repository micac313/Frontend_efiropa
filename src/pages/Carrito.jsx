import React from "react";

import { useCarrito } from "../contexts/CarritoContext";
import { Container, Typography, Box, Button } from "@mui/material";

export default function Carrito() {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useCarrito();

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Tu Carrito
      </Typography>

      {carrito.length === 0 ? (
        <Typography variant="body1">Tu carrito está vacío 🛍️</Typography>
      ) : (
        <>
          {carrito.map((producto) => (
            <Box
              key={producto.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                py: 2,
              }}
            >
              <Typography>{producto.nombre}</Typography>
              <Typography>Cantidad: {producto.cantidad}</Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => quitarDelCarrito(producto.id)}
              >
                Quitar
              </Button>
            </Box>
          ))}

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3 }}
            onClick={vaciarCarrito}
          >
            Vaciar carrito
          </Button>
        </>
      )}
    </Container>
  );
}
