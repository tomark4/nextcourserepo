import { Grid } from "@mui/material";
import React from "react";
import { Product } from "../../interfaces";
import { ProductCard } from "./";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Grid container spacing={4}>
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </Grid>
  );
};

export default ProductList;
