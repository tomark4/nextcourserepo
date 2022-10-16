import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layouts";
import NextLink from "next/link";

const EmptyPage = () => {
  return (
    <ShopLayout
      title="Carrito vacio"
      pageDescription="No articulos en el carrito"
    >
      <Box
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography> su carrito esta vacio</Typography>
          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
