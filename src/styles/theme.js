
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // negro elegante
    },
    secondary: {
      main: "#bdbdbd", // gris suave
    },
    background: {
      default: "#f8f8f8", // fondo limpio
    },
    text: {
      primary: "#111111",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h5: { fontWeight: 600 },
    button: { textTransform: "none" },
  },
});

export default theme;
