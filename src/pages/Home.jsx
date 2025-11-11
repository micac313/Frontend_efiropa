import React from "react";
import CarouselHome from "../contexts/carousel"; // el carrusel
import Destacados from "../components/Destacados";          // productos destacados
import NewIn from "../components/NewIn";                    // productos nuevos
import Footer from "../components/footer";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* Carrusel */}
      <CarouselHome />

      {/* Destacados */}
      <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Lo más vendido
        </Typography>
        <Destacados />
      </Box>

      {/* New In */}
      <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Lo nuevo
        </Typography>
        <NewIn />
      </Box>

      {/* Footer solo una vez, al final */}
      <Footer />
    </Box>
  );
}
