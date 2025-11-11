import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from "../contexts/AuthContext";
import { TextField, Button, Container, Box, Typography, Paper, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Iniciar sesión
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Correo electrónico"
            fullWidth
            margin="normal"
            {...register('email', { required: 'El correo es obligatorio' })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            {...register('password', { required: 'La contraseña es obligatoria' })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Ingresar
          </Button>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          ¿No tenés cuenta?{' '}
          <Link component={RouterLink} to="/register" underline="hover">
            Registrate
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
