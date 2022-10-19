import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Link,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { UiContext } from "../../context";

const Navbar = () => {
  const { asPath } = useRouter();
  const { toogleSideMenu } = useContext(UiContext);

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/men" passHref>
            <Link>
              <Button
                sx={{ borderRadius: "5px" }}
                color={asPath === "/category/men" ? "secondary" : "primary"}
              >
                Hombres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link>
              <Button
                sx={{ borderRadius: "5px" }}
                color={asPath === "/category/women" ? "secondary" : "primary"}
              >
                Mujeres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kids" passHref>
            <Link>
              <Button
                sx={{ borderRadius: "5px" }}
                color={asPath === "/category/kids" ? "secondary" : "primary"}
              >
                Niños
              </Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={toogleSideMenu}>menu</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
