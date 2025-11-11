import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export default function Login() {
  const { login, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const success = await login(data.email, data.password);
    if (success) navigate("/"); // redirige al home
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          Iniciar Sesión
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            type="email"
            {...register("email", { required: "El email es obligatorio" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Contraseña"
            type="password"
            {...register("password", { required: "La contraseña es obligatoria" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </Button>
        </Box>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            ¿No tienes cuenta?{" "}
            <RouterLink to="/register">Regístrate aquí</RouterLink>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
