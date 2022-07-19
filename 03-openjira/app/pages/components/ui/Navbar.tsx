import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Navbar: FC<Props> = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuIcon style={{ color: "white" }}></MenuIcon>
        </IconButton>

        <Typography variant="h4">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
