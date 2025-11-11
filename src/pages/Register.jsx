import React from "react";
import { TextField, Button, Container, Paper, Typography, Box } from "@mui/material";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cuenta registrada (demo)");
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 8, boxShadow: 3 }}>
        <Typography variant="h5" mb={2} align="center">
          Crear cuenta
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Nombre completo"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Correo electrónico"
            type="email"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#000" }}
          >
            Registrarme
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
