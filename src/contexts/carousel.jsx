import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const images = [
  { src: "/images/ropa/REMERAHOMBRE1.jpg", title: "Remeras Oversize", text: "Comodidad y estilo urbano" },
  { src: "/images/ropa/BABUCHAHOMBRE1.jpg", title: "Pantalones Jogger", text: "Perfectos para todos los días" },
  { src: "/images/ropa/CHOMBA1.jpg", title: "Chombas Modernas", text: "Elegancia casual" },
];

export default function CarouselHome() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const { src, title, text } = images[index];

  return (
    <Box sx={{ position: "relative", height: "500px", overflow: "hidden" }}>
      <img
        src={src}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 1s ease-in-out",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: 40,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          p: 2,
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
}
