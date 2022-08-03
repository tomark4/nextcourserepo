import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { FC, ReactNode, useContext } from "react";
import UiContext from "../../context/ui/UiContext";

type Props = {
  children?: ReactNode;
};

const Navbar: FC<Props> = () => {
  const { openSideBar } = useContext(UiContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideBar}>
          <MenuIcon style={{ color: "white" }}></MenuIcon>
        </IconButton>

        <Typography variant="h4">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
