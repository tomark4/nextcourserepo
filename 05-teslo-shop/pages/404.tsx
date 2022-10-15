import React from "react";
import { ShopLayout } from "../components/layouts";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Error404Page = () => {
  return (
    <ShopLayout title="Page not found" pageDescription="Not found">
      <Box
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Typography variant="h1" fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>Page not found</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Error404Page;
