// src/pages/Home.jsx
import React from "react";
import CarouselHome from "../contexts/carousel";
import Inventory from "../pages/inventory";
import Footer from "../components/footer";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <CarouselHome />

      <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          NUEVAS PRENDAS
        </Typography>
        <Inventory />
      </Box>

      <Footer />
    </Box>
  );
}
