import React from "react";
import { initialData } from "../../database/products";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { ItemCounter } from "../ui";
import { useContext } from "react";
import { CartContext } from "../../context";
import { ICartProduct } from "../../interfaces/cart";

interface Props {
  editable?: boolean;
}

const CartList = ({ editable = false }: Props) => {
  const { cart, updateCartQuantity } = useContext(CartContext);

  const handleNewCartQuantityValue = (
    product: ICartProduct,
    newQuantityValue: number
  ) => {
    product.qty = newQuantityValue;
    updateCartQuantity(product);
  };

  return (
    <>
      {cart.map((item) => (
        <Grid
          container
          key={item.slug + new Date().toString()}
          spacing={2}
          sx={{ mb: 1, mt: 1 }}
        >
          <Grid item xs={3}>
            <NextLink href={`/product/${item.slug}`} passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${item.image}`}
                    component="img"
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{item.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>{item.size}</strong>
              </Typography>

              {editable ? (
                <ItemCounter
                  currentValue={item.qty}
                  maxValue={10}
                  onChangeValue={(value: number) =>
                    handleNewCartQuantityValue(item, value)
                  }
                />
              ) : (
                <Typography variant="subtitle1">
                  {item.qty} producto{item.qty && "s"}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">$ {`${item.price}`}</Typography>
            {editable && (
              <Button variant="text" color="secondary">
                Quitar
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CartList;
