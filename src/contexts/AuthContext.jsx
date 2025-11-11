import React, { createContext, useState, useEffect } from 'react';
import api from '../../api/axios';
import { useSnackbar } from 'notistack';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else localStorage.removeItem('token');
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user, token]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const { data } = await api.post('/users/login', { email, password });
      setToken(data.token);
      setUser(data.user);
      enqueueSnackbar('Bienvenido/a', { variant: 'success' });
      return true;
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || 'Error al iniciar sesión', { variant: 'error' });
      return false;
    } finally { setLoading(false); }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    enqueueSnackbar('Sesión cerrada', { variant: 'info' });
    window.location.href = '/login';
  };

  const forgotPassword = (email) => api.post('/users/forgot-password', { email });
  const resetPassword = (token, newPassword) => api.post('/users/reset-password', { token, newPassword });

  return (
    <AuthContext.Provider value={{ user, token, login, logout, forgotPassword, resetPassword, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
