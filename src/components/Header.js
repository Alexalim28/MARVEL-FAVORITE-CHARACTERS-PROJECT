import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CharacterContext from "../CharacterContext";

const Header = () => {
  const { total } = useContext(CharacterContext);

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
              <Typography variant="h6" sx={{ mx: 2 }} color="#adb5bd">
                Home
              </Typography>
            </Link>
            <Link to="/favorites">
              <Typography variant="h6" sx={{ mx: 2 }} color="#adb5bd">
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
