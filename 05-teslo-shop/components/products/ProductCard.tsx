import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { Product } from "../../interfaces";
import NextLink from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[0]}`
      : `/products/${product.images[1]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={productImage}
              alt={product.title}
              className="fadeIn"
              onLoad={() => setImageLoaded(true)}
            />
          </CardActionArea>
        </NextLink>
      </Card>
      <Box
        sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }}
        className="fadeIn"
      >
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$ ${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductCard;
