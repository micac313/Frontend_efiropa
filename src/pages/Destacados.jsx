import React from "react";
import Inventory from "./Inventory";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";

export default function Destacados() {
  return (
    <Box sx={{ bgcolor: "background.default", p: { xs: 2, md: 6 } }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
     
      </Typography>
      <Inventory category="destacados" />
    </Box>
  );
}
