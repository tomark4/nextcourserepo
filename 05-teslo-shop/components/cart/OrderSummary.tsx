import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context";
import { formatAsCurrency } from "../../utils/currency";

const OrderSummary = () => {
  const { numberOfItems, total, subTotal, impuesto } = useContext(CartContext);
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. productos</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>
          {numberOfItems} {numberOfItems > 1 ? "Items" : "Item"}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{formatAsCurrency(subTotal)}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>
          Impuesto ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100} %)
        </Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{formatAsCurrency(impuesto)}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{formatAsCurrency(total)}</Typography>
      </Grid>
    </Grid>
  );
};

export default OrderSummary;
