import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography, AppBar, Toolbar, Avatar } from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import CharacterContext from "../CharacterContext";

const Header = () => {
  const { total } = useContext(CharacterContext);
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#000" }}>
        <Toolbar>
          <VideogameAssetIcon fontSize="large" sx={{ mx: 2, color: "red" }} />
          <Typography variant="h5">Marvel Favorite</Typography>
          <Typography variant="h5" color="red" sx={{ ml: 1 }}>
            Characters
          </Typography>
          <Box sx={{ display: "flex", marginLeft: "auto" }}>
            <Link to="/">
              <Typography
                variant="h6"
                sx={{ mx: 2 }}
                color={location.pathname === "/" ? "#fff" : "#adb5bd"}
              >
                Home
              </Typography>
            </Link>
            <Link to="/favorites">
              <Typography
                variant="h6"
                sx={{ mx: 2 }}
                color={location.pathname === "/favorites" ? "#fff" : "#adb5bd"}
              >
                Favorites
              </Typography>
            </Link>
            <Avatar>{total}</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
