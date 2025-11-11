import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme.js";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { CarritoProvider } from "./contexts/CarritoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <AuthProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
