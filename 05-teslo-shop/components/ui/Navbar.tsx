import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Button,
  Link,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Input,
  InputAdornment,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { UiContext } from "../../context";

const Navbar = () => {
  const { asPath, push } = useRouter();
  const { toogleSideMenu } = useContext(UiContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleNavigateToSearch = () => {
    if (searchTerm.trim().length === 0) return;

    navigateTo(`/search/${searchTerm}`);
  };

  const navigateTo = (path: string) => {
    setSearchTerm("");
    setIsSearchVisible(false);
    push(path);
  };

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

        <Box
          className="fadeIn"
          sx={{
            display: isSearchVisible ? "none" : { xs: "none", sm: "block" },
          }}
        >
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

        {/* Pantallas pequeñas */}
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={toogleSideMenu}
        >
          <SearchOutlined />
        </IconButton>

        {isSearchVisible ? (
          <Input
            className="fadeIn"
            autoFocus
            type="text"
            value={searchTerm}
            onKeyPress={(e) =>
              e.key === "Enter" ? handleNavigateToSearch() : null
            }
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            onClick={() => setIsSearchVisible(true)}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <SearchOutlined />
          </IconButton>
        )}

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
