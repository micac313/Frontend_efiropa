import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        py: 3,
        textAlign: "center",
        mt: 6,
      }}
    >
      <Typography variant="body2">© 2025 TAORMINA — Todos los derechos reservados</Typography>
    </Box>
  );
}
