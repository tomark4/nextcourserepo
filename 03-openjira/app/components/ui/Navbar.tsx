import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { FC, ReactNode, useContext } from "react";
import UiContext from "../../context/ui/UiContext";
import NextLink from "next/link";

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
        <NextLink href="/" passHref>
          <Link underline="none" color="white">
            <Typography variant="h4">OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
