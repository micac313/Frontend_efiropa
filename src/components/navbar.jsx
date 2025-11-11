import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Estados para los menús desplegables
  const [anchorElShop, setAnchorElShop] = useState(null);
  const [anchorElAcc, setAnchorElAcc] = useState(null);
  const [anchorElMobile, setAnchorElMobile] = useState(null);

  const handleOpenShop = (e) => setAnchorElShop(e.currentTarget);
  const handleOpenAcc = (e) => setAnchorElAcc(e.currentTarget);
  const handleCloseShop = () => setAnchorElShop(null);
  const handleCloseAcc = () => setAnchorElAcc(null);

  const handleOpenMobile = (e) => setAnchorElMobile(e.currentTarget);
  const handleCloseMobile = () => setAnchorElMobile(null);

  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          bgcolor: "white",
          borderBottom: "1px solid #eee",
          px: 2,
        }}
      >
        {/* Menú hamburguesa */}
        {isMobile && (
          <>
            <IconButton onClick={handleOpenMobile}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElMobile}
              open={Boolean(anchorElMobile)}
              onClose={handleCloseMobile}
            >
              <MenuItem component={RouterLink} to="/new-in" onClick={handleCloseMobile}>
                New In
              </MenuItem>
              <MenuItem onClick={handleOpenShop}>
                Indumentaria <ArrowDropDownIcon fontSize="small" />
              </MenuItem>
              <Menu
                anchorEl={anchorElShop}
                open={Boolean(anchorElShop)}
                onClose={handleCloseShop}
              >
                <MenuItem component={RouterLink} to="/categoria/buzos" onClick={handleCloseShop}>
                  Buzos
                </MenuItem>
                <MenuItem component={RouterLink} to="/categoria/pantalones" onClick={handleCloseShop}>
                  Pantalones
                </MenuItem>
                <MenuItem component={RouterLink} to="/categoria/chombas" onClick={handleCloseShop}>
                  Chombas
                </MenuItem>
                <MenuItem component={RouterLink} to="/categoria/remeras" onClick={handleCloseShop}>
                  Remeras
                </MenuItem>
              </Menu>
              <MenuItem onClick={handleOpenAcc}>
                Accesorios <ArrowDropDownIcon fontSize="small" />
              </MenuItem>
              <Menu
                anchorEl={anchorElAcc}
                open={Boolean(anchorElAcc)}
                onClose={handleCloseAcc}
              >
                <MenuItem component={RouterLink} to="/accesorios/lentes" onClick={handleCloseAcc}>
                  Lentes
                </MenuItem>
                <MenuItem component={RouterLink} to="/accesorios/carteras" onClick={handleCloseAcc}>
                  Carteras
                </MenuItem>
              </Menu>
            </Menu>
          </>
        )}

        {/* Logo o nombre */}
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: "none",
            color: "black",
            fontWeight: 600,
            letterSpacing: "2px",
            mx: "auto",
          }}
        >
          TAORMINA
        </Typography>

        {/* Menú completo en pantallas grandes */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/new-in"
              sx={{ color: "black" }}
            >
              New In
            </Button>

            <Button
              color="inherit"
              onClick={handleOpenShop}
              endIcon={<ArrowDropDownIcon />}
              sx={{ color: "black" }}
            >
              Indumentaria
            </Button>
            <Menu
              anchorEl={anchorElShop}
              open={Boolean(anchorElShop)}
              onClose={handleCloseShop}
            >
              <MenuItem component={RouterLink} to="/categoria/buzos" onClick={handleCloseShop}>
                Buzos
              </MenuItem>
              <MenuItem component={RouterLink} to="/categoria/pantalones" onClick={handleCloseShop}>
                Pantalones
              </MenuItem>
              <MenuItem component={RouterLink} to="/categoria/chombas" onClick={handleCloseShop}>
                Chombas
              </MenuItem>
              <MenuItem component={RouterLink} to="/categoria/remeras" onClick={handleCloseShop}>
                Remeras
              </MenuItem>
            </Menu>

            <Button
              color="inherit"
              onClick={handleOpenAcc}
              endIcon={<ArrowDropDownIcon />}
              sx={{ color: "black" }}
            >
              Accesorios
            </Button>
            <Menu
              anchorEl={anchorElAcc}
              open={Boolean(anchorElAcc)}
              onClose={handleCloseAcc}
            >
              <MenuItem component={RouterLink} to="/accesorios/lentes" onClick={handleCloseAcc}>
                Lentes
              </MenuItem>
              <MenuItem component={RouterLink} to="/accesorios/carteras" onClick={handleCloseAcc}>
                Carteras
              </MenuItem>
            </Menu>
          </Box>
        )}

        {/* Íconos a la derecha */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton component={RouterLink} to="/login">
            <PersonOutlineOutlinedIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton component={RouterLink} to="/cart">
            <ShoppingBagOutlinedIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
